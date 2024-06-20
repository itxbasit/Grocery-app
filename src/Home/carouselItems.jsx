import * as React from 'react';
import { Text, View , StyleSheet, useWindowDimensions, Image} from 'react-native';
import Styles from '../Login/style';
import item from './item';
function CarouselItem({item}) {
    const { width } = useWindowDimensions();
    return (
        <View style={[Styles.caruselContainer, { width }]}>
            <Image source={item.image} style={[Styles.carouselImage]}></Image>
            <View style={{flex: 0.3}}>
                <Text style={Styles.title}>{item.title}</Text>
                <Text style={Styles.description}>{item.description}</Text>
            </View>
        </View>
    );
}

export default CarouselItem;