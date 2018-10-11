import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TodosAdd extends Component {
    render() {
        return (
            <div className="todos-item todos-item-add">
                <input className="todos-item-text" type="text" ref="addInput" />
                <button onClick={ () => this.handleAdd() }>Create</button>
            </div>
        );
    }

    handleAdd() {
        const addInput = this.refs.addInput;
        if (addInput.value === '') return;

        this.props.addTask(addInput.value.trim());
        addInput.value = '';        
    }
}

TodosAdd.propTypes = {
    addTask: PropTypes.func,
};

export default TodosAdd;