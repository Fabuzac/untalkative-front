import React from 'react';
import './style.css';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Navbar from '../../components/Navbar/Navbar';
import Aside from '../../components/Aside/Aside';

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
          <div className='col-sm-9 row justify-content-between container m-auto'>
            <div className='card'>
              <p>
                Molestiae similique eum perferendis animi nam. Magnam ipsam tempora molestiae. Consequatur omnis reiciendis error ut temporibus aut. Dolorem officiis voluptas et occaecati et esse ut.

                Sit numquam molestias iusto illum et voluptatem ex. Ut facere est aliquam corporis aliquid sint dolore consequatur. Magnam quidem dignissimos quasi aut non ipsa error qui. Dicta quaerat magnam illo et ea cum. Necessitatibus dolorem quibusdam rem accusamus.

                Repellendus ipsum velit distinctio dignissimos. Dolorem laborum sit vel quo vel accusamus. Ad necessitatibus in ea placeat suscipit qui eaque. Quod aut sunt inventore accusantium reprehenderit aut voluptas. Vel sit architecto eos aut. Error minus ipsum atque esse nemo iusto.

                Eligendi doloribus expedita provident dolorem iste. Et deserunt delectus omnis corrupti est. Tenetur incidunt esse illo corrupti illo cupiditate quo.

                Facere dolor eos quis vel ullam quaerat voluptatibus. Eum corporis voluptas omnis maxime dicta et. Neque eum quis est explicabo voluptatum ex alias. Voluptas et alias amet qui accusamus eaque eaque. Saepe ex quidem asperiores vitae vero illum explicabo.
              </p>
            </div>
          </div>
        </div>
      </>
    )
  }
}

export default HomeAdmin;