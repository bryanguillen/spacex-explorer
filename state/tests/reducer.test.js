import { reducer, Actions, defaultAppState } from '../index';

describe('reducer', () => {
  describe(Actions.INCREASE_VISIBLE_MISSIONS, () => {
    it('should increase the number of visible posts within the history page', () => {
      const updatedState = reducer(defaultAppState, { type: Actions.INCREASE_VISIBLE_MISSIONS, payload: 30 });
      expect(updatedState).toStrictEqual({ ...defaultAppState, history: { ...defaultAppState.history, numberOfVisibleMissions: 30 } });
    });
  });

  describe('unknown action type', () => {
    it('should return the state as it was passed in', () => {
      const updatedState = reducer(defaultAppState, { type: 'unknown' });
      expect(updatedState).toStrictEqual(defaultAppState);
    });
  });
});