import React from 'react';
import {Route,BrowserRouter} from "react-router-dom"

import SignIn from './Components/SignIn'
import Quiz from './Components/Quiz'



const App = () =>{
  return(<BrowserRouter>
    <Route exact path="/" render={()=><SignIn/>}/>
    
    <Route path ="/Quiz" render={()=><Quiz/>}/>
    </BrowserRouter>
      )
  
  }
  
  export default App;