import React,{useState} from 'react';
import {
   View,
   Text,
   ScrollView,
   Image,
   FlatList
} from 'react-native';

import Card from '../Card';


function Favorite({items,navigation}) {
   const [favoriteItem,setFavoriteItem] = useState(items);
   return (
      <View>
         <ScrollView
            scrollEventThrottle={16}
         >
         <View style={{flex:1,paddingHorizontal:18,paddingTop:18}}>
            <Text style={{fontSize:24,fontWeight:'bold'}}>Favourite</Text>
            <View style={{height:160,marginTop:20}}>
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
         </ScrollView>
      </View>
   )
}

export default Favorite;
