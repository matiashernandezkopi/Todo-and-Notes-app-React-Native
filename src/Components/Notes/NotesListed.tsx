import { ScrollView, View} from "react-native"
import Note from "./NoteItem"


interface notesListProps{
    list:Note[]
}

const NoteListed:React.FC<notesListProps>=({list})=>{
    
    return(
        <ScrollView >
            <View >
                {list.map((note,index) => {
                    return (<Note key={index} Note={note}  />)
                })}
            </View>
        </ScrollView>
    )
}

export default NoteListed