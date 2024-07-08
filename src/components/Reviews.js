import React, { useState } from 'react'
import ReactStars from 'react-stars'
import { reviewsRef, db } from '../firebase/firebase';
import { addDoc, Timestamp, doc, updateDoc } from 'firebase/firestore';
import { TailSpin } from 'react-loader-spinner';
import swal from 'sweetalert'
import { red } from '@mui/material/colors';

const Reviews = ({id, prevRating, userRated}) => {
    const [rating, setRating]=useState(0);
    const [loading, setLoading]=useState(false);
    const [form, setForm]=useState("");

    const sendReview = async () => {
        setLoading(true);
        try{
            await addDoc(reviewsRef, {
                bookid:id,
                name: "Anshita Verma",
                rating:rating,
                thought:form,
                timestamp:new Date().getTime()
            })
            const ref=doc(db, "books", id);
            await updateDoc(ref, {
                rating: prevRating +rating,
                rated: userRated +1
            })
            setRating(0);
            setForm("");
            swal({
                title:"Review Sent",
                icon: "success",
                buttons: false,
                timer: 3000
            })
        }
        catch(error){
            swal({
                title:error.message,
                icon: "error",
                buttons: false,
                timer: 3000
            })
        }
        setLoading(false);
    }

  return (
    <div className='mt-4 py-1 border-t-2 border-blue-400 w-full'>
        <ReactStars size={25} half={true} value={rating} onChange={(rate) => setRating(rate)}/>
        <input
            value={form}
            onChange={(e) => setForm(e.target.value)}
            placeholder='Add your review...'
            className='w-full p-2 outline-none text-black'
        />
        <button onClick={sendReview} className='bg-blue-500 flex justify-center w-full p-2'>
            {loading? <TailSpin height={25} color="white"/>:'Share'}
        </button>
    </div>
  )
}

export default Reviews