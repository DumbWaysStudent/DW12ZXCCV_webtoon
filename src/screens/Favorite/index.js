
import React from 'react';
import {
   View,
   Text,
   TouchableOpacity,
   FlatList,
   ScrollView,
   Image
} from 'react-native';

// import component
import Search from '../../components/Search';
import List from '../../components/List';

import Icon from 'react-native-vector-icons/AntDesign';


// import constant
import {
   BORDER_COLOR,
   BORDER_WIDTH,
   PRIMARY_COLOR,
   TITLE_SIZE
} from '../../config/constant';
// import dummy data
import {dataSource} from '../../config/data.js';

function ListMyFavorite({image,title,sumFavorite}) {
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
      <Icon name="hearto" style={{color:PRIMARY_COLOR,marginTop:10}}> {sumFavorite} Eps</Icon>
    </View>
    </View>
    </TouchableOpacity>
  )
}

function Favorite({navigation}) {
   return (
      <View style={{flex:1}}>
         <View style={{flex:1,borderColor:BORDER_COLOR,borderWidth:BORDER_WIDTH,flexDirection:'row'}}>
            <View style={{flex:2,justifyContent:'center'}}>
              <Text style={{fontWeight:'bold',fontSize:20,marginLeft:18}}>My Favorite</Text>
            </View>
            <View style={{flex:1,justifyContent:'center'}}>
                <Icon name="search1" style={{textAlign:'right',marginRight:18,fontSize:20}} />
            </View>
         </View>
         <View style={{flex:7}}>
            <FlatList
               data={dataSource}
               renderItem={({item}) =>  <ListMyFavorite key={item.id} {...item} />}
               keyExtractor={item => item.id.toString()}
            />
         </View>

      </View>
   )
}

export default Favorite;
