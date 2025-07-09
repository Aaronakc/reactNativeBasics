import React, { useState } from 'react'
import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import CustomInput from '../Components/CustomInput'
import TodoItem from '../Components/TodoItem'


const TodoTaskScreen = () => {
  const [input, setInput] = useState("")
  const [todos, setTodos] = useState<{ checked: boolean, task: string }[]>([])


  const handleInputText = (text: string) => {
    console.log("Changed called")
    console.log("the text from todo screen ", text)
    setInput(text)
  }

  const handleAddTask = () => {
    if (!input) {
      return
    }

      setInput("")
      setTodos([...todos, { checked: false, task: input }])

    
  }
  console.log(todos)

  const handleToggle = (index: number) => {
    const newTodos = [...todos]
    newTodos[index].checked = !newTodos[index].checked;
    setTodos(newTodos)

  }

  const handleDelete=(index:number)=>{
  const remainingTodos=todos.filter((todo,i)=>i!==index)
  setTodos(remainingTodos)
  }




  return (
    <View style={{flex: 1}}>
      <View style={styles.background}>
        <Text style={styles.font}>Todo List</Text>
      </View>
      <View>
        <View style={styles.flexWrapper}>
          <CustomInput placeholder='enter the task' icon={require('../../assets/taskicon.png')} onChangeText={handleInputText} value={input} />
          <TouchableOpacity onPress={handleAddTask}>
            <Image source={require('../../assets/plus.png')} style={styles.image} />
          </TouchableOpacity>
        </View>

        <FlatList
          data={todos}
          renderItem={({ item, index }) => <TodoItem task={item.task} checked={item.checked} index={index} onPress={handleToggle} onDelete={handleDelete} />}
          keyExtractor={(item, index) => index.toString()}
          style={styles.flatListStyle}
        />


      </View>
    </View>
  )
}

const styles = StyleSheet.create({

  container:{
    flex: 1,
  },

  background: {
    // backgroundColor: "#009f8b",
    backgroundColor: "#404040",
    height: 90,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",

  },
  font: {
    fontSize: 20,
    fontFamily: "serif",
    fontWeight: "bold",
    color: "white",
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
  },
  flatListStyle:{
    marginBottom:100,
  },
})

export default TodoTaskScreen