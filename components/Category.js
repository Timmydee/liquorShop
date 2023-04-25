import { StyleSheet, Text, View, SafeAreaView, Pressable, TextInput, Image } from 'react-native'
import React, {useEffect, useState} from 'react'
import { Ionicons } from '@expo/vector-icons';
// import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { MaterialIcons } from '@expo/vector-icons';
import { ScrollView } from 'react-native';
import client from "../sanity"
import SubItems from './SubItems';
import { urlFor } from '../sanity';

const options = ['All', 'Craft', 'Imported', 'Local']



const Category = () => {
  const 
        {params: {
            id
        }
    } = useRoute()

  const navigation = useNavigation()
  const [optionState, setOptionState] = useState(options[0])
  const [category, setCategory] = useState([])
  // console.log(id)

  useEffect(() => {

    client.fetch(
        `
        *[_type == "category" && _id == "${id}"] {
          ...,
          products[]->{
            ...,
          }
        }
        `, { id }
    )
    .then((data) => {
        setCategory(data)
    })
  },[id])
  

  // console.log(category)

  return (
    <SafeAreaView>
      <View className="px-2">
        {/* back icon */}
        <View className="flex flex-row justify-between items-center">
          <TouchableOpacity onPress={navigation.goBack}>
              <Ionicons name="ios-chevron-back-sharp" size={30} color="black"  />
          </TouchableOpacity>

          <MaterialIcons name="filter-center-focus" size={30} color="black" />
        </View>

        <View>
          {/* category items */}
          {category.map((cate, i) => {  
            return (
              <View key={cate._id}>
                <Text className="text-[40px] font-bold">{cate.name}</Text>

                <View className='my-2'>
                  <View className='px-5 w-full shadow h-9 border border-gray-950 rounded-xl flex items-center flex-row '>
                    <Ionicons name="search-outline" size={24} color="black" />
                    <TextInput
                      placeholder="Search"
                      className=''
                    /> 
                  </View>
                </View>

                <View
              
                  className="space-x-4 py-2 flex flex-row justify-evenly items-center"
                >
                  {options.map((option,i) => {
                    return (
                      <TouchableOpacity key={i} onPress={ () => setOptionState(option)} className={`rounded-xl p-2 ${optionState === option ? 'bg-purple-400': ''}`}>
                        <Text className={` ${optionState ? 'text-red': 'text-green'} text-[16px] font-light `}>{option}</Text>
                      </TouchableOpacity>
                    )
                  })}
                </View>
                
                <View className="pt-4">
                  
                  <SubItems 
                    products = {cate.products}
                    
                  />
                </View>
              </View>
            )
          })}
        </View>
      </View>
    </SafeAreaView>
  )
}

export default Category

const styles = StyleSheet.create({})