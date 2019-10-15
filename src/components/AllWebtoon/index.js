import React from 'react';
import {
   View,
   Text,
   ScrollView
} from 'react-native';


import List from "../List";

import styles from './style.js';

function AllWebtoon({items,navigation}) {
   return (
      <View style={styles.container}>
         <Text style={styles.title}>Top Scifi</Text>

         <View style={styles.content}>
            {
               items.map((item,index) => {
                  return (
                        <List withButton key={item.id} navigation={navigation} {...item} />
                  )
               })
            }
         </View>
      </View>
   )
}

export default AllWebtoon;
