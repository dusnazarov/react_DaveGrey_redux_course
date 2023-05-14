import {createSlice} from '@reduxjs/toolkit';

const initialState = [
    {id: '1', title: 'Learn Redux Toolkit', content: 'I have heard good things.'},
    {id: '2', title: 'Slices...', content: 'The more I say slice.'},
    
]

const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {}
})

export const selectAllPosts = (state) => state.posts

export default postsSlice.reducer
