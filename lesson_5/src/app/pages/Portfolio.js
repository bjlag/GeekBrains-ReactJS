import React, { Component } from 'react';

import PageTitle from '../components/PageTitle';

export default class Portfolio extends Component {
    render() {
        return (
            <div>
                <PageTitle title={'Портфолио'} description={'Наши последние работы'}/>
                <section id="content">
                    <div className="content-wrap">
                        <div className="container clearfix">
                            <h1>Портфолио</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur debitis in iusto maxime mollitia nemo obcaecati omnis ratione rerum. Adipisci, consequatur explicabo magni nisi quidem quisquam ratione saepe tempore voluptatum.</p>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}