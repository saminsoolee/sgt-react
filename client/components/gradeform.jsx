import React from 'react';

class GradeForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      course: '',
      grade: ''
    };
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleCourseChange = this.handleCourseChange.bind(this);
    this.handleGradeChange = this.handleGradeChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleReset = this.handleReset.bind(this);
  }

  handleNameChange(event) {
    this.setState({ name: event.target.value });
  }

  handleCourseChange(event) {
    this.setState({ course: event.target.value });
  }

  handleGradeChange(event) {
    this.setState({ grade: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.addNewGrade({
      name: this.state.name,
      course: this.state.course,
      grade: Number(this.state.grade)
    });
    this.handleReset();
  }

  handleReset() {
    this.setState({
      name: '',
      course: '',
      grade: ''
    });
  }

  render() {
    return (
      <>
        <div className="col-3 form-container">
          <form onSubmit={this.handleSubmit} onReset={this.handleReset}>
            <input placeholder="Name" type="text" id="name" value={this.state.name} onChange={this.handleNameChange}></input>
            <input placeholder="Course" type="text" id="course" value={this.state.course} onChange={this.handleCourseChange}></input>
            <input placeholder="Grade" type="number" id="grade" value={this.state.grade} onChange={this.handleGradeChange}></input>
            <button className="btn btn-success" type="submit"> Add</button>
            <button className="btn btn-danger" type="reset"> Cancel</button>
          </form>
        </div>
      </>
    );
  }
}

export default GradeForm;
