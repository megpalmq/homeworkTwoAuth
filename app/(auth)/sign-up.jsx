import { StyleSheet, Text, View } from 'react-native'
import React from 'react';
import { TextInput, Button } from "react-native-paper";
import { useSignUp } from "@clerk/clerk-expo";
import { useRouter, Link } from 'expo-router';

export default function SignUp() {
  const {signUp, setActive, isLoaded} = useSignUp();
  const router= useRouter();
  const [pendingVerification,setPendingVerification ]= React.useState();
  const [emailAddress, setEmailAddress]= React.useState();
  const [password, setPassword]= React.useState();
  const [code, setCode]= React.useState();

  const onSignUp = async ()=>{
    if(!isLoaded){
      return;
    }

    try {
      await signUp.create({
        emailAddress,
        password,
      })

      await signUp.prepareEmailAddressVerification({
        strategy:"email_code",
      });
      setPendingVerification(true);
    }catch(err){
      console.log("sign up error 😟", JSON.stringify(err, null, 2));
    }
  };

  const onVerifyEmail = async ()=>{
    if(!isLoaded){
      return;
    }

    try{
      const completeSignUp= await signUp.attemptEmailAddressVerification({
        code,
      });
      if(completeSignUp.status === "complete"){
        await setActive({
          session: completeSignUp.createdSessionId,
        });
        router.push("/(tabs)");
      }else{
        console.log(JSON.stringify(completeSignUp, null, 2));
      }
    }catch(err){
      console.log("sign up error 🥲", err.message+ " ", JSON.stringify(err, null, 2));
    }
  };

  return (
    <View style={styles.contianer}>
      {!pendingVerification &&(
        <>
        <TextInput
          autoCapitalize='none'
          value={emailAddress}
          keyboardType="email-address"
          placeholder="Email address"
          onChangeText={setEmailAddress}
        />
        <TextInput
          value={password}
          placeholder="Password"
          secureTextEntry={true}
          onChangeText={setPassword}
        />
        <Button mode='outlined' onPress={onSignUp}>
          <Text>Sign Up!</Text>
          </Button>
        </>  
      )}
      {pendingVerification &&(
        <>
        <TextInput
          value={code}
          placeholder="Code..."
          keyboardType="numeric"
          onChangeText={setCode}
        />
        <Button mode='outlined' onPress={onVerifyEmail}>
          <Text>Verify Email</Text>
          </Button>
        </>  
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  contianer:{
    display: "flex",
    flex: 1,
  }
})