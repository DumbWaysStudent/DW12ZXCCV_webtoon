
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

import {
  handleShare
} from '../../helpers'

import Icon from 'react-native-vector-icons/AntDesign'

function Detail({navigation}) {
   const {getParam} = navigation
   const imageBanner = getParam('image');
   const title = getParam('title');
   const genre = getParam('genre');
   const desc = getParam('desc');
   return(
      <ScrollView>
      <View style={{flex:1,position:'relative'}}>
      <View style={{flex:2}}>
         <Image
         source={{uri:imageBanner}}
         style={{height:200}}
         />
      </View>
      <View style={{width:'100%',backgroundColor:'black',height:200,left:0,top:0,position:'absolute',opacity:0.5}}>
          <View style={{flex:1,position:'relative'}}>
            <View style={{flex:2,flexDirection:'row'}}>
                <View style={{flex:2,alignItems:'center',justifyContent:'center'}}>
                  <Icon name="arrowleft" style={{fontSize:30,color:'whitesmoke'}} onPress={() => navigation.navigate('ForYou')} />
                </View>
                <View style={{flex:9}}></View>
                <View style={{flex:2,alignItems:'center',justifyContent:'center'}}>
                  <Icon name="sharealt" style={{fontSize:30,color:'whitesmoke'}} onPress={handleShare}  />
                </View>
            </View>
            <View style={{flex:5,paddingHorizontal:20}}>
              <View style={{flex:2}}>
                <Text style={{fontSize:15,color:'whitesmoke'}}>{genre}</Text>
                <Text style={{fontSize:20,color:'white'}}>{title}</Text>
                <Text style={{fontSize:13,color:'white',marginTop:10}}>{desc}</Text>
              </View>
              <View style={{flex:1,flexDirection:'row'}}>
                <Icon name="book" style={{color:'white',marginTop:10}}> 50 Eps.</Icon>
                <Icon name="hearto" style={{color:'white',marginTop:10,marginLeft:3}}> 4.1M.</Icon>
              </View>
          </View>
        </View>
      </View>
      <View style={{flex:3}}>
        {dataEpisode.map((item) =>(
          <Episode key={item.id} {...item} navigation={navigation}  />
        ))}
      </View>
      </View>
      </ScrollView>
   )
}

export default Detail;
