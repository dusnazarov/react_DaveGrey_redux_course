import { createSlice } from '@reduxjs/toolkit';

const initialState = [
    {id:'0', name: 'Due Leboskiy'},
    {id:'1', name: 'Neil Lojin'},
    {id:'2', name: 'Nick kiyen'},
]

const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {}

})

export const selectAllUsers = (state) => state.users;
export default usersSlice.reducer