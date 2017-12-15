import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getJokes } from '../actions';

class Jokes extends Component {
  componentDidMount() {
    this.props.getJokes();
  }

  render() {
    return (
      <ul style={{listStyleType: "none"}}>
        {this.props.jokes.map((joke, i) => {
          return <li key={i} style={{backgroundColor: "#89a", width: '50%', color:'#fff', padding: '10px', border: '1px solid #fff' }}>
            <p>setup: {joke.setup}</p>
            <p>punchline: {joke.punchline}</p>
            <h5>type: {joke.type}</h5>
          </li>;
        })}
      </ul>
    );
  }
}

const mapStateToProps = state => {
  return {
    jokes: state.jokes
  };
};

export default connect(mapStateToProps, { getJokes })(Jokes);
