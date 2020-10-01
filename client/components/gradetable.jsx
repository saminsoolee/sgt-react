import React from 'react';
import Grade from './grade';

class GradeTable extends React.Component {
  render() {
    return (
      <div className="col-9 table-container">
        <table className="table table-striped">
          <thead className="thead-dark">
            <tr>
              <th scope="col"> Student Name</th>
              <th scope="col"> Course</th>
              <th scope="col"> Grade</th>
              <th scope="col"> Operations</th>
            </tr>
          </thead>
          <tbody>
            {
              this.props.grades.map(grade => {
                return (
                  <Grade key={grade.id} grade={grade} id={grade.id} deleteGrade={this.props.deleteGrade}/>
                );
              })
            }
          </tbody>
        </table>
      </div>
    );
  }
}

export default GradeTable;
