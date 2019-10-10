import React from 'react';
import {
   View,
   Text,
} from 'react-native';

import List from "../List";
import {
   BORDER_COLOR
} from '../../config/constant';


function AllWebtoon({items,navigation}) {
   return (
      <View style={{flex:1,paddingHorizontal:18,paddingTop:18,borderWidth:0.3,borderColor:BORDER_COLOR}}>
         <Text style={{fontSize:24,fontWeight:'bold'}}>All</Text>

         <View style={{flex:1,marginTop:18,paddingBottom:20}}>
            {
               items.map((item,index) => {
                  return (
                     <List withButton key={index} navigation={navigation} {...item} />
                  )
               })
            }
         </View>

      </View>
   )
}

export default AllWebtoon;
