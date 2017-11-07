import React from 'react';

class StudentInfo extends React.Component {
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

module.exports = StudentInfo;