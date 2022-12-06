import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View, ScrollView, FlatList, TouchableOpacity, Alert } from 'react-native';
import AddTodo from './Component/addTodo';
import Header from './Component/header';
import Todoitem from './Component/Todoitem';
export default function App() {
  const [name, setName] = useState("dfsdf");
  const [people, setPeople] = useState([{text:"Sreekanth", id:"1"}, {text:"Prasad", id:"2"}, {text:"Naveen", id:"3"}]);
  const changeName = () => {
    setName('fggfdgdfgdfgfgfdg zdfdsfsdf')
  }
  const addTodotoLive = (data) => {
    alert(data.length)
    if(data.length>4){
      var peopleslist = [...people, {text:data, id:Math.random().toString()}]

    console.log(peopleslist)
    setPeople(peopleslist)
    }else{
      Alert.alert("welcome", "sreekanthdfng", [{
        text: "Understood", onPress:() =>console.log("alert closed")
      }])
    }
    
  }
  const pressHandler = (id) => {
    console.log(id)
  }
  return (
    <View style={styles.container}>
        <Header />
        <View style={styles.content}>
            <AddTodo addTodotoLive={(data)=>addTodotoLive(data)} />
            <View style={styles.list}>
              <FlatList 
                numColumns={3}
                  keyExtractor={(item)=>item.id}
                  data={people}
                  renderItem={({item})=>(
                    <Todoitem item={item} pressItemOnclick={(id)=>pressHandler(id)} />
                  )}
                />
            </View>
        </View>
      
      {/* <Text>Open up App.js to start working on your app! ghgfh</Text>
      <View style={styles.header}>Welcome</View>
      <View><Text>{name}</Text></View>
      <View>
        <Button title="Change Title" onPress={changeName} />
      </View> */}

      {/* <View >
        <Text>Enter name:</Text>
        <TextInput 
          multiline
          keyboardType='num'
          style={styles.input}
          placeholder="e.g John Doe"
          onChangeText={(e)=> setName(e)} />

      </View> */}
      {/* <ScrollView>
        {people.map((item)=>{
          return (
            <View key={item.key}>
              <Text style={styles.item}>{item.name}</Text>
            </View>
          )
        })}
      </ScrollView> */}
      {/* <FlatList 
      numColumns={3}
        keyExtractor={(item)=>item.id}
        data={people}
        renderItem={({item})=>(
          <TouchableOpacity onPress={()=>pressHandler(item.id)} >
          <Text style={styles.item}>{item.name}</Text>
          </TouchableOpacity>
        )}
      /> */}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    backgroundColor:"#ff0000",
    padding:"10px"
  },
  item:{
    backgroundColor:"#ff0000",
    padding:10,
    margin:10
  }
});
