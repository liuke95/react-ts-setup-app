import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { ErrorPage, Home } from './pages';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    errorElement: <ErrorPage />,
  },
]);

function App() {
  return (
    <div>
      {/* <h1>Vite + React</h1> */}
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
