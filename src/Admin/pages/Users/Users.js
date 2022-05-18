import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Redirect } from 'react-router-dom';
import Navbar from '../../components/Navbar/Navbar';
import Aside from '../../components/Aside/Aside';
import { format } from 'date-fns'

class Articles extends React.Component {
  constructor() {
    super()
    this.state = {
      users: [],
    }
  }
  
  componentDidMount() {
    this.getUsers()
	}

  getUsers() {
    axios.get('http://127.0.0.1:8000/api/users')
      .then(response => {
        // console.log(response)
        this.setState({ users: response.data })
      })
      .catch(error => {
        console.log(error.response)
      })
  }
  


  render() {
    if(this.state.redirect) {
			return (<Redirect to='/' />)
		}
    return (
      <>
      <Navbar />
        <div className='row m-0'>
          <Aside />
          <div className='col-sm-9 row justify-content-between container m-auto'>
            {
              this.state.users.map((user) => 
                <div className='pb-2 pt-2'>
                  <div className='card'>
                    <ul className='p-3 m-1'>
                      <li><h5 className='text-primary'>{ user.name }</h5></li>
                      <li>{ user.email }</li>
                      <li>{ format(new Date(user.created_at), 'dd.mm.yyyy, hh:mm') }</li>                      
                    </ul>
                  </div>
                </div>
              )
            }
          </div>
        </div>
      </>
    )
  }
}

export default Articles;