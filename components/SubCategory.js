import { StyleSheet, Text, View, TouchableOpacity,Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import client from "../sanity"
import { urlFor } from '../sanity';
import { useNavigation } from '@react-navigation/native';

const SubCategory = ({id, name, img}) => {
    const navigation = useNavigation()
    // console.log(id)

  return (
    <View>
        <TouchableOpacity
            key={id} 
            onPress={ () => {navigation.navigate('category',{id})}}
            // onPress={() => {console.log(id)}}
            className="w-[100px] h-[130px] py-1 mr-2 shadow-md bg-white border border-gray-300 rounded-2xl flex items-center justify-between"
        >
            
            <Image source={{uri: urlFor(img).url()}} className="w-8 h-24" />
            <Text className="text-[8px]font-light">{name}</Text>
        </TouchableOpacity>
    </View>
  )
}

export default SubCategory

const styles = StyleSheet.create({})