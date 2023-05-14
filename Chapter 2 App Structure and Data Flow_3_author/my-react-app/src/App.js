import React from "react"
import PostList from "./features/posts/PostList";
import AddPostForm from "./features/posts/AddPostForm";


export default function App() {
    
    return(
        <main className="App">
            <AddPostForm />
            <PostList />          
        </main>
    );        
}







