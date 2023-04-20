import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getMissions, joinMission } from '../redux/missions/missionsSlice';
import '../styles/Missions.css';

const Missions = () => {
  const { isPending, error, missions } = useSelector((state) => state.missions);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMissions());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleJoin = (id) => {
    dispatch(joinMission(id));
  };

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
      {error && <p className="error">{error}</p>}
      {missions.length > 0
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
          {missions.map((mission) => (
            <tr key={mission.mission_id}>
              <th className="mission-name"><p>{mission.mission_name}</p></th>
              <td className="mission-description">{mission.description}</td>
              <td className="mission-status">{mission.reserved ? <p className="active-member">Active Member</p> : <p>NOT A MEMBER</p>}</td>
              <td className={mission.reserved ? 'leave-btn' : 'join-btn'}><button type="button" onClick={() => handleJoin(mission.mission_id)}>{mission.reserved ? <>Leave Mission</> : <>Join Mission</>}</button></td>
            </tr>
          ))}
        </tbody>
      </table>
      )}
    </div>
  );
};

export default Missions;
