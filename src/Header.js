import logo from "./images/logo.svg";
import communities from "./images/icon-communities.svg";
import messages from "./images/icon-messages.svg";
import image from "./images/screen-mockups.svg";

const Header = () => {
  return (
    <header>
      <div className="top">
        <div className="logo">
          <img src={logo} alt="" />
        </div>
        <button>Try It Free</button>
      </div>
      <div className="content">
        <div className="text">
          <h1>Build the community your fans will love</h1>
          <p>
            Huddle re-imagines the way we build communities. You have a voice,
            but so does your audience. Create connections with your users as you
            engage in genuine discussion.
          </p>
          <button>Get Started For Free</button>
        </div>
        <div className="img-wrapper">
          <img src={image} alt="Screen Mockups" />
        </div>
      </div>
      <div className="bottom">
        <ul>
          <li>
            <div className="icon">
              <img src={communities} alt="" />
            </div>
            <span>1.4k+</span>
            <p>Communities Formed</p>
          </li>
          <li>
            <div className="icon">
              <img src={messages} alt="" />
            </div>
            <span>2.7m+</span>
            <p>Messages Sent</p>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
