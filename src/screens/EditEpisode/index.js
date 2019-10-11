import React from 'react';
import {
   View,
   ScrollView
} from 'react-native';

import {
   Button,
   Text,
   Item,
   Input
 } from 'native-base';

 import {
    SUBTITLE_SIZE,
    BORDER_WIDTH,
    BORDER_COLOR,
    TITLE_SIZE,
    PRIMARY_COLOR
}
from '../../config/constant';

import Icon from 'react-native-vector-icons/FontAwesome'

import ListImage from '../../components/ListImage';

import { dataImage } from '../../config/data.js';


function EditEpisode({navigation}) {
   const title = navigation.getParam('title');
   return (
      <ScrollView>
      <View style={{flex:1}}>
         <View style={{flex:4,padding:18}}>
            <Text style={{fontSize:TITLE_SIZE,marginBottom:10}}>Name</Text>
            <Item regular>
               <Input value={title} />
            </Item>
         </View>
         <View style={{flex:21,padding:18}}>
            <Text style={{fontSize:TITLE_SIZE,marginBottom:10}}>All Images</Text>
            {dataImage.map((item,index) => {
               return (
                  <ListImage key={index} {...item}  />
               )
            })}
            <Button success style={{marginTop:10,justifyContent:'center',backgroundColor:PRIMARY_COLOR}}>
               <Icon type="FontAwesome" name="plus" style={{color:'white'}} />
               <Text> IMAGE </Text>
            </Button>
            <Button danger style={{marginTop:10,justifyContent:'center'}}>
               <Icon type="FontAwesome" name="plus" style={{color:'white'}} />
               <Text> DELETE EPISODE </Text>
            </Button>
         </View>
      </View>
      </ScrollView>
   )
}

export default EditEpisode;
