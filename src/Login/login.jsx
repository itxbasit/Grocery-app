import { Text, View, TextInput, ScrollView, Alert } from "react-native";
import { useNavigation } from '@react-navigation/native';
import Styles from "./style";
import Sec1 from "./section1";
import React, { useState } from "react";
import Email from 'react-native-vector-icons/Entypo'
import Password from 'react-native-vector-icons/MaterialIcons'
import Button from "../Compnents/button";
import validator from "validator";
export default function Login() {
    const navigation = useNavigation();
    const [text, onChangeText] = React.useState('');
    const [number, onChangeNumber] = React.useState('');
    let val = validator.isEmail(text)
    const [value, setValue] = useState({})
    const handleClick = () => {
        if(text && number && val){
            const va = {
                email: text,
                password: number
            }
            setValue({ ...va })
            onChangeText(''), onChangeNumber('');
        }
        else{
            Alert.alert("Please fill the form correctly")
        }
    };
    return (
        <ScrollView>
            <View style={{ flex: 1 }}>
                <View>
                    <Sec1/>
                </View>
                <View Style={{ flex: 3 }}>
                    <View>
                        <TextInput
                            style={Styles.input}
                            onChangeText={onChangeText}
                            value={text}
                            inlineImageLeft='search_icon'
                            placeholder="Enter Email Address"
                        />
                        <Email style={Styles.icon} name="email" size={16} />
                        {
                            text ?
                                val ?
                                    null
                                    : <Text style={{ paddingHorizontal: 25, color: "red" }}>Please give valid I'D</Text>
                                :
                                null
                        }
                    </View>
                    <View>
                        <TextInput
                            style={Styles.input}
                            onChangeText={onChangeNumber}
                            value={number}
                            placeholder="Enter Password"
                            secureTextEntry={true}
                        />
                        <Password style={Styles.icon} name="password" size={16} />
                    </View>
                </View>
                <View style={{ justifyContent: "center", alignItems: "center", paddingHorizontal: 12, paddingTop: 20 }}>
                    <Button text={"LogIn"} cssBtn={Styles.logBtn} textCss={Styles.textBtn} func={handleClick}
                    />
                </View>
                <View style={{ justifyContent: "center", alignItems: "center", paddingHorizontal: 12, paddingTop: 20 }}>
                    <Text style={{ marginBottom: 15, fontWeight: "700" }}>New User Click on SignUp</Text>
                    <Button text={"SignUp"} cssBtn={Styles.signBtn} textCss={Styles.textSignBtn} 
                    func={() => navigation.navigate('SignUp')}/>
                </View>

            </View>
        </ScrollView>
    )
}