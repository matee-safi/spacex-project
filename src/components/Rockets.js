import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchRockets, reserveRocket } from '../redux/rockets/rocketsSlice';
import '../styles/Rockets.css';

const Rockets = () => {
  const { rockets, isLoading, error } = useSelector((state) => state.rockets);
  const dispatch = useDispatch();

  useEffect(() => {
    if (rockets.length) return;
    dispatch(fetchRockets());
  }, [dispatch, rockets.length]);

  const handleReserve = (id) => {
    dispatch(reserveRocket(id));
  };

  return (
    <main className="rocketsMain">
      {isLoading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {rockets.map((rocket) => (
        <article key={rocket.id}>
          <div className="imgContainer">
            <img
              src={rocket.flickr_images[0]}
              alt={rocket.name}
              className="rckt-img"
            />
          </div>
          <main className="articleMain">
            <h1 className="rocket-title">{rocket.name}</h1>
            <p className="rocket-description">
              <span
                className={`reserved-span ${rocket.reserved ? '' : 'hide'}`}
              >
                Reserved
              </span>
              {rocket.description}
            </p>
            <button
              onClick={() => handleReserve(rocket.id)}
              className={`rsrv-btn ${rocket.reserved ? 'cancel-rsrv-btn' : ''}`}
              type="button"
            >
              {rocket.reserved ? 'Cancel Reservation' : 'Reserve Rocket'}
            </button>
          </main>
        </article>
      ))}
    </main>
  );
};

export default Rockets;
