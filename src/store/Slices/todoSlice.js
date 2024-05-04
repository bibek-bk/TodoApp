import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
    name: 'todo',
    initialState: {
        todos: [],
    //     todo: {
    //         text: null,
    //         isCompleted: null,
    //         id: null,
    //     },
        isThemeLight: true
    },
    reducers: {
        addTodo: (state, action) => {
            // const { text, isCompleted, id } = action.payload
            // state.todo.todo = {
            //     text: text,
            //     isCompleted: isCompleted,
            //     id: id,
            // }
            state.todos.push(action.payload)
        },
        deleteTodo: (state, action) => {
            state.todos = state.todos.filter(todo => todo.id != action.payload)
        },
        clearAllTodo: (state) => {
             state.todos = []
        },
        
        toggleTheme: (state) => {
             state.isThemeLight = !state.isThemeLight
        },
        toggleIsCompleted: (state,action) => {
            const todoId = action.payload;
            const todoToToggle = state.todos.find(todo => todo.id === todoId);//returns the todo which matches the id
            if (todoToToggle) {
                todoToToggle.isCompleted = !todoToToggle.isCompleted;
            }
        }
    }
})


export const { addTodo, deleteTodo, clearAllTodo, toggleTheme,toggleIsCompleted } = todoSlice.actions
export default todoSlice.reducer