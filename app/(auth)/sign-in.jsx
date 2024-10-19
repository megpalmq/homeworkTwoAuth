import { StyleSheet, Text, View } from 'react-native'
import { TextInput , Button} from 'react-native-paper';
import React from 'react';
import { useSignIn } from '@clerk/clerk-expo';
import {useRouter, Link} from "expo-router";
import { Colors } from "@/constants/Colors";

export default function SignIn() {
  const {signIn, setActive, isLoaded}= useSignIn();
  const router= useRouter();
  const [emailAddress, setEmailAddress]= React.useState();
  const [password, setPassword]= React.useState();

  const onSignIn= React.useCallback(async ()=>{
    if(!isLoaded){
      return;
    }

    try{
      const signInAttempt= await signIn.create({
        identifier:emailAddress,
        password: password,
      });

      if(signInAttempt.status ==="complete"){
        await setActive({
          session: signInAttempt.createdSessionId,
        });
        router.push("/(tabs)");
      }else{
        console.log(JSON.stringify(signInAttempt, null, 2));

      }

    }catch(err){
      console.log("sign in error 🥺", JSON.stringify(err, null, 2));
    }
  }, [isLoaded, emailAddress, password]);
  return (
    <View style={styles.contianer}>
      <View style={styles.signInArea}> 
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
        <Button mode='outlined' onPress={onSignIn}>
          <Text>Sign In!</Text>
          </Button>
          </View>
          <View style={styles.needAccount}>
            <Text>Don't have an account?</Text>
            <Link style={styles.signUpButton} href="/sign-up">
            <Text>Sign up!</Text>
            </Link>
          </View>
    </View>
  )
}

const styles = StyleSheet.create({
  contianer:{
    display: "flex",
    flex: 1,
    padding:20,
  },
  signInArea:{
    marginBottom:20,
  },
  needAccount:{
    display:"flex",
    flexDirection:"column",
    alignItems:"center",
    justifyContent:"center",

  },
  signUpButton:{
    paddingTop: 10,
    paddingBottom:10,
    paddingLeft: 30,
    paddingRight:30,
    backgroundColor: Colors.DEV_PRIMARY,
    color:"white",
    borderRadius: 30,
    marginTop:20,
  }
})