import PostAddForm from "../PostAddForm";
import PostList from "../PostList/PostList";
import SearchPanel from "../SearchPanel";
import "./App.css"
import AppHeader from "../AppHeader";
import { Component } from "react";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: [
                { post: "Going to learn React js", important: true, id: 1 },
                { post: "That is so good", important: true, id: 2 },
                { post: "I need break...", important: true, id: 3 },
            ],
            likeIndex: 0,
            term: "",
            filter: "",
            like: false
        }
        this.maxId = 3
        this.postIndex = this.state.posts.length
    }

    addPost = (body) => {
        const newPost = {
            post: body,
            important: true,
            id: this.maxId = this.maxId + 1
        }

        this.setState(({ posts }) => {
            const newArr = [...posts, newPost];
            return {
                posts: newArr
            }
        })
    }

    addPostLength = () => {
        this.postIndex = this.postIndex + 1
    }

    minusPostLength = () => {
        this.postIndex = this.postIndex - 1
    }

    addLike = () => {
        this.setState({ likeIndex: this.state.likeIndex + 1 })
    }

    minusLike = () => {
        this.setState({ likeIndex: this.state.likeIndex - 1 })
    }

    deleteItem = (id) => {
        this.setState(({ posts }) => {
            const index = posts.findIndex(element => element.id === id);
            const before = posts.slice(0, index);
            const after = posts.slice(index + 1);

            const newArr = [...before, ...after]

            return {
                posts: newArr
            }
        })
    }

    searchPost = (items, term) => {
        if (term.length === 0) {
            return items
        }

        return items.filter(item => {
            return item.post.indexOf(term) > -1
        })
    }

    onUpdateSearch = (term) => {
        this.setState({ term })
    }

    filterPost = (items, filter) => {
        if (filter === "like") {
            return items.filter(item => item.like)
        } else {
            return items
        }
    }

    render() {
        const visiblePosts = this.filterPost(this.searchPost(this.state.posts, this.state.term), this.state.filter)
        return (
            <div className="app">
                <AppHeader postIndex={this.postIndex} likeIndex={this.state.likeIndex} />
                <div className="search-panel d-flex">
                    <SearchPanel onUpdateSearch={this.onUpdateSearch} />
                </div>
                <PostList posts={visiblePosts}
                    onDelete={this.deleteItem}
                    addPostLength={this.addPostLength}
                    minusPostLength={this.minusPostLength}
                    addLike={this.addLike}
                    minusLike={this.minusLike}
                />
                <PostAddForm addPost={this.addPost} addPostLength={this.addPostLength} />
            </div>
        );
    }
}

export default App;