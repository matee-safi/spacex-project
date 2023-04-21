import { leaveMission } from '../redux/missions/missionsSlice';

describe('joinMission', () => {
  test('should return the correct action', () => {
    const id = '1';
    const expectedAction = {
      type: 'missions/leaveMission',
      payload: id,
    };
    expect(leaveMission(id)).toEqual(expectedAction);
  });
});
