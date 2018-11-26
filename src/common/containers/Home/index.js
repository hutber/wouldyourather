import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as CounterActions from '../../actions';

class Component extends React.PureComponent {
  state = {};

  render() {
    return <h1>Would You Rater</h1>;
  }
}

const mapStateToProps = state => ({
  counter: state.counter
});

const mapDispatchToProps = dispatch => bindActionCreators(CounterActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Component);