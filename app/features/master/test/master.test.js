import { shallowComponent, expect } from '@/helpers/test-helper';
import { Master } from '../master';

describe('Master' , () => {
  let componentUnderTest;

  beforeEach(() => {
    componentUnderTest = shallowComponent(Master);
  });

  it('has to exists', () => {
    expect(componentUnderTest).to.exist;
  });

  it('has a class called main', () => {
    expect(componentUnderTest).to.have.className('main');
  });
});
