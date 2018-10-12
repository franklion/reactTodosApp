import React, { Component } from 'react'
import { connect } from 'react-redux'
import { increaseCounter, decreaseCounter, resetCounter } from './actions/counter'
import PropTypes from 'prop-types'

// components
import Counter from './components/Counter'

// style
import './style.css'

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
                <h1>CounterContainer</h1>
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