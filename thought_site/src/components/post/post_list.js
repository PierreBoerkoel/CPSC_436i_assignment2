import React from 'react';
import Collapsible from 'react-collapsible';

class PostList extends React.Component {
    render() {
        const posts = JSON.parse(localStorage.getItem("postsKey"));
        if (posts === null) {
            return null;
        }
        const listItems = posts.map((post) =>
            <Collapsible key={ post.fname + post.lname } trigger={post.fname + " " + post.lname}>
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

export default PostList;
