import React from 'react'
import { Text, View, StyleSheet, TouchableOpacity, Image, TextInput } from 'react-native'

interface TodoItemProps {
  task: string;
  onPress?: (index: number) => void;
  checked?: boolean;
  index: number;
  onDelete?:(index:number)=>void;
  onEdit?:(index:number)=>void;
  onSave?:()=>void;
  editText?: string;
  setEditText?:(text:string)=>void;
  isEditing: boolean;
}

const TodoItem = ({task,checked,index,onPress,onDelete,onEdit,onSave,editText,setEditText,isEditing,}:TodoItemProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        {!isEditing && (
          <TouchableOpacity onPress={() => onPress?.(index)}>
            <Image
              source={
                checked
                  ? require('../../assets/checkedbox.png')
                  : require('../../assets/uncheckbox.png')
              }
              style={styles.image}
            />
          </TouchableOpacity>
        )}

        {isEditing ? (
          <TextInput
            value={editText}
            onChangeText={(text)=>setEditText?.(text)}
            style={[styles.font, { borderBottomWidth: 1, borderColor: '#ccc', paddingVertical: 2 }]}
          />
        ) : (
          <Text style={[styles.font, checked && styles.lineThrough]}>{task}</Text>
        )}
      </View>

      <View style={styles.flexContainer}>
        {!isEditing && (
        <TouchableOpacity onPress={() => onDelete?.(index)}>
          <Image source={require('../../assets/delete.png')} style={styles.deleteImage} />
        </TouchableOpacity>

        )}

        {isEditing ? (
          <TouchableOpacity onPress={onSave}>
            <Text style={{ fontSize: 16, color: 'blue', marginLeft: 10 }}>Save</Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity onPress={() => onEdit?.(index)}>
            <Image source={require('../../assets/edit.png')} style={styles.deleteImage} />
          </TouchableOpacity>
        )}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginLeft: 35,
    elevation: 5,
    backgroundColor: "white",
    // backgroundColor:"#606060",
    marginRight: 20,
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
  flexContainer:{
    display: "flex",
    flexDirection:"row",
    gap: 2,
  }
})

export default TodoItem
