import React, { useState, useEffect } from 'react';
import './admin.css';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { IoMdHome } from "react-icons/io";
import { FaUsers } from "react-icons/fa";
import { SiProducthunt } from "react-icons/si";
import { VscFeedback } from "react-icons/vsc";
import { CiLogout } from "react-icons/ci";

function ReviewPage() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8080/data")
      .then(res => {
        setPosts(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  

  // Function to render stars based on the rating value
  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <span
          key={i}
          style={{ color: i <= rating ? 'gold' : 'gray' }}
        >
          &#9733;
        </span>
      );
    }
    return stars;
  };
  const sortedPosts = [...posts].sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp));


  return (
    <div className='Reviews'>
      <div className="sidebar_1">
        <a href="/"> <h1>Dashboard</h1> </a>
        <ul>
        <li> <Link to={'/admin'}><IoMdHome /> Home</Link></li>
      <li> <Link to={"/admin/users"}><FaUsers /> Users</Link></li>
      <li><Link to={"/admin/product"}> <SiProducthunt /> Products</Link></li>
      <li><Link to={"/admin/feedbacks"}> <VscFeedback /> Feed Backs</Link></li>
      <li><Link to={"/"}><CiLogout /> Logout</Link></li>
        </ul>
      </div>

      <h1 className='searchbar'>Customer Feedback</h1>

      <div className="feedback-container">
        {sortedPosts.map(post => (
          <div className="feedback-card str1" key={post.p_id}>
            <h2>{post.feedback}</h2>
            <p className="feedback-date str1">{post.timestamp}</p>
            <p className="feedback-name ">-{post.name}</p>
            <div className="feedback-rating str1">
              {renderStars(post.rating)}
            </div>
          </div>
        ))}
      </div>

      <div className='Footer'>
        &copy; {} All Rights Reserved
      </div>
    </div>
  );
}

export default ReviewPage;
