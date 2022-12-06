import react from "react";

import { Button, StyleSheet, Text, TextInput, View, ScrollView, FlatList, TouchableOpacity } from 'react-native';

export default function Header() {
    return(
        <View style={styles.header}>
            <Text style={styles.title} >
                My Todo List
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        backgroundColor:"blue",
        padding:10,
        width:"100%"
    },
    title: {
        textAlign:"center",
        color:"#fff",
        fontSize:"16px",
        fontWeight:"bold"
    }
})