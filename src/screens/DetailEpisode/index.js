import React,{useState,useEffect} from 'react'
import {
   FlatList,
   Image
} from 'react-native'
import { CONFIG } from '../../config/constant'
import axios from 'axios'

function Story({image}) {
   return (
      <Image
         source={{uri:image}}
         style={{width:'100%',height:500}}
      />
   )
}


function DetailEpisode({navigation}) {
   const [story,setStory] = useState([])
   const id = navigation.getParam('id')
   const webtoonId = navigation.getParam('webtoonId')
   
   useEffect(() => {
      axios.get(`${CONFIG.apiUrl}/webtoons/${webtoonId}/episode/${id}`,{ headers: {"Authorization" : `Bearer ${CONFIG.token._55}`} })
      .then(res => {
         let { data : {data} } = res
         setStory(data)
      })
      .catch(err => console.log(err))
   },[])
   
   return (
      <FlatList
        data={story}
        renderItem={({ item }) => <Story key={item.id} {...item}  />}
        keyExtractor={item => item.id.toString()}
      />
   )
}

export default DetailEpisode;
