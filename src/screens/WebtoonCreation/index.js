import React from 'react';
import {
   View,
   Text,
   FlatList,
   TouchableOpacity
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import List from '../../components/List';
import {dataSource} from '../../config/data'
import { PRIMARY_COLOR } from '../../config/constant';

function WebtoonCreation({navigation}) {
   return (
      <View style={{flex:1}}>
         <FlatList
            data={dataSource}
            renderItem={({item}) => <List key={item.id} {...item} withSumEpisode />}
            keyExtractor={item => item.id.toString()}
         />
         <View style={{width:60,height:60,backgroundColor:PRIMARY_COLOR,borderRadius:30,alignItems:'center',justifyContent:'center',position:'absolute',bottom:20,right:20}}>
            <Icon type="FontAwesome"  name="plus" style={{fontSize:30,color:'whitesmoke'}} onPress={() => navigation.navigate('CreateWebtoon')} />
         </View>
      </View>
   )
}

export default WebtoonCreation;
