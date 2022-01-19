import React from 'react';
import { StyleSheet, 
  Text, 
  View,
  ScrollView,
  Image ,Button,Linking} from 'react-native';
//import {useTheme} from '@react-navigation/native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import hp2 from '../assets/hp2.png'
import hp3 from '../assets/hp3.png'
import hp4 from '../assets/hp4.jpg'



export default function sp5() {
  

  

    return (
      <View style={styles.background}>
        <Text style={styles.textsp}> Laptop HP Envy 13 ba1030TU i7 / 8GB / 512GB / 13.3 FHD / Win 10 </Text>
     <ScrollView horizontal={true} pagingEnabled>
     <Image source={product5}style={styles.itemimage} />
       <Image source={hp2}style={styles.itemimage} />
       <Image source={hp3}style={styles.itemimage} />
       <Image source={hp4}style={styles.itemimage} />
     

     </ScrollView>
     <View style={styles.background}>
     <Button title="video sản phẩm" onPress={() => {
          Linking.openURL('https://youtu.be/UKZJ67UIdWI')
        }}
        color ="red"
      />
      <Text style={styles.colorprice}>24.999.000 VND </Text>
      
      <Text style={styles.textinf}> <MaterialCommunityIcons name="monitor-screenshot" size={24} color="black" />  13.3", 1920 x 1080 Pixel, IPS, 60 Hz, BrightView Micro-edge WLED-backlit </Text>
      <Text style={styles.textinf}> <Feather name="cpu" size={24} color="black" />  Intel Core i7-1165G7 </Text>
      <Text style={styles.textinf}> <FontAwesome name="microchip" size={24} color="black" />  8 GB, LPDDR4, 3200 MHz </Text>
      <Text style={styles.textinf}> <MaterialIcons name="sd-storage" size={24} color="black" />  SSD 512 GB </Text>
      <Text style={styles.textinf}> <Ionicons name="hardware-chip" size={24} color="black" />  Card Onboard </Text>
      <Button
       
        title="Mua Ngay"
        
        color={'purple'}
      />
    </View>
     </View>
    );
  };
  
  const styles = StyleSheet.create({
    container: {flex: 1, alignItems: 'center', justifyContent: 'center'},
    text:{
      fontSize:18,
      borderWidth:1,
    },
    itemimage:{
      width:360,
      height:360,
     
      marginLeft:1,
    },
    textsp:{
      fontSize:18,
      fontWeight: 'bold',
      
      fontStyle:'italic',
      
    },
    textinf:{
      fontSize:18,
      
     },
     colorprice:{
      color:'red',
      fontSize:30,
      backgroundColor:'white'

     },

     background:{
      backgroundColor:'pink'
     },
     textprice:{
      fontSize:18,
      
     },
  });
  const product5 = {
    uri: 'https://images.fpt.shop/unsafe/fit-in/214x214/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2021/3/26/637523718468007237_hp-pavilion-14-dv-vang-dd-icon.jpg',
    width: 200,
    height: 100,
  };