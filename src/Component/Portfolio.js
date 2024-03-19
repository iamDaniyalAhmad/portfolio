import React,{useState} from 'react'
import { Media } from '../assets/portf'
import { realMedia } from '../assets/portf/realMedia';



const Portfolio = () => {
  const [file,setFile] = useState({url:null,type:'image'});
  return (
  <div className="container con my-5" id='portfolio' >
    <h1 className='d-flex justify-content-center' style={{fontSize:'55px',marginTop:'150px'}}>Portfolio</h1>
    <div className="media-container">
      {
        Media.map((file,index)=>(
          <div>
          <div className="media" key={index} onClick={() => setFile({url:`${realMedia[index].url}`,type:`${realMedia[index].type}`})}>
            {
              file.type === 'image'
              ? <img src={file.url} alt="" />
              : <video src={file.url} muted/>
            }
          </div>
          <div className=' content'>
          <h4>{file.title}</h4>
            <p>{file.desc}</p>
          </div>
          </div>
        ))
      }
    </div>
    <div className="popup-media" style={{display:file.url?'block':'none'}}>
      <span onClick={()=>setFile({url:null})}>&times;</span>
      {
        file?.type === 'video'
        ?<video src={file?.url} muted autoPlay controls/>
        :  <img src={file?.url} alt=''/>
      }
    </div>
  </div>
  )
}

export default Portfolio
