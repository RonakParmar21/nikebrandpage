import "../App.css";

const Navigation = () => {
  return (
    <nav className="container">
      <div className="logo">
        <img src="/images/brand_logo.png" alt="brand logo" />
      </div>

      <ul>
        <li>
          <a href="#">MENU</a>
        </li>
        <li>
          <a href="#">LOCATION</a>
        </li>
        <li>
          <a href="#">ABOUT</a>
        </li>
        <li>
          <a href="#">CONTACT</a>
        </li>
      </ul>
      <button>Login</button>
    </nav>
  );
};

export default Navigation;
