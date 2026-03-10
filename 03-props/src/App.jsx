import React from 'react'
import Card from './Card'

const App = () => {
  let para = 'adfsasgj'
  let para2 = 'adfsasgjasdfs'
  return (
    <div className='parent'>
      <Card user='Suman' age={21} para={para} />
      <Card user='Aman' age={17} para={para2} />
    </div>
  )
}

export default App 