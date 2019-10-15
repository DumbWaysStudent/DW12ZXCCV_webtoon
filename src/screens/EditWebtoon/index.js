
import React from 'react';
import {
   View,
   ScrollView,
   TouchableOpacity
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



function EditWebtoon({navigation}){
   const title = navigation.getParam('title');
   return (
         <ScrollView>
         <View style={{flex:1}}>
            <View style={{flex:4,padding:18}}>
               <Text style={{fontSize:TITLE_SIZE,marginBottom:10}}>Title</Text>
               <Item regular>
                  <Input value={title} />
               </Item>
            </View>
            <View style={{flex:21,padding:18}}>
               <Text style={{fontSize:TITLE_SIZE,marginBottom:10}}>Episode</Text>
               {
                  dataEpisode.map((item,index) => {
                     return (
                        <TouchableOpacity  key={index} onPress={() => navigation.navigate('EditEpisode',{title:item.title})}>
                           <ListEpisode navigation={navigation} {...item} />
                        </TouchableOpacity>
                     )
                  })
               }
               <Button success style={{marginTop:10,justifyContent:'center',backgroundColor:PRIMARY_COLOR}} onPress={() => navigation.navigate('CreateEpisode')}>
                  <Icon type="FontAwesome" name="plus" style={{color:'white'}} />
                  <Text> ADD EPISODE </Text>
               </Button>
               <Button danger style={{marginTop:10,justifyContent:'center'}} onPress={() => navigation.navigate('CreateEpisode')}>
                  <Icon type="FontAwesome" name="trash" style={{color:'white'}} />
                  <Text> DELETE WEBTOON </Text>
               </Button>
            </View>
         </View>
         </ScrollView>
      )
   }

   export default EditWebtoon;
