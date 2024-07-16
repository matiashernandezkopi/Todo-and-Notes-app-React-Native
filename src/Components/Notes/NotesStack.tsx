import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import NotesScreen from './Notes';
import NoteOpen from './NoteOpen';
import { NoteProvider } from './NoteContext';

const Stack = createStackNavigator();

const NotesStackNavigator = () => {
  return (
    <NoteProvider>
      
        <Stack.Navigator>
          <Stack.Screen name="NotesListed" component={NotesScreen} />
          <Stack.Screen name="NoteOpen" component={NoteOpen} />
        </Stack.Navigator>
      
    </NoteProvider>
  );
};

export default NotesStackNavigator;
