import React from 'react';
import {
   View,
   Text,
} from 'react-native';

import List from "../List";


function AllWebtoon({items,navigation}) {
   return (
      <View style={{flex:1,paddingHorizontal:18,paddingTop:18}}>
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
