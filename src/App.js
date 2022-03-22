import './App.css';
import { useEffect, useState, Suspense, lazy } from 'react'


const User = lazy(() => import('./components/user'));


function App() {

  const [users, setuser] = useState([]);


  useEffect(() => {
      const url = "https://reqres.in/api/users?page=2";
     fetch(url).then(res =>
        res.json()
      ).then(data =>
        setuser(data.data)
      )

  }, []);

  return (
    <div className="container">
      <Suspense fallback={<div>Loading ...</div>}>

        {
            users.map(user => {
              return (
                 <User param={user} />
                
              )
            })
        }
      </Suspense>

    </div>
  );
}

export default App;
