import React from 'react'
import RightCard from './RightCard'

const RightContent = (props) => {
  return (
    <div id='right' className=' p-6 h-full w-2/3 flex flex-nowrap gap-10 rounded-4xl overflow-x-auto'>
      {props.users.map( (e, id) => 
        <RightCard 
          key={id}
          id={id} 
          img={e.img} 
          intro={e.intro}
          color={e.color} 
          tag={e.tag} 
        />
      )}
    </div>
  )
}

export default RightContent