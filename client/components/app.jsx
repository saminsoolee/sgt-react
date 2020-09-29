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
    let Number;
    for (let i = 0; i < this.state.grades.length; i++) {
      Number += this.state.grades / this.state.grades.length;
      Math.round(Number);
    }
  }

  render() {
    return (
      <>
        <Header />
        <GradeTable grades={this.state.grades}/>
      </>
    );

  }
}

export default App;
