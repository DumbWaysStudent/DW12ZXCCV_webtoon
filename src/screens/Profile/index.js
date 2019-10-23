import React from 'react';
import {
   View,
   Text,
   TouchableOpacity
} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import AsyncStorage from '@react-native-community/async-storage';
import ImageProfile from '../../components/ImageProfile';
import { BORDER_COLOR,TITLE_PRIMARY } from '../../config/constant';

function Profile({navigation}) {
   const handleLogout = async () => {
      await AsyncStorage.removeItem('userData',(err) => {
         if (err) throw err
         navigation.navigate('Login')
      })
   }
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
                  <Text style={{fontSize:TITLE_PRIMARY}}>MY WEBTOON CREATION</Text>
                  <Icon type="FontAwesome" name="right" style={{position:'absolute',right:20,fontSize:20,color:'#666'}} />
               </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={handleLogout}>
            <View style={{height:60,justifyContent:'center',padding:20,borderWidth:0.3,borderColor:BORDER_COLOR}}>
               <Text style={{fontSize:TITLE_PRIMARY}}>LOGOUT</Text>
            </View>
            </TouchableOpacity>
         </View>
      </>
   )
}




export default Profile;
