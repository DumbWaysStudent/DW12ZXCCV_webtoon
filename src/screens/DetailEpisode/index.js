import React from 'react';
import {
   View,
   Text,
   FlatList,
   Image
} from 'react-native'

const story = [
   {id : 1,image : 'https://swebtoon-phinf.pstatic.net/20191002_110/15699851203617YErk_JPEG/1569985120329171478.jpg?type=q90'},
   {id : 2,image : 'https://swebtoon-phinf.pstatic.net/20191002_150/15699851207915L6AS_JPEG/1569985120759171470.jpg?type=q90'},
   {id : 3,image : 'https://swebtoon-phinf.pstatic.net/20191002_76/1569985121553MBsM5_JPEG/1569985121533171470.jpg?type=q90'}
]

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
        data={story}
        renderItem={({ item }) => <Story key={item.id} {...item}  />}
        keyExtractor={item => item.id.toString()}
      />
   )
}

export default DetailEpisode;
