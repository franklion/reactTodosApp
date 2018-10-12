import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Counter extends Component {
    render() {
        const { counter, increaseCounter, decreaseCounter, resetCounter } = this.props
        return (
            <div>
                <h2 className="title-counter">Counter: {counter.counter}</h2>
                <div>
                    <button className="btn-counter-primary" onClick={ () => increaseCounter() }>+</button>
                    <button className="btn-counter-primary" onClick={ () => decreaseCounter() }>-</button>
                    <button className="btn-counter-primary" onClick={ () => resetCounter() }>reset</button>
                </div>     
            </div>
        )
    }
}

Counter.propTypes = {
    counter: PropTypes.object,
    increaseCounter: PropTypes.func,
    decreaseCounter: PropTypes.func,
    resetCounter: PropTypes.func,
}

export default Counter