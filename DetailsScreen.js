import { StatusBar } from 'expo-status-bar';
import React, { useCallback,useEffect,useState } from "react";
import axios from 'axios';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {SafeAreaView,ScrollView ,Image, StyleSheet, Text, View,TextInput,Button,Linking ,Alert,Dimensions } from 'react-native';

import fpt from './assets/1.png'

axios.get('/user?ID=12345')
  .then(function (response) {
    // handle success
    console.log(response);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .then(function () {
    // always executed
  });

 



  
  






export default function App() {
  const [text, onChangeText] = React.useState("Useless Text");
  const [number, onChangeNumber] = React.useState(null);
 


  const LinkingPage =()=>{

 const number = '+54565645554'
 const message='hello there'







 const openUrl =async (url)=>{
const isSupported=await Linking.canOpenURL(url);
if(isSupported){
  await Linking.openURL(url);
}else{
  Alert.alert('Dont know how to open this url :${url}');
}}}
 
  
  
               return (
                









    <View style={styles.container}>
          <ScrollView>
      <Image 
          source={fpt} style={{ width: 350, height: 55,margin:5 }}
        />
      <Text style={[styles.bigblue]}>hello my name haluan</Text>
                <StatusBar style="auto" />
                
                <SafeAreaView>
                <TextInput
        style={styles.input}
        onChangeText={onChangeNumber}
        value={number}
        placeholder="nhap vao "
        keyboardType="numeric"
      />
      
    </SafeAreaView>

    <View style={styles.buttonContainer}>
     <Button title="Call" onPress={() =>{
       Linking.openURL('tel:${number}')
      }}color='red' /></View>

    <View style={styles.buttonContainer}>
     <Button title="SMS" onPress={() =>{
       Linking.openURL('sms:number=${number}?body=${message}')
      }}color='gold' /></View>        
                  
    <View style={styles.buttonContainer}>
     <Button title="Map" onPress={() =>{
       Linking.openURL('https://www.google.com/maps')
      }}color='lime' /></View>





      <Text style={[styles.textimage]}>Scroll me plz</Text>
    <Image source={logo} />
    <Image source={logo} />
    <Image source={logo} />
    <Image source={logo} />
    <Image source={logo} />
    <Text style={[styles.textimage]}>If you like</Text>
    <Image source={logo} />
    <Image source={logo} />
    <Image source={logo} />
    <Image source={logo} />
    <Image source={logo} />
    <Text style={[styles.textimage]}>Scrolling down</Text>
    <Image source={logo} />
    <Image source={logo} />
    <Image source={logo} />
    <Image source={logo} />
    <Image source={logo} />
    <Text style={[styles.textimage]}>What's the best</Text>
    <Image source={logo} />
    <Image source={logo} />
    <Image source={logo} />
    <Image source={logo} />
    <Image source={logo} />
    <Text style={[styles.textimage]}>Framework around?</Text>
    <Image source={logo} />
    <Image source={logo} />
    <Image source={logo} />
    <Image source={logo} />
    <Image source={logo} />
    <Text style={[styles.textimage]}>React Native</Text>
       
 </ScrollView> 
    </View>
  );
    }
  
const styles = StyleSheet.create({
  container: {
    flex: 1,
       backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
 
  bigblue:{
    color:'black',
    fontWeight: 'bold',
    fontSize: 30,
    textAlign:'center',
    backgroundColor:'yellow',
  },
  textimage:{
    color:'black',
    fontWeight: 'bold',
    fontSize: 30,
  },
  buttonContainer: {
    margin: 20
  },

  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },

  
  
});
const logo = {
  uri: 'https://reactnative.dev/img/tiny_logo.png',
  width: 64,
  height: 64,
};

