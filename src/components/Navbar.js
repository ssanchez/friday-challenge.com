import React from "react";
import { StaticQuery, Link } from "gatsby";
import SearchBox from "./SearchBox";
import github from "../img/github-icon.svg";
import logo from "../img/logo.svg";

const Navbar = class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false,
      navBarActiveClass: ""
    };
  }

  toggleHamburger = () => {
    // toggle the active boolean in the state
    this.setState(
      {
        active: !this.state.active
      },
      // after state has been updated,
      () => {
        // set the class in state for the navbar accordingly
        this.state.active
          ? this.setState({
              navBarActiveClass: "is-active"
            })
          : this.setState({
              navBarActiveClass: ""
            });
      }
    );
  };

  render() {
    return (
      <StaticQuery
        query={graphql`
          query SearchIndexQuery {
            siteSearchIndex {
              index
            }
          }
        `}
        render={data => (
          <nav
            className="navbar is-transparent"
            role="navigation"
            aria-label="main-navigation"
          >
            <div className="container">
              <div className="navbar-brand">
                <Link to="/" className="navbar-item" title="Logo">
                  <img src={logo} alt="Kaldi" style={{ width: "88px" }} />
                </Link>
                {/* Hamburger menu */}
                <div
                  className={`navbar-burger burger ${
                    this.state.navBarActiveClass
                  }`}
                  data-target="navMenu"
                  onClick={() => this.toggleHamburger()}
                >
                  <span />
                  <span />
                  <span />
                </div>
              </div>
              <div
                id="navMenu"
                className={`navbar-menu ${this.state.navBarActiveClass}`}
              >
                <div className="navbar-start has-text-centered">
                  <Link className="navbar-item" to="/challenges">
                    Challenges
                  </Link>
                  <SearchBox searchIndex={data.siteSearchIndex.index} />
                </div>
                <div className="navbar-end has-text-centered">
                  <a
                    className="navbar-item"
                    href="https://github.com/AustinGreen/gatsby-netlify-cms-boilerplate"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="icon">
                      <img src={github} alt="Github" />
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </nav>
        )}
      />
    );
  }
};

export default Navbar;
