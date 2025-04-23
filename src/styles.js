// src/styles.js
import { StyleSheet } from 'react-native';

export const lightTheme = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF5F5',
    padding: 20,
    paddingTop: 80, // Add this line to push everything down  
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'center', // Centered header
    alignItems: 'center',
    marginBottom: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#FF6B8B', // Pink color
    fontFamily: 'Arial', // Consider using a more feminine font if available
    textAlign: 'center', // Centered text
    textShadowColor: 'rgba(255, 192, 203, 0.5)', // Soft shadow
    textShadowOffset: {width: 1, height: 1},
    textShadowRadius: 3,
  },
  addTaskContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    backgroundColor: 'white',
    borderRadius: 25,
    padding: 5,
    paddingLeft: 20,
    shadowColor: '#FF6B8B',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 3,
  },
  addTaskInput: {
    flex: 1,
    borderWidth: 0, // Removing border for cleaner look
    padding: 10,
    marginRight: 10,
    color: '#FF6B8B',
    fontSize: 16,
  },
  filterContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 20,
  },
  filterButton: {
    padding: 10,
    borderRadius: 20, // More rounded corners
    marginHorizontal: 5,
    backgroundColor: '#FFC0CB', // Light pink
    minWidth: 100,
    alignItems: 'center',
  },
  filterButtonActive: {
    backgroundColor: '#FF6B8B', // Darker pink when active
  },
  filterText: {
    color: 'white',
    fontWeight: '600',
  },
  taskItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#FFD6DE', // Light pink border
    backgroundColor: 'white',
    borderRadius: 15,
    marginBottom: 10,
    shadowColor: '#FFD6DE',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 2,
  },
  taskTitle: {
    flex: 1,
    marginLeft: 10,
    color: '#FF6B8B',
    fontSize: 16,
    textAlign: 'center', // Centered task text
  },
  taskInput: {
    flex: 1,
    marginLeft: 10,
    borderWidth: 0,
    padding: 5,
    color: '#FF6B8B',
    fontSize: 16,
    textAlign: 'center', // Centered input text
  },
  addButton: {
    backgroundColor: '#FF6B8B',
    borderRadius: 25,
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#FF6B8B',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
  },
});

export const darkTheme = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2A0A1A', // Dark pinkish background
    padding: 20,
     paddingTop: 80, 
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#FF9EB7', // Lighter pink for dark theme
    fontFamily: 'Arial',
    textAlign: 'center',
    textShadowColor: 'rgba(255, 158, 183, 0.3)',
    textShadowOffset: {width: 1, height: 1},
    textShadowRadius: 3,
  },
  addTaskContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    backgroundColor: '#3A1A2A',
    borderRadius: 25,
    padding: 5,
    paddingLeft: 20,
    shadowColor: '#FF9EB7',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 3,
  },
  addTaskInput: {
    flex: 1,
    borderWidth: 0,
    padding: 10,
    marginRight: 10,
    color: '#FF9EB7',
    fontSize: 16,
  },
  filterContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 20,
  },
  filterButton: {
    padding: 10,
    borderRadius: 20,
    marginHorizontal: 5,
    backgroundColor: '#5A2A3A',
    minWidth: 100,
    alignItems: 'center',
  },
  filterButtonActive: {
    backgroundColor: '#FF9EB7',
  },
  filterText: {
    color: 'white',
    fontWeight: '600',
  },
  taskItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#4A2A3A',
    backgroundColor: '#3A1A2A',
    borderRadius: 15,
    marginBottom: 10,
    shadowColor: '#4A2A3A',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 2,
  },
  taskTitle: {
    flex: 1,
    marginLeft: 10,
    color: '#FF9EB7',
    fontSize: 16,
    textAlign: 'center',
  },
  taskInput: {
    flex: 1,
    marginLeft: 10,
    borderWidth: 0,
    padding: 5,
    color: '#FF9EB7',
    fontSize: 16,
    textAlign: 'center',
  },


});