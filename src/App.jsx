import './App.css';
import { HomePage } from './pages/HomePage';
import { LoginPage } from './pages/LoginPage';
import { DetailsPage } from './pages/DetailsPage';

import { Routes, Route, Link } from 'react-router-dom';
import { FormPostPage } from './pages/FormPostPage';
import { ErrorPage } from './pages/ErrorPage';

function App() {
  return (
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='login' element={<LoginPage />} />
      <Route path='post/:id' element={<DetailsPage />} />
      <Route path='post/create' element={<FormPostPage />} />
      <Route path='post/edit/:id' element={<FormPostPage />} />
      <Route path='*' element={<ErrorPage />} />
    </Routes>
  );
}

export default App;
