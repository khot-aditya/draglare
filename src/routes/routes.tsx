import { RouteObject, useRoutes } from 'react-router-dom';
import { ROUTES } from './constants';
import { Root } from '../views/pages/Root';
import { Index } from '../views/pages/Index';

const routes: RouteObject[] = [
  {
    path: ROUTES.root,
    element: <Root />,
    children: [
      {
        path: ROUTES.root,
        element: <Index />
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
