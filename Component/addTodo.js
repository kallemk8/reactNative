import react, { useState } from "react";

import { Button, StyleSheet, Text, TextInput, View, ScrollView, FlatList, TouchableOpacity } from 'react-native';

export default function AddTodo({addTodotoLive}) {
    const [todo, setTodo] = useState();
    const changeHandler = (val) =>{
        setTodo(val);
    }
    return (
        <View>
            <TextInput 
                placeholder="New Todo"
                style={styles.input}
                onChangeText={(val)=>changeHandler(val)}
            />
            <Button title="Add Todo" onPress={()=>addTodotoLive(todo)} />
        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        backgroundColor:"gray",
        padding:10,
        margin:10,
        color:"#fff"
    }
})