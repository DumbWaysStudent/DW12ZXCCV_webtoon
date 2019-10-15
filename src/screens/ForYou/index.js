import React,{useState} from 'react';
import {
    View,
    Text,
    Dimensions,
    Image,
    ScrollView
} from 'react-native';

import { createBottomTabNavigator } from 'react-navigation-tabs';

import AllWebtoon from '../../components/AllWebtoon';
import Banners from '../../components/Banners';
import Favorite from '../../components/Favorite';

import {
   SUBTITLE_COLOR,
   BORDER_COLOR,
   BORDER_WIDTH,
} from '../../config/constant';

import {dataSource} from '../../config/data.js';

function ForYou(props) {
   const { navigation } = props
    return (
        <ScrollView>
        <View style={{flex:1}}>
            <View style={{flex:8,backgroundColor:'#f4f4f4'}}>
                <View style={{flex:4}}>
                    <View style={{flex:1,paddingHorizontal:18}}>
                        <Text style={{fontSize:30,fontWeight:'700',marginTop:10}}>Halo!</Text>
                        <Text style={{fontSize:17,color :'#666',marginTop:0}}>Are you borried !</Text>
                    </View>
                </View>
                <View style={{flex:9,alignItems:'center'}}>
                   <View style={{marginTop:20}}></View>
                   <Banners items={dataSource} />
                </View>
            </View>
            <View style={{flex:2}}>
                <View style={{flex:1}}>
                  <Favorite
                  items={dataSource}
                  navigation={navigation}
                  />
                </View>
                <View style={{flex:6}}>
                  <AllWebtoon items={dataSource} navigation={navigation} />
                </View>
            </View>
        </View>
        </ScrollView>
    )
}

export default ForYou;
