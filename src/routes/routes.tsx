import { RouteObject, useRoutes } from 'react-router-dom';
import { ROUTES } from './constants';
import { Root } from '../views/pages/Root';
import { Main } from '../views/pages/Main';

const routes: RouteObject[] = [
  {
    path: ROUTES.root,
    element: <Root />,
    children: [
      {
        path: ROUTES.root,
        element: <Main />
      }
    ]
  }
]

export function AppRoutes() {
  const content = useRoutes(routes);

  return (
    <>
      {content}
    </>
  )
}
