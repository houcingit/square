import React from 'react';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Image} from 'react-native';
import {colors, icons} from '../constants';
import {Home, Liked, Profile, Cart} from '../screens';

// creates the bottom tab
const Tab = createBottomTabNavigator();

// create icon and change style on press
const tabIcon = (focused, icon) => {
  return (
    <Image
      source={icon}
      resizeMode="contain"
      style={{
        tintColor: focused ? colors.RED : colors.GREY,
      }}
    />
  );
};

//buttom tabs
const Tabs = () => {
  return (
    <Tab.Navigator screenOptions={{tabBarShowLabel: false, headerShown: false}}>

      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({focused}) => tabIcon(focused, icons.home),
        }}
      />
      <Tab.Screen
        name="Liked"
        component={Liked}
        options={{
          tabBarIcon: ({focused}) => tabIcon(focused, icons.heart),
          tabBarBadge:2,
          tabBarBadgeStyle:{backgroundColor:colors.RED,color:colors.WHITE}
        }}
      />
      <Tab.Screen
        name="Cart"
        component={Cart}
        options={{
          tabBarIcon: ({focused}) => tabIcon(focused, icons.bag),
          tabBarBadge:1,
          tabBarBadgeStyle:{backgroundColor:colors.RED,color:colors.WHITE}
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({focused}) => tabIcon(focused, icons.profile),
        }}
      />
    </Tab.Navigator>
  );
};

export default Tabs;
