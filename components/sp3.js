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
import ms2 from '../assets/ms2.jpg'
import ms3 from '../assets/ms3.jpg'
import ms4 from '../assets/ms4.jpg'



export default function sp3() {
  

  

    return (
      <View style={styles.background}>
        <Text style={styles.textsp}> Laptop MSI Gaming i5 / 16GB / 512GB / 15.6FHD /RTX 6Gb/ Win 10  </Text>
     <ScrollView horizontal={true} pagingEnabled>
     <Image source={product3}style={styles.itemimage} />
       <Image source={ms2}style={styles.itemimage} />
       <Image source={ms3}style={styles.itemimage} />
       <Image source={ms4}style={styles.itemimage} />
     

     </ScrollView>
     <View style={styles.background}>
     <Button title="video sản phẩm" onPress={() => {
          Linking.openURL('https://youtu.be/YH0_ITrG2sI')
        }}
        color ="red"
      />
      <Text style={styles.colorprice}>23.999.000 VND </Text>
      
      <Text style={styles.textinf}> <MaterialCommunityIcons name="monitor-screenshot" size={24} color="black" />  15.6", 1920 x 1080 Pixel, IPS, 144 Hz</Text>
      <Text style={styles.textinf}> <Feather name="cpu" size={24} color="black" />  Intel Core i5-10500H </Text>
      <Text style={styles.textinf}> <FontAwesome name="microchip" size={24} color="black" />  16 GB, DDR4, 3000 MHz </Text>
      <Text style={styles.textinf}> <MaterialIcons name="sd-storage" size={24} color="black" />  SSD 512 GB </Text>
      <Text style={styles.textinf}> <Ionicons name="hardware-chip" size={24} color="black" />  NVIDIA GeForce RTX 3060 Max- Q 6GB </Text>
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
  const product3 = {
    uri: 'https://images.fpt.shop/unsafe/fit-in/240x215/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2021/8/7/637639339928194488_msi-gaming-gf63-den-dd.jpg',
    width: 200,
    height: 100,
  };