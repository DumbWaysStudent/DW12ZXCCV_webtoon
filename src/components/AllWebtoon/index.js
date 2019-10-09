import React from 'react';
import {
   View,
   Text,
} from 'react-native';

import AllWebtoonItem from "../AllWebtoonItem";


function AllWebtoon({items}) {
   return (
      <View style={{flex:1,paddingHorizontal:18,paddingTop:18}}>
         <Text style={{fontSize:24,fontWeight:'bold'}}>All</Text>

         <View style={{flex:1,marginTop:18,paddingBottom:20}}>
            {
               items.map((item,index) => {
                  return (
                     <AllWebtoonItem key={index} {...item} />
                  )
               })
            }
         </View>

      </View>
   )
}

export default AllWebtoon;
