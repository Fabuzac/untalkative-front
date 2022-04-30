import React from 'react';
import './style.css';
import { Link } from 'react-router-dom';
import axios from 'axios';

class BackAdmin extends React.Component {
  constructor() {
    super()
    this.state = {
      pictures: []
    }
  }

  componentDidMount() {
		
		axios.post('http://127.0.0.1:8000/api/pictures')
		.then(response => {

			this.setState({ pictures: response.data })
		})
		.catch(error => {
			console.log(error.response)
		})
	}

  render() {
    return (
      <>
        {/* ADMIN-NAVBAR */}
        <nav className='row m-0'>
          <div className="col-1 w-13">
          <img className='w-25 rounded-circle' src='/goo.png' alt='logo'></img>Website Name
          </div>
          <div className='col row m-0'>
            <div className="col-2 pt-3">
              <p>reduce win</p>
            </div>
            <div className='col w-100'>
              <ul className='nav justify-content-end pt-1'>
                <li className='justify-content-end d-flex'>
                  <img className='w-7 rounded-circle' src='/001.jpg' alt='logo'></img> Sestsuna Seiei
                </li>
                <li><Link className="" to="/">Website</Link></li>
                <li><Link className="" to="/">Lougout</Link></li>
              </ul>
            </div>   
          </div>    
        </nav>

        {/* ASIDE MENU */}
        <div className='row m-0'>          
          <div className='col-1 w-13 left-panel pt-4 text-decoration-none'>            
            <ul className='text-decoration-none'>
              <li>
                <h5>Articles</h5>
                <ul>
                  <li><h6>All products</h6></li>                  
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

          <div className='col-sm-9 row justify-content-between container'>
					{/* ARTICLES */}
						{
							this.state.pictures.map((picture) => 
								<div className="card border-primary w-30 my-3 mx-1">									
									<img className="card-img-top" 
											 alt="Card image"
											 style={{ width: '100%' }} 
											 src={ `http://127.0.0.1:8000/storage/pictures/${picture.image}` } >
									</img>
									<div className="card-body">
										<h4 className="card-title">{ picture.title }</h4>
										<p className="card-text">{ picture.description }</p>
										<figcaption className="blockquote-footer mt-1">
											Someone famous in <cite title="Source Title">Source Title</cite>
										</figcaption>										
										<Link className="btn btn-primary"
												  to={ `/pictures/${ picture.id } ` } >Learn more
										</Link>
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

export default BackAdmin;