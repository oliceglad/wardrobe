import './App.scss';
import { MakeWardrobeContainer } from './Pages/MainPage/MakeWardrobe';
import { Header } from './Components/Header/Header';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { MyWardrobe } from './Pages/MainPage/MyWardrobe';
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import { Provider } from 'react-redux';
import { store } from './redux/store';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className="App">
          <Header />
          <Routes>
            <Route path="/mywardrobe" Component={MyWardrobe} />
            <Route path="/makewardrobe/*" Component={MakeWardrobeContainer} />
            <Route path="*" element={<Navigate to="/makewardrobe" />} />
          </Routes>
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
