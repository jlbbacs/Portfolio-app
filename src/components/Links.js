import React from 'react'
import '../css/links.css'

function Links() {
  return (
    <div className='container'>
      <ul className='ul-links'>
        <li><a href='https://www.linkedin.com/in/joseph-lester-bacsarsa-69b1291b7/'><i class="fa-brands fa-linkedin fa-beat fa-2xl"></i></a></li>
        <li><a href='https://www.facebook.com/josephlester.bacsarsa'><i class="fa-brands fa-facebook fa-shake fa-2xl"></i></a></li>
        <li><a href='https://www.youtube.com/channel/UCAtISTgNBzEUqkWtgedjs1w'><i class="fa-brands fa-youtube fa-flip fa-2xl" style={{color:'red'}}></i></a></li>
        
      </ul>
    </div>
  )
}

export default Links