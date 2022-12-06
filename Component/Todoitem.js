import react from "react";

import { Button, StyleSheet, Text, TextInput, View, ScrollView, FlatList, TouchableOpacity } from 'react-native';

export default function Todoitem({item, pressItemOnclick}) {
    return (
        <TouchableOpacity onPress={()=>pressItemOnclick(item.id)}>
            <Text style={styles.item}>{item.text}</Text>
        </TouchableOpacity>
    )
}
const styles = StyleSheet.create({
    item: {
        backgroundColor:"gray",
        padding:10,
        margin:10,
        color:"#fff"
    }
})