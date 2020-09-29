import React from 'react';
import Grade from './grade';

class GradeTable extends React.Component {
  render() {
    return (
      <table className="table table-striped">
        <thead className="thead-dark">
          <tr>
            <th scope="col"> Student Name</th>
            <th scope="col"> Course</th>
            <th scope="col"> Grade</th>
          </tr>
        </thead>
        <tbody>
          {
            this.props.grades.map(grade => {
              return (
                <Grade key={grade.id} grade={grade}/>
              );
            })
          }
        </tbody>
      </table>
    );
  }
}

export default GradeTable;
