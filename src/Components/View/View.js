import React, { useContext, useEffect, useState } from 'react';

import './View.css';
import { postContext } from '../../store/postContext';
import { firebaseContext } from '../../store/firebaseContext';
function View() {
  const [userDetails, setUserDetails] = useState({});
  const {postDetails} = useContext(postContext);
  const {firebase} = useContext(firebaseContext)
  useEffect(() => {
    console.log(postDetails);
    firebase.firestore().collection('users').where('id','==',(postDetails.userId)).get().then((res)=>{
      console.log(res);
      res.forEach((doc)=>{
        console.log('saadas');
        setUserDetails(doc.data())
      })
    }).catch((err)=>console.error(err))
  }, [])
  
  return (
    <div className="viewParentDiv">
      <div className="imageShowDiv">
        <img
          src={postDetails.url}
          alt=""
        />
      </div>
      <div className="rightSection">
        <div className="productDetails">
          <p>&#x20B9; {postDetails.price} </p>
          <span>{postDetails.name}</span>
          <p>{postDetails.category}</p>
          <span>{postDetails.createdO}</span>
        </div>
       {userDetails && <div className="contactDetails">
          <p>Seller details</p>
          <p>{userDetails.username}</p>
          <p>{userDetails.phone}</p>
        </div>}
      </div>
    </div>
  );
}
export default View;
