import React from "react";
import {
    View,
    StyleSheet,
    Text,
    StatusBar,
    TouchableOpacity
} from "react-native"
import { Feather } from '@expo/vector-icons'

// vendo se está do tamanho correto para o android
const StatusBarHeight = StatusBar.currentHeight ? statusbar.currentHeight + 22 : 64;

// Adicionei botão que importei do reactnative touchableOpacity
export default function Header(){
    return(
        <View style={styles.container}>
        <View style={styles.content}>
        <Text style={styles.username}> Mina Financa </Text>
        
        <TouchableOpacity activeOpacity={0.9} style={styles.buttonUser}>
            <Feather name="user" size={27} color={+fff}></Feather>
        </TouchableOpacity>
        </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: '+8000ff',
        paddingTop: StatusBarHeight,
    }
})

