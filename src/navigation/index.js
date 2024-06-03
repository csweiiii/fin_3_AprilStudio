import React, { useState } from 'react';
import { NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


import AccountScreen from '../screens/AccountScreen';
import LoginScreen from '../screens/LoginScreen';
import SettingsScreen from '../screens/SettingsScreen';
import DisplaySettingScreen from '../screens/DisplaySettingScreen';

import DayIntro from '../screens/DayIntro';
import OatIntro from '../screens/OatIntro';
import AutumnIntro from '../screens/AutumnIntro';
import PlaygroundIntro from '../screens/PlaygroundIntro';
import SyokudouIntro from '../screens/SyokudouIntro';

import ShopScreen from '../screens/ShopScreen';
import ChangeScreen from '../screens/ChangeScreen';
import ArticleScreen from '../screens/ArticleScreen';
import IdeasScreen from '../screens/IdeasScreen';
import LikeScreen from '../screens/LikeScreen';
import HomeScreen from '../screens/HomeScreen';
import MyTheme from '../theme';
import { useSelector } from 'react-redux';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <MyTabs/>
    </NavigationContainer>
  );
};

const MyTabs = () => { 
  const isDarkMode = useSelector(state => state.theme.isDarkMode);
  const tabBarInactiveTintColor = isDarkMode ? '#888888' : '#CCCCCC'; 
  const tabBarActiveTintColor = isDarkMode ? '#FFFFFF' : '#708090'; 
  const tabBarBackgroundColor = isDarkMode ? '#696969' : '#FFFFFF'; 

  return (
    <Tab.Navigator
      initialRouteName="HomeStack"
      screenOptions={{
        tabBarInactiveTintColor: tabBarInactiveTintColor,
        tabBarActiveTintColor: tabBarActiveTintColor,
        tabBarStyle: {
          backgroundColor: tabBarBackgroundColor, 
        }
      }}
    >
      <Tab.Screen
        name="HomeStack"
        component={HomeStack} 
        options={{
          headerShown: false,
          title: "Home",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }}
      />
      
      <Tab.Screen
        name="IdeaStack"
        component={IdeasStack}
        options={{
          headerShown: false,
          title: "Ideas",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="lightbulb" color={color} size={26} />
          ),
        }}       
      />     
      <Tab.Screen
        name="LikeStack"
        component={LikeStack}
        options={{
          headerShown: false,
          title: "Like",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="heart" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="SettingsStack"
        component={SettingsStack}
        options={{
          headerShown: false,
          title: "Settings",
          headerTitleStyle: {
            fontWeight: '400',
            fontSize: 20
          },
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="cog" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const SettingsStack = ({ navigation }) => {
  const isDarkMode = useSelector(state => state.theme.isDarkMode);
  const headerTintColor = isDarkMode ? '#000000' : '#000000'; 

  return (
    <Stack.Navigator
      screenOptions={{
        headerTintColor: headerTintColor,
      }}
    >
      <Stack.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          title: "Settings",
          headerTitleStyle: {
            fontWeight: '400',
            fontSize: 20
          },
        }}
      />
      <Stack.Screen
        name="DisplaySetting"
        component={DisplaySettingScreen}
        options={{
          title: "",
          headerTitleStyle: {
            fontWeight: '400',
            fontSize: 20
          },
        }}
      />
      <Stack.Screen
        name="Account"
        component={AccountScreen}
        options={{
          
          title: "",
          headerTitleStyle: {
            fontWeight: '400',
            fontSize: 20
          },
        }}
      />
      <Stack.Screen
        name="LoginScreen" 
        component={LoginScreen}
        options={{
          title: "",
          headerTitleStyle: {
            fontWeight: '400',
            fontSize: 20
          },
        }}
      />
    </Stack.Navigator>
  );
}

const HomeStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerShown: false,
        }}
      />
      
      <Stack.Screen
        name="Article"
        component={ArticleScreen}
        options={{
          headerShown: false
        }}
      />
       <Stack.Screen
        name="Shop"
        component={ShopScreen}
        options={{
          headerShown: false
        }}
      />
       <Stack.Screen
        name="Change"
        component={ChangeScreen}
        options={{
          headerShown: false
        }}
      /> 
      
    </Stack.Navigator>
  );
};

const IdeasStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Idea"
        component={IdeasScreen}
        options={{
          headerShown: false
        }}
      />
      <Stack.Screen
        name="DayIntro"
        component={DayIntro}
        options={{
          headerShown: false
        }}
      />
      <Stack.Screen
        name="OatIntro"
        component={OatIntro}
        options={{
          headerShown: false
        }}
      />
      <Stack.Screen
        name="AutumnIntro"
        component={AutumnIntro}
        options={{
          headerShown: false
        }}
      />
      <Stack.Screen
        name="PlaygroundIntro"
        component={PlaygroundIntro}
        options={{
          headerShown: false
        }}
      />
      <Stack.Screen
        name="SyokudouIntro"
        component={SyokudouIntro}
        options={{
          headerShown: false
        }}
      />
    </Stack.Navigator>
  );
};

const LikeStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Like"
        component={LikeScreen}
        options={{
          headerShown: false
        }}
      />
      <Stack.Screen
        name="DayIntro"
        component={DayIntro}
        options={{
          headerShown: false
        }}
      />
      <Stack.Screen
        name="OatIntro"
        component={OatIntro}
        options={{
          headerShown: false
        }}
      />
      <Stack.Screen
        name="AutumnIntro"
        component={AutumnIntro}
        options={{
          headerShown: false
        }}
      />
      <Stack.Screen
        name="PlaygroundIntro"
        component={PlaygroundIntro}
        options={{
          headerShown: false
        }}
      />
      <Stack.Screen
        name="SyokudouIntro"
        component={SyokudouIntro}
        options={{
          headerShown: false
        }}
      />
    </Stack.Navigator>
  );
};

export default Navigation;