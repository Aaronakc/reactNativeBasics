import React, { useState } from 'react'
import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import CustomInput from '../Components/CustomInput'
import TodoItem from '../Components/TodoItem'
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types/navigation';

type Props = NativeStackScreenProps<RootStackParamList, 'TodoTask'>;

const TodoTaskScreen = ({ navigation }: Props) => {
  const [input, setInput] = useState("")
  const [todos, setTodos] = useState<{ checked: boolean, task: string }[]>([])
  const [editingIndex, setEditingIndex] = useState<number | null>(null)
  const [editText, setEditText] = useState('')

  const handleInputText = (text: string) => {
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

  const handleDelete = (index: number) => {
    const remainingTodos = todos.filter((todo, i) => i !== index)
    setTodos(remainingTodos)
  }

  const handleEdit = (index: number) => {
    setEditingIndex(index)
    setEditText(todos[index].task)

  }
  const handleSave = () => {
    if (editingIndex == null) {
      return
    }
    const updatedTodo = [...todos]
    updatedTodo[editingIndex].task = editText
    setEditingIndex(null)
    setEditText("")
    setTodos(updatedTodo)

  }


  return (
    <View style={styles.container}>
      {/* header */}
      <View style={styles.background}>
        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <Image source={require('../../assets/backIcon.png')} style={styles.backIcon} />
        </TouchableOpacity>
        <Text style={styles.font}>Todo List</Text>
        <TouchableOpacity>
          <Image source={require('../../assets/menu.png')} style={styles.backIcon} />
        </TouchableOpacity>
      </View>



      {/* input and add task */}
      <View style={{flex:1,backgroundColor:"#141414"}}>
        <View style={styles.flexWrapper}>
          <CustomInput placeholder='enter the task' icon={require('../../assets/taskicon.png')} onChangeText={handleInputText} value={input} color="white" />
          <TouchableOpacity onPress={handleAddTask}>
            <Image source={require('../../assets/addIcon.png')} style={styles.image} />
          </TouchableOpacity>
        </View>

        <FlatList
          data={todos}
          renderItem={({ item, index }) => <TodoItem task={item.task} checked={item.checked} index={index} onPress={handleToggle} onDelete={handleDelete} onEdit={handleEdit} onSave={handleSave} editText={editText} setEditText={setEditText} isEditing={editingIndex === index} />}
          keyExtractor={(item, index) => index.toString()}
          style={styles.flatListStyle}
        />
      </View>


    </View>

  )
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
  },

  background: {
    backgroundColor: "#009f8b",
    // backgroundColor: "#404040",
    height: 90,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 15,
    alignItems: "center",

  },
  font: {
    fontSize: 20,
    fontFamily: "serif",
    fontWeight: "bold",
    color: "white",
  },
  image: {
    width: 25,
    height: 25,
    marginTop: 18,
    marginRight: 10,

  },
  flexWrapper: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  flatListStyle: {
    flex: 1,
    marginBottom: 10,
  },
  backIcon: {
    width: 15,
    height: 15,
  }
})

export default TodoTaskScreen