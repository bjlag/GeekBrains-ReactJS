import React, { Component } from 'react';

import { connect } from 'react-redux';
import { fetchUsers } from '../actions/usersActions';

import PageTitle from '../components/PageTitle';
import User from '../components/User';
import Preloader from '../components/Preloader';

@connect( ( store ) => {
    return {
        users: store.users.users,
        isFetching: store.users.isFetching
    };
} )

export default class Users extends Component {
    constructor() {
        super( ...arguments );

        this.props.dispatch( fetchUsers() );
    }

    render() {
        const usersList = this.props.users.map( ( value ) => {
            return (
                <User data={ value } key={ value.id }/>
            );
        } );
        return (
            <div>
                <PageTitle title={'Пользователи'} description={'Читатели нашего блога'}/>
                <section id="content">
                    <div className="content-wrap">
                        <div className="container clearfix">
                            <div className="row">
                                <Preloader show={ this.props.isFetching }/>
                                { usersList }
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}