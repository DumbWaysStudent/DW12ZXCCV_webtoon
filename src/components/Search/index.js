import React from 'react';
import { View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {
   Item,
   Input
 } from 'native-base';

 function Search() {
    return (
      <View style={{flex:1,padding:10}}>
          <Item regular>
              <Input />
              <Icon name="search" style={{fontSize:20,marginRight:20}} />
          </Item>
      </View>
   )
}

export default Search;
