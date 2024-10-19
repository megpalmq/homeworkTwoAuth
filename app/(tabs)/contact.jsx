import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Alert, TouchableOpacity,Image } from 'react-native';
import { Colors } from "@/constants/Colors"; // Ensure your path is correct

const ContactPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = () => {
    if (name && email && message) {
      Alert.alert('Success', 'Your message has been sent!');
      // Add your form submission logic here
      setName('');
      setEmail('');
      setMessage('');
    } else {
      Alert.alert('Error', 'Please fill in all fields.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Contact Us</Text>
      <Image style={styles.IMG3} source={require("../../assets/images/img3.gif")}/>
      <Text style={styles.title}>Send us a message below!📨</Text>
      <TextInput
        style={styles.input}
        placeholder="Name"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />
      <TextInput
        style={styles.input}
        placeholder="Message"
        value={message}
        onChangeText={setMessage}
        multiline
        numberOfLines={4}
      />
      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Send Message</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: Colors.DEV_MEDIUM,
  },
  IMG3:{
    width:200,
    height:200,
    justifyContent:"center",
    alignSelf:"center",
    marginBottom: 30,
    border: "solid, pink 4px",
    
},
  title: {
    fontSize: 24,
    marginBottom: 20,
    textAlign: 'center',
    fontFamily: 'play-bold',
    color: 'white',
  },
  input: {
    height: 50,
    borderColor: Colors.DEV_PRIMARY,
    borderWidth: 1,
    marginBottom: 15,
    paddingHorizontal: 10,
    borderRadius: 5,
    fontFamily: 'play-reg',
    color: 'white',
  },
  button: {
    backgroundColor: Colors.DEV_PRIMARY, 
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
  },
});

export default ContactPage;