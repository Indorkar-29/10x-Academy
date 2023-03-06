import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import { LandingPage } from './Layout-pages/landing-page';
import { PostView } from './Layout-pages/postview';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<LandingPage/>}/>
          <Route path='/profile' element={<PostView/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
