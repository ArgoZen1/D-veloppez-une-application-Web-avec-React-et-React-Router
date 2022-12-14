
import axios from 'axios';
import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import About from './pages/About';
import Error404 from './pages/Error404';
import Home from './pages/Home';
import Lodging from './pages/Lodging';




function App() {

  const [datas, setDatas] = useState([])
  const [isLoad, setIsLoad] = useState(true)

  useEffect(() => {
    if (isLoad) {
      axios.get('data.json')
        .then((res) => {
          setDatas(res.data);
        }).catch((err) => {
          console.log(err);
        })
    }
    setIsLoad(false)
  }, [isLoad])

  return (

    <Router>
      <Routes>
        <Route path='/' element={<Home datas={datas} />}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='/:productId' element={<Lodging datas={datas} />}></Route>
        <Route path="*" element={<Error404 />}></Route>
      </Routes>
    </Router>

  );
}

export default App;
