
import axios from 'axios';
import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './pages/About';
import Error404 from './pages/Error404';
import Home from './pages/Home';
import Lodging from './pages/Lodging';




function App() {
  // on defini une constante datas qui sera egale à la props passée en parametre 
  const [datas, setDatas] = useState([])

  // on utilise useEffect pour recuperer les datas du fichier data.json
  useEffect(() => {

    axios.get('data.json')
      .then((res) => {
        setDatas(res.data);
      }).catch((err) => {
        console.log(err);
      })

    // pour que le useEffect ne s'execute qu'une seule fois. 
  }, [])

  return (
    // on passe la props datas à chaque composant
    <Router>
      <Routes>
        <Route path='/' element={<Home datas={datas} />}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='/:productId' element={<Lodging datas={datas} />}></Route>
        <Route path=':productId' errorElement={<Error404 />}></Route>
      </Routes>
    </Router>


  );
}

export default App;
