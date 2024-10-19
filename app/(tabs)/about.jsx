import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react';
import { Colors} from "@/constants/Colors"

export default function about() {
  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>About🖥️</Text>
      <Text style={styles.textBody}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Temporibus, ipsam? Quas quidem hic nesciunt doloremque, ipsam, fugit at iusto doloribus eveniet expedita dolores praesentium sint minus. Delectus nulla laborum unde. Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto nemo eaque numquam veritatis rem consectetur saepe doloremque, ea mollitia, aliquam labore, reiciendis exercitationem corrupti soluta nam beatae blanditiis laudantium adipisci?</Text>
      <Text style={styles.textBody}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Temporibus, ipsam? Quas quidem hic nesciunt doloremque, ipsam, fugit at iusto doloribus eveniet expedita dolores praesentium sint minus. Delectus nulla laborum unde.</Text>
      <Image style={styles.IMG2} source={require("../../assets/images/img2.gif")}/>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "white",
      backgroundColor: Colors.DEV_MEDIUM,
      fontFamily: "play-reg",
      justifyContent:"center",
        alignItems:"center",
    },
    titleText:{
        fontFamily:"play-bold",
        fontSize:30,
        marginTop: 40,
        padding:20,
    },
    textBody:{
        fontFamily: "play-reg",
        fontSize: 15,
        padding:10,
        marginTop:20,
      },
      IMG2:{
        width:200,
        height:200,
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        
  }
})