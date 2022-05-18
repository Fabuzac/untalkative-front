import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

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
        <div className='col-1 w-13 left-panel pt-4 text-decoration-none'>            
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
              <h5>Products</h5>
              <ul>
                <li><h6>All products</h6></li>                  
              </ul>              
            </li>
            <li>
              <h5>Users</h5>
              <ul>
                <li><h6>All users</h6></li>                  
              </ul>              
            </li>
          </ul>
        </div>
			</>
		)
	}
}

export default Aside;