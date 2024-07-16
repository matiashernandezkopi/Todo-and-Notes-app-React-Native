import { useNavigation } from "@react-navigation/native"
import React, { useContext, useState } from "react"
import { View,Text,StyleSheet, TouchableOpacity } from "react-native"
import { StackNavigationProp } from '@react-navigation/stack';
import { NoteContext, NoteContextType } from "./NoteContext";

interface NoteProps {
  Note: Note;
}

export type RootStackParamList = {
  NoteOpen: {
    Note: Note;
  };
};

type NoteScreenNavigationProp = StackNavigationProp<RootStackParamList, 'NoteOpen'>;

const Note: React.FC<NoteProps> = ({ Note }) => {
  const [Deleting, setDeleting] = useState<boolean>(false);
  const navigation = useNavigation<NoteScreenNavigationProp>();

  const { deleteNote } = useContext(NoteContext) as NoteContextType;  


  const handleDelete = () => {
    setDeleting(false);
    deleteNote(Note.id)
  };

  const handleEditNavigation = () => {
    navigation.navigate('NoteOpen', { Note });
  };

  return (
    <View style={styles.container}>

      <TouchableOpacity onPress={handleEditNavigation}>
        <Text style={[styles.title]}>{Note.Title}</Text>
        <Text style={{ width: 300 }}>{Note.Note.substring(0, 100)}</Text>
      </TouchableOpacity>

      <View style={{ flexDirection: 'row', gap:15, alignItems: 'center' }}>
        {Deleting ? (
          <>
            <TouchableOpacity onPress={handleDelete} style={styles.delete}>
              <Text style={{ color: 'white', fontSize: 20, fontWeight: 'bold' }}>X</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => setDeleting(false)} style={[styles.delete, { backgroundColor: 'green' }]}>
              <Text style={{ color: 'white', fontSize: 20, fontWeight: 'bold' }}>C</Text>
            </TouchableOpacity>
          </>
        ) : (
          <TouchableOpacity onPress={() => setDeleting(true)} style={[styles.delete, { backgroundColor: 'white' }]}>
            <Text style={{ color: 'red', fontSize: 20, fontWeight: 'bold' }}>X</Text>
          </TouchableOpacity>
        )}
      </View>

    </View>
  );
};

export default Note;

const styles = StyleSheet.create({
  delete: {
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 10,
    padding: 5,
    fontSize: 20,
    backgroundColor: 'red',
    color: 'white',
    width: 35,
    height: 35,
    textAlign: 'center',
  },
  title: {
    fontSize: 20,
  },
  container: {
    padding: 10,
    paddingHorizontal: 15,
    borderWidth: 1,
    borderRadius: 20,
    backgroundColor: '#ffffff',
    borderColor: '#D3D3D3',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
});
