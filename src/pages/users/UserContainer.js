import React, { Component } from 'react'
import { connect } from 'react-redux'
import { loadUsers } from './actions/users'
import PropTypes from 'prop-types'

// components
import Users from './components/Users'

const mapStateToProps = state => {
    return { users: state.users }
}

const mapDispatchToProps = dispatch => ({
    loadUsers: () => dispatch(loadUsers()),
})

class UserContainer extends Component {

    componentDidMount() {
        this.props.loadUsers()
    }

    render() {
        const { users } = this.props
        return (
            <div>
                <h1>UserContainer</h1>
                <Users 
                    users={users}
                />
            </div>
        )
    }
}

UserContainer.propTypes = {
    users: PropTypes.object,
    loadUsers: PropTypes.func,
}

export default connect(mapStateToProps, mapDispatchToProps)(UserContainer)