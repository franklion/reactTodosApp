import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Users extends Component {
    render() {
        return (
            <div>
                <h2>Users:</h2>
                <ul>
                    {this.renderUsers()}
                </ul>
            </div>
        )
    }

    renderUsers() {
        const { users } = this.props.users
        return users.map(user => <li key={ user.key }>{ user.name } - { user.email }</li>)
    }
}

Users.propTypes = {
    users: PropTypes.object,
}

export default Users