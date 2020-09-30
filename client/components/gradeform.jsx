import React from 'react';

class GradeForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      course: '',
      grade: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleReset = this.handleReset.bind(this);
  }

  handleChange(event) {
    this.setState({ name: event.target.value });
    this.setState({ course: event.target.value });
    this.setState({ grade: event.target.value });
  }

  handleSubmit(event) {

  }

  handleReset(event) {
    this.setState({
      name: '',
      course: '',
      grade: ''
    });
  }

  render() {
    return (
      <>
        <form className="form-control">
          <input placeholder="Name" type="text" id="name"></input>
          <input placeholder="Course" type="text" id="course"></input>
          <input placeholder="Grade" type="number" id="grade"></input>
          <button className="btn btn-success"> Add</button>
          <button className="btn btn-danger"> Cancel</button>
        </form>;

      </>
    );
  }
}

export default GradeForm;
