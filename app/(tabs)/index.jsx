import { StyleSheet, Text, View, Image } from 'react-native';
import {Button} from "react-native-paper";
import { Colors} from "@/constants/Colors"
import React from 'react';
import {useClerk} from "@clerk/clerk-expo";
import { useNavigation } from 'expo-router';

export default function index() {
  const {signOut}= useClerk();
  const navigation = useNavigation();

  const handleSignOut = async ()=>{
    try{
      await signOut();
      navigation.replace("index")
    }catch(error){
      console.log("sign out error", error)
    }
  }
  return (
    <View style={styles.container}>
        
      <Text style={styles.text}>Welcome to the home page! </Text>
      <Image style={styles.IMG1} source={require("../../assets/images/img1.gif")}/>
      <Text style={styles.textBody}>Leaving already? 🥲</Text>
      <Button style={styles.btn} mode="elevated" onPress={handleSignOut}>
        <Text style={styles.whiteText}>Sign Out</Text>
      </Button>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: Colors.DEV_LIGHT,
    fontFamily: "play-reg",
  },
  btn:{
    paddingTop: 10,
    paddingBottom:10,
    paddingLeft: 30,
    paddingRight:30,
    backgroundColor: Colors.DEV_LIGHT,
    color:"white",
    borderRadius: 30,
    marginTop:20,
  },
  whiteText:{
    color: Colors.DEV_PRIMARY,
    alignItems:"center",
    justifyContent: "center"
  },
  text:{
    fontFamily: "play-bold",
    fontSize: 30,
  },
  textBody:{
    fontFamily: "play-bold",
    fontSize: 20,
    padding:10,
    marginTop:20,
  },
  IMG1:{
        width:350,
        height:350,
  }

})