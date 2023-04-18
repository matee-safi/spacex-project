import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getMissions } from '../redux/missions/missionsSlice';
import '../styles/Missions.css';

const Missions = () => {
  const dispatch = useDispatch();
  const missions = useSelector((state) => state.missions);

  useEffect(() => {
    dispatch(getMissions());
  }, []);

  return (
    <div className="missions">
      <table>
        <thead>
          <tr>
            <th>Mission</th>
            <th>Description</th>
            <th>Status</th>
            <th> </th>
          </tr>
        </thead>
        <tbody>
          {missions.mission_id.map((mission, index) => (
            <tr key={mission}>
              <th className="mission-name"><p>{missions.mission_name[index]}</p></th>
              <td className="mission-description">{missions.description[index]}</td>
              <td className="mission-status"><p>NOT A MEMBER</p></td>
              <td className="mission-btn"><button type="button">Join Mission</button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Missions;
