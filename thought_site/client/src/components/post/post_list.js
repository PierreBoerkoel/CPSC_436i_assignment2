import React from 'react';
import Collapsible from 'react-collapsible';
import { connect } from 'react-redux';

import { deleteThoughtDataFromDb, fetchThoughtDataFromDb } from "../../actions";

class PostList extends React.Component {
    deletePost(postid, e) {
        this.props.deleteThoughtDataFromDb(postid);
    }

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
    }

    clearForm(e) {
        e.preventDefault(); //don't reload
        this.props.updateField("", 'clear');
    }

    updatePost(post) {
        //TODO
    }
    
    render() {
        const posts = this.props.posts;
        if (posts === null || posts.length === 0) {
            return null; //don't render this component if there are no posts
        }
        const listItems = posts.map((post, index) =>
            <Collapsible key={ post._id } trigger={post.firstName + " " + post.lastName}>
                <p>{post.thought}</p>
                <div className="row">
                    <button onClick={ this.updatePost.bind(this, post) }>Update</button>
                    <button onClick={ this.deletePost.bind(this, post._id) }>Delete</button>
                </div>
            </Collapsible>
        );
        return (
            <div className="title">
                <h1 id="postTitle">Posts</h1>
                <p id="postInfo">Click a name to view the post</p>
                {listItems}
	        </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        posts: state.posts
    };
}

export default connect(mapStateToProps, { deleteThoughtDataFromDb, fetchThoughtDataFromDb })(PostList);
