


import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import{
   createAppContainer,
   createSwitchNavigator
} from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import  { createBottomTabNavigator } from 'react-navigation-tabs';
//screens
import Login from '../../screens/Login';
import ForYou from '../../screens/ForYou';
import Favorite from '../../screens/Favorite';
import Profile from '../../screens/Profile';

const PublicNavigation = createStackNavigator({
   Login: {
      screen: Login,
      navigationOptions: {
         header: null,
      },
   },
});


const PrivateNavigation = createBottomTabNavigator(
   {
      ForYou: {
         screen: ForYou,
         navigationOptions: {
            header: null,
            tabBarLabel: 'For You',
            tabBarIcon: ({tintColor}) => (
               <Icon name="th-large" color={tintColor} size={25} />
            ),
         },
      },
      Favourite: {
         screen: Favorite,
         navigationOptions: {
            header: null,
            tabBarLabel: 'Favorite',
            tabBarIcon: ({tintColor}) => (
               <Icon name="heart" color={tintColor} size={25} />
            ),
         },
      },
      Profile: {
         screen: Profile,
         navigationOptions: {
            header: null,
            tabBarLabel: 'Profile',
            tabBarIcon: ({tintColor}) => (
               <Icon name="user" color={tintColor} size={25} />
            ),
         },
      },
   },
   {
      tabBarOptions: {
         activeTintColor: '#00b900',
         inactiveTintColor: '#ccc',
         labelStyle: {
            fontSize: 12,
         },
         style: {
            backgroundColor: '#ffffff',
            borderTopWidth: 0,
         },
      },
   },
);

const RootNav = createSwitchNavigator({
   PrivateNavigation: PrivateNavigation,
   PublicNavigation: PublicNavigation,
});

export default createAppContainer(RootNav);
