import JoinedMissions from './JoinedMissions';
import ReservedRockets from './ReservedRockets';
import '../styles/MyProfile.css';

const MyProfile = () => (
  <main className="myProfileMain">
    <section className="missionsSection">
      <JoinedMissions />
    </section>
    <section className="rocketsSection">
      <ReservedRockets />
    </section>
  </main>
);

export default MyProfile;
