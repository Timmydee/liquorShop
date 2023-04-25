import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

import { urlFor } from '../sanity';
import { useDispatch, useSelector } from 'react-redux';
import { useRoute } from '@react-navigation/native';
import { decrementBasket, incrementBasket, selectBasketItems, selectBasketItemsId } from '../features/basketSlice';



const ProductInfo = () => {  
  const dispatch = useDispatch()
  const navigation = useNavigation()

  const 
      {params: {
          product
      }
  } = useRoute()

  const id = product._id
  const name = product.name
  const price = product.price
  const image = product.image
  const desc = product.short_description

  const item = useSelector((state) => selectBasketItemsId(state, id))
  // const items = useSelector((state) => selectBasketItems(state))

  const addItemToBasket = () => {
    dispatch(incrementBasket({id,name,price,image,desc}))
    console.log(id)
  }

  const removeFromBasket = () => {
    dispatch(decrementBasket({id}))
  }

  return (
    <SafeAreaView>
      <View className='px-1'>
        {/* backIcon */}
        <TouchableOpacity onPress={navigation.goBack}>
          <Ionicons name="ios-chevron-back-sharp" size={30} color="black"  />
        </TouchableOpacity>
        {/* image */}
        <View className="flex items-center">
          <Image source={{uri: urlFor(product.image).url()}} className="w-[96px] h-[246px] "/>
        </View>
        {/* product name and description */}
        <View className="px-6 pt-8">
          <Text className='font-bold text-lg'>{product.name}</Text>
          <Text className='font-light text-sm'>{product.short_description}</Text>
        </View>

        {/* product quality and price */}
        <View className="flex flex-row justify-between items-center px-6 py-4">
          <View>
            <Text className="font-medium text-green-400 text-lg">Quantity</Text>
            <View className="flex flex-row items-center space-x-3">
              <TouchableOpacity onPress={removeFromBasket}>
                <AntDesign name="minuscircle" size={24} color="black" />
              </TouchableOpacity>

              <Text>{item.length}</Text>

              <TouchableOpacity onPress={addItemToBasket}>
                <AntDesign name="pluscircle" size={24} color="black" />
              </TouchableOpacity>
            </View>
          </View>

          <View>
              <Text className='font-bold text-xl text-green-500'>Price</Text>
              <Text className='font-bold text-lg'>${product.price * item.length}</Text>
          </View>
        </View>

        <View className="px-6">
          <Text className='font-bold text-xl'>Tasting Note</Text>
          <Text className='font-normal text-sm'>Carlsberg Smooth, a premium mild beer crafted with the finest European Barley
            for a rich and smooth taste. Brewed specially for the Indian palate with a refreshing
            and elegant taste, Carlsberg Smooth offers a unique product and a new experience
            to our consumers Read More
          </Text>
        </View>

        <View className="px-6 pt-5">
          <TouchableOpacity onPress={() => navigation.navigate('order')} className="bg-green-500 rounded-xl w-full h-[69px] flex items-center justify-center">
            <Text className="font-bold text-white text-[20px]">Add to Cart</Text>
          </TouchableOpacity>
        </View>
        
      </View>
    </SafeAreaView>
  )
}

export default ProductInfo

const styles = StyleSheet.create({})