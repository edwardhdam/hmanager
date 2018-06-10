import React from 'react';
import { render } from 'react-dom';
import NavigationBar from 'components/shared/molecules/NavigationBar';
import RootLayout from './components/layouts/RootLayout';
import './index.scss';

const mountElement = document.getElementById('root');

export default function App({ name }) {
  return <RootLayout><NavigationBar /></RootLayout>
}

render(<App name="Word !" />, mountElement);
