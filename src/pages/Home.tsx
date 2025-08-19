import React from 'react';
import { Header } from '../sections/Header';
import { Call } from '../sections/Call';
import { Tests } from '../sections/Tests';
import { Contact } from '../sections/Contact';

const Home: React.FC = () => (
  <>
    <Header />
    <Call />
    <Tests />
    <Contact />
  </>
);

export default Home;
