import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Redirect } from 'react-router-dom';
import Navbar from '../../components/Navbar/Navbar';
import Aside from '../../components/Aside/Aside';

class Articles extends React.Component {
  constructor() {
    super()
    this.state = {
      pictures: [],
      redirect: false,
    }
  }
  
  componentDidMount() {
    if(localStorage.getItem('token')) {
      this.getPicture()
    } else {
      this.setState({ redirect: true })
    }
	}
  
  getPicture() {
    axios.post('http://127.0.0.1:8000/api/pictures')
      .then(response => {

        this.setState({ pictures: response.data })
      })
      .catch(error => {
        console.log(error.response)
      })      
  }

  onDeletePicture = (id) => {		
    const headers = {
      headers: {
        'API-TOKEN': localStorage.getItem('token')
      }
    }

    axios.delete(`http://127.0.0.1:8000/api/pictures/${id}/delete`, headers)
    
      .then(response => {
        console.log('picture deleted')
        window.location.reload();
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
         
        {/* ARTICLES */}
        {
          this.state.pictures.map((picture) => 
            <div className="card border-primary w-30 my-3 mx-1" key={picture.id}>				
              <Link className='text-center' to={ `/pictures/${ picture.id } ` } >
                <img className="card-img-top m-auto pt-1 rounded shadow" 
                  alt="article"
                  style={{ width: '30%' }} 
                  src={ `http://127.0.0.1:8000/storage/pictures/${picture.image}` } >
                </img>
              </Link>					
              
              <div className="card-body">
                <h4 className="card-title">{ picture.title }</h4>
                <p className="card-text">{ picture.description }</p>
                <figcaption className="blockquote-footer mt-1">
                  Someone famous in <cite title="Source Title">Source Title</cite>
                </figcaption>										
                <Link className="btn btn-primary p-2"
                  to={ `/pictures/${ picture.id } ` } >Learn more
                </Link>
                {/* DELETE BUTTON */}										
                <button type='submit' 
                        className="m-1 btn btn-danger p-2"
                        onClick={ () => this.onDeletePicture(picture.id) } >Delete
                </button>
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