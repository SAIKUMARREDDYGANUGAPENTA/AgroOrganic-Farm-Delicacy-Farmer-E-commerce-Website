import React, { useEffect, useState } from 'react'
import "./Profile.css"
import { useDispatch, useSelector } from 'react-redux';
import Card from '../../components/card/Card'
import { getUser, updateUser } from '../../redux/features/auth/authSlice';
import Header2 from '../../components/header/Header2';
import Footer from "../../components/footer/Footer"
const Profile = () => {
    const {isLoading,user}=useSelector((state)=>state.auth);
    const initialState={
        name:user?.name || "",
        email:user?.email ||"",
        phonenumber:user?.phonenumber||"",
        role:user?.role||"",
        photo:user?.photo||"",
        address:user?.address||"",
        state:user?.state||"",
        pincode:user?.pincode||""
        
    }
    const [profile,setProfile]=useState(initialState);
    const [profileImage,setProfileImage]=useState(null);
    const [imagePreview,setImagePreview]=useState(null);

    const dispatch=useDispatch();


    useEffect(()=>{
        if(user===null){
            dispatch(getUser());
         }
        },[dispatch,user])

        useEffect(()=>{
            if(user){
                setProfile({
                name:user?.name || "",
                email:user?.email ||"",
                phonenumber:user?.phonenumber||"",
                role:user?.role||"",
                photo:user?.photo||"",
                address:user?.address||"",
                state:user?.state||"",
                pincode:user?.pincode||""
                
            })
             }
            },[dispatch,user])
            const handleInputChange=(e)=>{
                const {name,value}=e.target;
                setProfile({...profile,[name]:value});
            };
     const handleImageChange=(e)=>{
                setProfileImage(e.target.files[0]);
                setImagePreview(URL.createObjectURL(e.target.files[0]));
        
            };
    const saveProfile=async(e)=>{
        e.preventDefault()
        const userData={
            name:profile.name,
            phonenumber:profile.phonenumber,
            address:profile.address,
            state:profile.state,
            pincode:profile.pincode
        }
        await dispatch(updateUser(userData))
    };
    
    const savePhoto=async()=>{};

   
   

  return (
    <>
     <div style={{position:'fixed', width:'100%', zIndex:'9999', top:'0' }}>
      <Header2/>
      </div>

    <section>
    <div className='container new'>
    <div className="--flex-start profile">
       <Card cardClass={"card_1"}>
            {!isLoading && (
                <>
                <div className='profile-photo'>
                    <div>
                        <img src={imagePreview===null?user?.photo:imagePreview} alt="profile"/>
                        <h3>Role: {profile.role}</h3>
                        {imagePreview!==null &&(
                            <button className='--btn --btn-secondary' onClick={savePhoto}>Upload Photo</button>
                        )}
                    </div>
                </div>
                    <form className='form_s' onSubmit={saveProfile}>
                    <p>
                        <label className='labesl_sai'>Change Photo</label><br/>
                        <input className='input_sai' type="file" accept="image/*" name="image" onChange={handleImageChange}/>
                    </p>
                    <p>
                        <label className='labesl_sai'>Name:</label><br/>
                        <input className='input_sai' type="text" name="name" value={profile?.name} onChange={handleInputChange} required/>
                    </p>
                    <p>
                        <label className='labesl_sai'>Email:</label><br/>
                        <input className='input_sai' type="email" name="email" value={profile?.email} onChange={handleInputChange} disabled />
                    </p>
                    <p>
                        <label className='labesl_sai'>Phone Number:</label><br/>
                        <input className='input_sai' type="text" name="phone" value={profile?.phonenumber} onChange={handleInputChange}  required/>
                    </p>
                    <p>
                        <label>Address:</label><br/>
                        <input className='input_sai' type="text" name="address" value={profile?.address} onChange={handleInputChange}  required/>
                    </p>
                    <p>
                        <label className='labesl_sai'>State:</label><br/>
                        <input className='input_sai' type="text" name="state" value={profile?.state} onChange={handleInputChange} required/>
                    </p>
                    <p>
                        <label className='labesl_sai'>Pincode:</label><br/>
                        <input className='input_sai' type="text" name="pincode" value={profile?.pincode} onChange={handleInputChange} required/>
                    </p>
                    <button className='--btn --btn-primary --btn-block'>
                        Update Profile
                    </button>
                    </form>
               
                </>
            )}
       </Card>
    </div>
    </div>
    </section>
    <Footer/>
    </>
  )
}

export default Profile