import React from 'react';
import NameInput from './name_input';
import PostInput from './thought_input';
import { connect } from 'react-redux';
import { toggleFormInput, fetchThoughtDataFromDb, putThoughtData, updateField } from '../../actions';
import './post.css';


class ThoughtForm extends React.Component {
    savePost(e) {
        e.preventDefault(); // allows us to display post immediately instead of waiting for reload
        let newPost = {
            _id: this.getRandomInt(1, 10000),
            firstName: this.props.firstName,
            lastName: this.props.lastName,
            thought: this.props.thought
        };

        this.props.putThoughtData(newPost);
        this.props.updateField("", 'clear');
        this.props.toggleFormInput(this.props.showForm);
    }

    clearForm(e) {
        e.preventDefault(); //don't reload
        this.props.updateField("", 'clear');
    }

    getRandomInt(bottom, top) {
        return Math.floor( Math.random() * ( 1 + top - bottom ) ) + bottom;
    }

    render() {
        if (!this.props.showForm) {
            return null;
        }
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

        posts: state.posts,

        showForm: state.showForm
    };
}

export default connect(mapStateToProps, { toggleFormInput, fetchThoughtDataFromDb, putThoughtData, updateField })(ThoughtForm);
