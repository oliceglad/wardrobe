import './App.scss';
import { MakeWardrobeContainer } from './Pages/MakeWardrobe';
import { Header } from './Components/Header/Header';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { MyWardrobe } from './Pages/MyWardrobe';
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import { Provider } from 'react-redux';
import { store } from './redux/store';
import { Trash } from './Pages/Trash';

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
            <Route path='/trash' Component={Trash}/>
          </Routes>
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
