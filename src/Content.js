import './css/Content.css'
import React from 'react'

function Content() {
  return (
    <>
        <div>
            <p className='content-tag'>Unlimited Content</p>
        </div>
        <div className='blocks'>
            <div className='advetures box'>
                 <p className='title'>Adventures</p>
                 <button className='explore'>Explore</button>
            </div>

            <div className='stories box'>
                 <p className='title'>Stories</p>
                 <button className='explore'>Explore</button>
            </div> 

            <div className='novels box'>
                 <p className='title'>Novels</p>
                 <button className='explore'>Explore</button>
            </div>

            <div className='infos box'>
                 <p className='title'>Informations</p>
                 <button className='explore'>Explore</button>
            </div>

            <div className='motivations box'>
                 <p className='title'>Motivations</p>
                 <button className='explore'>Explore</button>
            </div>

            <div className='ideas box'>
                 <p className='title'>Ideas</p>
                 <button className='explore'>Explore</button>
            </div>
        </div>
    </>
  )
}

export default Content
