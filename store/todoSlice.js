import {createSlice} from '@reduxjs/toolkit'

const todoSlice = createSlice({
    name: 'todos',
    initialState: {
        todos: []
    },
    reducers: {
        addTask(state, action) {
            state.todos.push({
                title: action.payload.value, id: new Date().toISOString(), status: false
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
        }
    }
});

export const {addTask, deleteTask, doneTask, editTask} = todoSlice.actions;
export default todoSlice.reducer;