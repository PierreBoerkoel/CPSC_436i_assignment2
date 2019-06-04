import React from 'react';
import { connect } from 'react-redux';
import { updateField } from '../../actions';
import './post.css';

class NameInput extends React.Component {
    handleUpdate(fieldType, e) {
        this.props.updateField(e.target.value, fieldType)
    }

    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-25">
                        <label>First Name</label>
                    </div>
                    <div className="col-75">
                        <input type="text" value={ this.props.firstName } onChange={ this.handleUpdate.bind(this, 'firstName') } name="firstName" placeholder="Your first name..."></input>
                    </div>
                </div>
                <div className="row">
                    <div className="col-25">
                        <label>Last Name</label>
                    </div>
                    <div className="col-75">
                        <input type="text" value={ this.props.lastName } onChange={ this.handleUpdate.bind(this, 'lastName') } name="lastName" placeholder="Your last name..."></input>
                    </div>
                </div>
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

export default connect(mapStateToProps, { updateField })(NameInput);
