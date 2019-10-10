
import React from 'react';
import {
   View,
   Text
} from 'react-native';

// import component
import Search from '../../components/Search';
import List from '../../components/List';

// import constant
import {
   BORDER_COLOR,
   BORDER_WIDTH
} from '../../config/constant';
// import dummy data
import {dataSource} from '../../config/data.js';

function Favorite({navigation}) {
   return (
      <View style={{flex:1}}>
         <View style={{flex:3}}>
            <Search />
         </View>
         <View style={{flex:21,padding:18}}>
            {
               dataSource.map((item,index) => {
                  return (
                     <List key={index} navigation={navigation} {...item} />
                  )
               })
            }
         </View>
      </View>
   )
}

export default Favorite;
