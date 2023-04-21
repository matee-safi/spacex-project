import { joinMission } from '../redux/missions/missionsSlice';

describe('joinMission', () => {
  test('should return the correct action', () => {
    const id = '1';
    const expectedAction = {
      type: 'missions/joinMission',
      payload: id,
    };
    expect(joinMission(id)).toEqual(expectedAction);
  });
});
