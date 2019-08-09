import React, { Component } from 'react'
import '../ActivityCards/style.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock, faBaby, faTree, faHiking, faMoneyBillAlt} from '@fortawesome/free-solid-svg-icons'
import { BookBtn } from '../Button/button'
import API from '../../utils/api'


function ActivityCard({ title, ages, duration, location, activityLevel, price, description, link }) {
    //     BookButton = event =>{
    //     event.preventDefault();
    //     let path = {link}
    //     this.props.history.push(path)

    // }

            return (
                <div className="card mb-3" >
                    <div className="row no-gutters">
                        <div className="col-md-4">
                            <img src="https://dynaimage.cdn.cnn.com/cnn/q_auto,w_412,c_fill,g_auto,h_232,ar_16:9/http%3A%2F%2Fcdn.cnn.com%2Fcnnnext%2Fdam%2Fassets%2F180219103122-zanzibar-and-its-islands---mnemba-a-view-from-the-sky-mnemba-island-lodge.jpg" className="card-img" alt="..."></img>
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h5 className="card-title">{title}</h5>
                                    <p className="card-text">{description}</p>
                                    <p className="card-text"><small className="text-muted"> Location: {location} </small></p>
                                    <p >Ages: {ages} | Duration: {duration} | Activity Level: {activityLevel} | Price: {price} </p>
                                    <a href={link} className="bookBtn">BOOK</a>
                                    {/* <FontAwesomeIcon icon={faClock} className="icons" size="lg"/>
                                    <FontAwesomeIcon icon={faBaby} className="icons" size="lg"/>
                                    <FontAwesomeIcon icon={faTree} className="icons" size="lg"/>
                                    <FontAwesomeIcon icon={faHiking} className="icons" size="lg"/>
                                    <FontAwesomeIcon icon={faMoneyBillAlt}className="icons" size="lg"/><br></br><br></br> */}
                                 
                               
                                </div>
                            </div>
                        </div>
                    </div>
           
            )
        }




export default ActivityCard



// {this.state.books.length ? (
//   <List>
//     {this.state.books.map(book => (
//       <Book
//         key={book._id}
//         title={book.title}
//         subtitle={book.subtitle}
//         link={book.link}
//         authors={book.authors.join(", ")}
//         description={book.description}
//         image={book.image}
//         Button={() => (
//           <button
//             onClick={() => this.handleBookDelete(book._id)}
//             className="btn btn-danger ml-2"
//           >
//             Delete
//           </button>
//         )}
//       />
//     ))}
//   </List>
// ) : (
//   <h2 className="text-center">No Saved Books</h2>
// )}
// </Card>


