
import React,{useState} from 'react';
import {
   View,
   Text,
} from 'react-native';
import {
   Input,
   Item,
   Container,
   Content
} from 'native-base';
import Icon from "react-native-vector-icons/FontAwesome";
// import component
import ImageProfile from '../../components/ImageProfile';
import ImagePicker from 'react-native-image-picker'
// import constant
import {
   PRIMARY_COLOR,
   BORDER_COLOR,
   BORDER_WIDTH
} from '../../config/constant'

const options = {
  title: 'Select Avatar',
  customButtons: [{ name: 'fb', title: 'Choose Photo from Facebook' }],
  storageOptions: {
    skipBackup: true,
    path: 'images',
  },
};

function EditProfile() {
   const [name,setName] = useState('');
   const launchCamera = () => {
      ImagePicker.launchImageLibrary(options, (response) => {

      });
   }
   return (
      <>
      <Container>
       <Content>
         <View style={{flex:3}}>
         <View style={{flex:4,alignItems:'center',position:'relative'}}>
         <ImageProfile />
         <Icon type="FontAwesome" name="camera" style={{fontSize:20,marginTop:0,position:'absolute',bottom:30,right:140}} onPress={() => console.log('tes')} />
         </View>
         <View style={{flex:3,alignItems:'center',paddingHorizontal:20}}>
            <Item regular>
               <Input
                  value={name}
                  style={{
                     borderColor:BORDER_COLOR,
                     borderWidth: BORDER_WIDTH,
                     borderStyle: 'solid',
                     fontSize:15,
                     borderRadius: 2,
                     backgroundColor:'white',
                     borderStyle: 'solid'
                  }}
                  onChangeText={text => setName(text)}
                />
            </Item>
         </View>
         </View>
         </Content>
      </Container>
      </>
   )
}

export default EditProfile;
