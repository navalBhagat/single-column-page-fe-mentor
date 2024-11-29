import { useState } from "react";
import "./App.scss";

function App() {
  return (
    <>
      <Header />
      <Content />
      <Footer />
    </>
  );
}

export default App;

const Header = () => {
  return (
    <header>
      <img src="/images/logo.svg" alt="PING. logo" />
      <h1>
        We are launching <strong>soon!</strong>
      </h1>
      <p>Subscribe and get notified</p>
    </header>
  );
};

const Content = () => {
  const [email, setEmail] = useState<string>("");
  const [error, setError] = useState<string>("");

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    if (e.target.value.trim() == "") {
      setError("Email is required.");
    } else if (!e.target.validity.valid) {
      setError("Please provide a valid email address");
    } else {
      setError("");
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  return (
    <main>
      <form className="email-form" aria-labelledby="subscribe-heading">
        <label htmlFor="email" className="sr-only">
          Email address
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={email}
          placeholder="Your email address..."
          aria-required="true"
          onBlur={handleBlur}
          onChange={handleChange}
          className={error != "" ? "showError" : ""}
        />
        {error != "" && <span>{error}</span>}
        <button type="submit">Notify Me</button>
      </form>
      <figure>
        <img
          src="/images/illustration-dashboard.png"
          alt="Illustration of the Ping. dashboard"
        />
        <figcaption className="sr-only">
          An illustration of the Ping. dashboard.
        </figcaption>
      </figure>
    </main>
  );
};

const Footer = () => {
  return (
    <footer>
      <nav aria-label="Social media">
        <ul className="socials">
          <li>
            <a href="https://facebook.com" aria-label="Facebook">
              <i
                className="fa-brands fa-facebook-f fa-xs"
                aria-hidden="true"
              ></i>
            </a>
          </li>
          <li>
            <a href="https://twitter.com" aria-label="Twitter">
              <i className="fa-brands fa-twitter fa-xs" aria-hidden="true"></i>
            </a>
          </li>
          <li>
            <a href="https://instagram.com" aria-label="Instagram">
              <i className="fa fa-instagram fa-xs" aria-hidden="true"></i>
            </a>
          </li>
        </ul>
      </nav>
      <p>&copy; Copyright Ping. All rights reserved.</p>
    </footer>
  );
};
