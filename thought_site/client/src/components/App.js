import React from 'react';
import Navbar from './navbar/navbar.js';
import ThoughtForm from './post/post.js';
import PostList from './post/post_list.js';
import About from './about/about.js'
import { toggleFormInput } from '../actions';
import './App.css';
import { connect } from 'react-redux';

class App extends React.Component {   
    toggleForm() {
        this.props.toggleFormInput(this.props.showForm);
    }
    render() {
        switch (this.props.page) {
            case "Home":
                return(
                    <div>
                        <Navbar/>
                        <div className="title">
                            <h1>Thoughts</h1>
                            <h4>Hello! What are your thoughts today?</h4>
                        </div>
                        <button className="addPostButton" onClick={ this.toggleForm.bind(this) }>Add Thought</button>
                        <ThoughtForm/>
                        <PostList/>
                    </div>
                );
            case "Posts":
                return(
                    <div>
                        <Navbar/>
                        <PostList/>
                    </div>
                );
            case "About":
                return(
                    <div>
                        <Navbar/>
                        <About/>
                    </div>
                );
            default:
                return null;
        }        
    }
}

const mapStateToProps = (state) => {
    return {
        page: state.renderPage,
        showForm: state.showForm
    };
}

export default connect(mapStateToProps, { toggleFormInput })(App);
