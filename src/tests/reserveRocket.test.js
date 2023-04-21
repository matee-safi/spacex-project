import { reserveRocket } from '../redux/rockets/rocketsSlice';

describe('reserveRocket', () => {
  test('should return the correct action', () => {
    const id = '1';
    const expectedAction = {
      type: 'rockets/reserveRocket',
      payload: id,
    };
    expect(reserveRocket(id)).toEqual(expectedAction);
  });
});
