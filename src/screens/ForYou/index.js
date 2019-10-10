import React,{useState} from 'react';
import {
    View,
    Text,
    Dimensions,
    Image,
    SafeAreaView
} from 'react-native';

import  {
    Header,
    Item,
    Input,
    Button,
    Container,
    Content,
    Footer,
    FooterTab,
    Icon
} from 'native-base';


import { createBottomTabNavigator } from 'react-navigation-tabs';

import AllWebtoon from '../../components/AllWebtoon';
import Banners from '../../components/Banners';
import Favorite from '../../components/Favorite';
import Search from '../../components/Search';

import {
   TITLE_SIZE,
   SUBTITLE_SIZE,
   TITLE_COLOR,
   SUBTITLE_COLOR,
   BORDER_COLOR,
   BORDER_WIDTH
} from '../../config/constant';

import {dataSource} from '../../config/data.js';

function ForYou(props) {
   const { navigation } = props
    return (
      <Container>
       <Content>
        <View style={{flex:1,borderWidth:BORDER_WIDTH,borderColor:BORDER_COLOR}}>
            <View style={{flex:8,backgroundColor:'#F8F8F8'}}>
                <View style={{flex:4}}>
                   <Search />
                    <View style={{flex:1,paddingHorizontal:18}}>
                        <Text style={{fontSize:TITLE_SIZE,fontWeight:'700',marginTop:10}}>Halo!</Text>
                        <Text style={{fontSize:SUBTITLE_SIZE,color :'#666',marginTop:4}}>Lorem ? ipsum dolor sit atmet adi!</Text>
                    </View>
                </View>
                <View style={{flex:9,alignItems:'center'}}>
                   <View style={{marginTop:20}}></View>
                   <Banners items={dataSource} />
                </View>
            </View>
            <View style={{flex:4,borderWidth:BORDER_WIDTH,borderColor:BORDER_COLOR}}>
               <Favorite
                  items={dataSource}
                  navigation={navigation}

               />
               <AllWebtoon items={dataSource} navigation={navigation} />
            </View>
        </View>
        </Content>
       </Container>
    )
}

export default ForYou;
