import React from 'react';
import Header from './header';
import GradeTable from './gradetable';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      grades: []
    };
    this.getAverageGrades = this.getAverageGrades.bind(this);
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
        Math.round(number / this.state.grades.length);
        return number;
      }

    }
  }

  render() {
    return (
      <>
        <Header number={this.getAverageGrades()} />
        <GradeTable grades={this.state.grades}/>
      </>
    );

  }
}

export default App;
