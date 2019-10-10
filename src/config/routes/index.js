import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import{
   createAppContainer,
   createSwitchNavigator
} from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import  { createBottomTabNavigator } from 'react-navigation-tabs';
import {
   TouchableOpacity,
   Share
} from 'react-native';
//screens
import Login from '../../screens/Login';
import ForYou from '../../screens/ForYou';
import Favorite from '../../screens/Favorite';
import Profile from '../../screens/Profile';
import Detail from '../../screens/Detail';
import DetailEpisode from '../../screens/DetailEpisode';

import {
   handleShare
} from '../../helpers';

const PublicNavigation = createStackNavigator({
   Login: {
      screen: Login,
      navigationOptions: {
         header: null,
      },
   },
});


const BottomNavigation = createBottomTabNavigator(
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
      Favorite: {
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

const PrivateNavigation = createStackNavigator({
   BottomNavigation : {
      screen : BottomNavigation,
      navigationOptions : {
         header : null
      }
   },

   Detail : {
      screen : Detail,
      navigationOptions : ({navigation}) => {
         const {navigate,getParam} = navigation
         const title = getParam('title')

         return {
            headerTitle : title,
            headerTitleStyle: {
               fontSize: 18,
               fontWeight : 'bold'
            },
            headerRight: <Icon type="FontAwesome" name="share-alt" style={{marginRight:30,fontSize:20}} onPress={handleShare} />,
         }

      }
   },
   DetailEpisode : {
      screen : DetailEpisode,
      navigationOptions : ({navigation}) => {
         const {navigate,getParam} = navigation
         const title = getParam('title')

         return {
            headerTitle : title,
            headerTitleStyle: {
               fontSize: 18,
               color : 'white',
               fontWeight : 'bold'
            },
            headerTintColor: '#fff',
            headerStyle : {
               backgroundColor : 'black'
            },
            headerRight: <Icon type="FontAwesome" name="share-alt" style={{marginRight:30,fontSize:20,color:'whitesmoke'}} onPress={handleShare} />,
         }

      }
    }
})

const RootNav = createSwitchNavigator({
   PrivateNavigation: PrivateNavigation,
   PublicNavigation: PublicNavigation,
});

export default createAppContainer(RootNav);
