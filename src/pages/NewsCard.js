import React from 'react'
import './News.css'
export const NewsCard = ({publishDate,title,description,img,url}) => {
  return (
    <div>
        <div className='card'>
            <p className='Heading'>{title}</p>
            <img className='img' src={img?img:"https://th.bing.com/th/id/OIP.Xjv4jj8-pdUIXFaDZ-JqAQAAAA?rs=1&pid=ImgDetMain"} alt="title" />
            <p className='description'>{description?description.slice(0,150):"Yahan Description NHi Hain"}</p>
            <p style={{color:"#584a4a",fontSize:"14px"}}>PublishDate:{publishDate}</p>
            <button className='btn' href={url}>Read More</button>
        </div>
    </div>
  )
}
