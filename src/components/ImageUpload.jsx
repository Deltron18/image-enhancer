import React from 'react'

const ImageUpload = (props) => {
const showImageHandler = (e)=>{
 const file = e.target.files[0];
 if(file){
  props.uploadImageHandler(file);
 }
};

  return (
    <div className='bg-white shadow-lg rounded-2xl p-5 max-w-2xl w-full'>
      <label htmlFor='fileInput' className='block w-full cursor-pointer border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-blue-400 transition-all'>
        <input type='file' id='fileInput' className='hidden' onChange={showImageHandler}/>
        <span className='text-lg font-md text-gray-600'> click and drag to upload your Image</span>
      </label>
    </div>
  )
}

export default ImageUpload