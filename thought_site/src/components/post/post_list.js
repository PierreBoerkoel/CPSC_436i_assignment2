import React from 'react';
import Collapsible from 'react-collapsible';
import { connect } from 'react-redux';

class PostList extends React.Component {
    render() {
        const posts = this.props.posts;
        if (posts == null) {
            return null;
        }
        const listItems = posts.map((post) =>
            <Collapsible key={ post.firstName + post.lastName } trigger={post.firstName + " " + post.lastName}>
                <p>{post.thought}</p>
            </Collapsible>
        );
        return (
            <div className="title">
		        <h1>Posts</h1>
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
