import React from 'react'
import Section1 from './components/Section1/Section1'



const App = () => {

  const users  = [
    {
      img: 'https://images.unsplash.com/photo-1744551472640-5b242dc56597?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      intro: 'lorem ipsum dolor sit amet consectetur adipisicing elit. Quia molestiae in consectetur voluptatibus quibusdam nihil tenetur. Est doloribus ab autem.',
      color: 'rosybrown',
      tag: 'Satisfied'
    }, 
    {
      img: 'https://plus.unsplash.com/premium_photo-1661767011483-feab300357ba?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      intro: 'lorem ipsum dolor sit amet consectetur adipisicing elit. Quia molestiae in consectetur voluptatibus quibusdam nihil tenetur. Est doloribus ab autem.',
      color: 'lightgreen',
      tag: 'Underserved'
    }, 
    {
      img: 'https://images.unsplash.com/photo-1661983229178-0cbc8090aa71?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      intro: 'lorem ipsum dolor sit amet consectetur adipisicing elit. Quia molestiae in consectetur voluptatibus quibusdam nihil tenetur. Est doloribus ab autem.',
      color: 'orange',
      tag: 'Unerbanked'
    }, 
    {
      img: 'https://plus.unsplash.com/premium_photo-1661765873819-2dd94bd32016?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      intro: 'lorem ipsum dolor sit amet consectetur adipisicing elit. Quia molestiae in consectetur voluptatibus quibusdam nihil tenetur. Est doloribus ab autem.',
      color: 'pink',
      tag: 'Average'
    }, 
  ]

  return (
    <div className='h-screen'>
      <Section1 users={users} />
    </div>
  )
} 

export default App