import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoginPage from './pages/loginPage';
import HomePage from './pages/homePage';
import RegisterPage from './pages/registerPage';
import AdminPage from './pages/adminPage';
import TextPage from './pages/textPage';

function App() {
  return (
    <BrowserRouter>
      <div className="w-full h-screen bg-primary text-secondary">
        <Routes>
          <Route path="/*" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/admin/*" element={<AdminPage />} />
          <Route path='/text' element={<TextPage/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
