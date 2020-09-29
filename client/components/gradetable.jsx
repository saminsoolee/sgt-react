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
            this.props.grades.map(todo => {
              return (
                <Grade key={todo.id} grade={todo}/>
              );
            })
          }
        </tbody>
      </table>
    );
  }
}

export default GradeTable;
