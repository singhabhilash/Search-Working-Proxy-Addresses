// @flow
import React, { Component } from 'react';
import type { Children } from 'react';

export default class App extends Component {
  props: {
    children: Children
  };

  render() {
    return (
      <div style={{flexGrow: 1}} className="apparentRoot">
        {this.props.children}
      </div>
    );
  }
}
