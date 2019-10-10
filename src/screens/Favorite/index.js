
import React from 'react';
import {
   View,
   Text
} from 'react-native';

// import component
import Search from '../../components/Search';
import List from '../../components/List';
import {
   BORDER_COLOR,
   BORDER_WIDTH
} from '../../config/constant';
const dataSource =  [
   {
      id : 1,
      title: 'The Secret of Angel',
      image: 'https://swebtoon-phinf.pstatic.net/20170531_105/1496219152497SPROF_JPEG/thumb_ipad.jpg',
      desc : 'Lorem ipsum dolor sit atmet adipisicing elit constructor heki done.',
      genre : 'Romantis',
      popularity : '416.255'
   }, {
      id : 2,
      title: 'Story Love',
      image: 'https://akcdn.detik.net.id/community/media/visual/2019/04/03/dac43146-7dd4-49f4-89ca-d81f57b070fc.jpeg?w=770&q=90',
      desc : 'Lorem ipsum dolor sit atmet adipisicing elit constructor heki done.',
      genre : 'Scifi',
      popularity : '417.366'
   }, {
      id  : 3,
      title: 'Young Mom',
      image: 'https://swebtoon-phinf.pstatic.net/20190116_292/1547605944791X4yhV_JPEG/10_EC8DB8EB84A4EC9DBC_ipad.jpg',
      desc : 'Lorem ipsum dolor sit atmet adipisicing elit constructor heki done.',
      genre : 'Comedy',
      popularity : '486.255'
   }
];

function Favorite({navigation}) {
   return (
      <View style={{flex:1}}>
         <View style={{flex:3}}>
            <Search />
         </View>
         <View style={{flex:21,padding:18}}>
            {
               dataSource.map((item,index) => {
                  return (
                     <List key={index} navigation={navigation} {...item} />
                  )
               })
            }
         </View>
      </View>
   )
}

export default Favorite;
