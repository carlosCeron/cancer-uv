import React, { useState } from 'react';
import './Header.css';
import { Menubar } from 'primereact/menubar';
import { InputText } from 'primereact/inputtext';


export const Header = () => {

  const [searchValue, setSearchValue] = useState('')

  const items = [
    {
      label: 'Search',
      template: () => {

        return (

          <span className='p-input-icon-left'>
            <i className='pi pi-search' />
            <InputText
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)} />
          </span>

        )
      }
    }
  ];

  return (
    <div className='header-container'>
      <Menubar model={items} className='search-option'/>
    </div>
  )
}
