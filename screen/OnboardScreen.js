import { StyleSheet, Text, View, SafeAreaView, Image, StatusBar } from 'react-native'
import React from 'react'
import Onboarding from 'react-native-onboarding-swiper';
import { TouchableOpacity } from 'react-native';

const Done = ({...props}) => (
    <TouchableOpacity className="mx-8" {...props}>
        <Text className="font-bold text-8 text-sm text-black">Done</Text>
    </TouchableOpacity>
)

const Dot = ({ selected }) => {
    let backgroundColor;

    backgroundColor = selected ? 'black' : 'gray-500'

    return (
        <View className={`w-2 h-2 mx-1 rounded ${selected ? 'bg-[#46DE99]' : 'bg-gray-400'}`}/>
    )
}

const OnboardScreen = ({navigation}) => {
  return (
    <SafeAreaView className='flex-1 bg-[#F6FFF6]'>
        <StatusBar/>
        <Onboarding
            onSkip={() => navigation.navigate('homepage')}
            onDone={() => navigation.navigate('homepage')}
            DoneButtonComponent={Done}
            DotComponent={Dot}
            bottomBarColor='#F6FFF6'
            pages={[
                {
                    backgroundColor: '#F6FFF6',
                    image: <Image source={require('../assets/os1.png')} />,
                    title: 'Choose Your Favorite Drink',
                    subtitle: 'Find your favorite drink anytime from your existing location easily ',
                },
                {
                    backgroundColor: '#F6FFF6',
                    image: <Image source={require('../assets/os2.png')} />,
                    title: 'Refresh Yourself with a Drink ',
                    subtitle: 'Be it a game night or long day after office we are always there to refresh you',
                },
                {
                    backgroundColor: '#F6FFF6',
                    image: <Image source={require('../assets/os3.png')} />,
                    title: 'Fastest Delivery Ever',
                    subtitle: 'Because chilled drinks are always better',
                },
                
            ]}
        />
    </SafeAreaView>
  )
}

export default OnboardScreen

