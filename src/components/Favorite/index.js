import React,{useState} from 'react';
import {
   View,
   Text,
   ScrollView,
   Image,
   FlatList
} from 'react-native';

import FavoriteItem from '../FavoriteItem';


function Favorite({items}) {
   const [favoriteItem,setFavoriteItem] = useState(items);
   return (
      <View>
         <ScrollView
            scrollEventThrottle={16}
         >
         <View style={{flex:1,paddingHorizontal:18,paddingTop:18}}>
            <Text style={{fontSize:24,fontWeight:'bold'}}>Favourite</Text>
            <View style={{height:130,marginTop:20}}>
               <ScrollView
                  horizontal={true}
                  showsHorizontalScrollIndicator={false}
               >
               {
                  favoriteItem.map((item,index) => {
                     return  (
                           <FavoriteItem key={index} {...item} />
                     )
                  })
               }
               </ScrollView>
            </View>
         </View>
         </ScrollView>
      </View>
   )
}

export default Favorite;
