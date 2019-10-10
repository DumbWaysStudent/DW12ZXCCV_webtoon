import React from 'react';
import {
   View,
   Text
} from 'react-native';

import {
   Header,
   Body,
   Right,
   Left
} from 'native-base';

import Icon from 'react-native-vector-icons/FontAwesome';

import ImageProfile from '../../components/ImageProfile';
import { BORDER_COLOR } from '../../config/constant';
function Profile(props) {
   return (
      <>
         <View style={{flex:3,backgroundColor:'#F8F8F8'}}>
            <ImageProfile />
         </View>
         <View style={{flex:4,borderWidth:0.3,borderColor:BORDER_COLOR}}>
            <View style={{height:60,justifyContent:'center',padding:20,borderWidth:0.3,borderColor:BORDER_COLOR}}>
               <Text>MY WEBTOON CREATION</Text>
               <Icon type="FontAwesome" name="chevron-right" style={{position:'absolute',right:20,fontSize:20}} />
            </View>
            <View style={{height:60,justifyContent:'center',padding:20,borderWidth:0.3,borderColor:BORDER_COLOR}}>
               <Text>Logout</Text>
            </View>
         </View>
      </>
   )
}




export default Profile;
