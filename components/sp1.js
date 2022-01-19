import React from 'react';
import { StyleSheet, 
  Text, 
  View,
  ScrollView,
  Image,
  FlatList,
  TouchableOpacity,
  Button,Linking } from 'react-native';
//import {useTheme} from '@react-navigation/native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import dell2 from '../assets/dell2.png'
import dell3 from '../assets/dell3.png'
import dell4 from '../assets/dell4.png'
//import Home from '../components/Home'


export default function sp1() {
 

  

    return (
      <View style={styles.background}>
        <Text style={styles.textsp}> Laptop Dell i7 / 16GB / 512GB /15.6 FHD / GTX1660Ti 6GB / Win 10  </Text>
     <ScrollView horizontal={true} pagingEnabled>
     <Image source={product1}style={styles.itemimage} />
       <Image source={dell2}style={styles.itemimage} />
       <Image source={dell3}style={styles.itemimage} />
       <Image source={dell4}style={styles.itemimage} />
     
     </ScrollView>

<View style={styles.background}>
<Button title="video sản phẩm" onPress={() => {
          Linking.openURL('https://youtu.be/KGDOvPVSYkg')
        }}
        color ="red"
      />
      <Text style={styles.colorprice}>23.999.000 VND </Text>
      
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
    background:{
      backgroundColor:'pink',
      
     },
     textprice:{
      fontSize:18,
      
     },
     textinf:{
      fontSize:18,
      
     },
     
     colorprice:{
      color:'red',
      fontSize:30,
      backgroundColor:'white'

     }
  });
  const product1 = {
    uri: 'https://images.fpt.shop/unsafe/fit-in/214x214/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2020/9/9/637352595657145902_dell-g3500-den-dd.png',
    width: 200,
    height: 100,
  };