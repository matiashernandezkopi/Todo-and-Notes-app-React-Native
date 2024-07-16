import React, { useContext, useState } from 'react';
import { View, TextInput, Button, ScrollView, StyleSheet } from 'react-native';
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { RootStackParamList } from './NoteItem';
import { StackNavigationProp } from '@react-navigation/stack';
import { NoteContext, NoteContextType } from './NoteContext';

type NoteScreenRouteProp = RouteProp<RootStackParamList, 'NoteOpen'>;
type NoteScreenNavigationProp = StackNavigationProp<RootStackParamList, 'NoteOpen'>;


const NoteOpen: React.FC = () => {
  const { editNote } = useContext(NoteContext) as NoteContextType;  
  const route = useRoute<NoteScreenRouteProp>();
  const navigation = useNavigation<NoteScreenNavigationProp>();
  const { Note } = route.params;
  const [title, setTitle] = useState(Note.Title);
  const [noteContent, setNoteContent] = useState(Note.Note);


  const handleEdit = () => {
    editNote({
      ...Note,
      Title: title,
      Note: noteContent,
    });
    
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={[styles.input,styles.title]}
        value={title}
        onChangeText={setTitle}
        placeholder="Title"
      />
      <ScrollView style={styles.noteInputContainer}>
        <TextInput
          style={[styles.input, styles.noteInput]}
          value={noteContent}
          onChangeText={setNoteContent}
          placeholder="Note"
          multiline
          textAlignVertical="top" 
          scrollEnabled={true} 
        />
      </ScrollView>
      <Button title="Edit Note" onPress={handleEdit} />
    </View>
  );
};

export default NoteOpen;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 10,
    },
    input: {
      borderRadius: 5,
      padding: 10,
      marginBottom: 10,
    },
    noteInputContainer: {
      flex: 1, 
    },
    noteInput: {
      minHeight: 200, 
      textAlignVertical: 'top',  
    },
    title: {
      fontSize: 20,
    },
  });
