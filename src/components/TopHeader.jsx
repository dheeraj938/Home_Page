import "../styles/topHeader.css";
import nie from "../assets/images/nie.jpeg";
import maasarawati from "../assets/images/maasarawati.png";

const TopHeader = () => {
  return (
    <div className="top-header">
      <div className="header-section">
        <img src={nie} alt="NIE Logo" />
        <p className="header-text">National Institute of Education</p>
      </div>
      <div className="header-section">
        <img src={maasarawati} alt="maa saraswati" />
        <div className="right-section">
          <p className="header-text foundation-name">MAA SUMITRA DEVI EDUCATIONAL FOUNDATION</p>
          <p className="header-subtext">ISO CERTIFIED 9001:2008 | MSME REGD - UAM NO. UK05D0005504 | GOVT. OF NCT OF DELHI</p>
        </div>
      </div>
    </div>
  );
};

export default TopHeader;
