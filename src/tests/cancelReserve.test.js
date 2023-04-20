//Tests the cancelReserve function to update the state of the rockets array to {reserved:false} when the cancelReserve action is dispatched.
import { cancelReserve } from '../redux/rockets/rocketsSlice';

describe('cancelReserve', () => {
  test('should return the correct action', () => {
    const id = '1';
    const expectedAction = {
      type: 'rockets/cancelReserve',
      payload: id,
    };
    expect(cancelReserve(id)).toEqual(expectedAction);
  });
});
