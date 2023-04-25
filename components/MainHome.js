import { StyleSheet, Text, View, SafeAreaView,Image } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons';

const MainHome = () => {
  return (
    <SafeAreaView className='flex-1 bg-green-400'>
      <View className="flex-1 flex-row items-center justify-center">
        <Ionicons name="location-outline" size={24} color="black" />
        <View className=" flex-1"> 
          <Text className="">Delivered To</Text>
          <Text className="">Home - 15/4 Roawda...</Text>
        </View>
        <Ionicons name="ios-cart-outline" size={24} color="black" />
      </View>
    </SafeAreaView>
  )
}

export default MainHome

const styles = StyleSheet.create({})