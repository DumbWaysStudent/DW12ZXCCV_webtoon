


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

import BottomNavigator from './BottomNavigator';

//screens
import Login from '../../screens/Login';
import Detail from '../../screens/Detail';
import DetailEpisode from '../../screens/DetailEpisode';
import WebtoonCreation from '../../screens/WebtoonCreation';
import CreateWebtoon from '../../screens/CreateWebtoon';
import EditWebtoon from '../../screens/EditWebtoon';
import CreateEpisode from '../../screens/CreateEpisode';
import EditEpisode from '../../screens/EditEpisode';
// import helper and constant
import { handleShare } from '../../helpers';
import  { PRIMARY_COLOR } from '../../config/constant';

const WebtoonStack = createStackNavigator({
  WebtoonCreation : {
    screen : WebtoonCreation,
    navigationOptions : ({navigation}) => {
      return {
        headerTitle : 'My Webtoon',
      }
    }
  },

  CreateWebtoon : {
    screen : CreateWebtoon,
    navigationOptions : ({navigation}) => {
      return {
        headerTitle : 'Create Webtoon',
        headerRight: <Icon type="FontAwesome" name="check" style={{marginRight:30,fontSize:20,color:PRIMARY_COLOR}} onPress={ () => navigation.navigate('WebtoonCreation') }  />,
      }
    }
  },
  EditWebtoon : {
    screen : EditWebtoon,
    navigationOptions : ({navigation}) => {
      return {
        headerTitle : 'Edit Webtoon ',
        headerRight: <Icon type="FontAwesome" name="check" style={{marginRight:30,fontSize:20,color:PRIMARY_COLOR}} onPress={ () => navigation.navigate('WebtoonCreation') }  />,
      }
    }
  },
  Detail : {
    screen : Detail,
    navigationOptions : {
      header : null
    }
  },
});

const EpisodeStack = createStackNavigator({
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
        headerLeft: <Icon  name="arrowleft" style={{marginLeft:18,fontSize:20,color:'whitesmoke'}} onPress={() => navigation.goBack(null)} />,
        headerRight: <Icon type="FontAwesome" name="sharealt" style={{marginRight:30,fontSize:20,color:'whitesmoke'}} onPress={handleShare} />
      }
    }
  },
  CreateEpisode : {
    screen : CreateEpisode,
    navigationOptions : ({navigation}) => {
      return {
        headerTitle : 'Create Episode',
        headerRight: <Icon type="FontAwesome" name="check" style={{marginRight:30,fontSize:20,color:PRIMARY_COLOR}} onPress={ () => navigation.goBack(null) }  />,
      }
    }
  },
  EditEpisode : {
    screen : EditEpisode,
    navigationOptions : ({navigation}) => {
      return {
        headerTitle : 'Edit Episode',
        headerRight: <Icon type="FontAwesome" name="check" style={{marginRight:30,fontSize:20,color:PRIMARY_COLOR}} onPress={ () => navigation.goBack(null) }  />,
      }
    }
  }
});

const PublicNavigation = createStackNavigator({
  Login: {
    screen: Login,
    navigationOptions: {
      header: null,
    },
  },
});

const PrivateNavigation = createStackNavigator({
  BottomNavigation : {
    screen : BottomNavigator,
    navigationOptions : {
      header : null
    }
  },

  Webtoon  : {
    screen: WebtoonStack,
    navigationOptions  : {
      header: null
    }
  },

  Episode : {
    screen : EpisodeStack,
    navigationOptions : {
      header : null
    }
  }
})

const RootNav = createSwitchNavigator({
  PrivateNavigation: PrivateNavigation,
  PublicNavigation: PublicNavigation,
});


export default createAppContainer(RootNav);
