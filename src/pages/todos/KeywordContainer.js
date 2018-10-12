import React, { Component } from 'react'
import { connect } from 'react-redux'
import { setKeyword } from './actions/keyword'
import PropTypes from 'prop-types'

// components
import Keyword from './components/Keyword'

const mapStateToProps = state => {
    return { keyword: state.keyword }
}

const mapDispatchToProps = dispatch => ({
    setKeyword : keyword => dispatch(setKeyword(keyword)),
})

class KeywordContainer extends Component {

    render() {
        const { keyword, setKeyword } = this.props
        return (
            <div>
                <Keyword
                    setKeyword={setKeyword}
                    />
            </div>
           
        )
    }
}

KeywordContainer.propTypes = {

}

export default connect(mapStateToProps, mapDispatchToProps)(KeywordContainer)