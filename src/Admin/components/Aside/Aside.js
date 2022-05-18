import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './style.css';

class Aside extends React.Component {
	
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
        {/* ASIDE MENU */}
        <div className='col-1 w-13 left-panel pt-4 text-decoration-none aside-bg'>            
          <ul className='text-decoration-none'>
            <li>
              <h5>Articles</h5>
              <ul>
                <li>
                  <Link to="/articles" >All Articles</Link>
                </li>                  
              </ul>              
            </li>            
            <li>
              <h5>Users</h5>
              <ul>
              <Link to="/users" >All Users</Link>                 
              </ul>              
            </li>
          </ul>
        </div>
			</>
		)
	}
}

export default Aside;