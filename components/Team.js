import React from 'react';
import { StyleSheet, 
  Text, 
  View,
  ScrollView,
  Image

 } from 'react-native';
import {useTheme} from '@react-navigation/native';

import image1 from '../assets/luan.jpg'
import image2 from '../assets/manh.png'
import image3 from '../assets/thuy.png'
import image4 from '../assets/linh.png'

export default function Team() {
  const { colors } = useTheme();

  const Teamitem =({image,name}) =>(
    <View style={styles.itemcontainer}>
      <Image source={image} style={styles.itemimage}/>
      <Text style={styles.textimage}>{name}</Text>
     
      
    </View>

  );


    return (
      
    

      <ScrollView >
        <View style={styles.listitemcontainer}>
        <View style={styles.textimage}>
       
        

<View>
      <Teamitem
      name=" Hà Gia Luân "
      image={image1}
      
      />
       <Teamitem
      name=" Võ Văn Mạnh "
      image={image2}
      
      />
              
</View>

<View>
      <Teamitem
      name=" Đặng Kim Thủy "
      image={image3}
      
      />
       <Teamitem
      name=" Nguyễn Thị Thùy Linh "
      image={image4}
      
      />
             
</View>
</View>
</View>

</ScrollView> 
      
    );
  };
  
  const styles = StyleSheet.create({
    container: {flex: 1, alignItems: 'center', justifyContent: 'center'},
    text:{
      fontSize:18,
    },

    itemimage:{
      width:350,
      height:350,
      borderRadius:20,
      marginLeft:5,
    },

    textimage:{
      color:'black',
      marginVertical:5,
      fontSize:20,
      
    
    },
  });