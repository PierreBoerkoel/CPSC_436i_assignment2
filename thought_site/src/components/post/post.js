import React from 'react';
import './post.css';
import NameInput from './name_input';
import PostInput from './thought_input';
import { connect } from 'react-redux';
import { updatePosts } from '../../actions';
import { updateField } from '../../actions';


class ThoughtForm extends React.Component {
    savePost(e) {
        e.preventDefault(); //don't reload -- want to see the new post on the page
        let newPost = {
            firstName: this.props.firstName,
            lastName: this.props.lastName,
            thought: this.props.thought
        };

        this.props.updatePosts(newPost);
        this.props.updateField("", 'clear');
    }

    clearForm(e) {
        e.preventDefault(); //don't reload -- want to see the new post on the page
        this.props.updateField("", 'clear');
    }

    render() {
        return (
            <div className="container">
                <form onSubmit={ this.savePost.bind(this) }>
                    <NameInput/>
                    <PostInput/>
                    <div className="row">
		                <button type="submit" id="submitButton" disabled={ !this.props.firstName || !this.props.lastName || !this.props.thought }>Submit</button>
                        <button type="reset" id="resetButton" onClick={ this.clearForm.bind(this) }>Clear</button>
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
        thought: state.form.thought,

        posts: state.posts
    };
}

export default connect(mapStateToProps, { updatePosts, updateField })(ThoughtForm);
