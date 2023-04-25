import { StyleSheet, Text, View, SafeAreaView,Image } from 'react-native'
import React, { useEffect } from 'react'

const WelcomeScreen = ({navigation}) => {
    useEffect( () => {
        setTimeout( () => {
            navigation.replace('onboard')
        }, 2000)
    }, [navigation])
  return (
    <SafeAreaView className='flex-1 bg-green-400'>
      <View className="flex-1 items-center justify-center">
        <Image source={require('../assets/brew-logo.png')}
            className="w-80 h-70"
        />
      </View>
    </SafeAreaView>
  )
}

export default WelcomeScreen

const styles = StyleSheet.create({})