import React from 'react';
import Home from './components/Home';

const App = () => {
  return (
    <div className='flex flex-col items-center justify-center min-h-screen bg-gray-200 py-8 px-4 sm:px-6 lg:px-8'>
      <div className='text-center mb-6'>
        <h1 className='text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-2'>
          AI Image Enhancer
        </h1>
        <p className='text-base sm:text-lg text-gray-500 max-w-md mx-auto'>
          Upload your image and let AI enhance it for you in seconds.
        </p>
      </div>
      <Home />
      <div className='text-sm sm:text-base text-gray-500 mt-6 text-center'>
        powered by <span className="font-medium text-gray-700">@deltron</span>
      </div>
    </div>
  );
};

export default App;




// import React from 'react'
// import Home from './components/Home'

// const App = () => {
//   return (
//     <div className='flex flex-col items-center justify-center min-h-screen bg-gray-200 py-8 px-4 '>
//       <div className='text-center mb-6'>
//         <h1 className='text-5xl font-bold text-gray-800 mb-2' >AI Image Enhancer{""}</h1>
//         <p className='text-lg text-gray-500'>upload your Image and let AI enhance it for u in seconds....</p>
//       </div>
//       <Home/>
//       <div className='text-lg text-gray-500 mt-3'>
//     powered by @deltron
//       </div>
//     </div>
//   )
// }

// export default App


// git remote add origin https://github.com/Deltron18/image-enhancer.git
// git branch -M main
// git push -u origin main