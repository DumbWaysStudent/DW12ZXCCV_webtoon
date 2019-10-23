
import React from 'react';
import {
   View,
   ScrollView,
   TouchableOpacity,
   StyleSheet,
   Image,
} from 'react-native';
import { connect } from 'react-redux'
import {
   Input,
   Item,
   Text
} from 'native-base';

import {
   TITLE_SIZE,
   PRIMARY_COLOR,
   BORDER_WIDTH,
   BORDER_COLOR
 } from '../../config/constant'

import Icon from 'react-native-vector-icons/AntDesign';
import ImagePicker from 'react-native-image-picker'
import { basePATH } from '../../config/api'
import { fetchDataEpisode } from '../../config/redux/action'
import axios from 'axios'

class EditEpisode extends React.Component {
   constructor(props){
      super(props)
      this.state = {
         episode_id : null,
         title : '',
         dataImage : null,
         webtoon_id : null,
         image : 'https://image.shutterstock.com/z/stock-vector-no-image-vector-isolated-on-white-background-1481369594.jpg',
         loading : false
      }
      this.handleEditEpisode = this.handleEditEpisode.bind(this)
   }

   componentDidMount() {
      let episode_id = this.props.navigation.getParam('id')
      let image = this.props.navigation.getParam('image')
      let title = this.props.navigation.getParam('title')
      this.setState({
         episode_id,
         image,
         title
      })
      this.props.navigation.setParams({'EditEpisode' : this.handleEditEpisode})
   }

   static navigationOptions = ({ navigation }) => {
      return {
         headerTitle : 'Edit Episode',
         headerStyle : {
           elevation : 0,
           borderBottomColor : BORDER_COLOR,
           borderWidth : BORDER_WIDTH
         },
         headerRight: <Icon name="check" style={{marginRight:30,fontSize:20,color:PRIMARY_COLOR}} onPress={navigation.getParam('EditEpisode') }  />,
      };
    };
   


   selectPhotoTapped = () => {
    const options = {
      quality: 1.0,
      maxWidth: 500,
      maxHeight: 500,
      storageOptions : {
         skipBackup : true,
         path : 'images'
      }
    };

    ImagePicker.showImagePicker(options, response => {

      if (response.didCancel) {
        console.log('User cancelled photo picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      } else {
         const dataImage = {
            uri: response.uri,
            type: response.type,
            name: response.fileName,
         }
        this.setState({
           image : response.uri,
            dataImage
         })
      }
    })
  }

  handleEditEpisode = async () => {
      let data = new FormData;
      let { episode_id,webtoon_id } = this.state
      let { token,user_id } = this.props.currUser
      data.append('title',this.state.title)
      data.append('image', this.state.dataImage)
      try {
         const response = await axios({
           method: 'PATCH',
           url: `http://192.168.1.47:5000/api/v1/user/${user_id}/webtoon/${webtoon_id}/episode/${episode_id}`,
           data,
           headers: {
             'Authorization' : `Bearer ${token}`,
             'Content-Type': 'multipart/form-data',
           },
         });
         if (response.status == 200) {
            alert('Episode has been updated !!')
            this.props.fetchEpisodes(token,webtoon_id)
            setTimeout(() => {
                 this.props.navigation.pop();
            },3000)
           this.setState({
             title: '',
             episode_id : null,
             webtoon_id : null,
             image: 'https://image.shutterstock.com/z/stock-vector-no-image-ve-isolated-on-white-background-1481369594.jpg',
           });
         }
       } catch (error) {
         console.log(error);
       }
 };

  render () {
     let imageUrl =  this.state.dataImage === null ? {uri : `${basePATH}/${this.state.image}`} : {uri : this.state.image}
     const { title } = this.state
     return (
           <ScrollView>
           <View style={{flex:1}}>
              <View style={{flex:4,padding:18}}>
                 <View>
                 <Text style={{fontSize:TITLE_SIZE,marginBottom:10,marginTop:10}}>Title</Text>
                 <Item regular>
                    <Input value={title} onChangeText={text => this.setState({title : text})} />
                 </Item>
                 </View>

                 <View>
                 <Text style={{fontSize:TITLE_SIZE,marginBottom:10,marginTop:10}}>Image</Text>
                    <TouchableOpacity onPress={this.selectPhotoTapped}>
                    <View
                       style={[styles.avatar, styles.avatarContainer, {marginBottom: 20}]}>
                       {this.state.avatar === null ? (
                       <Text>Select a Photo</Text>
                       ) : (
                       <Image style={styles.avatar} source={imageUrl} />
                       )}
                    </View>
                    </TouchableOpacity>
                 </View>
              </View>
        
           </View>
           </ScrollView>
        )
      }
   }

   const mapStateToProps  = (state) => {
      return {
         currUser : state.auth.currUser
      }
   }
   const mapDispatchToProps = (dispatch) => {
      return {
         fetchEpisodes : (token,webtoon_id) => dispatch(fetchDataEpisode(token,webtoon_id))
      }
   }
   export default connect(mapStateToProps,mapDispatchToProps)(EditEpisode);


   const styles = StyleSheet.create({
      container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
      },
      avatarContainer: {
        justifyContent: 'center',
        alignItems: 'center',
      },
      avatar: {
         width: 300,
         height: 150,
         marginTop:20
      },
    });
    