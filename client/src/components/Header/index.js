import Navigation from '../Navigation';

function Header(props) {

  return (
    <header>
      <div>
        <h1>IA Dream</h1>
      </div>
      <Navigation
        {...props}
        ></Navigation>  
      </header>
  );
}

export default Header;