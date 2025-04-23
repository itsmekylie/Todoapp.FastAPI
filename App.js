// App.js
import React, { useState, useEffect, useContext } from 'react';
import { SafeAreaView, View, Text } from 'react-native';
import { ThemeContext, ThemeProvider } from './src/ThemeContext';
import ThemeToggle from './src/components/ThemeToggle';
import AddTask from './src/components/AddTask';
import FilterButtons from './src/components/FilterButtons';
import TaskList from './src/components/TaskList';
import { getTodos, createTodo, updateTodo, deleteTodo } from './src/api';
import { lightTheme, darkTheme } from './src/styles';

function MainApp() {
  const { theme } = useContext(ThemeContext);
  const styles = theme === 'light' ? lightTheme : darkTheme;
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState('all');
  const [allTasks, setAllTasks] = useState([]); // Store all tasks separately

  // Load all tasks initially
  useEffect(() => {
    const fetchAllTasks = async () => {
      try {
        const data = await getTodos(); // Get all tasks without filter
        setAllTasks(data);
        setTasks(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchAllTasks();
  }, []);

  // Apply filter locally without API call
  useEffect(() => {
    if (filter === 'all') {
      setTasks(allTasks);
    } else if (filter === 'completed') {
      setTasks(allTasks.filter(task => task.completed));
    } else if (filter === 'pending') {
      setTasks(allTasks.filter(task => !task.completed));
    }
  }, [filter, allTasks]);

  const handleAddTodo = async (title) => {
    try {
      const newTodo = await createTodo(title);
      setAllTasks([...allTasks, newTodo]);
      setTasks(prevTasks => [...prevTasks, newTodo]);
    } catch (error) {
      console.error(error);
    }
  };

  const handleUpdateTodo = async (id, updates) => {
    try {
      const updatedTodo = await updateTodo(id, updates);
      setAllTasks(allTasks.map(todo => (todo.id === id ? updatedTodo : todo)));
      setTasks(tasks.map(todo => (todo.id === id ? updatedTodo : todo)));
    } catch (error) {
      console.error(error);
    }
  };

  const handleDeleteTodo = async (id) => {
    try {
      await deleteTodo(id);
      setAllTasks(allTasks.filter(todo => todo.id !== id));
      setTasks(tasks.filter(todo => todo.id !== id));
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>To-Do List</Text>
        <ThemeToggle />
      </View>
      <AddTask onAdd={handleAddTodo} />
      <FilterButtons filter={filter} setFilter={setFilter} />
      <TaskList tasks={tasks} onUpdate={handleUpdateTodo} onDelete={handleDeleteTodo} />
    </SafeAreaView>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <MainApp />
    </ThemeProvider>
  );
}