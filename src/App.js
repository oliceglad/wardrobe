import './App.scss';
import { MakeWardrobe } from './Pages/MainPage/MakeWardrobe';
import { Header } from './Components/Header/Header';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { MyWardrobe } from './Pages/MainPage/MyWardrobe';
import "primereact/resources/themes/lara-light-indigo/theme.css"; 
import "primereact/resources/primereact.min.css";  

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/mywardrobe" Component={MyWardrobe} />
          <Route path="/makewardrobe" Component={MakeWardrobe} />
          <Route path="*" element={<Navigate to="/makewardrobe" />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
