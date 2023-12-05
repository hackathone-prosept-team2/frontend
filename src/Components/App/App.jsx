import { useDispatch } from 'react-redux';
import { AuthPage, HomePage, NotFoundPage } from 'Pages';
import { ProtectedRouter } from 'Components';
import { Routes, Route } from "react-router-dom"
import { useEffect } from 'react';
import { tokenCheck } from 'Features';
import Routers from "Routers"

function App() {
  const dispatch = useDispatch()
  
  useEffect(() => {
    dispatch(tokenCheck())
  }, [dispatch])

  return (
    <Routes>
      <Route
        path={Routers.DEFAULT.path}
        element={
          <ProtectedRouter
            component={HomePage}
            title={Routers.DEFAULT.title}
          />
        }
      />

      <Route
        path={Routers.HOME.path}
        element={
          <ProtectedRouter
            component={HomePage}
            title={Routers.HOME.title}
          />
        }
      />

      <Route
        path={Routers.AUTH_SIGNIN.path}
        element={<AuthPage title={Routers.AUTH_SIGNIN.title} />}
      />

      <Route
        path={Routers.AUTH_SIGNUP.path}
        element={<AuthPage title={Routers.AUTH_SIGNUP.title} />}
      />

      <Route
        path={Routers.NOT_FOUND.path}
        element={<NotFoundPage title={Routers.NOT_FOUND.title} />}
      />
    </Routes>
  )
}

export default App;