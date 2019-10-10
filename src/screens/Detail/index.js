
import React,{useState} from 'react';
import {
   View,
   Text,
   Button,
   Image,
   FlatList,
   ScrollView
} from 'react-native';

import  {
   Container,
   Content
} from 'native-base'

import Episode from '../../components/Episode';

import {dataEpisode} from '../../config/data.js';



function Detail({navigation}) {
   const {getParam} = navigation
   const imageBanner = getParam('image');



   return(
      <ScrollView>
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
           data={dataEpisode}
           renderItem={({ item }) => <Episode key={item.id} {...item} navigation={navigation}  />}
           keyExtractor={item => item.id.toString()}
           scrollEnabled={false}
         />
      </View>
      </View>
      </ScrollView>
   )
}

export default Detail;
