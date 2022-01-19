import React from 'react';
import { StyleSheet, 
  Text, 
  View,
  ScrollView,
  Image,Button,Linking } from 'react-native';
//import {useTheme} from '@react-navigation/native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import asus2 from '../assets/asus2.png'
import asus3 from '../assets/asus3.png'
import asus4 from '../assets/asus4.png'



export default function sp2() {
  

  

    return (
      <View style={styles.background}>
        <Text style={styles.textsp}> Laptop Asus Zenbook i5 / 8GB / 512GB SSD /Win 10</Text>
     <ScrollView horizontal={true} pagingEnabled>
     <Image source={product2}style={styles.itemimage} />
       <Image source={asus2}style={styles.itemimage} />
       <Image source={asus3}style={styles.itemimage} />
       <Image source={asus4}style={styles.itemimage} />
     

     </ScrollView>
     <View style={styles.background}>
     <Button title="video sản phẩm" onPress={() => {
          Linking.openURL('https://youtu.be/wzaSOLQGBjY')
        }}
        color ="red"
      />
      <Text style={styles.colorprice}>24.999.000 VND </Text>
      
      <Text style={styles.textinf}> <MaterialCommunityIcons name="monitor-screenshot" size={24} color="black" />  15.6 , 1920 x 1080 Pixel, WVA, 120 Hz, WVA Anti-glare LED Backlit Narrow Border </Text>
      <Text style={styles.textinf}> <Feather name="cpu" size={24} color="black" />  Intel Core i7-10750H </Text>
      <Text style={styles.textinf}> <FontAwesome name="microchip" size={24} color="black" />  16 GB, DDR4, 2933 MHz </Text>
      <Text style={styles.textinf}> <MaterialIcons name="sd-storage" size={24} color="black" />  SSD 512 GB </Text>
      <Text style={styles.textinf}> <Ionicons name="hardware-chip" size={24} color="black" />  Nvidia GTX1660Ti 6GB </Text>
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
  const product2 = {
    uri: 'https://images.fpt.shop/unsafe/fit-in/214x214/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2021/2/18/637492369087666209_asus-zenbook-ux425-xam-dd-bh-2nam.jpg',
    width: 200,
    height: 100,
  };