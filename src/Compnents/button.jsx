import { Text, View, Image, TextInput, ScrollView, TouchableOpacity, Alert } from "react-native";

export default function Button({func, text, cssBtn, textCss}) {
    return (
        <TouchableOpacity style={cssBtn} onPress={func}>
            <Text style={textCss}>{text}</Text>
        </TouchableOpacity>
    )
}