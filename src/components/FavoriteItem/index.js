import React from 'react';

import {
   View,
   Image,
   Text,
   TouchableOpacity
} from 'react-native';

function FavoriteItem({image,title}) {
   return  (
      <TouchableOpacity>
      <View style={{width:130,height:130,borderColor:'#dddddd',borderWidth:0.5}}>
         <View style={{flex:2}}>
            <Image
               source={{uri:image}}
               style={{flex:1,width:null,height:null,resizeMode:'cover'}}
            />
         </View>
         <View style={{flex:1,paddingLeft:10,paddingTop:10}}>
            <Text>{title}</Text>
            </View>
      </View>
      </TouchableOpacity>
   )
}

export default FavoriteItem;
