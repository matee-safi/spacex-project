import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getMissions } from '../redux/missions/missionsSlice';
import '../styles/Missions.css';

const Missions = () => {
  const dispatch = useDispatch();
  const {
    missionId, isPending, missionName, description,
  } = useSelector((state) => state.missions);

  useEffect(() => {
    dispatch(getMissions());
  }, []);

  return (
    <div className="missions">
      {isPending
      && (
      <div className="loading">
        <div className="sk-chase">
          <div className="sk-chase-dot" />
          <div className="sk-chase-dot" />
          <div className="sk-chase-dot" />
          <div className="sk-chase-dot" />
          <div className="sk-chase-dot" />
          <div className="sk-chase-dot" />
        </div>
      </div>
      )}
      {missionId.length > 0
      && (
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
          {missionId.map((mission, index) => (
            <tr key={mission}>
              <th className="mission-name"><p>{missionName[index]}</p></th>
              <td className="mission-description">{description[index]}</td>
              <td className="mission-status"><p>NOT A MEMBER</p></td>
              <td className="mission-btn"><button type="button">Join Mission</button></td>
            </tr>
          ))}
        </tbody>
      </table>
      )}
      {missionId === null && <p>An error has occurred while getting data</p>}
    </div>
  );
};

export default Missions;
