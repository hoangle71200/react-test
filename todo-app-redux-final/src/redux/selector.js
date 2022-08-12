import { createSelector } from '@reduxjs/toolkit';
// export const todoListSelector =(state) =>{
//     const searchText = searchFilter(state);
//     const todoListHandle = state.todoList.filter(todo=>{
//         return todo.name.includes(searchText)

//     }
//     )
//     return todoListHandle;

// }

export const searchFilter = (state) => state.filters.search;
export const TodoListSelect = (state) => state.todoList;
export const statusSelect = (state) => state.filters.status;
export const prioritySelect = (state) => state.filters.priority;


//nếu 1 select phụ thuộc vào selector khác
export const todoListFilter = createSelector(
    TodoListSelect,
    statusSelect,
    prioritySelect, 
    searchFilter, 
    (todoList,status,priority,searchFilter) => {
    return todoList.filter((todo) => {
        if(status === 'All' )
            return priority.length ? todo.name.includes(searchFilter) && priority.includes(todo.priority) : todo.name.includes(searchFilter)
        return todo.name.includes(searchFilter) && 
               (status !== 'All' && status === 'Completed' 
               ? todo.completed 
               : !todo.completed)  && (priority.length ? priority.includes(todo.priority) : true)

    }
    )
})

