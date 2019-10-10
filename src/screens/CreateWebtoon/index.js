
import React from 'react';
import {
   View,
   ScrollView
} from 'react-native';

import {
   Input,
   Item,
   Container,
   Content,
   Button,
   Text
} from 'native-base';

import {
   SUBTITLE_SIZE,
   BORDER_WIDTH,
   BORDER_COLOR,
   TITLE_SIZE,
   PRIMARY_COLOR
 } from '../../config/constant';
 import Icon from 'react-native-vector-icons/FontAwesome';


import { dataEpisode } from '../../config/data';
import ListEpisode from '../../components/ListEpisode';



function CreateWebtoon({navigation}){
   return (
         <ScrollView>
         <View style={{flex:1}}>
            <View style={{flex:4,padding:18}}>
               <Text style={{fontSize:TITLE_SIZE,marginBottom:10}}>Title</Text>
               <Item regular>
                  <Input />
               </Item>
            </View>
            <View style={{flex:21,padding:18}}>
               <Text style={{fontSize:TITLE_SIZE,marginBottom:10}}>Episode</Text>
               {
                  dataEpisode.map((item,index) => {
                     return (
                        <ListEpisode key={index} navigation={navigation} {...item} />
                     )
                  })
               }
               <Button success style={{marginTop:10,justifyContent:'center',backgroundColor:PRIMARY_COLOR}} onPress={() => navigation.navigate('CreateEpisode')}>
                  <Icon type="FontAwesome" name="plus" style={{color:'white'}} />
                  <Text> ADD EPISODE </Text>
               </Button>
            </View>
         </View>
         </ScrollView>
      )
   }

   export default CreateWebtoon;
