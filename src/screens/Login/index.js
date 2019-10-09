import React,{useState,useEffect} from 'react'
import {
    View,
    StyleSheet
} from 'react-native';
import {
    Container,
    Text,
    Item,
    Input,
    Button,
    Icon
} from 'native-base';

import {validateEmail} from '../../helpers'
export default function Login({navigation}) {

    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [visible,setVisible] = useState(false);
    const [active,setActive] = useState(true);

    const checkIsError = () => {
        if(validateEmail(email) === true && password.length >= 5) {
            setActive(false);
        }else{
            setActive(true);
        }
    }


    useEffect(() => {
        checkIsError();
    },[email,password]);


    const color = visible ? 'green' : 'silver';
    const visiblePassword = visible ? false : true;


    return (
        <Container>
           <View style={styles.loginContainer}>
                <View style={styles.loginText}>
                    <Text style={styles.loginTextTitle}>LOGIN</Text>
                    <Text style={{marginTop: 15}}>
                        Login With Your Account <Text style={{color : 'green',fontWeight:'bold'}}>WEEBTOON</Text>
                    </Text>
                </View>
                <View style={styles.loginFormGroup}>
                    <View>
                        <Text style={{marginBottom : 14}}>Email</Text>
                        <Item regular>
                            <Input
                                value={email}
                                onChangeText={text => setEmail(text)}
                            />
                        </Item>
                    </View>
                    <View>
                        <Text style={{marginBottom : 14,marginTop:14}}>Password</Text>
                        <Item regular>
                            <Input
                                secureTextEntry={visiblePassword}
                                value={password}
                                onChangeText={text => setPassword(text)}
                             />
                            <Icon name="eye" style={{color:color}} onPress={() => setVisible(!visible)} />
                        </Item>
                    </View>
                    <View style={{marginTop: 30}}>
                        <Button
                            full
                            success
                            disabled={active}
                            onPress={() => navigation.navigate('ForYou')}
                        >
                            <Text>LOGIN</Text>
                        </Button>
                    </View>
                </View>
           </View>
        </Container>
    )
}

const styles = StyleSheet.create({
   loginContainer : {
       flex : 1,
    },
   loginContainer : {
     flex : 1
   },
   loginText : {
     alignItems : 'center',
     height : 200,
     flex: 1,
     justifyContent : 'center',
     marginTop : 40
   },
   loginTextTitle : {
       fontSize: 30,
   },
   loginFormGroup : {
        flex : 2,
        paddingHorizontal : 40
   }
});
