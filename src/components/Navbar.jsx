import "../styles/navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul>
        <li className="active">Home</li>
        <li>About us</li>
        <li>Courses</li>
        <li>Insights</li>
        <li>Registration</li>
        <li>Contact us</li>
      </ul>
    </nav>
  );
};

export default Navbar;
