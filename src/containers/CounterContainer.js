import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as CounterActions from '../actions/counter';


class App extends Component {
    render() {
        const { counter, counterActions } = this.props;
        return (
            <div>
                <h1>counter: {counter}</h1>
                <button onClick={ counterActions.increaseCounter }>+</button>
                <button onClick={ counterActions.decreaseCounter }>-</button>
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



export default CounterContainer;