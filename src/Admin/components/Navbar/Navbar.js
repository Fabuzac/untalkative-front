import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './style.css';

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
        // console.log('Welcome ' + this.state.user.name)
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
          <div className="col-1 w-13 aside-bg">
            <img className='w-25 rounded-circle' src='/goo.png' alt='logo'></img>Blogito
          </div>
          <div className='col row m-0 mt-4'>            
              <div className='col-3 btn btn-primary reduce-btn p-1'>↔️</div>  
              <ul className='col-11 nav justify-content-end'>                               
                <li>
                  <Link to="/">Website</Link>
                </li>
                <li>
                  <Link to="/homeAdmin">HomeAdmin</Link>
                </li>
                <li>
                  <Link to="/" onClick={() => this.logout()}>Logout</Link>												
                </li>				
              </ul>
              <div className='card w-50 m-auto p-3'>
                <div className='text-center'>
                    <img className='admin-avatar w-7 rounded-circle' src='/001.jpg' alt='logo'></img>
                    Welcome { this.state.user.name }
                </div>
              </div>            
          </div>    
        </nav>
			</>
		)
	}
}

export default Navbar;