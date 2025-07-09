interface TodoItemProps {
  task: string;
  onPress?: (index: number) => void;
  checked?: boolean;
  index: number;
  onDelete?:(index:number)=>void;
}


import React from 'react'
import { Text, View, StyleSheet, TouchableOpacity, Image } from 'react-native'



const TodoItem = ({ task, checked, index, onPress,onDelete }: TodoItemProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <TouchableOpacity onPress={() => onPress?.(index)}>
          <Image source={checked ? require('../../assets/checkedbox.png') : require('../../assets/uncheckbox.png')} style={styles.image} />
        </TouchableOpacity>
        <Text style={[styles.font, checked && styles.lineThrough]}>{task}</Text>

      </View>
      <View>
        <TouchableOpacity onPress={()=>onDelete?.(index)}>
          <Image source={require('../../assets/delete.png')} style={styles.deleteImage} />
        </TouchableOpacity>
      </View>

    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    marginLeft: 50,
    elevation: 5,
    backgroundColor: "white",
    // backgroundColor:"#606060",
    marginRight: 30,
    marginVertical: 10,
    paddingHorizontal: 20,
    paddingVertical: 20,
    borderRadius: 10,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  
  },
  wrapper: {
    display: "flex",
    flex: 1,
    flexDirection: "row",
    alignItems: "center",

  },
  font: {
    fontFamily: "serif",
    display:"flex",
    flex: 1,
    flexShrink: 1,
    flexWrap: "wrap",
    // color:"white"
  },
  image: {
    height: 20,
    width: 20,
    marginRight: 5,

  },
  lineThrough: {
    textDecorationLine: 'line-through',
    color: 'gray'
  },
  deleteImage: {
    width: 15,
    height: 15,
    marginLeft: 10,
  },

})





export default TodoItem