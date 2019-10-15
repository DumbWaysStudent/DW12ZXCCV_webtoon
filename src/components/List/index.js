

import React from 'react';
import {
   Image,
   Text,
   View,
   TouchableOpacity
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

// import constant
import { PRIMARY_COLOR } from '../../config/constant';
// import components
import ButtonFavorite from '../ButtonFavorite';



function ListWithButton({image,id,title,genre,navigation}) {
   const color = id == "1" ? PRIMARY_COLOR  : 'white';
   const fontColor = id == "1" ? 'white'  : 'black';
   return (
      <TouchableOpacity onPress={() => navigation.navigate('Detail',{title,image,genre})}>
         <View style={{flex:1,flexDirection:'row',marginVertical:5}}>
            <View style={{flex:10,flexDirection : 'row'}}>
               <View style={{flex:2,flexDirection:'row'}}>
                  <View style={{flex:2,justifyContent:'center'}}>
                    <View style={{width:20,height:20,backgroundColor:color,justifyContent:'center',alignItems:'center',borderRadius:10}}>
                      <Text style={{color:fontColor,fontWeight:'bold'}}>{id}</Text>
                    </View>
                  </View>
                  <View style={{flex:15,justifyContent:'center',flexDirection:'row'}}>
                    <View style={{flex:0.7}}>
                      <Image
                        source={{uri : image}}
                        style={{width:50,height:50,borderRadius:3}}
                      />
                    </View>
                    <View style={{flex:2,justifyContent:'center'}}>
                      <Text style={{fontSize:15,fontWeight:'bold'}}>{title}</Text>
                      <Text style={{fontSize:10,color:'silver'}}>{genre.toUpperCase()}</Text>
                    </View>
                  </View>
               </View>
            </View>
         </View>
      </TouchableOpacity>
   )
}

function ListWithoutButton({image,id,title,genre,popularity,withSumEpisode,sumEpisode,onPress}) {
   const color = id == "1" ? PRIMARY_COLOR  : 'white';
   const fontColor = id == "1" ? 'white'  : 'black';
   const icon = withSumEpisode ? 'angellist' : 'heart-o';
   const text = withSumEpisode ? `${sumEpisode} Episode(s)` : popularity;

   return (
      <TouchableOpacity onPress={onPress}>
      <View style={{flex:1,flexDirection:'row',marginTop:10}}>
         <View style={{flex:10,flexDirection : 'row'}}>
            <View style={{flex:2}}>
               <Image
                  source={{uri : image}}
                  style={{width:100,height:100,borderRadius:3}}
                  />
            </View>
            <View style={{flex:3}}>
               <Text style={{fontSize:20,fontWeight:'bold'}}>{title  }</Text>
               <Text style={{fontSize:15,color:'#666',fontWeight:'bold'}}>{genre}</Text>
               <Icon type="FontAwesome" name={icon} style={{color:PRIMARY_COLOR,marginTop:20}}> {text}</Icon>
            </View>
         </View>
      </View>
      </TouchableOpacity>
   )
}



function List(props) {
   if(props.withButton) {
      return <ListWithButton {...props} />
   }
   return <ListWithoutButton {...props} />
}


export default List;
