import {createSlice} from '@reduxjs/toolkit'

const todoSlice = createSlice({
    name: 'todos',
    initialState: {
        todos: []
    },
    reducers: {
        addTask(state, action) {
            state.todos.push({
                title: action.payload.value, id: action.payload.id, status: false, description: action.payload.description
            });
        },
        deleteTask(state, action) {
            state.todos = state.todos.filter(todo => todo.id !== action.payload.id)
        },
        doneTask(state, action) {
            const doneTodo = state.todos.find((todo) => todo.id === action.payload.id)
            doneTodo.status = !doneTodo.status
        }, 
        editTask(state, action){
            const editTodo = state.todos.find((todo) => todo.id === action.payload.id)
            editTodo.title = action.payload.nameFieldValue;

        },
        editDescription(state, action){
            const editTodo = state.todos.find((todo) => todo.id === action.payload.id)
            editTodo.description = action.payload.descriptionFieldValue;
        }
    }
});

export const {addTask, deleteTask, doneTask, editTask, editDescription} = todoSlice.actions;
export default todoSlice.reducer;