import React from 'react';
import Navbar from './navbar/navbar.js';
import ThoughtForm from './post/post.js';
import PostList from './post/post_list.js'
import './App.css';
import { connect } from 'react-redux';

const App = () => {
    return(
        <div>
            <Navbar/>
            <div className="title">
                <h1>Thoughts</h1>
                <h4>Hello! What are your thoughts today?</h4>
            </div>
            <ThoughtForm/>
            <PostList/>
        </div>
    );
}
const mapStateToProps = (state) => {
    return {
        page: state.renderPage
    };
}

export default connect(mapStateToProps)(App);



