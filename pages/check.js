import React from 'react'
import { AiOutlineCamera } from 'react-icons/ai'

const check = () => {
  return (
    <div>
       <label for="doc">
   <img src="https://www.provast.io/_next/image?url=http%3A%2F%2Fres.cloudinary.com%2Fdj7nomqfd%2Fimage%2Fupload%2Fv1647117869%2Fuploads%2Fbphhxvmlcyyu2pntbikm.png&w=2048&q=75" alt="upload icon" width="80" height="80" />
   
   <input type="file" id="doc" name="doc" hidden/>
</label>
    </div>
  )
}

export default check