import { useState } from "react";
import { View,Text,StyleSheet } from "react-native";

interface TodoItemProps{
    todoItem: TodoItem;
    deleteItem: (Title:string) => void 
    toggleDone: (title:string) => void
}
  
const TodoItem:React.FC<TodoItemProps> = ({todoItem,deleteItem,toggleDone})=>{
    const [deleting,setDeleting]=useState<boolean>(false)

    const DeleteThis = ()=>{
        deleteItem(todoItem.Title)
        setDeleting(false)
    }
    
    return(
        <View style={styles.container}>
            <View>
                <Text style={[styles.title, todoItem.Done && styles.strikethrough]}>{todoItem.Title}</Text>
                <Text style={{width:200}} >{todoItem.Description}</Text>
            </View>
            
            <View style={{flexDirection:'row'}}>

                {!deleting?
                    <Text onPress={()=>setDeleting(!deleting)} style={styles.delete}>-</Text>
                    :(<View style={{flexDirection:'row'}}>
                        
                        <Text onPress={DeleteThis} style={styles.delete}>Y</Text>
                        <Text onPress={()=>setDeleting(!deleting)} style={styles.keep}>N</Text>

                    </View>)
                }
                
                {todoItem.Done?
                    <Text onPress={()=>toggleDone(todoItem.Title)} style={styles.check}>✓</Text>
                    :
                    <Text onPress={()=>toggleDone(todoItem.Title)} style={styles.uncheck}>X</Text>
                }
            </View>
        </View>
    )
}

export default TodoItem;

const styles = StyleSheet.create({
    check:{
        borderWidth:1,
        borderColor:'black',
        borderRadius:10,
        padding:5,
        margin:10,
        fontSize:20,
        color:'green',
        width:35,
        height:35,
        textAlign:'center',
    },
    uncheck:{
        borderWidth:1,
        borderColor:'black',
        borderRadius:10,
        padding:5,
        margin:10,
        fontSize:20,
        color:'gray',
        width:35,
        height:35,
        textAlign:'center',
    },
    delete:{
        borderWidth:1,
        borderColor:'black',
        borderRadius:10,
        padding:5,
        margin:10,
        fontSize:20,
        backgroundColor:'red',
        color:'white',
        width:35,
        height:35,
        textAlign:'center',
    },
    keep:{
        borderWidth:1,
        borderColor:'black',
        borderRadius:10,
        padding:5,
        margin:10,
        fontSize:20,
        backgroundColor:'green',
        color:'white',
        width:35,
        height:35,
        textAlign:'center',
    },
    strikethrough: {
        textDecorationLine: 'line-through',
        color: 'green', 
    },
    title: {
        fontSize: 20,
    },
    container:{
        padding:10,
        paddingHorizontal:15, 
        borderWidth:1, 
        borderRadius:20,
        backgroundColor:'#ffffff', 
        borderColor:'#D3D3D3',
        justifyContent:'space-between',
        flexDirection:'row',
    },

})