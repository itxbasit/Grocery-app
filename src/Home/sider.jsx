import { View, TouchableOpacity } from 'react-native';
import Styles from '../Login/style';
import Icon from 'react-native-vector-icons/MaterialIcons'
export default Sider = () => {
    return(
        <View style={Styles.sider}>
            <TouchableOpacity style={{marginVertical: 10}}>
                <Icon style={Styles.siderIcon} name="redeem"/>
            </TouchableOpacity>
            <TouchableOpacity style={{marginBottom: 10}}>
                <Icon style={Styles.siderIcon} name="person"/>
            </TouchableOpacity>
        </View>
    )
}