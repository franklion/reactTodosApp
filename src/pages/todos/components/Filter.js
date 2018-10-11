import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Filter extends Component {
    render() {
        const { filter, setFilter } = this.props
        return (
            <div className="todos-filter">
                <button className="btn-filter" onClick={ () => setFilter('SHOW_ALL') } disabled={ filter === 'SHOW_ALL' }>All</button>
                <button className="btn-filter" onClick={ () => setFilter('SHOW_COMPLETED') } disabled={ filter === 'SHOW_COMPLETED' }>Completed</button>
                <button className="btn-filter" onClick={ () => setFilter('SHOW_UNCOMPLETED') } disabled={ filter === 'SHOW_UNCOMPLETED' }>Uncompleted</button>
            </div>
        );
    }
}

Filter.propTypes = {
    filter: PropTypes.string,
    setFilter: PropTypes.func,
};

export default Filter;