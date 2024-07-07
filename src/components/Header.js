import React from 'react'
import AddIcon from '@mui/icons-material/Add';
import { Button } from '@mui/material';

export default function Header() {
  return (
    <div className='text-3xl flex justify-between items-center text-blue-400 font-bold p-3 border-b-2 border-blue-50'>
        <span>Book<span className='text-white'>Review</span></span>
        <h1 className='text-lg text-white cursor-pointer flex items-center'>
            <Button><AddIcon className='mr-1' color='inherit'/><span className='text-white'>Add New</span></Button></h1>
    </div>
  )
}
