import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Button from '../components/Button';
import Gif from '../assets/animation.gif';

const Home: React.FC = () => {
  return (
    <>
      <Head>
        <title>Trabalho - Deshbord</title>
      </Head>

      <main>
        <section className="colun">
          <h3>Elle est une artiste</h3>
          <h2>
            Sélectionnez l&#39;alternative qui correspond correctement au mot «
            Artiste ».
          </h2>
          <ul className="buttons">
            <li>
              <Button>Ativista</Button>
            </li>
            <li>
              <Button>Artista</Button>
            </li>
            <li>
              <Button>Artrópode</Button>
            </li>
          </ul>
        </section>
        <section className="colun">
          <Image src={Gif} />
        </section>
      </main>
    </>
  );
};
export default Home;
