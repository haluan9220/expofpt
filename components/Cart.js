import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {useTheme} from '@react-navigation/native';
import { MaterialIcons } from '@expo/vector-icons';
export default function Cart() {
  const { colors } = useTheme();
    return (
      <View style={[styles.container,{backgroundColor:colors.background}]}>
        <View style={styles.icon}><MaterialIcons name="remove-shopping-cart" size={60} color="red" /></View>
        <Text style={[styles.text,{color:colors.text}]}>Không có sản phẩm nào trong giỏ hàng</Text>
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    container: {flex: 1, alignItems: 'center', justifyContent: 'center'},
    text:{
      fontSize:18,
    },
    
  });