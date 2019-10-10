import React from 'react';
import { View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {
   Item,
   Input
 } from 'native-base';

import {
   PRIMARY_COLOR,
   BORDER_COLOR
} from '../../config/constant'

 function Search() {
    return (
      <View style={{flex:1,padding:10,position:'relative'}}>
              <Input style={{
                   borderColor:BORDER_COLOR,
                   borderWidth: 1,
                   borderStyle: 'solid',
                   fontSize:15,
                   borderRadius: 25,
               }}/>
            <Icon name="search" style={{fontSize:20,marginRight:20,position:'absolute',right:10,top:25,color:PRIMARY_COLOR}} />
      </View>
   )
}

export default Search;
