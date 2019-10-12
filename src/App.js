import React, { Component } from 'react';
import { connect } from 'react-redux';
import UserInfo from './UserInfo';
import { thunk_action_creator } from './actions/fetchAction';

class App extends Component {
  handleSubmit = e => {
    e.preventDefault();
    const username = this.getUsername.value;
    // console.log(username);
    this.props.dispatch(thunk_action_creator(username));
    this.getUsername.value = '';
  };
  render() {
    console.log(this.props.data); // this console.logs the initial state since store is now 'connect'ed.
    return (
      <div className='container'>
        <form onSubmit={this.handleSubmit} className='form'>
          <h2 className='title'>Enter the github username</h2>

          <input
            type='text'
            placeholder='Enter github username'
            required
            ref={input => (this.getUsername = input)}
          />

          <button className='button'>Submit</button>
        </form>
        {/* for the loading spinner */}
        {this.props.data.isFetching ? <h3> Loading ...</h3> : null}

        {/* for the error handling in frontend */}
        {this.props.data.isError ? (
          <h3 className='error'> No such user exists</h3>
        ) : null}

        {/* if data is returned from github API backend */}
        {Object.keys(this.props.data.userData).length > 0 ? (
          <UserInfo user={this.props.data.userData} />
        ) : null}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    data: state
  };
};
export default connect(mapStateToProps)(App);
