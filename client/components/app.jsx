import React from 'react';
import Header from './header';
import GradeTable from './gradetable';
import GradeForm from './gradeform';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      grades: []
    };
    this.getAverageGrades = this.getAverageGrades.bind(this);
    this.addNewGrade = this.addNewGrade.bind(this);
  }

  componentDidMount() {
    this.getAllGrades();
  }

  getAllGrades() {
    fetch('api/grades')
      .then(res => res.json())
      .then(data => this.setState({ grades: data }));
  }

  getAverageGrades() {
    let number = 0;
    if (this.state.grades.length === 0) {
      return 0;
    } else {
      for (let i = 0; i < this.state.grades.length; i++) {
        number += this.state.grades[i].grade;
      }
      number = Math.round(number / this.state.grades.length);
      return number;
    }
  }

  addNewGrade(grade) {
    fetch('api/grades/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(grade)
    })
      .then(res => res.json())
      .then(data => {
        this.setState({ grades: this.state.grades.concat(data) });
      })
      .catch(error => console.error(error.message));
  }

  render() {
    return (
      <>
        <Header number={this.getAverageGrades()} />
        <div className="container">
          <GradeTable grades={this.state.grades} />
          <GradeForm addNewGrade={this.addNewGrade} />
        </div>

      </>
    );

  }
}

export default App;
