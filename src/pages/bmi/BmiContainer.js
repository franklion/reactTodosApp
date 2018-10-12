import React, { Component } from 'react'
import { connect } from 'react-redux'
import { calcBmi, resetBmi } from './actions/bmi'
import PropTypes from 'prop-types'

// components
import BmiResult from './components/BmiResult'
import BmiInput from './components/BmiInput'

// style
import './style.css'

const mapStateToProps = state => {
    return { bmi: state.bmi }
}

const mapDispatchToProps = dispatch => ({
    calcBmi: (height, weight) => dispatch(calcBmi(height, weight)),
    resetBmi: () => dispatch(resetBmi()),
})

class BmiContainer extends Component {
    render() {
        const { bmi, calcBmi, resetBmi } = this.props
        return (
            <div>
                <h1>BmiContainer</h1>
                <BmiResult 
                    bmi={bmi}
                />
                <BmiInput
                    calcBmi={calcBmi}
                    resetBmi={resetBmi}
                />
            </div>
        )
    }
}

BmiContainer.propTypes = {
    bmi: PropTypes.object,
    calcBmi: PropTypes.func,
    resetBmi: PropTypes.func,
}

export default connect(mapStateToProps, mapDispatchToProps)(BmiContainer)