import React from 'react';

function Navigation(props) {

  const  {menu, currentTitle, setCurrentTitle} = props;

  return (
    <nav>
      <ul>
        {menu.map((title, i) => (
          <li key={title}>
            <a className={`${(currentTitle === title)  && 'navActive'}`} href={`#${title}`} onClick={() => setCurrentTitle(title)}>
              {title}
            </a>        
          </li>
        ))}
      </ul>
    </nav>
  )
}
export default Navigation;