// const initSate ={
//         search:"",
//         status:'All',
//         priority:[]
// }
// const ReducerFilter =(state=initSate,action)=>{
//         switch(action.type){
//             case 'Filter/searchFilter':
//             return {
//                         // lưu dữ liệu cũ và ép dữ liệu mới
//                         ...state,
//                         search:action.payload
//             }
//             case 'Filter/selectStatus':
//                 return {
//                             // lưu dữ liệu cũ và ép dữ liệu mới
//                             ...state,
//                             status:action.payload
//                 }
//             case 'Filter/priorityFilter':
//                 return{
//                         ...state,
//                         priority:action.payload
//                 }
//             default:
//               return state;
//         }
// }



// export default ReducerFilter;


import {createSlice} from '@reduxjs/toolkit'

export default createSlice({
        name:'Filter',
        initialState:{
                        search:"",
                        status:'All',
                        priority:[]
                },
        reducers:{
                searchFilter:(state,action)=>{
                        state.search=action.payload;
                },
                selectStatus:(state,action)=>{
                        state.status=action.payload
                },
                priorityFilter:(state,action)=>{
                        state. priority=action.payload
                }
        }
})

