import { Component } from "react";
import PostListItem from "../PostListItem";
import "./PostList.css"

class PostList extends Component {
    state = {}

    render() {
        const { posts } = this.props
        return (
            <ul className="app-list list-group">
                {
                    posts.map((post) => {
                        return <PostListItem
                            {...post}
                            key={post.id}
                            onDelete={() => { this.props.onDelete(post.id) }}
                            minusPostLength={this.props.minusPostLength}
                            addLike={this.props.addLike}
                            minusLike={this.props.minusLike}
                        />
                    })
                }
            </ul>
        );
    }
}

export default PostList;