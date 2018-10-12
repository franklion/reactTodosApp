import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

class BmiResult extends Component {    
    render() {
        const { bmi: bmiResult } = this.props.bmi
        const bmiClass = classNames({
            warn: (bmiResult >= 24) || (bmiResult > 0 && bmiResult < 18.5),
            good: bmiResult >= 18.5 && bmiResult < 24,
        })

        return (
            <div>
                <h1>Bmi Result: {bmiResult}</h1>
                <h2>Status: <span className={bmiClass}>{ this.renderStatus(bmiResult) }</span></h2>
            </div>
        )
    }

    renderStatus(bmiResult) {
        if (bmiResult > 0 && bmiResult < 18.5) return '體重過輕'
        if (bmiResult >= 18.5 && bmiResult < 24) return '正常範圍'
        if (bmiResult >= 24) return '異常範圍'
        
        return '無'
    }
}

BmiResult.propTypes = {
    bmi: PropTypes.object,
}

export default BmiResult