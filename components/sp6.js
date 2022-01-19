import React from 'react';
import { StyleSheet, 
  Text, 
  View,
  ScrollView,
  Image,Button,Linking,TouchableOpacity} from 'react-native';
//import {useTheme} from '@react-navigation/native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import msi2 from '../assets/msi2.jpg'
import msi3 from '../assets/msi3.jpg'
import msi4 from '../assets/msi4.jpg'




export default function sp6() {
  

  

    return (
      <View style={styles.background}>
        <Text style={styles.textsp}>Laptop MSI Gaming Katana i7 / 8GB / 512GB / RTX 3050 4GB / Win 10 </Text>
     <ScrollView horizontal={true} pagingEnabled>
     <Image source={product6}style={styles.itemimage} />
       <Image source={msi2}style={styles.itemimage} />
       <Image source={msi3}style={styles.itemimage} />
       <Image source={msi4}style={styles.itemimage} />
     

     </ScrollView>
     <View style={styles.background}>
     <Button title="video sản phẩm" onPress={() => {
          Linking.openURL('https://youtu.be/KGDOvPVSYkg')
        }}
        color ="red"
      />
      <Text style={styles.colorprice}>29.999.000 VND </Text>
      
      <Text style={styles.textinf}> <MaterialCommunityIcons name="monitor-screenshot" size={24} color="black" />  15.6", 1920 x 1080 Pixel, IPS, 144 Hz, 300 nits, IPS LCD LED Backlit, True Tone </Text>
      <Text style={styles.textinf}> <Feather name="cpu" size={24} color="black" />  Intel Core i7-11800H </Text>
      <Text style={styles.textinf}> <FontAwesome name="microchip" size={24} color="black" />  8 GB, DDR4, 3200 MHz </Text>
      <Text style={styles.textinf}> <MaterialIcons name="sd-storage" size={24} color="black" />  SSD 512 GB </Text>
      <Text style={styles.textinf}> <Ionicons name="hardware-chip" size={24} color="black" />  NVIDIA GeForce GTX 3050 4GB </Text>
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
  const product6 = {
    uri: 'https://images.fpt.shop/unsafe/fit-in/240x215/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2021/6/29/637605980122670339_msi-katana-gf76-den-dd.jpg',
    width: 200,
    height: 100,
  };
  