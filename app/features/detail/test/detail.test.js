import { mountComponent , expect } from '@/helpers/test-helper';
import { Detail } from '../detail';

describe('Detail' , () => {
  let componentUnderTest;

  beforeEach(() => {
    componentUnderTest = mountComponent(Detail);
  });

  it('has to exists', () => {
    expect(componentUnderTest).to.exist;
  });

  it('has a class called main', () => {
    expect(componentUnderTest).to.have.className('main');
  });
});
