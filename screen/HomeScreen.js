import { StyleSheet, Text, View, SafeAreaView, TextInput, Image, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Ionicons } from '@expo/vector-icons';

import client from "../sanity"
import { urlFor } from '../sanity';
import { TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import SubCategory from '../components/SubCategory';



const HomeScreen = () => {
  const [category, setCategory] = useState([])
  const [product, setProduct] = useState([])

  const navigation = useNavigation()
  
  useEffect(() => {
    const query = `
      *[_type == "category"]
    `
    client.fetch(query)

    .then((data) => {
      setCategory(data)
    })

    const query2 = `
      *[_type == "popular"] 
    `
    client.fetch(query2)

    .then((datas) => {
      setProduct(datas)
    })

    
  }, [])

  return (
    <SafeAreaView className='flex-1 bg-[#ffffff]'>
      {/* header */}
      <View className="px-1 pt-1">
        <View className="flex flex-row items-center space-x-1 justify-center">
          <Ionicons name="location-outline" size={26} color="#46DE99" />
          <View className=" flex-1"> 
            <Text className="text-[14px] font-medium text-lg">Delivered To</Text>
            <Text className="">Home - 15/4 Roawda...</Text>
          </View>
          <Ionicons name="ios-cart-outline" size={24} color="#46DE99" />
        </View>

        {/* search */}
        <View className='my-4'>
          <View className='px-5 w-full shadow h-9 border border-gray-950 rounded-xl flex items-center flex-row '>
            <Ionicons name="search-outline" size={24} color="#46de99" />
            <TextInput
              placeholder="Search"
              onChangeText={()=>{}}
              keyboardType='default'
              className='px-6 w-full'
            /> 
          </View>
        </View>

        {/* banner */}
        <ScrollView 
          horizontal
          className="pt-1 space-x-1"
          showsHorizontalScrollIndicator={false}
        >
          <View className='relative'>
            <Image source={require('../assets/banner.png')} className=""/>
            <Text className="absolute top-[4%] text-white text-sm font-bold">Big Discount</Text>
            <Text className="absolute bottom-[40%] text-white text-sm">only</Text>
            <Text className="absolute bottom-[20%] text-white text-[20px] font-bold">$1.00</Text>
            <Text className="absolute bottom-[3%] text-white text-sm">Hieneken</Text>
            <View>
              <Image source={require('../assets/bannerCan.png')} className="absolute bottom-0" />
              
            </View>

          </View>
          <View className='relative'>
            <Image source={require('../assets/banner.png')} className=""/>
            <Text className="absolute top-[4%] text-white text-sm font-bold">Big Discount</Text>
            <Text className="absolute bottom-[40%] text-white text-sm">only</Text>
            <Text className="absolute bottom-[20%] text-white text-[20px] font-bold">$1.00</Text>
            <Text className="absolute bottom-[3%] text-white text-sm">Hieneken</Text>
            <View>
              <Image source={require('../assets/bannerCan.png')} className="absolute bottom-0" />
              
            </View>

          </View>
        </ScrollView>

        {/* category */}
        <View className="py-4">
          <View className="flex flex-row justify-between items-center">
            <Text className="text-[#46DE99] text-2xl font-bold">Category</Text>
            <Text className="text-[#46DE99] text-sm font-bold">Show All</Text>
          </View>

          <ScrollView
            horizontal
            contentContainerStyle={{
              paddingHorizontal: 5,
              paddingTop: 10,   
            }}
            showsHorizontalScrollIndicator={false}
            className=""
          >
            {category.map((item, _id) => {
              return (
                <SubCategory 
                  id={item._id}
                  name = {item.name}
                  img = {item.image}
                />
              )
            })}
          </ScrollView>
        </View>

        {/* Popular */}
        <View className="py-2">
          <Text className="text-[#46DE99] text-2xl font-bold">Popular Liquor</Text>

          <ScrollView
      
          >
            {product.map((item, i) => {
              return (
                <TouchableOpacity key={i} className="flex flex-row items-center border border-gray-300 rounded w-full my-2 px-4 space-x-10">
                  <Image source={{uri: urlFor(item.image).url()}} className="w-8 h-24" />
                  <View>
                    <Text className="text-[14px] font-bold">{item.name}</Text>
                    <Text className="text-[8px]font-light py-2">{item.short_description}</Text>
                    <Text className="text-[20px] text-[#46DE99] font-medium">${item.price}</Text>
                  </View>
                </TouchableOpacity>
              )
            })}
          </ScrollView>
        </View>
      </View>
      
    </SafeAreaView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({})