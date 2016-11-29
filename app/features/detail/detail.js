import React, { Component } from 'react';

import detailStyles from './detail.sass';

class Detail extends Component {
  render() {
    return (
      <div className={ detailStyles.main }>Detail page</div>
    );
  }
}

export { Detail };
