import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { Home } from "../pages/Home";
import { Album } from '../pages/Album';
import { Photo } from '../pages/Photo';

export const MainRoutes = () => {
    return (
        <Router>
            <Routes>
                <Route path='/' element={<Home />}/>
                <Route path='/album/:id' element={<Album />} />
                <Route path='/album/:identificator/photos/:id' element={<Photo />} />
            </Routes>
         </Router>
    )
}