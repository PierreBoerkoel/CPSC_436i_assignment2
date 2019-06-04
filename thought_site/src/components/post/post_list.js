import React from 'react';
import Collapsible from 'react-collapsible';
import { connect } from 'react-redux';

class PostList extends React.Component {
    render() {
        const posts = this.props.posts;
        if (posts == null) {
            return null; //don't render this component if there are no posts
        }
        const listItems = posts.map((post) =>
            <Collapsible key={ post.firstName + post.lastName } trigger={post.firstName + " " + post.lastName}>
                <p>{post.thought}</p>
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

export default connect(mapStateToProps)(PostList);
