import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { urlFor } from '../sanity';
import { useNavigation } from '@react-navigation/native';

const SubItems = ({products}) => {
    const navigation = useNavigation()

    const handleProductInfo = (selected) => {
        navigation.navigate('productInfo' , {product: selected})
    }
  return (
    <View>
        {products.map((each,i) => {
            {console.log(each)}

            return(
                <View>
                    <TouchableOpacity 
                        key={i}
                        onPress={() => handleProductInfo(each)}
                        className="flex flex-row items-center border border-gray-300 rounded w-full my-2 px-4 space-x-10"
                    >
                    <Image source={{uri: urlFor(each.image).url()}} className="w-8 h-24" />
                    <View>
                        <Text className="text-[16px] font-bold">{each.name}</Text>
                        <Text className="text-[8px]font-light py-2">{each.short_description}</Text>
                        <Text className="text-[20px] text-[#46DE99] font-medium">${each.price}</Text>
                    </View>
                    </TouchableOpacity>
                </View>
            )
        })}
    </View>
  )
}

export default SubItems

const styles = StyleSheet.create({})