import { useSelector } from 'react-redux';
import '../styles/JoinedMissions.css';

const JoinedMissions = () => {
  const missions = useSelector((state) => state.missions);
  return (
    <>
      <h1>My Missions</h1>
      {missions.missions
        .filter((mission) => mission.reserved)
        .map((mission) => (
          <article key={mission.mission_id} className="joined-missions">
            <p>{mission.mission_name}</p>
          </article>
        ))}
    </>
  );
};

export default JoinedMissions;
