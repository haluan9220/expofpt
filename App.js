import 'react-native-gesture-handler';
import React from 'react';
import { 
  StyleSheet, 
  useColorScheme,
  View,
  Image,
  Text,
  TouchableOpacity,
  Picker,
  ScrollView
} from 'react-native';
import { 
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem, 
} from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer, useTheme, DefaultTheme, DarkTheme,} from '@react-navigation/native';

import { AntDesign } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import fpt from './assets/1.png'
import mycat from './assets/1.png'

import login from './components/Login';
import home from './components/Home';
import product from './components/Product';

import sp1 from './components/sp1';
import sp2 from './components/sp2';
import sp3 from './components/sp3';
import sp4 from './components/sp4';
import sp5 from './components/sp5';
import sp6 from './components/sp6';


import productCategory from './components/ProductsCategory';
import Link from './components/Link';
import userManage from './components/UserManage';
import team from './components/Team';
import Home from './components/Home';
import Cart from './components/Cart';
import { render } from 'react-dom';


const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();


//function LogoTitle() {
  //return (
    //         <View style={styles.headerContainer}>
//<View style={styles.InputContainer}>
  //<FontAwesome name="search"size={20}/>
  //<Text style={{ width: 150, height: 35 }} >   Search here  </Text>
  
  //</View> 
  
  //</View> 
//);
//}







function LogoTitle() {
  return (
    
    <Image source={fpt} style={{ width: 125, height: 25 }} /> 
    
  );
}


function CustomDrawerContent(props) {
  const { colors } = useTheme();
  return (
    <DrawerContentScrollView {...props}>
      <View style={styles.container}>
      <Image source={mycat} style={{ width:200, height: 55, marginBottom: 20 }} />
        <Text style={[styles.text,{color:colors.text}]}> </Text>
      </View>
      
      <DrawerItemList {...props} />
      
      <DrawerItem 
      
       label="Team"
        onPress={() => props.navigation.navigate('Team')}
        icon={({color, size}) =><AntDesign name="team" size={size} color={color} />}
      />
      <DrawerItem 
        label="Product"
        onPress={() => props.navigation.navigate('Product')}
        icon={({color, size}) =><AntDesign name="barcode" size={size} color={color} />}
      />
      <DrawerItem 
        label="Product Category"
        onPress={() => props.navigation.navigate('Product Category')}
        icon={({color, size}) =><Entypo name="bookmarks" size={size} color={color} />}
      />
      <DrawerItem 
        label="User Manage"
        onPress={() => props.navigation.navigate('User Manage')}
        icon={({color, size}) =><FontAwesome5 name="users-cog" size={size} color={color} />}
      />
      <DrawerItem 
        label="Login" 
        onPress={() => props.navigation.navigate('login')}
        icon={({color, size}) =><MaterialCommunityIcons name="login" size={size} color={color} />}
      />
       
    </DrawerContentScrollView>
  );
}

function StackNav(){
  return(
    
    <Stack.Navigator>
      
      <Stack.Screen name="DrawerNav" component={DrawerNav} options={{headerShown: false}} />
      <Stack.Screen name="Team" component={team} />
      <Stack.Screen name="Product" component={product} />
      <Stack.Screen name="Product Category" component={productCategory} />
      <Stack.Screen name="User Manage" component={userManage} />
      <Stack.Screen name="login" component={login} />
      <Stack.Screen name="sp1" component={sp1}  options={{ title: '', }}/>
      <Stack.Screen name="sp2" component={sp2}  options={{ title: '', }}/>
      <Stack.Screen name="sp3" component={sp3}  options={{ title: '', }}/>
      <Stack.Screen name="sp4" component={sp4}  options={{ title: '', }}/>
      <Stack.Screen name="sp5" component={sp5}  options={{ title: '', }} />
      <Stack.Screen name="sp6" component={sp6}  options={{ title: '', }} /> 
      
      
     
            
           
             
              
           
          


    </Stack.Navigator>
  )
}

function DrawerNav(){
  return(
    <Drawer.Navigator
    drawerContent={(props) => <CustomDrawerContent {...props} />}
    initialRouteName="Home"
    screenOptions = {
      {
        headerShown: false
      }
    }
    >

      <Drawer.Screen 
      
        name="TabNav" 
        component={TabNav}
     
        options={
          
          {
            title: 'Home',
            
            drawerIcon: ({focused, color, size}) =><AntDesign name="home" size={size} color={color} />
          }
        }
      />
     
    </Drawer.Navigator>
  )
}





function TabNav({navigation}) {
  const { colors } = useTheme();
  return (

      <Tab.Navigator
     
        screenOptions = {
          {
            tabBarShowLabel : false,
            headerLeft: () => (
                <TouchableOpacity
                  onPress={() => navigation.openDrawer()}
                  style={{ marginLeft:5 }}
                >
                  
                  <LogoTitle/>
                  
                </TouchableOpacity>
            )
          }
        }
      >
        <Tab.Screen 
          name="Home" 
          component={home}
          options={
            {
              title: '',
              tabBarIcon: ({color, size}) =><FontAwesome5 name="home" size={size} color={color} />,
            }
          }
        />
        <Tab.Screen 
          name="Link" 
          component={Link}
          options={
            {
              title: '',
              tabBarIcon: ({color, size}) =><FontAwesome5 name="link" size={size} color={color} />,
            }
          }
        />
        <Tab.Screen 
          name="Cart" 
          component={Cart}
          options={
            {
              title: '',
              tabBarIcon: ({color, size}) =><MaterialIcons name="shopping-cart" size={size} color={color} />,
            }
          }
        />
      </Tab.Navigator>

  );
}

export default function App() {
  const scheme = useColorScheme();
 
  return (





    <NavigationContainer theme={scheme === 'white' ? DarkTheme : DefaultTheme}>
 
 
 
  
        
  <StackNav/>  

  

      </NavigationContainer>
      

  
  );
}

const styles = StyleSheet.create({
  container: {flex: 1, alignItems: 'center', justifyContent: 'center'},
  text:{
    fontSize:18,
  },

headerContainer:{
flexDirection:'row',
paddingTop:10,

},
InputContainer:{
backgroundColor:'#fff',
flexDirection:'row',
flex:1,
marginLeft:2,
alignItems:'center',
marginBottom:1,
},




});