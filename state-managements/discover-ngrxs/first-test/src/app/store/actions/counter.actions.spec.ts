import * as CounterActions from './counter.actions';

describe('Counter', () => {
  it('should create an instance', () => {
    expect(new CounterActions.LoadCounters()).toBeTruthy();
  });
});
