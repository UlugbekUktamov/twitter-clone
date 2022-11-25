import React, { Component } from "react";
import "./PostAddForm.css"

class PostAddForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: ""
        }
        this.valueRef = React.createRef()
    }

    handleChange = (e) => {
        this.setState({ value: e.target.value })
    }

    handlePost = () => {
        if (this.state.value.trim().length) {
            this.props.addPost(this.state.value)
            this.setState({ value: "" })
            this.props.addPostLength()
        }
    }

    onKeyDown = (e) => {
        if (e.code === "Enter") {
            this.handlePost()
        }
    }

    componentDidMount() {
        this.valueRef.current.focus()
    }

    state = {}
    render() {
        return (
            <div className="bottom-panel d-flex">
                <input
                    type="text"
                    placeholder="What are you thinking about ?"
                    className="form-control new-post-label"
                    value={this.state.value}
                    onChange={this.handleChange}
                    onKeyDown={this.onKeyDown}
                    ref={this.valueRef}
                />
                <button
                    type="submit"
                    className="btn btn-outline-secondary"
                    onClick={this.handlePost}
                >
                    Add Post
                </button>
            </div>
        );
    }
}

export default PostAddForm;