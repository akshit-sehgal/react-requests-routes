import React, {Component} from 'react';
import axios from '../../../axios';
import Post from '../../../components/Post/Post';
import './Posts.css';
class Posts extends Component{
    state = {
        posts:[]
    };
    componentDidMount(){
        axios.get('/posts').then((response)=>{
            const posts = response.data.slice(0,4);
            const updatedPosts = posts.map(post =>{
                return {
                    ...post,
                    author:'Aks'
                }
            });
            this.setState((prevState,props)=>{
                return {
                    ...prevState,
                    posts:updatedPosts
                };
            });
        }).catch((error)=>{
            console.log(error);
            // this.setState({error:true});
        });
    }
    postSelectedHandler = (id) =>{
        this.setState((prevState, props)=>{
            return {
                ...prevState,
                selectedPostId:id
            }
        })
    }
    render(){
        let posts = <p style={{textAlign:'center'}}>Something went wrong!</p>;
        if(!this.state.error){
        posts =this.state.posts.map((post)=>{
            return (
                <Post 
                title={post.title}
                key={post.id}
                author={post.author}
                clicked={()=>this.postSelectedHandler(post.id)}
                />
            );
        })
    }
        return (
            <section className="Posts">
            {posts}
        </section>
        );
    }
}
export default Posts;