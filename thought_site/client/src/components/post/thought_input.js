import React from 'react';
import { connect } from 'react-redux';
import { updateField } from '../../actions';
import './post.css';

class PostInput extends React.Component {
    handleUpdate(fieldType, e) {
        this.props.updateField(e.target.value, fieldType);
    }
    render() {
        return (
            <div className="row">
                <div className="col-25">
                    <label>Thought</label>
                </div>
                <div className="col-75">
                    <textarea name="thought" value={ this.props.thought } onChange={ this.handleUpdate.bind(this, 'thought') } placeholder="Write something..." style={{height: '200px'}}></textarea>
                </div> 
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        thought: state.form.thought
    };
}

export default connect(mapStateToProps, { updateField })(PostInput);
