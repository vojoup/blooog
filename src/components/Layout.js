import React from 'react'
import { Link } from 'gatsby'

import { rhythm, scale } from '../utils/typography'
import { loadState, saveState } from '../utils/helpers';
import './styles.css';

import { document } from 'browser-monads';


class Layout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lightMode: loadState('lightMode') === undefined || loadState('lightMode')
    }
    this.toggleLightMode = this.toggleLightMode.bind(this);
  }

  componentWillMount() {
    const { lightMode } = this.state;
    this.setBodyBgColor(lightMode);
  }

  setBodyBgColor(lightMode) {
    const body = document.querySelector('body');
    body.style.setProperty('--main-bg-color', lightMode ? '#ffffff' : '#212121');
  }

  toggleLightMode() {
    const lightMode = !this.state.lightMode;
    this.setBodyBgColor(lightMode);
    saveState('lightMode', lightMode);
    this.setState({ lightMode });
  }

  render() {
    const { location, title, children } = this.props;
    const { lightMode } = this.state;
    const rootPath = `${__PATH_PREFIX__}/`;
    let header;

    if (location.pathname === rootPath) {
      header = (
        <h1
          style={{
            ...scale(1.5),
            marginBottom: rhythm(1.5),
            marginTop: 0,
          }}
        >
          <Link
            style={{
              boxShadow: `none`,
              textDecoration: `none`,
              color: `inherit`,
            }}
            to={`/`}
          >
            {title}
          </Link>
        </h1>
      )
    } else {
      header = (
        <h3
          style={{
            fontFamily: `Montserrat, sans-serif`,
            marginTop: 0,
            marginBottom: rhythm(-1),
          }}
        >
          <Link
            style={{
              boxShadow: `none`,
              textDecoration: `none`,
              color: `#007acc`,
            }}
            to={`/`}
          >
            {title}
          </Link>
        </h3>
      )
    }
    return (
      <div
        style={{
          width: '100%',
          height: '100vh',
          backgroundColor: lightMode ? 'inherit' : '#212121',
        }}
      >
        <div
          style={{
            marginLeft: 'auto',
            marginRight: 'auto',
            maxWidth: rhythm(24),
            backgroundColor: lightMode ? 'inherit' : '#212121',
            color: lightMode ? 'inherit' : 'rgba(255, 255, 255, 0.8)',
            transition: 1,
            padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
          }}
        >
          <button
            style={{
              float: 'right',
              border: 'none',
              backgroundColor: 'inherit'
            }}
            title={lightMode ? 'Dark mode' : 'Light mode'}
            className="dark-mode"
            onClick={this.toggleLightMode}
          >
            {lightMode ? '🌙' : '🌞'}
          </button>
          {header}
          {children}
        </div>
      </div>
    )
  }
}

export default Layout
