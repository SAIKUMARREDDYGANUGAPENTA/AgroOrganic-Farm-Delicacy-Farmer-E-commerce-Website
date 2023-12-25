import React, {useState} from 'react';
import './form.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';

const Form=()=>{
    const navigate = useNavigate();


const [product_name, setProduct_name] = useState('');
const [product_img, setProduct_img] = useState('');
const [product_mrp, setProduct_mrp] = useState('');
// const [product_selling_price, setProduct_selling_price] = useState('');
const [quantity_available, setQuantity_available] = useState('');
const [offer, setOffer] = useState('');
const [delivary_charges, setDelivary_charges] = useState('');
const [product_type, setProduct_type] = useState('');
const [discription, setDiscription] = useState('');





const handleSubmit=(event)=>{
    event.preventDefault();
    
    
         
    const data = {
        product_name,
        product_img,
        product_mrp,
        quantity_available,
        offer,
        delivary_charges,
        product_type,
        discription
      };
 

    const validation = validate_Home_Form(product_name,
        product_img,
        product_mrp,
        quantity_available,
        offer,
        delivary_charges,
        product_type,
        discription);


    if (validation) {
              fetch('http://localhost:8000/data2', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      })
      .then(() => {
        toast.success('Product Successfully Uploaded');
        // console.log('Successfully created account');
        navigate('/product');
      })
      .catch(error => {
        console.error('Error:', error);
        // Handle error
      });
    console.log(data);
    }

    else {
        console.log("No proper Validation");
    }
    //   fetch('http://localhost:8000/Backend_Server', {
    //     method: 'POST',
    //     headers: { 'Content-Type': 'application/json' },
    //     body: JSON.stringify(data)
    //   })
    //   .then(() => {
    //     console.log('Successfully created account');
    //     navigate('/');
    //   })
    //   .catch(error => {
    //     console.error('Error:', error);
    //     // Handle error
    //   });





}    






const validate_Home_Form = (product_name,
    product_img,
    product_mrp,
    quantity_available,
    offer,
    delivary_charges,
    product_type,
    discription) =>{
    
    
// if (!product_name.trim() || !product_img.trim() || !product_mrp.trim() || !quantity_available.trim()
// || !offer.trim() || !delivary_charges.trim() || !product_type.trim() || !discription.trim()) {
//     console.log("Hi")
// return false;
// }

// console.log(product_name.match('/^[A-Za-z0-9_\s]+$/'));
let x1 = product_name.match(/^[A-Za-z0-9_\s]+$/);
let x2 = quantity_available.match(/^[1-9][0-9]*$/);
let x4 = product_mrp.match(/^[1-9][0-9]*$/);
let x5 = offer.match(/^[1-9][0-9]{0,1}$/);
let x6 = delivary_charges.match(/^[1-9][0-9]*$/);



if (  !( (x1 != null) && (product_name.length >= 3 ) && (product_name.length <= 30) ) ) {
    alert('Product Name must have atleast 3 characters and less than 30 and consists of only alphadigit')
    console.log('Hi2')
return false;
}


if (  !(  (x2 != null) && (quantity_available >= 1)     )  ) {
    alert('Quantity must be atleast 1 and a positive number')
return false;
}



if (!(x4 != null)) {
    alert('Product MRP must be a positive number ')
    return false;
}
    


if (!(  (x5 != null) && (offer > 0) && (offer < 100)  )) {
    alert('Offer must be a positive integer and in between 1 and 100')
return false;
}



if (!(x6 != null)) {
    alert('Delivery Charges must be a positive number and greater than 1')
    return false;
}


return true;
    
    
}





return(
<div>
<h1 style={{textAlign:'center', color:'blue', fontSize:'40px', marginTop:'8rem'}}> Upload Product Details
Thorugh the Form</h1>
<br/><br/>

<div className="SA_form">

<form  onSubmit = {handleSubmit}>


    <div className="pname"> Product Name </div>
    <input style = {{width:'40%'}} placeholder="Enter the Product Name" type="text" id="Product_Name"
        name="product_name" title="Enter the name of the Product not more than 30 characters" 
        value = {product_name} onChange = {(e)=> setProduct_name(e.target.value)} required/> 





    <div className="pimage"> Product Image (As Link)</div>
    <input style = {{width:'40%'}}  type="text" name="product_img" id="Product_Image"
        placeholder="Enter the Image Link" title="Upload the Image of the Product" 
        value = {product_img} onChange = {(e)=> setProduct_img(e.target.value)} required/>






    <div className="pmrp"> Product MRP </div>
    <input type="number" name="product_mrp" id="MRP" placeholder="Enter the MRP"
        title="Enter the MRP of the Product" 
        value = {product_mrp} onChange = {(e)=> setProduct_mrp(e.target.value)} required/>



{/* 

    <div className="pselling_price"> Product Selling Price </div>
    <input type="number" id="Selling_Price" name="product_selling_price" placeholder="Enter the Selling Price"
        title="Enter the Selling Price of the Product" 
        value = {product_selling_price} onChange = {(e)=> setProduct_selling_price(e.target.value)} required/>
 */}





    <div className="pquantity"> Quantity </div>
    <input type="number" id="Quantity" name="quantity_available" placeholder="Enter Qunatity"
        title="Enter the Quantity available" 
        value = {quantity_available} onChange = {(e)=> setQuantity_available(e.target.value)} required/>






    <div className="poffer"> Offer Percentage (If any) </div>
    <input type="number" id="Offer" name="offer" placeholder="Enter Offer %"
        title="Enter Offer Percentage(Only Number) if applicable else leave it as null"
        value = {offer} onChange = {(e)=> setOffer(e.target.value)} />




    <div className="pdelivery_charges"> Delivery Charges </div>
    <input type="number" id="Delivery_Charges" name="delivary_charges"
        placeholder="Enter the Delivery Charges" title="Enter the Delivery Charges of the Product"
        value = {delivary_charges} onChange = {(e)=> setDelivary_charges(e.target.value)} required/>





    <div className="pproduct_type"> Select the Product Type </div>
    <select name="product_type" id="Product_Type" title="Select the Type of the Product"  value = {product_type} onChange = {(e)=> setProduct_type(e.target.value)} >
        <option value="Organic Fertilizer"> Organic Fertilizer </option>
        <option value="Seeds"> Seeds </option>
        <option value="HTP Machines"> HTP Machines </option>
        <option value="Vegetable"> Vegetable</option>
        <option value="Fruit"> Fruit </option>
        <option value="Dairy/Meat"> Dairy/Meat </option>
    </select>




    <div className="pdescription"> Write down the Description of the Product </div>
    <textarea name="discription" id="Item_Description" rows="10" cols="120" 
     value = {discription} onChange = {(e)=> setDiscription(e.target.value)} style={{resize:'none'}}
        placeholder="Enter the Description of the Product here!"
        title="Enter the Description of the Product not more than 20-30 words" maxlength="100"
        required></textarea>
    <br/><br/><br/>



    <button style={{marginTop:'2rem'}} id = "submit_button" onclick = "myfunc()" type = "submit" title = "Submit the Form"> Submit</button>
    <button style={{marginTop:'2rem'}} id="reset_button" type="Reset"
        title="Reset Your Response">Reset</button>

</form>


</div>
<br/><br/><br/><br/>
<ToastContainer />

</div>



)

};


export default Form;