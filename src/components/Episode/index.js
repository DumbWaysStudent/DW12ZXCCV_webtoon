import React from 'react';

import {
   View,
   Image,
   Text,
   TouchableOpacity
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import {
  PRIMARY_COLOR,
  BORDER_WIDTH,
  BORDER_COLOR
} from '../../config/constant';

function Episode({title,image,name,popularity,episode,date,navigation}) {
   return (
      <TouchableOpacity onPress={() => navigation.navigate('DetailEpisode',{title})}>
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
               <Icon type="FontAwesome" name="heart-o" style={{color:PRIMARY_COLOR,marginTop:15}}> {popularity} </Icon>
               <Text style={{marginTop:12,marginLeft:20,color:'#666'}}>{date}</Text>
            </View>
         </View>
      </View>
      </TouchableOpacity>
   )
}

export default Episode;
