import * as React from 'react';
import { Text, View, FlatList, Animated } from 'react-native';
import Styles from '../Login/style';
import item from './item';
import CarouselItem from './carouselItems';
import Paginator from './paginator';
// import React, { useState, useRef} from 'react';
function Carousel() {
    const [currentIndex, setCurrentIndex] = React.useState(0);
    const scrollX = React.useRef(new Animated.Value(0)).current;
    const viewableItemsChanged = React.useRef(({ viewableItems }) => {
        setCurrentIndex(viewableItems[0].index)
    }).current;
    const slidesRef = React.useRef(null)
    return (
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
            <View style={{ flex: 1 }}>
                <FlatList data={item} renderItem={({ item }) => <CarouselItem item={item} />} horizontal
                    showsHorizontalScrollIndicator= {false}
                    pagingEnabled
                    bounces={false}
                    onScroll={Animated.event([{ nativeEvent: { contentOffset: { x: scrollX } } }], {
                        useNativeDriver: false,

                    })}
                    scrollEventThrottle={32}
                    onViewableItemsChanged={viewableItemsChanged}
                    ref={slidesRef}
                />
                
            </View>
            <View style={{flex: 0.2}}>
            <Paginator data={item} scrollX={scrollX} /></View>
        </View>
    );
}

export default Carousel;