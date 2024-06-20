import * as React from 'react';
import { Text, View, ScrollView, FlatList } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Carousel from './carousel';
import { err } from 'react-native-svg';
import Button from '../Compnents/button';
import Styles from '../Login/style';
import Box from './box';
import latestItem from './latestItem';
import Sider from './sider';


export default function Home() {
    const storeData = async () => {
        try {
            await AsyncStorage.setItem('my-key', "12345");
            console.log("true")
        } catch (e) {
            console.log("s", e)
        }
    };
    const getData = async () => {
        try {
            const value = await AsyncStorage.getItem('my-key');
            if (value !== null) {
                console.log(value)
            }
        } catch (e) {
            console.log(e)
        }
    };
    return (
        <ScrollView style={{ flex: 1, marginBottom: 70}}>
                <View>
                    <Carousel />
                </View>
                <View>
                    <Text style={{textAlign: "center", marginVertical: 20, fontSize: 24, fontWeight: "700", color: "black"}}>Latest Items</Text>
                </View>
                <ScrollView horizontal={true} showsHorizontalScrollIndicator= {false}>
                <View style={{flexDirection: "row"}}>
                   <FlatList renderItem={(latestItem)=> <Box item={latestItem}/>}/>
                   {
                    latestItem.map((item)=>{
                        return <Box item={item}/>
                    })
                   }
                </View>
                </ScrollView>
                <Sider/>
        </ScrollView>
    )
}