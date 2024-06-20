import { Text, View, TouchableOpacity, Image } from 'react-native';
import Styles from '../Login/style';
import Stars from 'react-native-vector-icons/MaterialIcons'


export default Box = ({item}) =>{
    const title = (item.title).slice(0, 15)
    return(
        <TouchableOpacity style={Styles.box} onPress={()=> console.log("Basit")}>
            <Image source={item.image} style= {Styles.boxImage}></Image>
            <View style={{flexDirection: "row", justifyContent: "space-between"}}>
                <Text style={Styles.boxTitle}>{title}..</Text>
                <View  style={{flexDirection: "row", justifyContent: "space-between", marginVertical: 10, marginHorizontal: 5}}>
                    <Stars style={Styles.boxIcon} name="stars"/>
                    <Text style={Styles.boxRating}>{item.rating}</Text>  
                </View>
                
            </View>
            
            <Text style={Styles.boxPrice}>Price: {item.price}</Text>
        </TouchableOpacity>
    )
}