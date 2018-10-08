import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import * as UsersActions from '../actions/users';

class UsersContainer extends Component {

    componentDidMount() {
        this.props.usersActions.loadUsers();
    }

    render() {
        
        return (
            <div>
                <h1>UsersContainer</h1>
                <ul>
                    {this._renderUsers()}
                </ul>
                
            </div>
        );
    }

    _renderUsers() {
        const { users } = this.props;
        const list = users.users.map(item => 
            <li key={item.id}>{item.name} - {item.email}</li>
        )
        return list
    }
}

const mapStateToProps = (state) => {
    return {
        users: state.users
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        usersActions: bindActionCreators(UsersActions, dispatch)
    };
};


UsersContainer.propTypes = {
    users: PropTypes.object,
};

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);
