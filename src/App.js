import { BrowserRouter as Router , Switch, Route } from "react-router-dom";

import { useEffect, useState} from "react";
import { auth } from "./Firebase/firebase";



import Homepage from "./pages/Homepage";
import Library from "./pages/Library";
import Itempage from "./pages/Itempage";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";


const App = () => {

  const [user, setUser] = useState(null)

  useEffect(() => {
      const unsubscribe = auth.onAuthStateChanged
      (userAuth => {
        const user = {
          uid : userAuth?.uid,
          email: userAuth?.email
        }
        if(userAuth){
          console.log(userAuth)
          setUser(user)
      }else { 
        setUser(null)
      }})
    return unsubscribe
  }, [])

  return (

    <div>
       <Router>
      <div > 
      <Switch>
        <Route exact path='/' component={user? Homepage : SignIn}/>
        <Route exact path='/signup' component={SignUp}/>
        <Route exact path='/library' component ={Library}/>
        <Route exact path='/item/:id' component ={Itempage}/>
      </Switch>
      </div>
    </Router>
    </div>


  );
}

export default App;
