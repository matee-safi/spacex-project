import renderer from 'react-test-renderer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MyProfile from '../components/MyProfile';

it('renders My Profile', () => {
  const tree = renderer
    .create(
      <BrowserRouter>
        <Routes>
          <Route path="my-profile" element={<MyProfile />} />
        </Routes>
      </BrowserRouter>,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
