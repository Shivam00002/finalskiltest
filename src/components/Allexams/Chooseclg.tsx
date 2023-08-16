import Image from 'next/image';
import React from 'react';

const Chooseclg: React.FC = () => {
  return (
    <div className='mt-5'>
      <h2 className='text-center px-2 py-2 font-semibold text-2xl'>Why Choose College Mentor's Exam Prep?</h2>


      <div className="flex flex-wrap items-center gap-5 w-full h-full justify-center">
        <div className='w-72 h-full flex flex-col items-center justify-center text-center font-semibold px-2 py-2'>
          <div className='ml-16'>
  
          <Image src="https://grdp.co/cdn-cgi/image/quality=100,width=200,f=auto/https://gs-post-images.grdp.co/2021/8/group-6-2x-img1629283053211-98.png-rs-high-webp.png" alt="img1" width={165} height={165} />
    
      </div>
          <h2 className='px-2 py-1 text-xl text-orange-600'>Online Classroom Program</h2>
          <h3>by Top Faculty</h3>
        </div>


        <div className='w-72 h-full flex flex-col items-center justify-center text-center font-semibold px-2 py-2'>
          <div className='ml-16'>
   
         <Image src="https://grdp.co/cdn-cgi/image/quality=100,width=200,f=auto/https://gs-post-images.grdp.co/2021/8/illustrations-live-courses-2x-img1629272458441-51.png-rs-high-webp.png" alt="img2" width={165} height={165} />
   
       </div>
          <h2 className='px-2 py-1 text-xl text-orange-600'>Online Classroom Program</h2>
          <h3>by Top Faculty</h3>
        </div>


        <div className='w-72 h-full flex flex-col items-center justify-center text-center font-semibold px-2 py-2'>
          <div className='ml-16'>
    
        <Image src="https://grdp.co/cdn-cgi/image/quality=100,width=200,f=auto/https://gs-post-images.grdp.co/2021/8/group-19-woman-mask-2-2x-img1629283123665-66.png-rs-high-webp.png" alt="img3" width={165} height={165} />
   
       </div>
          <h2 className='px-2 py-1 text-xl text-orange-600'>Online Classroom Program</h2>
          <h3>by Top Faculty</h3>
        </div>
      </div>
    </div>
  );
};

export default Chooseclg;
