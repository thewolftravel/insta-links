
import { FaFacebook, FaInstagram, FaPinterest } from "react-icons/fa";
import "../styles/linktree.css";

export default function LinkTreeLayout({
  bgImage,
  profileImage,
  name,
  description,
  accentColor,
  accentColorLight,
  bgPosition,
  buttons = [],
  instagramUrl
}) {
  return (
    <div className="lt-page" style={{ "--accent": accentColor, "--accent-light": accentColorLight }}>

      {/* Background */}
      <div
        className="lt-bg"
        style={{ backgroundImage: bgImage ? `url(${bgImage})` : "none" , backgroundPosition: bgPosition || "center",}}
      />
      <div className="lt-overlay" />

      {/* Content */}
      <div className="lt-content">

        {/* Profile */}
        <div className="lt-profile">
          <div className="lt-avatar-wrap">
            <img src={profileImage} alt={name} className="lt-avatar" />
          </div>
          <h1 className="lt-name">{name}</h1>
          <p className="lt-description">{description}</p>
        </div>

        {/* Buttons */}
        <nav className="lt-buttons">
          {buttons.map((btn) => (
            <a
              key={btn.label}
              href={btn.href}
              target="_blank"
              rel="noreferrer"
              className="lt-btn"
            >
              {btn.label}
            </a>
          ))}
        </nav>

        {/* Socials */}
        <footer className="lt-socials">
          <a href="https://www.facebook.com/KarinaBittencourtPhotographer" target="_blank" rel="noreferrer" aria-label="Facebook">
            <FaFacebook />
          </a>
          <a href="https://br.pinterest.com/kbphotographercolorado/" target="_blank" rel="noreferrer" aria-label="Pinterest">
            <FaPinterest />
          </a>
          <a href={instagramUrl} target="_blank" rel="noreferrer" aria-label="Instagram">
            <FaInstagram />
          </a>
        </footer>

      </div>
    </div>
  );
}
