import React from 'react';

import {
   View,
   Image,
   Text,
   TouchableOpacity
} from 'react-native';

import {PRIMARY_COLOR} from '../../config/constant'

import Icon from 'react-native-vector-icons/FontAwesome';

function FavoriteItem({image,title,navigation,genre,popularity}) {
   return  (
      <TouchableOpacity onPress={() => navigation.navigate('Detail',{title,image})}>
      <View style={{width:130,height:140,paddingBottom:20}}>
         <View style={{flex:2}}>
            <Image
               source={{uri:image}}
               style={{flex:1,width:null,height:null,resizeMode:'cover',borderRadius:3}}
            />
         </View>
         <View style={{flex:1,paddingLeft:10,paddingTop:10}}>
            <Text style={{fontSize:10,color:'silver'}}>{genre}</Text>
            <Text style={{fontSize:13}}>{title}</Text>
            <Text style={{fontSize:12,marginTop: 10,marginLeft:20,color:PRIMARY_COLOR}} >
               <Icon type="FontAwesome" name="heart" /> {popularity}
            </Text>
         </View>
      </View>
      </TouchableOpacity>
   )
}

export default FavoriteItem;
