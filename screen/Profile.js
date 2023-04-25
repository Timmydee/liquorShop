import { StyleSheet, Text, View,SafeAreaView, Image } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { SimpleLineIcons } from '@expo/vector-icons';

const Profile = () => {
  return (
    <SafeAreaView className="flex-1">
      <View className="pt-2 mx-4">
        <Text className="font-bold text-4xl">Profile</Text>

        <View className="flex items-center justify-center">
          <Image source={require('../assets/profileImg.png')} className="w-24 h-24" />
          <Text className="font-light text-lg pt-1">Hello,</Text>
          <Text className="font-bold text-lg">Arpit Chandak</Text>
        </View>

        <View>
          <View className="p-4  border border-gray-300 flex flex-row space-x-4 items-center my-3 rounded-xl">
            <SimpleLineIcons name="handbag" size={24} color="#46DE99" />
            <Text className="font-bold text-lg flex-1">My Orders</Text>
            <SimpleLineIcons name="arrow-right" size={24} color="black" />
          </View>

          <Text className='font-normal text-normal py-1'>MANAGEMENT</Text>

          <View className="p-4  border border-gray-300 flex flex-row space-x-4 items-center my-3 rounded-xl">
            <Ionicons name="ios-notifications-outline" size={24} color="#46DE99" />
            <Text className="font-bold text-lg flex-1">Notifications</Text>
            <Ionicons name="ios-toggle" size={24} color="#46DE99" />
          </View>

          <View className="p-4  border border-gray-300 flex flex-row space-x-4 items-center my-3 rounded-xl">
            <Ionicons name="information-circle-outline" size={24} color="#46DE99" />
            <Text className="font-bold text-lg flex-1">My Information</Text>
            <SimpleLineIcons name="arrow-right" size={24} color="black" />
          </View>

          <View className="p-4  border border-gray-300 flex flex-row space-x-4 items-center my-3 rounded-xl">
            <MaterialIcons name="payment" size={24} color="#46DE99" />
            <Text className="font-bold text-lg flex-1">Payment</Text>
            <SimpleLineIcons name="arrow-right" size={24} color="black" />
          </View>

          <Text className='font-normal text-normal py-1'>SUPPORT</Text>


          <View className="p-4  border border-gray-300 flex flex-row space-x-4 items-center my-3 rounded-xl">
            <Ionicons name="help-circle-outline" size={24} color="#46DE99" />
            <Text className="font-bold text-lg flex-1">Help</Text>
            <SimpleLineIcons name="arrow-right" size={24} color="black" />
          </View>

          <View className="p-4  border border-gray-300 flex flex-row space-x-4 items-center my-3 rounded-xl">
            <MaterialIcons name="support-agent" size={24} color="#46DE99" />
            <Text className="font-bold text-lg flex-1">Support</Text>
            <SimpleLineIcons name="arrow-right" size={24} color="black" />
          </View>
        </View>
      </View>
    </SafeAreaView>
  )
}

export default Profile

const styles = StyleSheet.create({})