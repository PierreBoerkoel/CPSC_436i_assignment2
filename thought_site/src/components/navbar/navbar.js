import React from 'react';
import { connect } from 'react-redux';
import { updatePage } from '../../actions';
import './navbar.css';

class Navbar extends React.Component {
    navigate(page) {
        console.log(page);
        this.props.updatePage(page);
    }
    render() {
        return (
            <div id="navbar">
                <button onClick={ this.navigate.bind(this, 'Home') }>Home</button>
                <button onClick={ this.navigate.bind(this, 'Posts') }>Posts</button>
                <button onClick={ this.navigate.bind(this, 'About') }>About</button>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        page: state.renderPage
    };
}
export default connect(mapStateToProps, { updatePage })(Navbar);
