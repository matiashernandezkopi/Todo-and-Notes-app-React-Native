import React, { useState } from "react";
import { View, StyleSheet, Button, ScrollView, SafeAreaView,Text } from "react-native";

import TodoForm from "./TodoForm";
import TodoItem from "./TodoItem";

const TodoList:TodoItem[] = [{Title:'Your task here', Description:'What do you have Todo??',Done:false},{Title:'Complete',Done:true}]
const TodoScreen = () => {
  const [list,setList] = useState<TodoItem[]>(TodoList)
  const [adding,setAding] = useState<boolean>(false)

  const deleteItem = (Title:string) => {
    setList(list.filter((item) => item.Title!== Title))
  }

  const ToggleAdding = ()=>{
    setAding(!adding)
  }

  const add = (newItem:TodoItem) => {
    setList([...list, newItem]);
    ToggleAdding() 
  };

  const toggleDone = (title: string) => {
    setList(list.map(item =>
      item.Title === title ? 
      { ...item, Done: !item.Done } 
      : item
    ));
  };


  return (
    <SafeAreaView style={styles.container}>

      <ScrollView >
      {list.length > 0 ?(
        
          <View >
          {list.map((item,index) => {
              
            return (<TodoItem key={index} todoItem={item} toggleDone={toggleDone} deleteItem={deleteItem}/>)
          })}
          </View>
      
      ):(<Text  style={{fontSize:20, textAlign:'center'}}>Make a new task</Text>)}
      </ScrollView>
    
      {adding ? (
        <TodoForm add={add} ToggleAdding={ToggleAdding}/>
        ):(
        <Button title="+" onPress={ToggleAdding} />
      )}

    </SafeAreaView>
  );
};



export default TodoScreen;
  
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8EAED',
    paddingVertical: 5,
    paddingHorizontal:5,
    justifyContent:'space-between',
    
  }, 
 
})
