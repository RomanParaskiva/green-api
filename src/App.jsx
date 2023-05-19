import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { useAuth } from "./hooks";
import { AuthPage, ChatPage } from './pages';



const App = () => {
  const { isAuth } = useAuth();

  function RequireAuth({ children, redirectTo }) {
    return isAuth ? children : <Navigate to={redirectTo} />;
  }
  return (
    <div className='bg-black text-gray-400 w-screen h-screen'>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={
          // <RequireAuth redirectTo="/login">
            <ChatPage />
          // </RequireAuth>
        } />
          <Route path="/login" element={<AuthPage />} />
        </Routes>
    </BrowserRouter>
    </div>
  );
};


export default App;
