import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getMissions, joinMission } from '../redux/missions/missionsSlice';
import '../styles/Missions.css';

const Missions = () => {
  const dispatch = useDispatch();
  const {
    error, missionId, isPending, missionName, description, reserved,
  } = useSelector((state) => state.missions);

  useEffect(() => {
    dispatch(getMissions());
  }, [dispatch]);

  const handleJoin = (e) => {
    dispatch(joinMission(e.target.id));
    if (e.target.parentNode.className === 'leave-btn') e.target.parentNode.className = 'join-btn';
    else e.target.parentNode.className = 'leave-btn';
  };

  return (
    <div className="missions">
      {isPending && (
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
      {error && <p className="error">{error}</p>}
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
              <td className="mission-status">{reserved[index] ? <p className="active-member">Active Member</p> : <p>NOT A MEMBER</p>}</td>
              <td className="join-btn"><button id={mission} type="button" onClick={(e) => handleJoin(e)}>{reserved[index] ? <>Leave Mission</> : <>Join Mission</>}</button></td>
            </tr>
          </thead>
          <tbody>
            {missionId.map((mission, index) => (
              <tr key={mission}>
                <th className="mission-name">
                  <p>{missionName[index]}</p>
                </th>
                <td className="mission-description">{description[index]}</td>
                <td className="mission-status">
                  <p>NOT A MEMBER</p>
                </td>
                <td className="mission-btn">
                  <button type="button">Join Mission</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Missions;
