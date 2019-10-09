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

const initialBanners =  [
         {
               id : 1,
               title: 'The Secret of Angel',
               image: 'https://akcdn.detik.net.id/community/media/visual/2019/04/03/dac43146-7dd4-49f4-89ca-d81f57b070fc.jpeg?w=770&q=90',
               desc : 'Lorem ipsum dolor sit atmet adipisicing elit constructor heki done.',
               genre : 'Romantis',
               popularity : '416.255'
         }, {
               id : 2,
               title: 'Story Love',
               image: 'https://akcdn.detik.net.id/community/media/visual/2019/04/03/dac43146-7dd4-49f4-89ca-d81f57b070fc.jpeg?w=770&q=90',
               desc : 'Lorem ipsum dolor sit atmet adipisicing elit constructor heki done.',
               genre : 'Scifi',
               popularity : '417.366'
         }, {
               id  : 3,
               title: 'Young Mom',
               image: 'https://akcdn.detik.net.id/community/media/visual/2019/04/03/dac43146-7dd4-49f4-89ca-d81f57b070fc.jpeg?w=770&q=90',
               desc : 'Lorem ipsum dolor sit atmet adipisicing elit constructor heki done.',
               genre : 'Comedy',
               popularity : '486.255'
         }
];

function ForYou() {
    return (
      <Container>
       <Content>
        <View style={{flex:1}}>
            <View style={{flex:8,backgroundColor:'#F8F8F8'}}>
                <View style={{flex:4}}>
                   <Search />
                    <View style={{flex:1,paddingHorizontal:18}}>
                        <Text style={{fontSize:24,fontWeight:'700',marginTop:10}}>Halo!</Text>
                        <Text style={{fontSize:18,color :'#666',marginTop:4}}>Lorem ? ipsum dolor sit atmet adi!</Text>
                    </View>
                </View>
                <View style={{flex:9,alignItems:'center'}}>
                   <View style={{marginTop:20}}></View>
                   <Banners items={initialBanners} />
                </View>
            </View>
            <View style={{flex:4}}>
               <Favorite items={initialBanners} />
               <AllWebtoon items={initialBanners} />
            </View>
        </View>
        </Content>
       </Container>
    )
}

export default ForYou;
