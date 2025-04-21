import React from 'react'
import "./News.css"
export default function Newsitem({publishDate,title,description,img,url}) {
  console.log(publishDate)
  return (
    <div>
        <div className='card'>
        <p style={{color:"black"}}>{publishDate}</p>

            <p className='heading'>{title}</p>
            <div className="inner">
            <p className='description'>{description?description.slice(0,70):"Yahan Description NHi Hain"}</p>
            <img className='img' src={img?img:"https://bt.bmcdn.dk/media/cache/resolve/image_960x545/image/211/2114934/24618166-arkivfoto-af-den-dansk-bildesigner-henrik-fisker.jpg"} alt="title" />
            <p style={{color:"black"}}>publishDate:{publishDate}</p>
            </div>
            <a className='btn ' href={url}>Read More</a>
        </div>
    </div>
  )
}