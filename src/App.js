import React from 'react';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import ExcersicesContainer from './pages/ExercisesContainer';
import ExcercisesNewContainer from './pages/ExcercisesNewContainer';
import NotFound from './pages/NotFound';
import ExcersiceWiev from './pages/ExcersiceWiev';

const App = () => {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                  <Route path='/excersice' element={<ExcersicesContainer/>}/>
                  <Route path='/excersice/new' element={<ExcercisesNewContainer/>}/>
                  <Route path='/excersice/view' element={<ExcersiceWiev/>}/>             
                  <Route path="*"  element={<NotFound/>}/> 
                </Routes>
            </BrowserRouter>
        </div>
    );
};


 
export default App