import React from 'react';
import jsdom from 'jsdom';
import chai, { expect } from 'chai';
import chaiEnzyme from 'chai-enzyme';
import { mount, render, shallow } from 'enzyme';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import configureStore from 'redux-mock-store';
import sinon from 'sinon';
import reducers from '../app/reducers';

global.document = jsdom.jsdom('<!doctype html><html><body></body></html>');
global.window = global.document.defaultView;
global.navigator = global.window.navigator;

chai.use(chaiEnzyme());

const componentInstance = (ComponentClass , props, state) => {
  return(
    <Provider store={createStore(reducers, state)}>
      <ComponentClass {...props} />
    </Provider>
  );
}

function mountComponent(ComponentClass , props = {}, state = {}){
  return mount(componentInstance (ComponentClass, props, state))
}

function renderComponent(ComponentClass , props = {}, state = {}){
  return render(componentInstance (ComponentClass, props, state))
}

function shallowComponent(ComponentClass , props = {}, state = {}){
  const mockStore = configureStore(state);
  const dispatch = sinon.spy();

  return shallow(<ComponentClass dispatch={dispatch}
    store={mockStore({ runtime: {} })} />)
}

export { mountComponent, renderComponent, shallowComponent, expect };
