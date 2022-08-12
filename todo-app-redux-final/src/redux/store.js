// import {createStore} from 'redux'
// import rootReducer from './reducer';
// import {composeWithDevTools} from 'redux-devtools-extension'

// const composedEnchancer = composeWithDevTools()

// const store =createStore(rootReducer,composedEnchancer)

// export default store;


import {configureStore} from '@reduxjs/toolkit'
import filterSlice from "../components/Filters/ReducerFilter";
import todoListSlice from "../components/TodoList/ReduceAddtodo";
const store =configureStore({reducer:{
    filters: filterSlice.reducer,
    todoList: todoListSlice.reducer}
})

    export default store;