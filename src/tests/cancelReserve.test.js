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
