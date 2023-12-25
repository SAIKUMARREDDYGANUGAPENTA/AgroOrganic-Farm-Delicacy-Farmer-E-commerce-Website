import React, { useEffect, useRef,useState } from 'react';
import axios from 'axios';
import Chart from 'chart.js/auto';
import './admin.css';
import { Link } from 'react-router-dom';
import { IoMdHome } from "react-icons/io";
import { FaUsers } from "react-icons/fa";
import { SiProducthunt } from "react-icons/si";
import { VscFeedback } from "react-icons/vsc";
import { CiLogout } from "react-icons/ci";


function Admin() {

  const [productData, setProductData] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8000/data2")
      .then(res => {
        setProductData(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);


  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('/data.json');
        setProductData(response.data.data);
      } catch (error) {
        console.error('Error fetching product data:', error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    axios.get("http://localhost:8080/data")
      .then(res => {
        setPosts(res.data);
      })
      .catch(err => {
        console.error('Error fetching posts:', err);
      });
  }, []);

  const chartRef1 = useRef(null);
  const chartInstance1 = useRef(null);
  const chartRefPie = useRef(null);
  const chartInstancePie = useRef(null);
  const chartRefRoles = useRef(null); // Define chart reference for user roles
  const chartInstanceRoles = useRef(null);

  // Effect for Bar Chart 1 (similar to your existing code)

  // Effect for Bar Chart 2 (similar to your existing code)
  useEffect(() => {
    // Constructing Pie Chart based on review ratings
    const aggregatedReviews = {};
    posts.forEach(post => {
      const { rating } = post;
      if (aggregatedReviews[rating]) {
        aggregatedReviews[rating] += 1;
      } else {
        aggregatedReviews[rating] = 1;
      }
    });
  
    const ratingLabels = Object.keys(aggregatedReviews);
    const reviewCounts = Object.values(aggregatedReviews);
  
    const ratings = {
      5: 'Excellent',
      4: 'Good',
      3: 'Average',
      2: 'Below Average',
      1: 'Poor'
      // Add more ratings if needed
    };
  
    const pieData = {
      labels: ratingLabels.map(rating => ratings[rating]),
      datasets: [{
        label: 'Review Ratings',
        data: reviewCounts,
        backgroundColor: [
          'rgba(255, 99, 132, 0.5)',
          'rgba(54, 162, 235, 0.5)',
          'rgba(255, 206, 86, 0.5)',
          'rgba(75, 192, 192, 0.5)',
          'rgba(153, 102, 255, 0.5)',
          'rgba(255, 159, 64, 0.5)'
          // Add more colors as needed
        ],
        hoverOffset: 4
      }]
    };
  
    const ctxPie = chartRefPie.current.getContext('2d');
    if (chartInstancePie.current) {
      chartInstancePie.current.destroy();
    }
  
    chartInstancePie.current = new Chart(ctxPie, {
      type: 'pie',
      data: pieData,
      options: {
  maintainAspectRatio: false,
  responsive: true,
  aspectRatio: 1, // Add this line to make the chart square
  layout: {
    padding: {
      left: 0,
      right: 0,
      top: 0,
      bottom: 0
    }
  },
  plugins: {
    legend: {
      position: 'bottom',
    },
    tooltip: {
      callbacks: {
        label: (context) => {
          const label = context.label || '';
          const value = context.raw || '';
          return `${label}: ${value}`;
        },
      },
    },
  },
},

    });
  
    return () => {
      if (chartInstancePie.current) {
        chartInstancePie.current.destroy();
      }
    };
  }, [posts]);
  



  useEffect(() => {
    const aggregatedData = {};

    productData.forEach(product => {
      if (
        product.product_type === 'Fruit' ||
        product.product_type === 'HTP Machines' ||
        product.product_type === 'Dairy/Meat' ||
        product.product_type === 'Vegetable' ||
        product.product_type === 'Seeds' ||
        product.product_type === 'Organic Fertilizer'
      ) {
        if (aggregatedData[product.product_type]) {
          aggregatedData[product.product_type] += 1;
        } else {
          aggregatedData[product.product_type] = 1;
        }
      }
    });

    const productLabels = Object.keys(aggregatedData);
    const productQuantities = Object.values(aggregatedData);

    const usersData = {
      labels: productLabels,
      datasets: [{
        label: 'Product Types',
        data: productQuantities,
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
        barThickness: 70,
        borderRadius: 5,
        hoverBackgroundColor: 'rgba(75, 192, 192, 0.4)',
        hoverBorderColor: 'rgba(75, 192, 192, 1)',
      }]
    };

    const ctx = chartRef1.current.getContext('2d');

    if (chartInstance1.current) {
      chartInstance1.current.destroy();
    }

    chartInstance1.current = new Chart(ctx, {
      type: 'bar',
      data: usersData,
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });

  
  

    return () => {
      if (chartInstance1.current) {
        chartInstance1.current.destroy();
      }
      // if (chartInstance2.current) {
      //   chartInstance2.current.destroy();
      // }
    };
  }, [productData]);// Empty dependency array ensures this effect runs once after the initial render


  const [error, setError] = useState(null);
  const [usersData, setUsersData] = useState(null);
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
  useEffect(() => {
    // Count occurrences of each role in the userData array
    const aggregatedRoles = {};
    if (usersData) {
      usersData.forEach(user => {
        const { role } = user;
        if (aggregatedRoles[role]) {
          aggregatedRoles[role] += 1;
        } else {
          aggregatedRoles[role] = 1;
        }
      });
    }

    const roleLabels = Object.keys(aggregatedRoles);
    const roleCounts = Object.values(aggregatedRoles);

    const rolesData = {
      labels: roleLabels,
      datasets: [{
        label: 'User Roles',
        data: roleCounts,
        backgroundColor: 'rgba(54, 162, 235, 0.5)', // Adjust color as needed
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 1,
        barThickness: 70,
        borderRadius: 5,
        hoverBackgroundColor: 'rgba(54, 162, 235, 0.7)',
        hoverBorderColor: 'rgba(54, 162, 235, 1)',
      }]
    };

    const ctxRoles = chartRefRoles.current.getContext('2d');

    if (chartInstanceRoles.current) {
      chartInstanceRoles.current.destroy();
    }

    chartInstanceRoles.current = new Chart(ctxRoles, {
      type: 'bar',
      data: rolesData,
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });

    return () => {
      if (chartInstanceRoles.current) {
        chartInstanceRoles.current.destroy();
      }
    };
  }, [usersData]);


  
  return (
    <div className="dashboard-container Admins">
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
      <div className="content_15">
        <div className="card_15">
          <h2>Users</h2>
          <p>Total users: {usersData ? usersData.length : 0}</p>        </div>
        <div className="card_15">
          <h2>Products</h2>
          <p>Total Products : {productData.length}</p>
        </div>
        <div className="card_15">
          <h2>Feedbacks</h2>
          <p>Feedbacks : {posts.length}</p>
        </div>
        </div>
        {/* <div className="graph-container">
          <canvas className='userchat2' id="userChart" width={500} height={200} ref={chartRef}></canvas>
        </div> */}
       <div className="graph-container">
        <canvas className='userchat2' id="userChart1"  ref={chartRef1}></canvas>
        <h2>User Roles</h2>
          <canvas className='userchat2' id="userChartRoles" ref={chartRefRoles}></canvas>
        
      </div>
    
     
      <div className="graph-container ">
      
      <canvas className='graph23' id="userChartPie"  ref={chartRefPie}></canvas>
     
    </div>
   
      <div className='Footer'>
         
         &copy; {} All Rights Reserved
        
     </div>
    </div>
  );
}

export default Admin;
