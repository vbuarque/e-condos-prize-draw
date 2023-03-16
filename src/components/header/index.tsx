import { Detective } from '@phosphor-icons/react';
import { Link } from 'react-router-dom';

import './styles.scss';

export function Header() {
  return (
    <>
      <header className="header-container">
        <Detective size={32} className='header_logo'/>
        <div className='header_link_container'>
          <Link to='/' className='header_link'>Inicio</Link>
          <Link to='/register' className='header_link'>Cadastro</Link>
          <Link to='/sortition' className='header_link'>Sorteio</Link>
        </div>
      </header>
    </>
  );
}