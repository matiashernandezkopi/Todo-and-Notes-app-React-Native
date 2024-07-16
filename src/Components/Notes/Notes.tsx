import { Text,StyleSheet, SafeAreaView, Pressable } from "react-native";
import NoteListed from "./NotesListed";
import { useContext,  } from "react";
import { NoteContext, NoteContextType } from "./NoteContext";

const NotesScreen = () => {
  const { notes,addNote } = useContext(NoteContext) as NoteContextType;  

  return(
    <SafeAreaView style={styles.container}>
      
      <NoteListed list={notes}   />

      <Pressable style={{ backgroundColor: '#f1948a', padding: 10, margin:10, borderRadius: 10}} onPress={addNote}>
          <Text style={{ color: 'white', fontWeight: 'bold',textAlign:'center' }}>New Note</Text>
      </Pressable>
    
    </SafeAreaView>
  );
}


export default NotesScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8EAED',
    justifyContent:'space-between'
    
  }
})

