import "./PostListItem.css"
import { Component } from "react"

class PostListItem extends Component {
    state = {
        className: "app-list-item d-flex justify-content-between content",
        className2: "btn-heart border btn-sm",
        important: false,
        like: false,
        delete: false
    }

    onImportant = () => {
        if (!this.state.important) {
            this.setState({ important: true })
        } else {
            this.setState({ important: false })
        }
    }

    onImportant2 = () => {
        if (!this.state.like) {
            this.setState({ like: true })
            this.props.addLike()
        } else {
            this.setState({ like: false })
            this.props.minusLike()
        }
    }

    deletePost = () => {
        if (!this.state.delete) {
            this.setState({ delete: true })
        } else {
            this.setState({ delete: false })
        }

        setTimeout(() => {
            this.props.onDelete()
            this.props.minusPostLength()
            if (this.state.like) {
                this.props.minusLike()
            }
        }, 500);
    }

    render() {
        const { className, className2 } = this.state
        const { post } = this.props
        return (
            <div className={!this.state.delete ? "visible" : "hidden"}>
                <li className={!this.state.important ? className : className + " important"}>
                    <span className="app-list-item-label">
                        {post}
                    </span>
                    <div className="d-flex justify-content-center align-items-center">
                        <button
                            type="button"
                            className="btn-start border btn-sm"
                            onClick={this.onImportant}
                        >
                            <i className="fa fa-star"></i>
                        </button>
                        <button type="button" className="btn-trash border btn-sm" onClick={this.deletePost}>
                            <i className="fas fa-trash"></i>
                        </button>
                        <button
                            type="button"
                            className={!this.state.like ? className2 : className2 + " important2"}
                            onClick={this.onImportant2}>
                            <i className="fa fa-heart"></i>
                        </button>
                    </div>
                </li>
            </div>
        );
    }
}

export default PostListItem;