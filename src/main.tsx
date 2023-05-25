import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import App from './App';
import './index.scss';
import { ErrorPage } from './pages/ErrorPage/ErrorPage';
import { CharactersPage } from './pages/CharactersPage/CharactersPage';
import { CharacterProfilePage } from './pages/CharacterProfilePage/CharacterProfilePage';
import { store } from './app/store';
import { Provider } from 'react-redux';
import { EpisodesPage } from './pages/EpisodesPage/EpisodesPage';

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <App />,
//     errorElement: <ErrorPage />,
//     children: [
//       {
//         path: '/',
//         element: <CharactersPage />,
//       },
//       {
//         path: '/characters/:characterId/',
//         element: <CharacterProfilePage />,
//       },
//       {
//         path: '/episodes',
//         element: <EpisodesPage />,
//       },
//       {
//         path: '/locations',
//         element: <div>These are the locations</div>,
//       }
//     ]
//   }
// ]);

const routerEle = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />} errorElement={<ErrorPage />}>
      <Route path='/' element={<div>HOME</div>}/>
      <Route path='/characters' element={<CharactersPage />}/>
      <Route path='/characters/:characterId/' element={<CharacterProfilePage />}/>
      <Route path='/episodes' element={<EpisodesPage />}/>
      <Route path='/locations' element={<div>These are the locations</div>}/>
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={routerEle} />
    </Provider>
  </React.StrictMode>,
);
