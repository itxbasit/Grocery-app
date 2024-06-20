import { Text, View, Image } from "react-native";
import logo from '../assets/image.png'
import Styles from "./style";

export default function Sec1() {
    return (
        <View style={Styles.container}>
            <Image
                source={
                    logo
                }
            />
            <Text style={Styles.text}>The Company</Text>
        </View>
    )
}