import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class Navbar extends React.Component {
	
	constructor() {
    super()
    this.state = {
      user: {},
      token: null,
    }
  }

  componentDidMount() {
    this.userLogged()
	}

  userLogged() {

    const headers = {
      headers: {
        'API-TOKEN': localStorage.getItem('token')
      }
    }
    axios.get('http://127.0.0.1:8000/api/user', headers)
		.then(response => {

      this.setState({ user: response.data }, () => {
        console.log('Welcome ' + this.state.user.name)
      })
		})
		.catch(error => {
			console.log(error.response)
		})
  }

  logout = () => {
		localStorage.setItem('token', '')
		localStorage.clear()
		this.setState({ token: null })
	}

	render() {
		return (
			<>
      {/* ADMIN-NAVBAR */}
        <nav className='row m-0'>
          <div className="col-1 w-13">
          <img className='w-25 rounded-circle' src='/goo.png' alt='logo'></img>Blogito
          </div>
          <div className='col row m-0'>
            <div className="col-2 pt-3">
              <p>reduce win</p>
            </div>
            <div className='col w-100'>
              <ul className='nav justify-content-end pt-1'>
                <li className='justify-content-end d-flex'>
                  <img className='w-7 rounded-circle' src='/001.jpg' alt='logo'></img>
                  Welcome { this.state.user.name }
                </li>
                <li><Link className="" to="/">Website</Link></li>
                <li><Link className="" to="/homeAdmin">HomeAdmin</Link></li>
                <li>
                  <Link to="/" onClick={() => this.logout()}>Logout</Link>												
                </li>				
              </ul>
            </div>   
          </div>    
        </nav>
			</>
		)
	}
}

export default Navbar;