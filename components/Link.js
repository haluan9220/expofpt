import React from 'react';
import { StyleSheet, Text, View,TextInput ,Button,ScrollView,Image, SafeAreaView,Linking} from 'react-native';
//import {useTheme} from '@react-navigation/native';
//import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { FontAwesome } from '@expo/vector-icons';
export default function Link() {
   
    return (
      <View style={styles.container}>                
      
      <View style={styles.ButtonContainer}>
        <Text>Vị trí Fptshop</Text>
         <Button title="Map" onPress={() => {
          Linking.openURL('https://goo.gl/maps/KxL4yPmg3RKew5Pd7')
        }}
        color ="green"
      />
       </View>
       
       <View style={styles.ButtonContainer}>
       <Text>Kênh Youtube</Text>
         <Button title="youtube" onPress={() => {
          Linking.openURL('https://www.youtube.com/c/FPTShopReview')
        }}
        color ="red"
      />
       </View>  
      
       <View style={styles.ButtonContainer}>
       <Text> Trang Fptshop gốc  </Text>
         <Button title="FPT" onPress={() => {
          Linking.openURL('https://fptshop.com.vn/may-tinh-xach-tay')
        }}
        color ="blue"
      />
       </View>            
           

           
        </View>
        
      





      
    );
      };
      
  
  const styles = StyleSheet.create({
    container: {flex: 1, alignItems: 'center', justifyContent: 'center'},
    ButtonContainer:{
      margin:10
    },
    ButtonContainer:{
      marginTop:30
    },
    
   
      
      
  });
  