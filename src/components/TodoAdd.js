import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TodoAdd extends Component {
    constructor(props) {
        super(props);

        this._onAddClick = this._onAddClick.bind(this);
    }

    render() {
        return (
            <div>
                <input type="text" ref="addInput" />
                <button onClick={this._onAddClick}>Create</button>
            </div>
        );
    }

    _onAddClick() {
        const addInput = this.refs.addInput;
        this.props.addTask(addInput.value);
        addInput.value = '';
    }
}

TodoAdd.propTypes = {
    addTask: PropTypes.func
}

export default TodoAdd;
