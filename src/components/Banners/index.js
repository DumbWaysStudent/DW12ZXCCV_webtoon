import React,{ useState,useEffect } from 'react';
import {
   View,
   Text,
   Image,
} from 'react-native';

import  {
    Header,
    Item,
    Input,
    Button,
    Icon
} from 'native-base';

import { PRIMARY_COLOR } from '../../config/constant';

function Banners({items}){
   const [banners,setBanners] = useState(items);
   const [currentIndex,setCurrentIndex] = useState(0);
   const [isPlaying,setIsPlaying] = useState(true);

   useEffect(
    () => {
         let timeout = setTimeout(() => {
            setCurrentIndex(
               (currentIndex + 1) % banners.length
            );
         } , 3000);
         return () => clearTimeout(timeout);
   },[currentIndex]);

   return (
      <View style={{marginLeft:18,paddingBottom:20}}>
          <View>
              <Image
                 source={{uri:banners[currentIndex].image}}
                 style={{width:330,height:180,borderRadius:4}}
              />
          </View>
          <View style={{width:300}}>

              <Text style={{fontSize:24,fontWeight:'bold',marginTop:10}}>
                  {banners[currentIndex].title}
               </Text>
               <Text style={{position : 'absolute', right : 2,top:20,fontWeight:'bold'}}>
                  <Icon name="ios-checkmark-circle" style={{fontSize:15,color:PRIMARY_COLOR}}> {banners[currentIndex].popularity}</Icon>
               </Text>
              <Text style={{color :'#666',fontWeight:'bold',width:'100%'}}>{banners[currentIndex].desc}</Text>
          </View>
      </View>
   )
}

export default Banners;
