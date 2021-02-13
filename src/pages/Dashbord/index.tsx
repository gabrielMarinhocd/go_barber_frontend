import React from 'react';
import { FiChevronRight } from 'react-icons/fi';

import { Title, Form, Repositories } from './styles';
import logoImg from '../../assets/logo.svg';

const Dashbord: React.FC = () => {
  return (
    <>
      <img src={logoImg} alt="Github Explorer" />
      <Title>Explore repositorios no Github</Title>

      <Form>
        <input placeholder="Digite o nome do repositorio" />
        <button type="submit">Pesquisar</button>
      </Form>

      <Repositories>
        <a href="teste">
          <img
            src="https://avatars.githubusercontent.com/u/62352096?s=460&u=945c1dfe1e0d23f8b1e048cd034c247c350ab73a&v=4"
            alt="Gabriel Marinho"
          />
          <div>
            <strong>Projeto Awp</strong>
            <p>Sistema de gerenciamento de assistência técnica a nobreaks</p>
          </div>

          <FiChevronRight size={20} />
        </a>
      </Repositories>
    </>
  );
};

export default Dashbord;
