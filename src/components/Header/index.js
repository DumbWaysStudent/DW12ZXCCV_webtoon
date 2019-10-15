import React from 'react';
import {
  View,
  Text
} from 'react-native';

import {
  BORDER_COLOR,
  BORDER_WIDTH
} from '../../config/constant';

import Icon from 'react-native-vector-icons/AntDesign';

function HeaderWithLogo() {
  return (
    <View>
      <Text>Costume header with logo</Text>
    </View>
  )
}

function HeaderWithoutLogo(props) {
  
  return (
    <View style={{height:60,borderColor:BORDER_COLOR,borderWidth:BORDER_WIDTH,flexDirection:'row'}}>
      <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
        <Icon name="left" style={{fontSize:25}} />
      </View>
      <View style={{flex:6,alignItems:'center',justifyContent:'center'}}>
          <Text style={{fontSize:18,fontWeight:'bold'}}>
            {props.title}
          </Text>
      </View>
      <View style={{flex:1}}>

      </View>
    </View>
  )
}

function Header(props) {
  console.log(props)
  if(props.withLogo)  {
    return <HeaderWithLogo  {...props} />
  }else{
    return <HeaderWithoutLogo {...props} />
  }
}


export default Header;
