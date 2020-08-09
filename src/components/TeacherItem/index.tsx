import React from 'react';

import api from '../../services/api';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

export interface Teacher {
  id: number;
  avatar: string;
  bio: string;
  cost: number;
  name: string;
  subject: string;
  whatsapp: string;
}

interface TeacherItemProps {
  teacher: Teacher;
}

const TeacherItem: React.FC = () => {
  return (
    <article className="teacher-item">
      <header>
        <img src="" alt="" />
        <div>
          <strong>name</strong>
          <span>subject</span>
        </div>
      </header>

      <p>bio</p>

      <footer>
        <p>
          Preço/hora
          <strong>R$ </strong>
        </p>
        <a
          target="_blank"
          href={`https://wa.me/+55`}
        >
          <img src={whatsappIcon} alt="Whatsapp" />
          Entrar em contato
        </a>
      </footer>
    </article>
  );
};

export default TeacherItem;