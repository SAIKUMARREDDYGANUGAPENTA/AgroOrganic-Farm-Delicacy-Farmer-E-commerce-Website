import React, { useState, useEffect } from 'react';
import './admin.css';
import { Link } from 'react-router-dom';
import { IoMdHome } from "react-icons/io";
import { FaUsers } from "react-icons/fa";
import { SiProducthunt } from "react-icons/si";
import { VscFeedback } from "react-icons/vsc";
import { CiLogout } from "react-icons/ci";

function Users() {
  const [searchTerm, setSearchTerm] = useState('');
  const [usersData, setUsersData] = useState(null);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [error, setError] = useState(null);

  // Fetch user data from API
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api/home12');
        if (!response.ok) {
          throw new Error('Network response was not ok.');
        }
        const jsonData = await response.json();
        setUsersData(jsonData);
      } catch (error) {
        setError(error);
      }
    };

    fetchData();
  }, []);

  // Filter users based on search term
  useEffect(() => {
    if (usersData) {
      const filteredData = usersData.filter(user =>
        user.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredUsers(filteredData);
    }
  }, [searchTerm, usersData]);

  return (
    <div className='users'>
      <div className="sidebar_1">
      <Link to="/" style={{color:'white'}}>  <h1>Dashboard</h1> </Link>

      <ul>
      <li> <Link to={'/admin'}><IoMdHome /> Home</Link></li>
      <li> <Link to={"/admin/users"}><FaUsers /> Users</Link></li>
      <li><Link to={"/admin/product"}> <SiProducthunt /> Products</Link></li>
      <li><Link to={"/admin/feedbacks"}> <VscFeedback /> Feed Backs</Link></li>
      <li><Link to={"/"}><CiLogout /> Logout</Link></li>
        </ul>
      </div>
      <h1 className='searchbar'>User Details</h1>
      <input
        className='search_1'
        type="text"
        placeholder="Search by name"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <div className="user-cards">
        {error && <p>Error: {error.message}</p>}
        {filteredUsers.map((user, index) => (
          <div className="user-card" key={index}>
            {/* Display user details */}
            <div className="user-details">
              <p className='str3'><strong>Name:</strong> {user.name}</p>
              <p className='str3'><strong>Role:</strong> {user.role}</p>
              <p className='str3'><strong>PhoneNumber:</strong> {user.phonenumber}</p>
              <p className='str3'><strong>Email:</strong> {user.email}</p>
              <p className='str3'><strong>Address:</strong> {user.address}</p>
              <p className='str3'><strong>State:</strong> {user.state}</p>
              <p className='str3'><strong>Pincode:</strong> {user.pincode}</p>
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

export default Users;
