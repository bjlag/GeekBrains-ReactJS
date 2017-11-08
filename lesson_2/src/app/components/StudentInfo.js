import React, {Component} from 'react';

export default class StudentInfo extends Component {
    constructor() {
        super();

        this.student = {
            firstName: 'Владислав',
            lastName: 'Дуплин',
            getFullName: function () {
                return `${this.firstName} ${this.lastName}`;
            }
        };
    }

    render() {
        return <p>Студент: {this.student.getFullName()}</p>;
    }
}