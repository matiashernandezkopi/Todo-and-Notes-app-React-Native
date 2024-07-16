import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import TodoScreen from './src/Components/Todo/Todo';
import NotesStackNavigator from './src/Components/Notes/NotesStack';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="Notes" options={{ headerShown: false }} component={NotesStackNavigator} />
          <Tab.Screen name="ToDo" component={TodoScreen} />
        </Tab.Navigator>
    </NavigationContainer>
  );
};
