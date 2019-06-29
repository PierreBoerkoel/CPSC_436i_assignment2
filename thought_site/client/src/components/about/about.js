import React from 'react';
import { connect } from 'react-redux';
import { updateField } from '../../actions';
import './about.css';

class About extends React.Component {
    handleUpdate(fieldType, e) {
        this.props.updateField(e.target.value, fieldType)
    }

    render() {
        return (
            <div>
                <h1>About Me</h1>
                <p>Hello! I am a BCS student at UBC</p>
            </div>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        firstName: state.form.firstName,
        lastName: state.form.lastName
    };
}

export default connect(mapStateToProps, { updateField })(About);
