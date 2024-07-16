import React, { createContext, useState, ReactNode } from 'react';

export interface NoteContextType {
  notes: Note[];
  deleteNote: (id: number) => void;
  editNote: (editedNote: Note) => void;
  addNote: () => void;
}

export const NoteContext = createContext<NoteContextType | undefined>(undefined);

export const NoteProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [notes, setNotes] = useState<Note[]>([
    { Title: 'hi', Note: 'Lorem ipsum dolor sit amet...', id: 0 },
    { Title: 'hi', Note: '2', id: 1 },
  ]);

  const deleteNote = (id: number) => {
    const newList = notes.filter(note => note.id !== id);
    setNotes(newList);
  };

  const editNote = (editedNote: Note) => {
    setNotes(notes.map(note => (note.id === editedNote.id ? editedNote : note)));
    
  };

  const addNote = () => {
    const newNote = { Title: 'New Note', Note: 'Your note HERE', id: notes.length };
    setNotes([...notes, newNote]);
  }


  return (
    <NoteContext.Provider value={{ notes, deleteNote, editNote, addNote }}>
      {children}
    </NoteContext.Provider>
  );
};
