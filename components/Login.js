import React from 'react';
import { SafeAreaView, StyleSheet, View, TextInput, Button, Alert, Image } from 'react-native';
import {useTheme} from '@react-navigation/native';
import fpt from '../assets/2.png'






const LoginInput = () => {
  const { colors } = useTheme();

  const [username, onChangeUsername] = React.useState(null);
  const [password, onChangePassword] = React.useState(null);

  return (
    <SafeAreaView style={styles.container}>
      <Image source={fpt} style={{ width: 200, height: 100, marginBottom: 20 }} /> 
      <TextInput 
        style={[styles.input,{borderColor:colors.border, color:colors.text}]} 
        onChangeText={text => onChangeUsername(text)} 
        value={username}
        placeholder="Username"
        placeholderTextColor={colors.text} 
      />
      <TextInput
        style={[styles.input,{borderColor:colors.border, color:colors.text}]}
        onChangeText={text => onChangePassword(text)}
        value={password}
        placeholder="Password"
        placeholderTextColor={colors.text}
        secureTextEntry={true}
      />
      <Button
        //onPress={()=>requestLogin(username,password)}
        title="Login"
        
        color={'purple'}
      />
    </SafeAreaView>
  );
};







export default function Login() {
  const { colors } = useTheme();
    return (
      <View style={[styles.container,{backgroundColor:'pink'}]}>
        
        <LoginInput/>
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    container: {flex: 1, alignItems: 'center', justifyContent: 'center'},
    text:{
      fontSize:18,
      backgroundColor:'pink',
    },
    input: {
      height: 40,
      width: 200,
      margin: 12,
      borderWidth: 1,
      padding: 10,
      backgroundColor:'white',
    },
  });