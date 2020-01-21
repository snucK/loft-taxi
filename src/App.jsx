import React, { Component } from 'react'
import Header from './Components/Header/Header'
import Profile from './Components/Profile/Profile'
import Map from './Components/Map/Map'
import Login from './Components/Login/Login'
import Signup from './Components/Signup/Signup'

class App extends Component {
  state = {
    showCurrentPage: 'Login'
  }

  redirectToPage = (event) => {
    let btnSubmit = event.target.dataset.name;
    if (btnSubmit === 'Login-submit' || btnSubmit === 'Signup-submit') {
      this.setState({ showCurrentPage: 'Map' })
    }
  }

  pages = [{
    title: "Profile",
    component: <Profile />
  },
  {
    title: 'Map',
    component: <Map />
  },
  {
    title: 'Login',
    component: <Login redirectToPage={this.redirectToPage} />
  },
  {
    title: 'Signup',
    component: <Signup redirectToPage={this.redirectToPage} />
  }
  ]

  navbarHandle = (event) => {
    let clickedNavbarItem = event.target.dataset.name;
    if (clickedNavbarItem !== this.state.showCurrentPage) {
      this.setState({ showCurrentPage: clickedNavbarItem })
    }
  }

  render() {
    return (
      <>
        <Header pages={this.pages} navbarHandle={this.navbarHandle} />
        {this.pages.find(item => item.title === this.state.showCurrentPage).component}
      </>
    )
  }
}

export default App;