import { Text, View, Image, TextInput, ScrollView, TouchableOpacity, Alert } from "react-native";
import { useNavigation } from '@react-navigation/native';
import Sec1 from "../Login/section1";
import Styles from "../Login/style";
import validator from "validator";
import React, { useState } from "react";
import Email from 'react-native-vector-icons/Entypo'
import Password from 'react-native-vector-icons/MaterialIcons'
import Profile from 'react-native-vector-icons/MaterialCommunityIcons'
import Button from "../Compnents/button";
import axios from 'axios';

export default function SignUp() {
    const navigation = useNavigation();
    const [name, setName] = useState('');
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [rePassword, setRePassword] = React.useState('');
    let val = validator.isEmail(email)
    const [value, setValue] = useState({})
    function validate_password(password) {
        let check = /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/;
        if (password.match(check)) {
            return true;
        } else {
            // console.log("Password must contain One Upper, lower, special charcter and number");
            return false
        }
    }
    function passwordVerified(re) {
        if (passwordVerify) {
            if (password === (re)) {
                return true
            }
            else {
                return false
            }
        }

    }
    let passwordVerify = validate_password(password)
    let rePasswordVerify = passwordVerified(rePassword)
    const handleClick = async () => {
        if (email && password && val && passwordVerify && rePasswordVerify) {
            const va = {
                UserName: name,
                email: email,
                password: password,
            }
            console.log(va)
            axios.post("http://localhost:9000/signUp", va,
                // headers = {
                //     'Accept': 'multipart/form-data',
                //     'Content-Type': 'application/json; charset=utf-8'
                // }
                )

                .then((res) => {
                    Alert.alert("User added successfully")
                    navigation.navigate('Login')
                    setEmail(''), setPassword(''), setName(''), setRePassword('');
                }).catch((err) => {
                    console.log(err)
                })
            setValue({ ...va })

        }
        else {
            Alert.alert("Please fill the form correctly")
        }
    };
    return (
        <ScrollView>
            <View style={{ flex: 1 }}>
                <View>
                    <Sec1 />
                </View>
                <View>
                    <View>
                        <TextInput
                            style={Styles.input}
                            onChangeText={setName}
                            value={name}
                            placeholder="User Name"
                        />
                        <Profile style={Styles.icon} name="face-man-profile" size={16} />
                    </View>
                    <View>
                        <TextInput
                            style={Styles.input}
                            onChangeText={setEmail}
                            value={email}
                            inlineImageLeft='search_icon'
                            placeholder="Enter Email Address"
                        />
                        <Email style={Styles.icon} name="email" size={16} />
                        {
                            email ?
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
                            onChangeText={setPassword}
                            value={password}
                            placeholder="Enter Password"
                            secureTextEntry={true}
                        />
                        <Password style={Styles.icon} name="password" size={16} />
                        {
                            password ?
                                passwordVerify ?
                                    <Text style={{ paddingHorizontal: 25, color: "green" }}>Your password is strong</Text>
                                    : <Text style={{ paddingHorizontal: 25, color: "red" }}>Password contain atleast 8 character (One UpperCase, lowerCase, special charcter and number)</Text>
                                :
                                null
                        }
                    </View>
                    <View>
                        <TextInput
                            style={Styles.input}
                            onChangeText={setRePassword}
                            value={rePassword}
                            placeholder="Reenter Password"
                            secureTextEntry={true}
                        />
                        <Password style={Styles.icon} name="password" size={16} />
                        {
                            rePassword ?
                                rePasswordVerify ?
                                    <Text style={{ paddingHorizontal: 25, color: "green" }}>Your password is match</Text>
                                    : <Text style={{ paddingHorizontal: 25, color: "red" }}>Your password isn't match</Text>
                                :
                                null
                        }
                    </View>

                </View>
                <View style={{ justifyContent: "center", alignItems: "center", paddingTop: 20, flexDirection: "row" }}>
                    <Button text={"SignUp"} cssBtn={Styles.signBtn1} textCss={Styles.textSignBtn1} func={handleClick} />
                    <Button text={"SignIn"} cssBtn={Styles.signBtn} textCss={Styles.textSignBtn}
                        func={() => navigation.navigate('Login')} />
                </View>
            </View>
        </ScrollView >
    )
}
