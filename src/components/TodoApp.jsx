import { Routes, Route } from 'react-router-dom';

import Home from '@/routes/Home.JSX';
import About from '@/routes/About.JSX';
import Login from '@/routes/Login.JSX';
import Profile from '@/routes/Profile.JSX';
import NotMatch from '@/routes/NotMatch.JSX';
import Layout from '@/components/Layout.JSX';
import SinglePage from '@/routes/SinglePage.JSX';
import ProtectedRoute from '@/components/ProtectedRoute.JSX';

const TodoApp = () => (
  <Routes>
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />}>
        <Route path=":slug" element={<SinglePage />} />
      </Route>
      <Route path="login" element={<Login />} />
      <Route
        path="profile"
        element={(
          <ProtectedRoute>
            <Profile />
          </ProtectedRoute>
        )}
      />
      <Route path="*" element={<NotMatch />} />
    </Route>
  </Routes>
);
export default TodoApp;
