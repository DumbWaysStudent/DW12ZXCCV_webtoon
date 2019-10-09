
import React,{useState} from 'react';
import {
   View,
   Text,
   Button,
   Image,
   FlatList
} from 'react-native';

import  {
   Container,
   Content
} from 'native-base'

import Episode from '../../components/Episode';

const initialEpisode = [
   {id:1,title : '[Season 1] Ep.04',popularity : '36.666',date: '8 Oktober 2019',image : 'https://swebtoon-phinf.pstatic.net/20191008_258/1570511686428FSeFJ_PNG/thumb_1570511653263174546.png?type=q90'},
   {id:2,title : '[Season 1] Ep.03',popularity : '43.666',date: '9 Oktober 2019',image : 'https://swebtoon-phinf.pstatic.net/20190918_285/1568795186298Pvkj3_JPEG/1568795186270174535.jpg?type=q90'},
   {id:3,title : '[Season 1] Ep.05',popularity : '14.666',date: '10 Oktober 2019',image : 'https://swebtoon-phinf.pstatic.net/20190918_134/15687950605730w5xh_JPEG/1568795060541174527.jpg?type=q90'},
   {id:4,title : '[Season 1] Ep.06',popularity : '12.666',date: '11 Oktober 2019',image : 'https://swebtoon-phinf.pstatic.net/20190918_222/15687949197163IWYx_JPEG/1568794919667174519.jpg?type=q90'},
   {id:5,title : '[Season 1] Ep.06',popularity : '12.666',date: '11 Oktober 2019',image : 'https://swebtoon-phinf.pstatic.net/20190918_222/15687949197163IWYx_JPEG/1568794919667174519.jpg?type=q90'},
]


function Detail({navigation}) {
   const {getParam} = navigation
   const imageBanner = getParam('image');


   const [episode,setEpisode] = useState(initialEpisode);

   return(
      <View style={{flex:1}}>
      <View style={{flex:2}}>
         <Image
         source={{uri:imageBanner}}
         style={{height:200}}
         />
      </View>
      <View style={{flex:1}}></View>
      <View style={{flex:5,marginTop:20}}>
         <FlatList
           data={episode}
           renderItem={({ item }) => <Episode key={item.id} {...item}  />}
           keyExtractor={item => item.id}
         />
      </View>
      </View>
   )
}

export default Detail;
