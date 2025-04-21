import {useRoutes } from 'react-router-dom'
import routes from './routes'
import MainLayout from './components/main-layout';

function App() {
  
  return (
    <>
      <MainLayout />
      {useRoutes(routes)}
    </>
  );
}

export default App
