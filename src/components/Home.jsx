import React, { useState } from 'react'
import ImageUpload from './ImageUpload'
import ImagePreview from './ImagePreview'
import { enhanchedImageAPI } from '../utils/Enhancedimageapi'

const Home = () => {
  const [uploadImage, setUploadImage] = useState("")
  const [enhancedImage, setEnhancedImage] = useState("")
  const [loading, setLoading] = useState(false)

  const uploadImageHandler = async (file) => {
    setUploadImage(URL.createObjectURL(file));
    // console.log(file);
    setLoading(true)
    try {
      const enhancedURL = await enhanchedImageAPI(file);
      setEnhancedImage(enhancedURL);
      setLoading(false);
    }
    catch (error) {
      console.log(error);
      alert("error while enhancing the image please try again later.")
    }

  };

  return (
    <>
      <ImageUpload uploadImageHandler={uploadImageHandler} />
      <ImagePreview loading={loading} upload={uploadImage} enhanced={enhancedImage?.image} />
    </>
  )
}

export default Home