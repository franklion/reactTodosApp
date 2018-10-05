import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import * as BmiActions from '../actions/bmi';
import BmiResult from '../components/BmiResult';

class App extends Component {
    constructor(props) {
        super(props);
        
        this._onCalcClick = this._onCalcClick.bind(this);
        this._onResetClick = this._onResetClick.bind(this);
        this._isValidBmiInput = this._isValidBmiInput.bind(this);
    }

    render() {
        const { bmiResult, bmiActions } = this.props;
        return (
            <div>
                <BmiResult bmiResult={bmiResult} />
                <div>
                    <label> Height: <input type="text" ref="heightInput" defaultValue={170}/> cm</label>
                </div>
                <div>
                    <label> Weight: <input type="text" ref="weightInput" defaultValue={50} /> kg</label>  
                </div>
                <button onClick={this._onCalcClick}>Calculation</button>
                <button onClick={this._onResetClick}>Reset</button>
                <button onClick={bmiActions.testBmi}>Test</button> 

            </div>
        );
    }

    _onCalcClick() {
        const heightInputValue = parseInt(this.refs.heightInput.value);
        const weightInputValue = parseInt(this.refs.weightInput.value);

        if (!this._isValidBmiInput(heightInputValue) ||
            !this._isValidBmiInput(weightInputValue)) return false;
        
        this.props.bmiActions.calcBmi(heightInputValue, weightInputValue);
    }

    _onResetClick() {
        const heightInput = this.refs.heightInput;
        const weightInput = this.refs.weightInput;
        heightInput.value = 0;
        weightInput.value = 0;
        this.props.bmiActions.resetBmi();
    }

    _isValidBmiInput(input) {
        const reg = /^[1-9]+[0-9]*$/;
        return reg.test(input);
    }
}

const mapStateToProps = (state) => {
    return {
        bmiResult: state.bmi
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        bmiActions: bindActionCreators(BmiActions, dispatch)
    };
};

const BmiContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(App);

App.propTypes = {
    counter: PropTypes.object,
}

export default BmiContainer;