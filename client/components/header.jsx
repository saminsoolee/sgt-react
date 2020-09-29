import React from 'react';

class Header extends React.Component {
  render(props) {
    return (
      <header>
        <h1>Student Grade Table
          <span className="average-grade">Average Grade
            <p className="badge badge-secondary">{this.props.number}</p>
          </span>
        </h1>
      </header>
    );
  }

}

export default Header;
