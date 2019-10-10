
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



function ListWithButton({image,id,title,genre}) {
   const color = id == "1" ? PRIMARY_COLOR  : 'white';
   const fontColor = id == "1" ? 'white'  : 'black';

      return (
         <View style={{flex:1,flexDirection:'row',marginTop:10}}>
            <View style={{flex:1}}>
               <View style={{width:20,height:20,backgroundColor:color,justifyContent:'center',alignItems:'center',borderRadius:10}}>
                  <Text style={{color:fontColor,fontWeight:'bold'}}>{id}</Text>
               </View>
            </View>
            <View style={{flex:10,flexDirection : 'row'}}>
               <View style={{flex:2}}>
                  <Image
                     source={{uri : image}}
                     style={{width:100,height:100,borderRadius:3}}
                     />
               </View>
               <View style={{flex:3}}>
                  <Text style={{fontSize:20,fontWeight:'bold'}}>{title}</Text>
                  <Text style={{fontSize:15,color:'#666',fontWeight:'bold'}}>{genre}</Text>
                  <ButtonFavorite />
                  </View>
               </View>
         </View>
      )
}

function ListWithoutButton({image,id,title,genre,popularity}) {
   const color = id == "1" ? PRIMARY_COLOR  : 'white';
   const fontColor = id == "1" ? 'white'  : 'black';

   return (
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
               <Icon type="FontAwesome" name="heart-o" style={{color:PRIMARY_COLOR,marginTop:20}}> {popularity}</Icon>
               </View>
            </View>
         </View>
   )
}



function List(props) {
   if(props.withButton) {
      return <ListWithButton {...props} />
   }
      return <ListWithoutButton {...props} />
}


   export default List;
