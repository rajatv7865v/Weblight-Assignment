import React from 'react'
import './Page.css'
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { useDispatch, useSelector } from 'react-redux';
import { increment,decrement } from '../app/pagination';
const Page = () => {
  const page =useSelector(state=>state.page.value);
  const dispatch=useDispatch()
  return (
    <div className='page-container'>
      <div className='btn'>
       <button onClick={()=>dispatch(decrement())}><ChevronLeftIcon />Prev</button>
      </div>
      <div>{page}</div>
      <div className='btn'>
      <button onClick={()=>dispatch(increment())}>Next <NavigateNextIcon/></button>
       
      </div>
    </div>
  )
}

export default Page
