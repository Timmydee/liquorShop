import React from 'react';
import 'react-native-url-polyfill/auto';
import Ionicons from 'react-native-vector-icons/Ionicons';


import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeScreen from './screen/HomeScreen';
import OnboardScreen from './screen/OnboardScreen';
import SplashScreen from './screen/SplashScreen';
import MainHome from './components/MainHome';
import Delivery from './screen/Delivery';
import Profile from './screen/Profile';
import Category from './components/Category';
import ProductInfo from './components/ProductInfo';
import Order from './screen/Order';

import { store } from './store'
import { Provider } from 'react-redux';


const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function HomeTabs() {
  return(
    <Tab.Navigator      
      screenOptions={({ route }) => ({
        headerShown:false,
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === 'home') {
            iconName = focused
              ? 'home-outline'
              : 'home-outline';
          } else if (route.name === 'product') {
            iconName = focused ? 'cart-outline' : 'cart-outline';
          } else if (route.name === 'deliver') {
            iconName = focused ? 'cash-outline' : 'cash-outline';
          } else if (route.name === 'profile') {
            iconName = focused ? 'man-outline' : 'man-outline';
          }

          // Return any component here
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'green',
        tabBarInactiveTintColor: 'gray',
      })
      
    }
    >
      <Tab.Screen name="home" component={HomeScreen} />
      <Tab.Screen name="product" component={Order} />
      <Tab.Screen name="deliver" component={Delivery} />
      <Tab.Screen name="profile" component={Profile} />
    </Tab.Navigator>
  )
}

export default function App() {
  return (
    <NavigationContainer>
      <Provider store={store}>
        <Stack.Navigator initialRouteName="splash" screenOptions={{ headerShown: false }}>
          <Stack.Screen name="splash" component={SplashScreen} options={{headerShown: false}} />
          <Stack.Screen name="onboard" component={OnboardScreen} options={{headerShown: false}} />
          <Stack.Screen options={{headerShown:false, backgroundColor:"#D3D2D2"}} name="homepage" component={HomeTabs} />
          <Stack.Screen name="category" component={Category} options={{headerShown: false}} />
          <Stack.Screen name="productInfo" component={ProductInfo} options={{headerShown: false}} />
          <Stack.Screen name="order" component={Order} options={{headerShown: false}} />
        </Stack.Navigator>
      </Provider>
    </NavigationContainer>
  );
}

