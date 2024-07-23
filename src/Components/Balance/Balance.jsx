import React from 'react'
import "./Balance.css"

function Balance() {
  return (
    <div>
      <h2>Jerin Chacko</h2>
      <p class="category-description">
        Account no : {"0111111"}<br/>
        Adress :{"Gently used floor model sneakers and discontinued styles at our lowest prices of the year. Get 'em before they're gone!"}<br/>
        mobile no : {"9744625601"}</p>

      <div id="item">
        <h3>Account</h3><br />
        <p class="price">{"₹ 1025"}</p><br />
        <p >Transactons</p><br/>
        <label for="size-select">{"01/02/2023"}</label>
        <div className="container">
          <div className="inputtext">{"hi"}</div>
          <div className="plus">{"+"}</div>
        </div>
        
        
        
      </div>
    </div>
  )
}

export default Balance