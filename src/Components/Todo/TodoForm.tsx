import { useState } from "react"
import { Button, TextInput, View,StyleSheet,Text } from "react-native"

interface TodoFormProps{
    add: (todo: TodoItem) => void;
    ToggleAdding: () => void;
}

const TodoForm:React.FC<TodoFormProps>=({add,ToggleAdding})=>{
    const [title, setTitle] = useState<string>("")
    const [desc, setDesc] = useState<string>("")
    const maxDigits = 50
    const [digitos,serDigitos] = useState<string>(`La descripcion tien un maximo de  ${maxDigits} (0 /  ${maxDigits} digitos)`)

    const updateDesc = (text:string)=>{
        setDesc(text)
        serDigitos(`La descripcion tien un maximo de  ${maxDigits} (${text.length} /  ${maxDigits} digitos)`)
    }

    const CompletAdd = ()=>{
        if (title==='') {
            return
        }

        if (desc.length>maxDigits) {
            return
        }

        setTitle("")
        setDesc("")
        add({ Title: title, Description: desc, Done:false })
    }

    return(
        <View >
            <TextInput
            style={styles.input}
            placeholder="Titulo (obligatorio)"
            value={title}
            onChangeText={setTitle}
            />
            <TextInput
            style={styles.input}
            placeholder="Description"
            value={desc}
            onChangeText={updateDesc}
            />
            <Text style={{color:"grey"}}>{digitos}</Text>
            <View style={{flexDirection:'row',justifyContent:'space-evenly'}}>
                <Button title="Cancel" onPress={() => ToggleAdding()} />
                <Button title="Add" onPress={() => CompletAdd()} />
            </View>
        </View>
    
    )
}

export default TodoForm

const styles = StyleSheet.create({
    input: {
      height: 40,
      borderColor: 'gray',
      borderWidth: 1,
      marginBottom: 10,
      paddingHorizontal: 10,
    },
})

