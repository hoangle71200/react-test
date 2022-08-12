// const initSate =
//     [
//         {
//             id: 1,
//             name: 'learn redux',
//             completed: false,
//             priority: 'Medium'

//         },
//         {
//             id: 2,
//             name: 'learn html',
//             completed: true,
//             priority: 'High'

//         }
//     ]

// const reducerAddtodo = (state = initSate, action) => {
//     switch (action.type) {
//         case 'todoList/addTodo':
//             // add todo mới
//             return [...state, action.payload]
//         // cập nhật prototype của dữ liệu todo khi thao tác change status
//         case 'todoList/toggleStatusTodo':
//             return state.map(todo => todo.id === action.payload ? { ...todo, completed: !todo.completed } : todo)
//         default:
//             return state;
//     }
// }

// export default reducerAddtodo;


import { createSlice } from "@reduxjs/toolkit";

export default createSlice({
    name:'todoList',
    initialState: [
                {
                    id: 1,
                    name: 'learn redux',
                    completed: false,
                    priority: 'Medium'
        
                },
                {
                    id: 2,
                    name: 'learn html',
                    completed: true,
                    priority: 'High'
        
                }
            ],
    reducers:{
        addTodo:(state,action)=>{
            state.push(action.payload)
        },
        toggleStatusTodo:(state,action)=>{
            const currentTodo = state.filter(todo => todo.id === action.payload)
            currentTodo.completed = !currentTodo.completed;
        }
    }
})
