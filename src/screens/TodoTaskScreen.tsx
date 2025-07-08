import React, { useState } from 'react'
import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import CustomInput from '../Components/CustomInput'


const TodoTaskScreen = () => {
  const [input, setInput] = useState("")
  const [todos, setTodos] = useState<{ id: number, checked: boolean, task: string }[]>([])

  const handleInputText = (text: string) => (setInput(text))

  const handleAddTask = () => {
    if (input == " ") {
      return
    }
    else {
      setInput(" ")
      setTodos([...todos, { id: Date.now(), checked: false, task: input }])

    }
  }
  console.log(todos)




  return (
    <View >
      <View style={styles.background}>
        <Text style={styles.font}>Todo List</Text>
      </View>
      <View style={{}}>
        <View style={styles.flexWrapper}>
          <CustomInput placeholder='enter the task' icon={require('../../assets/taskicon.png')} onChangeText={handleInputText} value={input} />
          <TouchableOpacity onPress={handleAddTask}>
            <Image source={require('../../assets/add.png')} style={styles.image} />
          </TouchableOpacity>
        </View>

        <FlatList
          data={todos}
          renderItem={({ item }) => (
            <View style={{ padding: 10 }}>
              <Text style={{ color: 'black' ,marginLeft:40}}>{item.task}</Text>
            </View>
          )}
          keyExtractor={(item) => item.id.toString()}
        />


      </View>
    </View>
  )
}

const styles = StyleSheet.create({

  background: {
    backgroundColor: "#009f8b",
    height: 90,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",

  },
  font: {
    fontSize: 20,
    fontFamily: "serif",
    fontWeight: "bold",
  },
  image: {
    width: 20,
    height: 20,
    marginTop: 20,

  },
  flexWrapper: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 40,
    paddingVertical: 10,
  }
})

export default TodoTaskScreen