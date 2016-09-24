import { expect } from 'chai';
import reducers from '../src/reducers';

describe('reducers', () => {
  it('should handle actions', () => {
    const initialState = 0;
    const action = {
      type: 'INCREMENT',
    };
    const nextState = reducers(initialState, action);

    expect(nextState.counter).to.equal(1);
  });
});
