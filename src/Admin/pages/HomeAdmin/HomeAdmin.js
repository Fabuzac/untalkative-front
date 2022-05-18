import React from 'react';
import './style.css';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Navbar from '../../components/Navbar/Navbar';
import Aside from '../../components/Aside/Aside';
import Articles from '../Articles/Articles';

class HomeAdmin extends React.Component {
  constructor() {
    super()
    this.state = {
      //    
    }
  }
  
  componentDidMount() {
    //
	}

  render() {
    return (
      <>
        <Navbar />
        <div className='row m-0'>
          <Aside />
          <div className='col-sm-9 row justify-content-between container'>
            <div className='card'>
              <p>Mon content</p>
            </div>
          </div>
        </div>
      </>
    )
  }
}

export default HomeAdmin;