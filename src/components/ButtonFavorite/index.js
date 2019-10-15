import React from 'react';
import {
   TouchableOpacity,
   View,
   Text
} from 'react-native';


import Icon from 'react-native-vector-icons/FontAwesome'

// import style
import styles from './style';

function ButtonFavorite () {
   return (
      <TouchableOpacity>
         <View style={styles.button}>
            <Text style={{color:'white',fontWeight:'bold'}}>
               <Icon type="FontAwesome" name="plus" /> Add To Favorit
               </Text>
            </View>
      </TouchableOpacity>
   )
}

export default ButtonFavorite;
