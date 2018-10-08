import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import * as UsersActions from '../actions/users';
import { Table, Layout } from 'antd';
const { Header, Footer, Sider, Content } = Layout;

class UsersContainer extends Component {

    constructor(props) {
        super(props);
        
        this.state = {
            localUsers: [],
            dataSource: [{
                key: '1',
                name: 'Mike',
                phone: '0987-1123131',
                email: '10 Downing Street'
            }, {
                key: '2',
                name: 'John',
                phone: '0987-1123131',
                email: '10 Downing Street'
            }],
            columns: [{
                title: 'Name',
                dataIndex: 'name',
                key: 'name',
            }, {
                title: 'Phone',
                dataIndex: 'phone',
                key: 'phone',
            }, {
                title: 'Email',
                dataIndex: 'email',
                key: 'email',
            }],
            pagination: {
                defaultPageSize: 3,
            },
        }
    }
    
    componentDidMount() {
        this.props.usersActions.loadUsers();
    }

    // componentDidUpdate(prevProps, prevState) {
        // console.log(`prevProps:`, prevProps)
        // console.log(`prevState:`, prevState)
        // const nowUsers = this.state.localUsers;
        // if (nowUsers !== xxx) {
        //     this.setState({
        //         localUsers: [{name: 'frank'}]
        //     })
        // }
    // }

    // componentWillReceiveProps(nextProps) {
    //     const users = nextProps.users.users.map(item => {
    //         return { key: item.id, name: item.name, phone: item.phone, email: item.email }
    //     });
    //     this.setState({
    //         localUsers: users
    //     })
    // }


    render() {
        const { users } = this.props;
        return (
            <div>
                <Layout>
                    <Header className="header-font">Header</Header>
                    <Content>
                        <Table columns={this.state.columns} dataSource={users.users}  pagination={this.state.pagination}/>
                    </Content>
                    <Footer>Footer</Footer>
                </Layout>
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
