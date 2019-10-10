import React from 'react';
import {
   View,
   Text,
   TouchableOpacity
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import ImageProfile from '../../components/ImageProfile';
import { BORDER_COLOR } from '../../config/constant';
function Profile({navigation}) {
   return (
      <>
         <View style={{flex:3,backgroundColor:'#F8F8F8'}}>
            <View style={{flex:3,backgroundColor:'#F8F8F8'}}>
               <View style={{flex:4,alignItems:'center'}}>
                  <ImageProfile />
               </View>
               <View style={{flex:3,alignItems:'center'}}>
                  <Text style={{fontSize:16}}>AHMAD HAIDAR ALBAQIR</Text>
               </View>
            </View>
         </View>
         <View style={{flex:4,borderWidth:0.3,borderColor:BORDER_COLOR}}>
            <TouchableOpacity onPress={() => navigation.navigate('WebtoonCreation')}>
               <View style={{height:60,justifyContent:'center',padding:20,borderWidth:0.3,borderColor:BORDER_COLOR}}>
                  <Text>MY WEBTOON CREATION</Text>
                  <Icon type="FontAwesome" name="chevron-right" style={{position:'absolute',right:20,fontSize:20}} />
               </View>
            </TouchableOpacity>
            <View style={{height:60,justifyContent:'center',padding:20,borderWidth:0.3,borderColor:BORDER_COLOR}}>
               <Text>Logout</Text>
            </View>
         </View>
      </>
   )
}




export default Profile;
