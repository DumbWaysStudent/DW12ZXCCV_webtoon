import React from 'react';

import {
   View,
   Image,
   Text,
   TouchableOpacity,
} from 'react-native';

import styles from './styles';

import Icon from 'react-native-vector-icons/AntDesign';

function Card({image,title,navigation,genre,popularity,isFavorite,desc}) {
  const styleButton = isFavorite ? styles.buttonFavoritActive : styles.buttonFavoritNotActive;
  const styleText = isFavorite ? styles.buttonFavoritTextActive : styles.buttonFavoritTextNotActive;
  const icon = isFavorite ? 'check' : 'plus';
   return  (
      <TouchableOpacity onPress={() => navigation.navigate('Detail',{title,image,genre,desc})}>
      <View style={styles.containerCard}>
         <View style={{flex:1.5}}>
            <Image
               source={{uri:image}}
               style={styles.imageCard}
            />
         </View>
         <View style={{flex:1.3,padding:10}}>
            <Text style={styles.titleCard}>{title}</Text>
            <Text style={styles.genreCard}>{genre.toUpperCase()}</Text>
            <TouchableOpacity>
              <View style={styleButton}>
                <Text style={styleText}><Icon name={icon} /> Favorit</Text>
              </View>
            </TouchableOpacity>
         </View>

      </View>

      </TouchableOpacity>
   )
}

export default Card;
