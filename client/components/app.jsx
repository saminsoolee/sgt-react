import React from 'react';
import Header from './header';
import GradeTable from './gradetable';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      grades: []
    };
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
    fetch('api/grades')
      .then(res => res.json());
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
