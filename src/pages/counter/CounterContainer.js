import React, { Component } from 'react'
import { connect } from 'react-redux'
import { increaseCounter, decreaseCounter, resetCounter } from './actions/counter'
import PropTypes from 'prop-types'
import styled from 'styled-components';

// components
import Counter from './components/Counter'

// style
import './style.css'


const Title = styled.h1`
    font-size: 2rem;
    color: pink;
`;

const mapStateToProps = state => {
    return { counter: state.counter }
}

const mapDispatchToProps = dispatch => ({
    increaseCounter: () => dispatch(increaseCounter()),
    decreaseCounter: () => dispatch(decreaseCounter()),
    resetCounter   : () => dispatch(resetCounter()),
})

class CounterContainer extends Component {
    render() {
        const { counter, increaseCounter, decreaseCounter, resetCounter } = this.props
        return (
            <div>
                <Title>CounterContainer</Title>
                <Counter
                    counter={counter}
                    increaseCounter={increaseCounter}
                    decreaseCounter={decreaseCounter}
                    resetCounter={resetCounter}
                />
            </div>
        )
    }
}

CounterContainer.propTypes = {
    counter: PropTypes.object,
    increaseCounter: PropTypes.func,
    decreaseCounter: PropTypes.func,
    resetCounter: PropTypes.func,
}

export default connect(mapStateToProps, mapDispatchToProps)(CounterContainer)