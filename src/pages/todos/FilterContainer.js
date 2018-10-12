import React, { Component } from 'react'
import { connect } from 'react-redux'
import { setFilter } from './actions/filter'
import PropTypes from 'prop-types'

// components
import Filter from './components/Filter'

const mapStateToProps = state => {
    return { filter: state.filter }
}

const mapDispatchToProps = dispatch => ({
    setFilter : filter => dispatch(setFilter(filter)),
})

class FilterContainer extends Component {
    render() {
        const { setFilter, filter } = this.props
        return (
            <div>
                <Filter
                    filter={filter}
                    setFilter={setFilter}
                />
            </div>
        )
    }
}

FilterContainer.propTypes = {
    filter: PropTypes.string,
    setFilter: PropTypes.func,
}

export default connect(mapStateToProps, mapDispatchToProps)(FilterContainer)