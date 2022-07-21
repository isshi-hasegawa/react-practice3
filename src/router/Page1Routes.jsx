import { Page1 } from '../Page1';
import { Page1DetailA } from '../Page1DeatailA';
import { Page1DetailB } from '../Page1DeatailB';

export const page1Routes = [
  {
    path: '/',
    exact: true,
    children: <Page1 />
  },
  {
    path: '/detailA',
    exact: false,
    children: <Page1DetailA />
  },
  {
    path: '/detailB',
    exact: false,
    children: <Page1DetailB />
  }
];
