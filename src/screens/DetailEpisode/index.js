import React from 'react';
import {
   View,
   Text,
   FlatList,
   Image
} from 'react-native'
import {dataStory} from '../../config/data'


function Story({image}) {
   return (
      <Image
         source={{uri:image}}
         style={{width:'100%',height:500}}
      />
   )
}


function DetailEpisode() {
   return (
      <FlatList
        data={dataStory}
        renderItem={({ item }) => <Story key={item.id} {...item}  />}
        keyExtractor={item => item.id.toString()}
      />
   )
}

export default DetailEpisode;
