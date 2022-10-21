import React, { useState } from 'react';
import './Header.css';
import { Menubar } from 'primereact/menubar';
import { InputText } from 'primereact/inputtext';



export const Header = () => {

  const [searchValue, setSearchValue] = useState('');

  const startLogo = <h2 className='header-brand'>HCUV</h2>
  const end = <InputText placeholder="Search" type="text" />;

  const items = [
  ];

  return (
    <div className="header-container">
      <Menubar model={items} start={startLogo} end={end} />
    </div>
  );
}
