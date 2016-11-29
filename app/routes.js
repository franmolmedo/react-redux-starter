import React from 'react';
import { Route, IndexRoute } from 'react-router';

import { Master } from './features/master/master';
import { Detail } from './features/detail/detail';

export default (
  <Route path="/">
    <IndexRoute component= { Master }/>
    <Route path="detail" component= { Detail }/>
    <Route path="*" component= { Master }/>
  </Route>
);
