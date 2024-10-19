import React from 'react'
import o from './Navbar.module.css'
function Navbar() {
  return (
<>
<div  className={`${o.nav}`}>
<i class="fa-solid fa-bars"  id={`${o.o}`}></i>

<div className={`${o.logo}`}>
  <img src="u.jpg" alt="" srcset="" />
</div>

<div  className={`${o.input}`}>
  <input type='text' placeholder='search'></input>
  <div  id={`${o.searchicon}`}>
  <i class="fa-solid fa-magnifying-glass"></i>
  </div>
</div>
<div  className={`${o.icon1}`}>
<i class="fa-solid fa-microphone"></i>
</div>

<div  className={`${o.icon2}`}>
<div  id={`${o.i}`}>
<i class="fa-solid fa-video"></i>

</div>
<div  id={`${o.i}`}>
<i class="fa-solid fa-bell"></i>
</div>
<div  id={`${o.i}`}>
<i class="fa-regular fa-face-smile"></i>
</div>
</div>

</div>

</>
 
  )
}

export default Navbar