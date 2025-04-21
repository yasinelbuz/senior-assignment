/* eslint-disable @typescript-eslint/no-explicit-any */
import {useRoutes } from 'react-router-dom'
import { routes } from './config/routes'

function App() {
  return (
    <>
      {useRoutes([...routes])}
    </>
  );
}

export default App
