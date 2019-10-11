
import React from 'react';
import {
   View,
   Text,
   TouchableOpacity,
   FlatList,
   ScrollView
} from 'react-native';

// import component
import Search from '../../components/Search';
import List from '../../components/List';

import Icon from 'react-native-vector-icons/FontAwesome';


// import constant
import {
   BORDER_COLOR,
   BORDER_WIDTH,
   PRIMARY_COLOR
} from '../../config/constant';
// import dummy data
import {dataSource} from '../../config/data.js';

function Favorite({navigation}) {
   return (
      <View style={{flex:1}}>
         <View style={{flex:1}}>
            <Search />
         </View>
         <View style={{flex:7}}>
            <FlatList
               data={dataSource}
               renderItem={({item}) =>  <List key={item.id} {...item} onPress={ () => navigation.navigate('Detail',{title:item.title,image : item.image})}  />}
               keyExtractor={item => item.id.toString()}
            />
         </View>
         <View style={{width:60,height:60,backgroundColor:PRIMARY_COLOR,borderRadius:30,alignItems:'center',justifyContent:'center',position:'absolute',bottom:20,right:20}}>
            <Icon type="FontAwesome"  name="plus" style={{fontSize:30,color:'whitesmoke'}} onPress={() => navigation.navigate('CreateWebtoon')} />
         </View>
      </View>
   )
}

export default Favorite;
