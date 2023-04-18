import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getMissions } from '../redux/missions/missionsSlice';

const Missions = () => {
  const dispatch = useDispatch();
  const missions = useSelector((state) => state.missions);

  useEffect(() => {
    dispatch(getMissions());
  }, []);

  return (
    <div>
      <h1>Missions</h1>
      <table>
        <thead>
          <tr>
            <th>Mission</th>
            <th>Description</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {missions.mission_id.map((mission, index) => (
            <tr key={mission}>
              <th>{missions.mission_name[index]}</th>
              <td>{missions.description[index]}</td>
              <td>Not a member</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Missions;
