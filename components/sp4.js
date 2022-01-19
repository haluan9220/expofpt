import React from 'react';
import { StyleSheet, 
  Text, 
  View,
  ScrollView,
  Image,Button ,Linking} from 'react-native';
//import {useTheme} from '@react-navigation/native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import fu2 from '../assets/fu2.jpg'
import fu3 from '../assets/fu3.jpg'
import fu4 from '../assets/fu4.jpg'



export default function sp4() {
  

  

    return (
      <View style={styles.background}>
        <Text style={styles.textsp}>Laptop Fujitsu i5 / 8GB / 512GB / 13.3 FHD / Win 10  </Text>
     <ScrollView horizontal={true} pagingEnabled>
     <Image source={product4}style={styles.itemimage} />
       <Image source={fu2}style={styles.itemimage} />
       <Image source={fu3}style={styles.itemimage} />
       <Image source={fu4}style={styles.itemimage} />
     

     </ScrollView>
     <View style={styles.background}>
     <Button title="video sản phẩm" onPress={() => {
          Linking.openURL('https://youtu.be/jrgSull-zPU')
        }}
        color ="red"
      />
      <Text style={styles.colorprice}>23.999.000 VND </Text>
      
      <Text style={styles.textinf}> <MaterialCommunityIcons name="monitor-screenshot" size={24} color="black" />  13.3", 1920 x 1080 Pixel, 400 nits, Anti-glare LED-backlit </Text>
      <Text style={styles.textinf}> <Feather name="cpu" size={24} color="black" />  Intel Core i5-1135G7 </Text>
      <Text style={styles.textinf}> <FontAwesome name="microchip" size={24} color="black" />  8 GB, LPDDR4X, 4266 MHz </Text>
      <Text style={styles.textinf}> <MaterialIcons name="sd-storage" size={24} color="black" />  SSD 512 GB </Text>
      <Text style={styles.textinf}> <Ionicons name="hardware-chip" size={24} color="black" />  Intel Iris Xe Graphics</Text>
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
  const product4 = {
    uri: 'https://images.fpt.shop/unsafe/fit-in/214x214/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2021/9/25/637682015210283980_laptop-fujitsu-ch-9c13a1-i5-1135g7-nau-dd.jpg',
    width: 200,
    height: 100,
  };