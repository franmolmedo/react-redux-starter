import React, { Component } from 'react';

import masterStyles from './master.sass';

class Master extends Component {
  render() {
    return (
      <div className={ masterStyles.main }>Master page</div>
    );
  }
}

export { Master };
