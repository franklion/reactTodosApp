import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

class BmiResult extends Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        const { bmiResult } = this.props;
        const bmiClass = classNames({
            warn: bmiResult.bmi >= 24
        })

        return (
            <div>
                <h1>Bmi Result: {bmiResult.bmi}</h1>
                <h2>Status: <span className={bmiClass}>{ this._renderStatus(bmiResult.bmi) }</span></h2>
            </div>
        );
    }

    _renderStatus(bmi) {
        if (bmi < 18.5) return '體重過輕';
        if (bmi >= 18.5 && bmi < 24) return '正常範圍';
        if (bmi >= 24) return '異常範圍';
    }
}

BmiResult.propTypes = {
    bmiResult: PropTypes.object,
};

export default BmiResult;