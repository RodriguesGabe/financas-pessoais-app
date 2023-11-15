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
const statusBarHeight = StatusBar.currentHeight ? StatusBar.currentHeight + 22 : 64;

// Adicionei botão que importei do reactnative touchableOpacity
export default function Header(){
    return(
        <View style={styles.container}>
        <View style={styles.content}>
        <Text style={styles.username}> Mina Financas </Text>
        
        <TouchableOpacity activeOpacity={0.9} style={styles.buttonUser}>
            <Feather name="user" size={27} color='#FFF'> </Feather>
        </TouchableOpacity>
        </View>
        </View>
    )
}

//Mudancas de estilo do app
const styles = StyleSheet.create({
    container:{
        backgroundColor: '#F08080',
        paddingTop: statusBarHeight,
        flexDirection: 'row',
        paddingStart: 16,
        paddingEnd: 16,
        paddingBottom: 44,
    },
    content: {
        flex: 1,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    username:{
        fontSize: 18,
        color: '#FFF',
        fontWeight: 'bold'
    }

})

