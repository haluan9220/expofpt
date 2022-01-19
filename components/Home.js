import React from 'react';
import { StyleSheet, 
  Text,
  View,
  ScrollView,
  Image,
  TextInput,
  Button, 
  SafeAreaView,
  FlatList,
  TouchableOpacity, } from 'react-native';
import {useTheme} from '@react-navigation/native';
//import { Component } from 'react/cjs/react.production.min';
//import { onChange } from 'react-native-reanimated';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { render } from 'react-dom';

import sp1 from '../components/sp1';
//import { Component } from 'react/cjs/react.production.min';






export default function Homescreen({navigation}) {
  
  const { colors } = useTheme();
  const [search, onChangesearch] = React.useState(null);

 

  

 /// const ProductItem =({image,name,price}) =>(
    //<View style={styles.itemcontainer}>
     // <Image source={image} style={styles.itemimage}/>
     /// <Text style={styles.textimage}>{name}</Text>
      //            <Text style={styles.itemPrice}>{price}</Text>
    ///</View>

  //);
    
{/************************************************************************************************/}

return (
     
        <View style={styles.headerContainer}>
      <View style={styles.InputContainer}>
    
     
              
<TextInput

        style={[styles.input,{borderColor:colors.border, color:colors.text,borderRadius:20}]} 
        onChangeText={text => onChangesearch(text)} 
        value={search}
        
        placeholder="Tìm Kiếm"
        placeholderTextColor={colors.text} />
                    
      <View styles={styles.sectionContainer}>
  
      <Text style={styles.sectiontitle}> LapTop</Text>

      {/*         code banner        */}

  <ScrollView 
      horizontal
      pagingEnabled 
      >
                      <Image source={banner} style={{width: 360, height:110, marginBottom: 20}} />
                      <Image source={banner2} style={{width: 360, height:110, marginBottom: 20}} />
                      <Image source={banner3} style={{width: 360, height:110, marginBottom: 20}} />
                      <Image source={banner4} style={{width: 360, height:110, marginBottom: 20}} />
  </ScrollView>

{/**********************************************/}

<ScrollView horizontal  > 
    <View style={styles.filteractivebuttoncontainer}>
        <Text  style={styles.filteractivetext}>Tất cả</Text>
    </View>

        {/*   */}

    <View style={styles.filterunactivebuttoncaontainer}>      
       <TouchableOpacity><Text>Dell</Text></TouchableOpacity>
    </View>

        {/*   */}

    <View style={styles.filterunactivebuttoncaontainer}>       
      <TouchableOpacity><Text>MSI</Text></TouchableOpacity>
    </View>

        {/*   */}

    <View style={styles.filterunactivebuttoncaontainer}>       
    <TouchableOpacity><Text>Asus</Text></TouchableOpacity>
    </View>

        {/*   */}

    <View style={styles.filterunactivebuttoncaontainer}>      
    <TouchableOpacity><Text>Hp</Text></TouchableOpacity>
    </View>

        {/*   */}
        
    <View style={styles.filterunactivebuttoncaontainer}>
    <TouchableOpacity><Text>Fujitsu</Text></TouchableOpacity>
    </View>

</ScrollView>


{/* code hình ảnh sản phẩm */}

 
<ScrollView horizontal={true}>
        <View style={styles.listitemcontainer}>
             
        <SafeAreaView >
    <View style={styles.itemcontainer}>
      <TouchableOpacity  onPress={()=> navigation.navigate("sp1")}>
          <Image source={product1} style={styles.itemimage} /></TouchableOpacity>
          <Text style={[styles.textimage]}>Laptop Dell Gaming Thin i7</Text>
          <Text style={[styles.textPrice]}> 21.400.000 VND </Text>
          
          
          </View>

    <View style={styles.itemcontainer}>
    <TouchableOpacity onPress={()=> navigation.navigate("sp2")}>
          <Image source={product2} style={styles.itemimage} /></TouchableOpacity>
          <Text style={[styles.textimage]}>Laptop Asus Zenbook i5</Text>
          <Text style={[styles.textPrice]}> 24.999.000 VND </Text>
          
          </View>

          </SafeAreaView> 

          {/*      */}
 
          <SafeAreaView >
    <View style={styles.itemcontainer}>
    <TouchableOpacity onPress={()=> navigation.navigate("sp3")}>
          <Image source={product3} style={styles.itemimage} /></TouchableOpacity>
          <Text style={[styles.textimage]}>Laptop MSI Gaming GF6 i5</Text>
          <Text style={[styles.textPrice]}> 23.999.000 VND </Text>
       
          </View>

    <View style={styles.itemcontainer}>
    <TouchableOpacity onPress={()=> navigation.navigate("sp4")}>
          <Image source={product4} style={styles.itemimage} /></TouchableOpacity>
          <Text style={[styles.textimage]}>Laptop Fujitsu CH5 i5</Text>
          <Text style={[styles.textPrice]}> 23.999.000 VND </Text>
         
          </View>
          </SafeAreaView>

          {/*      */}

          <SafeAreaView >
    <View style={styles.itemcontainer}>
    <TouchableOpacity onPress={()=> navigation.navigate("sp5")}>
          <Image source={product5} style={styles.itemimage} /></TouchableOpacity>
          <Text style={[styles.textimage]}>Laptop HP Envy 13 i7</Text>
          <Text style={[styles.textPrice]}> 30.699.000 VND </Text>
          
          </View>

    <View style={styles.itemcontainer}>
    <TouchableOpacity onPress={()=> navigation.navigate("sp6")}>
          <Image source={product6} style={styles.itemimage} /></TouchableOpacity>
          <Text style={[styles.textimage]}>Laptop MSI Gam Katana i7</Text>
          <Text style={[styles.textPrice]}> 29.999.000 VND </Text>
          
          </View>
          </SafeAreaView>

            {/*      */}


          <SafeAreaView >
    <View style={styles.itemcontainer}>
    <TouchableOpacity onPress={()=> navigation.navigate("sp1")}>
          <Image source={product1} style={styles.itemimage} /></TouchableOpacity>
          <Text style={[styles.textimage]}>Laptop MSI Gaming Thin i7</Text>
          <Text style={[styles.textPrice]}> 21.400.000 VND </Text>
          
          
          </View>

    <View style={styles.itemcontainer}>
    <TouchableOpacity onPress={()=> navigation.navigate("sp2")}>
          <Image source={product2} style={styles.itemimage} /></TouchableOpacity>
          <Text style={[styles.textimage]}>Laptop Asus Zenbook i5</Text>
          <Text style={[styles.textPrice]}> 24.999.000 VND </Text>
          
          </View>

          </SafeAreaView> 
       
        
        </View>
    
                                    </ScrollView>   
 
         </View>
         </View>
         </View>
        
    );


  }


  {/************************************************************************************************/}   

  const styles = StyleSheet.create({
container: {flex: 1, alignItems: 'center', justifyContent: 'center'},
    text:{
      fontSize:20,
      fontWeight: 'bold',
      
    },
headerContainer:{
      backgroundColor:'pink',
    },
textimage:{
      color:'black',
      marginVertical:1,
      fontSize:13,
      
    },
textPrice:{
      color:'red',
      flexDirection:'row',
      flexWrap:'wrap',
      fontSize:1,
      fontSize:12.5,
      fontWeight: 'bold',
      backgroundColor:'yellow',
      borderRadius:20
    },

sectionContainer:{
      backgroundColor:'#fff',
      paddingHorizontal:12,

    },
sectiontitle:{
      fontWeight:'700',
      fontSize:24,
      color:'#2f2f2f',
      marginVertical: 2,
      
     },
    
listitemcontainer:{
      flexDirection:'row',
      marginTop:10,
      padding:1
    },
itemcontainer:{
      width:98,
      margin:12,

    },
itemimage:{
      width:115,
      height:111,
      borderRadius:20,
      marginLeft:-8.5,
    },
        
input: {
        height: 40,
        width: 340,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        backgroundColor:'white',
      },
filtercontainer:{
  flexDirection:'row',
  marginTop:10,
},
filteractivebuttoncontainer:{
  backgroundColor:'black',
  paddingHorizontal:12,
  paddingVertical:4,
  borderRadius:4,
  marginRight:10,
},
filterunactivebuttoncaontainer:{
  backgroundColor:'#fff',
  paddingHorizontal:12,
  paddingVertical:4,
  borderRadius:4,
  borderColor:'#5a5a5a',
  borderWidth:1,
  marginRight:10,
},
filteractivetext:{
  color:'white',
},
filterunactivetext:{
  color:'#5a5a5a'
},
      
      
  });


  const logo = {
  uri: 'https://reactnative.dev/img/tiny_logo.png',
  width: 64,
  height: 64,
};

{/***************************************************************************/}   

const banner = {
  uri: 'https://images.fpt.shop/unsafe/fit-in/1200x300/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2021/11/30/637739073031123474_F-C1_1200x300.png',
  width: 300,
  height: 200,
};
const banner2 = {
  uri: 'https://images.fpt.shop/unsafe/fit-in/1200x300/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2021/12/27/637761932504732424_F-C1_1200x300.png',
  width: 360,
  height:120,
  
  marginBottom: 20,
};
const banner3 = {
  uri: 'https://images.fpt.shop/unsafe/fit-in/1200x300/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2021/10/31/637713147549903226_F-C1_1200x300%20(7).png',
  width: 360,
  height: 110,
  marginBottom: 20,
};
const banner4 = {
  uri: 'https://images.fpt.shop/unsafe/fit-in/1200x300/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2021/11/30/637739098003134038_F-C1_1200x300.png',
  width: 360,
  height: 110,
  marginBottom: 20,
};

{/***************************************************************************/}   

const product1 = {
  uri: 'https://images.fpt.shop/unsafe/fit-in/214x214/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2020/9/9/637352595657145902_dell-g3500-den-dd.png',
  width: 200,
  height: 100,
};
const product2 = {
  uri: 'https://images.fpt.shop/unsafe/fit-in/214x214/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2021/2/18/637492369087666209_asus-zenbook-ux425-xam-dd-bh-2nam.jpg',
  width: 200,
  height: 100,
};
const product3 = {
  uri: 'https://images.fpt.shop/unsafe/fit-in/240x215/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2021/8/7/637639339928194488_msi-gaming-gf63-den-dd.jpg',
  width: 200,
  height: 100,
};
const product4 = {
  uri: 'https://images.fpt.shop/unsafe/fit-in/214x214/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2021/9/25/637682015210283980_laptop-fujitsu-ch-9c13a1-i5-1135g7-nau-dd.jpg',
  width: 200,
  height: 100,
};
const product5 = {
  uri: 'https://images.fpt.shop/unsafe/fit-in/214x214/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2021/3/26/637523718468007237_hp-pavilion-14-dv-vang-dd-icon.jpg',
  width: 200,
  height: 100,
};
const product6 = {
  uri: 'https://images.fpt.shop/unsafe/fit-in/240x215/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2021/6/29/637605980122670339_msi-katana-gf76-den-dd.jpg',
  width: 200,
  height: 100,
};

