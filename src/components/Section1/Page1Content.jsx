import React from 'react'
import LeftContent from './LeftContent'
import RightContent from './RightContent'

const page1content = (props) => {
  
  return (
    <div className='pb-20 pt-6 px-18 h-[90vh]  flex justify-between items-center gap-10'>
      <LeftContent />
      <RightContent users={props.users} />
    </div>
  );
};

export default page1content