import React from 'react';
import {
   TouchableOpacity,
   View,
   Image
} from 'react-native';
import {
   Button,
   Text
} from 'native-base';


function ListImage({image,title}) {
   return (
      <TouchableOpacity>
      <View style={{flex:1,flexDirection:'row',marginVertical:5}}>
         <View style={{flex:10,flexDirection : 'row'}}>
            <View style={{flex:2}}>
               <Image
                  source={{uri : image}}
                  style={{width:100,height:100,borderRadius:3}}
                  />
            </View>
            <View style={{flex:3,justifyContent:'center'}}>
               <Text style={{fontSize:20,fontWeight:'bold'}}>{title}</Text>
                  <Button small danger style={{width:90,justifyContent:'center'}}>
                     <Text>Delete</Text>
                  </Button>
               </View>
            </View>
      </View>
      </TouchableOpacity>
   )
}


export default ListImage;
