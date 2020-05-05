import React from "react";
import rssLogo from "../images/rss.svg";
import { Link, useStaticQuery } from "gatsby";

const Footer = () => {
  const data = useStaticQuery(graphql`
    query {
      wordpressSiteMetadata {
        name
      }
    }
  `);
  return (
    <div className="footer-container">
      <footer id="colophon" className="site-footer" role="contentinfo">
        <div className="copyright">
          {data.wordpressSiteMetadata.name} © {new Date().getFullYear()}
        </div>

        <ul className="footer-links">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <a href="/sitemap.xml">Sitemap</a>
          </li>
          <li>
            <a href="/rss.xml">RSS</a>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
        </ul>

        {/* <div className="site-info">
          Made with DraftBox ·{" "}
          <a href="/rss.xml" style={{ fontStyle: "normal" }}>
            RSS <img style={{ height: "12px" }} src={rssLogo} alt="" />
          </a>{" "}
        </div>{" "} */}
      </footer>
      <hr />
      <div className="credits">
        <a href="">Published with DraftBox</a>
      </div>
    </div>
  );
};

export default Footer;
