import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import * as CounterActions from '../actions/counter';


class App extends Component {
    render() {
        const { counter, counterActions } = this.props;
        return (
            <div>
                <h1>counter: {counter.counter}</h1>
                <button onClick={ counterActions.increaseCounter }>+</button>
                <button onClick={counterActions.decreaseCounter}>-</button>
                <button onClick={ counterActions.resetCounter }>reset</button>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        counter: state.counter
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        counterActions: bindActionCreators(CounterActions, dispatch)
    };
};

const CounterContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(App);

App.propTypes = {
    counter: PropTypes.object,
}

export default CounterContainer;