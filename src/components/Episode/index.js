import React from 'react';

import {
   View,
   Image,
   Text,
   TouchableOpacity
} from 'react-native';

import {
  BORDER_WIDTH,
  BORDER_COLOR
} from '../../config/constant';
import  moment from 'moment'
function Episode({title,image,createdAt,navigation,id,webtoon_id}) {
   return (
      <TouchableOpacity onPress={() => navigation.navigate('EditEpisode',{webtoon_id,title,image,id})}>
      <View style={{flex:1,height:80,flexDirection:'row'}}>
         <View style={{flex:1.5}}>
            <Image
               source={{uri:image}}
               style={{width:'100%',height:'100%'}}
             />
         </View>
         <View style={{flex:5,padding:15,borderWidth:BORDER_WIDTH,borderColor:BORDER_COLOR}}>
         <Text style={{fontSize:16}}>{title}</Text>
            <View style={{flex:1,flexDirection:'row'}}>
               <Text style={{marginTop:12,color:'#666'}}>{moment(createdAt).format('DD MMMM YYYY')}</Text>
            </View>
         </View>
      </View>
      </TouchableOpacity>
   )
}

export default Episode;
