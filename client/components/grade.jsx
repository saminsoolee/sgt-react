import React from 'react';

class Grade extends React.Component {
  render() {
    return (
      <tr>
        <td>{this.props.grade.name}</td>
        <td>{this.props.grade.course}</td>
        <td>{this.props.grade.grade}</td>
        <td><button className="btn btn-danger"
          onClick={() => this.props.deleteGrade(this.props.grade.id)}>
            Delete</button>
        </td>
      </tr>
    );
  }
}

export default Grade;
