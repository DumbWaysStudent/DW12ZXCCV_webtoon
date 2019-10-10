import React from 'react';
import {
   TouchableOpacity,
   View,
   Text
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'

// import constant
import { PRIMARY_COLOR } from '../../config/constant';


function ButtonFavorite () {
   return (
      <TouchableOpacity>
         <View style={{width:120,height:30,backgroundColor:PRIMARY_COLOR,marginTop:10,borderRadius:3,alignItems:'center',justifyContent:'center'}}>
            <Text style={{color:'white',fontWeight:'bold'}}>
               <Icon type="FontAwesome" name="plus" /> Add To Favorit
               </Text>
            </View>
      </TouchableOpacity>
   )
}

export default ButtonFavorite;
