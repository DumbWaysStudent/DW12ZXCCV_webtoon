import React,{useState} from 'react';
import {
   View,
   Text,
   ScrollView,
   Image,
   FlatList
} from 'react-native';

import Card from '../Card';

import {
  TEXT_PRIMARY,
  TEXT_SECONDARY
}  from '../../config/constant';

function Favorite({items,navigation}) {
   const [favoriteItem,setFavoriteItem] = useState(items);
   return (
         <View style={{flex:1}}>
            <Text style={{fontSize:TEXT_PRIMARY,fontWeight:'bold',marginLeft:18,marginTop:15}}>Favorit</Text>
            <View style={{height:170,marginTop:10}}>
               <ScrollView
                  horizontal={true}
                  showsHorizontalScrollIndicator={false}
               >
               {
                  favoriteItem.map((item,index) => {
                     return  (
                           <Card  key={index} {...item} navigation={navigation} />
                     )
                  })
               }
               </ScrollView>
            </View>
         </View>
   )
}

export default Favorite;
