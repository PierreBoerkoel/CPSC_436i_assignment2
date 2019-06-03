import React from 'react';
import './post.css';
import NameInput from './name_input';
import PostInput from './thought_input';
import { connect } from 'react-redux';

class ThoughtForm extends React.Component {
    savePost() {
        let newPost = {
            fname: this.props.firstName,
            lname: this.props.lastName,
            thought: this.props.thought
        };
    
        let posts = JSON.parse(localStorage.getItem("postsKey"));
        if (posts === null) {
            localStorage.setItem("postsKey", JSON.stringify([newPost]));
            return;
        }
        posts.push(newPost);
        localStorage.setItem("postsKey", JSON.stringify(posts));
    }

    render() {
        return (
            <div className="container">
                <form onSubmit={ this.savePost.bind(this) }>
                    <NameInput/>
                    <PostInput/>
                    <div className="row">
		                <button type="submit" id="submitButton" disabled={ !this.props.firstName || !this.props.lastName || !this.props.thought }>Submit</button>
		                <input type="reset" id="resetButton" value="Clear"></input>
		            </div>
                </form>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        firstName: state.form.firstName,
        lastName: state.form.lastName,
        thought: state.form.thought
    };
}

export default connect(mapStateToProps)(ThoughtForm);
