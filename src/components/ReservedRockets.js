import { useSelector } from 'react-redux';
import '../styles/ReservedRockets.css';

const ReservedRockets = () => {
  const rockets = useSelector((state) => state.rockets);
  return (
    <>
      <h1>My Rockets</h1>
      {rockets.rockets
        .filter((rocket) => rocket.reserved)
        .map((rocket) => (
          <article key={rocket.id} className="reservedRockets">
            <p className="rocketName">{rocket.name}</p>
          </article>
        ))}
    </>
  );
};

export default ReservedRockets;
