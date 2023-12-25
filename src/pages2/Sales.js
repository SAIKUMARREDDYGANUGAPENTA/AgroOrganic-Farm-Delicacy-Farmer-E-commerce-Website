import React from 'react'
import './Sales_Agent_Home_CSS_Styles.css'
import Header2 from '../components/header/Header2';
import Footer from "../components/footer/Footer"
import Form from './Form'
import './Farmer_SA_HomePage_Sliding_Animation.css'
const Sales = () => {
    return (
        <>
         <div style={{position:'fixed', width:'100%', zIndex:'9999', top:'0' ,marginBottom:'6.9rem'}}>
      <Header2/>
      </div>
    
        <div>
        
        
        
        
        <section className = "container">
        
        
        <div className = "slider-wrapper">  
        
        
        <div className = "slider">
        
        
        
        
        
        <div id = "slide-1" className="advertise_info_1">
        <div className = "word1"> FARMER ADVERTISE INFO! </div>
        
        <div className = "y1"> The Agro-Organic Farm Delicay as a whole are striving and thrilled to
            announce to you that, now </div>
        
        <div className = "y2"> you use our services and advertise your own products.
            We as a team, as a fellow human being wanted to provide only organic food and </div>
        
        <div className = "y3"> Meat Products. The amount of effort you put into your advertising your products is much appreciated.
            There are thousands of Customers who are  </div>
        
         <div className = "y4"> not able to buy quality, organic crops in the market.
            Now we are here to change the system and provide Customers the best Organic Crops and  </div>
        
        
        <div className = "y5"> and best Dairy Products at cheaper rates.
            Following are the ways you can advertise your products.  </div>
        
        <a className = "getbutton" href = "#"> Get Started! </a>
        </div>
        
        
        
        
        
        
        <div id = "slide-2"  className="advertise_info_2">
        <div className="word1"> SALES AGENT ADVERTISE INFO! </div>
        
        <div className="y1"> The Agro-Organic Farm Delicay as a whole are striving and thrilled to
            announce to you that, now </div>
        
        <div className="y2"> you use our services and advertise your own products.
            We as a team, as a fellow human being wanted to provide only organic fertilizers and </div>
        
        <div className="y3"> pesticides. The amount of effort you put into your advertising your products is much
            appreciated.
            There are thousands of farmers who are </div>
        
        <div className="y4"> not able to provide quality crops in the market.
            Now we are here to change the system and provide farmers the best Organic Fertilizers and </div>
        
        <div className="y5"> and best HTP Sprayers at cheaper rates.
            Following are the ways you can advertise your products. </div>
        
        <a className="getbutton" href="#"> Get Started! </a>
        </div>
        
        
        
        
        
        </div>
        
        
        
        
        <div className = "slider-nav">
        <a href = '#slide-1' />
        <a href = '#slide-2' />
        </div>
        
        
        </div>
        
        
        </section>
        
        
        
        
        
        
        
        
        <br/> <br/> <br/> <br/> 
        
            
        
        
        <h1 className='head43'> Your Vision as A Farmer! </h1>
            
            <h3 className='head45'> We assume you as a Farmer provide good Organic Products, Crops and other Meat products for the Customers. </h3>
        
        
        
            <div className = "vision1">
            

               
                
                

            <div className='pr1'>
            <img  src = {require('../Images/F1.png')} />
            <div className = "v11"> Increase the crop yield and Organic Productivity of crops  </div>
            </div>
            
            <div className='pr1'>
            <img  src = {require('../Images/F2.png')} />
            <div  className = "v31">  Also Increase the Vegetable's Yield  with increased efficiency of Time</div>
            </div>
        
        
            <div className='pr1'>
            <img  src = {require('../Images/F3.png')} />
            <div className = "v51"> Provide customer good Quality Meat products and Increase the crop yield and sell their customers organic food in the market.  </div>
            </div>
        
        
            
            



    
    
        </div>
        
        
        
        
            <br/><br/><br/>
        
        
        
            <h1 className='head43'> Your Vision as A Sales Agent! </h1>
        
        <h3 className='head45'> We assume you as a Sales Agent provide good Organic Fertilizers, Seeds and HTP Machines for farmers. </h3>
        
  
        <div className="vision1">
        
                

        <div className='pr1'>
        <img  src={require('../Images/L1.png')} />
        <div className = "v11"> Increase the crop yield and Organic Productivity of crops  </div>
        </div>
        
        <div className='pr1'>
        <img  src={require('../Images/L2.png')} />
        <div className="v31"> Help Farmer with less labour work and increased efficiency of Time </div>
        </div>
        
        <div className='pr1'>
        <img  src={require('../Images/L3.png')} />
        <div className="v51"> Provide farmer some good Quality Seeds and Increase the crop yield and sell his customers organic products.</div>
        </div>

    </div>
        
        
        
        
        
        
        
        
        
        
        <Form/>
        
        
        
        
        
        
        </div>
        
        <Footer/>
        </>
          );
        
}

export default Sales
