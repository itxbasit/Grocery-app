import { View, useWindowDimensions, Animated } from "react-native"
import Styles from "../Login/style"


export default Paginator = ({ data, scrollX }) => {
    const { width } = useWindowDimensions();
    return(
        <View style={{flexDirection: "row", height: 4}}>
            {
                data.map((_, i)=>{
                    const inputRange = [(i - 1) * width, i * width, (i + 1) * width];

                    const doWidth = scrollX.interpolate({
                        inputRange,
                        outputRange: [10, 20, 10],
                        extrapolate: 'clamp',
                    })
                    const opacity = scrollX.interpolate({
                        inputRange,
                        outputRange: [0.3, 1, 0.3],
                        extrapolate: 'clamp',
                    })
                    return <Animated.View style={[Styles.dot, {width: doWidth, opacity}]} key={i.toString()}/>
                })
            }
        </View>
    )
}