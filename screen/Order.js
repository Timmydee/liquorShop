import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity, ScrollView, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import { MaterialIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { urlFor } from '../sanity';
import { AntDesign } from '@expo/vector-icons';

import { useNavigation } from '@react-navigation/native'
import { useSelector } from 'react-redux';
import { useRoute } from '@react-navigation/native';
import { totalBasket, selectBasketItems, incrementBasket, decrementBasket } from '../features/basketSlice';
import { useDispatch } from 'react-redux';

const Order = () => {
    const navigation = useNavigation()
    const total = useSelector(totalBasket)
    const basketItems = useSelector(selectBasketItems)
    const [groupItemsInBasket, setGroupItemsInBasket] = useState({})
    const dispatch = useDispatch()


    useEffect(() => {
      const grouped  = basketItems.reduce((results, item) => {
        (results[item.id] = results[item.id] ||[]).push(item)
        return results
      },{})

      setGroupItemsInBasket(grouped)

    },[basketItems])

    // const 
    //   {params: {
    //       product
    //   }
    // } = useRoute()

    // const id = product._id

    const addItemToBasket = () => {
      dispatch(incrementBasket({id}))
      console.log(item.id)
    }

    const removeFromBasket = () => {
      dispatch(decrementBasket())
    }

  return (
    <SafeAreaView>
      <View className="px-2 relative h-[100%]">
        <View className="flex flex-row justify-between items-center">
          <TouchableOpacity onPress={navigation.goBack}>
              <Ionicons name="ios-chevron-back-sharp" size={30} color="black"  />
          </TouchableOpacity>
        </View>

        <Text className="font-bold py-4 text-3xl ">Cart</Text>

        <ScrollView className="divide-y divide-gray-200">
          {Object.entries(groupItemsInBasket).map(([key, item]) => (
            <View key={key}
              className="flex-row items-center space-x-3 bg-white py-2 px-5"
            >
              <Text className='text-[#00ccbb]'>{item.length}x</Text>
              
              <Image
                source={{uri: urlFor(item[0]?.image).url()}}
                className="h-12 w-12 rounded-full"
              />

              <Text className="flex-1">{item[0]?.name}</Text>
              <Text className='text-gray-600'>
                ${item[0]?.price * item.length}
              </Text>

              {/* <View className="flex flex-row items-center space-x-3">
                <TouchableOpacity onPress={addItemToBasket}>
                  <AntDesign name="minuscircle" size={24} color="black" />
                </TouchableOpacity>

                <Text>{item.length}</Text>

                <TouchableOpacity>
                  <AntDesign name="pluscircle" size={24} color="black" />
                </TouchableOpacity>
              </View> */}

              {/* <TouchableOpacity>
                <Text
                  className="text-[#00ccbb] text-xs"
                  onPress={() => dispatch(removeFromBasket({ id: key}))}
                >
                  Remove
                </Text>
              </TouchableOpacity> */}
            </View>
          ))}
          {/* <Text>{total}</Text> */}

         
        </ScrollView>
        <View className="px-6 pt-5 absolute w-full bottom-0">
            <TouchableOpacity onPress={() => navigation.navigate('order')} className="bg-green-500 rounded-xl w-full h-[69px] flex items-center justify-center">
              <Text className="font-bold text-white text-[20px]">Place an Order</Text>
            </TouchableOpacity>
          </View>
      </View>
    </SafeAreaView>
  )
}

export default Order

const styles = StyleSheet.create({})