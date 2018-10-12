import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Keyword extends Component {
    render() {
        return (
            <div className="todos-keyword">
                <span>Keyword Search:</span>
                <input className="input-keyword " type="text" onChange={ (e) => this.handleKeyword(e) }/>
            </div>
        )
    }

    handleKeyword(e) {
        this.props.setKeyword(e.target.value)
    }
}

Keyword.propTypes = {

}

export default Keyword