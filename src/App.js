
import axios from 'axios';
import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './pages/About';
import Home from './pages/Home';
import Lodging from './pages/Lodging';




function App() {

  const [datas, setDatas] = useState([])

  /*
  ** ici on utilise un useEffect pour recuperer la data après le rendu (mise à jour du DOM)
  ** il s'executera après chaque rendu ce qui garantie que le DOM a été mis à jour au moment ou il exécute les effets
  ** cela permet de rendre l'application plus reactive.
  */
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

    <Router>
      <Routes>
        <Route path='/' element={<Home datas={datas} />}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='/:productId' element={<Lodging datas={datas} />}></Route>
      </Routes>
    </Router>

  );
}

export default App;
