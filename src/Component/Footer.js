import React from 'react'

const Footer = () => {
    const date = new Date();
  return (
<section className="d-flex justify-content-center align-items-center">
    <div className="container-fluid" style={{backgroundColor:'black',color:'#C7C8C9',marginBottom:'-25px'}}>
        <div className="lc-block d-flex justify-content-center align-items-center py-2 ">
            <div className="col-md-12 d-flex justify-content-center align-items-center">
                <div editable="rich">
                    <p className="text-muted">Copyright © {date.getFullYear()} | All rights reserved</p>
                </div>
            </div>
        </div>
    </div>
</section>

 
 
  
  )
}

export default Footer
