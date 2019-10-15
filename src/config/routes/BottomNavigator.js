
import React from 'react';
import Icon from 'react-native-vector-icons/AntDesign';
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

import ForYou from '../../screens/ForYou';
import Favorite from '../../screens/Favorite';
import Profile from '../../screens/Profile';
import EditProfile from '../../screens/EditProfile';

import  { PRIMARY_COLOR } from '../../config/constant';


const ForYouStack  = createStackNavigator({
  ForYou :  {
    screen : ForYou,
    navigationOptions : {
      header: null
    }
  }
});

const FavoritStack = createStackNavigator({
  Favorite : {
    screen : Favorite,
    navigationOptions : {
      header: null
    }
  }
});


const ProfileStack = createStackNavigator({
  Profile : {
    screen : Profile,
    navigationOptions : ({navigation}) => {
      return {
        headerTitle : 'Profile',
        headerRight: <Icon name="edit" style={{marginRight:30,fontSize:20,color:PRIMARY_COLOR}} onPress={() => navigation.navigate('EditProfile')} />,
      }
    }
  },
  EditProfile : {
    screen : EditProfile,
    navigationOptions : ({navigation}) => {
      return {
        headerTitle : 'Edit Profile',
        headerRight: <Icon type="FontAwesome" name="check" style={{marginRight:30,fontSize:20,color:PRIMARY_COLOR}} onPress={ () => navigation.navigate('Profile') }  />,
      }
    }
  }
});

const BottomNavigation = createBottomTabNavigator(
  {
    ForYou: {
      screen: ForYouStack,
      navigationOptions: {
        headerStyle: {
          elevation: 0,
          shadowOpacity: 0,
          borderBottomWidth: 0,
        },
        tabBarLabel: 'For You',
        tabBarIcon: ({tintColor}) => (
          <Icon name="appstore-o" color={tintColor} size={25} />
        ),
      },
    },
    Favorite: {
      screen: FavoritStack,
      navigationOptions: {
        header: null,
        tabBarLabel: 'Favorite',
        tabBarIcon: ({tintColor}) => (
          <Icon name="hearto" color={tintColor} size={25} />
        ),
      },
    },
    Profile: {
      screen: ProfileStack,
      navigationOptions: {
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


export default BottomNavigation;
