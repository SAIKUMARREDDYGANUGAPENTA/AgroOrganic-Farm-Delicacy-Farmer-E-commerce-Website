import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './feedback.css';
import validateFeedback from './feedbackvalidation';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from '../components/header/Header';
import Footer from "../components/footer/Footer"

const Feedbacks = () => {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [feedback, setFeedback] = useState('');
  const [rating, setRating] = useState(0);
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationError = validateFeedback(name, phone, feedback);

    if (validationError) {
      setError(validationError);
    } else {
      const data = {
        name,
        phone,
        feedback,
        rating,
        timestamp: new Date().toISOString() // Add current timestamp
      };

      fetch('http://localhost:8080/data', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      })
      .then(() => {
        toast.success('Thank you for your Feedback');
        navigate('/');
      })
      .catch(error => {
        console.error('Error:', error);
        // Handle error
      });
    }
  }
  ;
  const handleRatingChange = (value) => {
    setRating(value); // Set the selected rating value
  };

  const renderStars = () => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <span
          key={i}
          onClick={() => handleRatingChange(i)}
          style={{ cursor: 'pointer', color: i <= rating ? 'gold' : 'gray' }}
        >
          &#9733;
        </span>
      );
    }
    return stars;
  };

  return (
    <>
     <div style={{position:'fixed', width:'100%', zIndex:'9999', top:'0' }}>
      <Header/>
      </div>
    <div className="feed_back_cl">
      <div className="feed_container">
        <div className="contact_box">
          <div className="left_side_co"></div>
          <div className="right_side_co">
            <h2 className="feed_head">FEED BACK</h2>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                className="feed_field"
                placeholder="Your Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <input
                type="text"
                className="feed_field"
                placeholder="Phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
              <textarea
                placeholder="Feedback"
                className="feed_field textarea_field"
                value={feedback}
                onChange={(e) => setFeedback(e.target.value)}
              ></textarea>
                <div className="rating-section">
              
              <div className="stars"><span className='ratingname'>Rating : </span>{renderStars()}</div>
            </div>
              <button type="submit" className="button-29">
                Send
              </button>
            </form>
            {error && <div className="error-message">{error}</div>}
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
    <Footer/>
    </>
  );
};

export default Feedbacks;
