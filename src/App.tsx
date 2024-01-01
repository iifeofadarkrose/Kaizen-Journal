import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Main from './components/Main';
import Book from './components/Book';
import SignUp from './components/Signup'; // Подправь регистр символов в имени файла
import SignIn from './components/SignIn';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/book" element={<Book />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
        {/* Добавь другие маршруты для других страниц */}
      </Routes>
    </Router>
  );
};

export default App;
