import React from 'react';
import './style.css';
import { Link } from 'react-router-dom';

class BackAdmin extends React.Component {

  render() {
    return (
      <>
        {/* ADMIN-NAVBAR */}
        <nav className='row m-0'>
          <div className="col-1 w-13">
            <img alt='logo' src='/favicon.ico' className='w-25 m-1 p-1'></img>
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

          {/* CENTER ROW */}
          <div className='col bg-gray m-0 content-wrapper container-fluid'>
            <div>
              <div className='d-flex'>
                <p>ico</p><h4>PAGE HEADER</h4>                
              </div>

              {/* MODULE ONE */}
              <div className='row'>
                <div className="col-md-4 bg-warning card">
                  <div className="card-header">Header</div>
                  <div className="card-body">
                    <h4 className="card-title">Primary card title</h4>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  </div>
                </div>
                <div className="col-md-4 bg-success card">
                  <div className="card-header">Header</div>
                  <div className="card-body">
                    <h4 className="card-title">Success card title</h4>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  </div>
                </div>
                <div className="col-md-4 bg-link card">
                  <div className="card-header">Header</div>
                  <div className="card-body">
                    <h4 className="card-title">Secondary card title</h4>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  </div>
                </div>
              </div>

              {/* MODULE TWO */}
              <div className='row'>
                <div className="col-md-4 bg-link card">
                  <div className="card-header">Header</div>
                  <div className="card-body">
                    <h4 className="card-title">Secondary card title</h4>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  </div>
                </div>
                <div className="col-md-4 bg-primary card">
                  <div className="card-header">Header</div>
                  <div className="card-body">
                    <h4 className="card-title">Primary card title</h4>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  </div>
                </div>
                <div className="col-md-4 bg-success card">
                  <div className="card-header">Header</div>
                  <div className="card-body">
                    <h4 className="card-title">Success card title</h4>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  </div>
                </div>
              </div>

              {/* MODULE TWO */}
              <div className='row'>
                <div className="col-md-4 bg-primary card">
                  <div className="card-header">Header</div>
                  <div className="card-body">
                    <h4 className="card-title">Primary card title</h4>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  </div>
                </div>
                <div className="col-md-4 bg-success card">
                  <div className="card-header">Header</div>
                  <div className="card-body">
                    <h4 className="card-title">Success card title</h4>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  </div>
                </div>
                <div className="col-md-4 bg-link card">
                  <div className="card-header">Header</div>
                  <div className="card-body">
                    <h4 className="card-title">Secondary card title</h4>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  </div>
                </div>
              </div>             

            </div>
          </div>
        </div>
      </>
    )
  }
}

export default BackAdmin;