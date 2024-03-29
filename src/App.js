import React, { useState } from 'react'
import SingleColor from './SingleColor'

import Values from './values'

function App() {
  const [color, setColor] = useState('');
  const [error, setError] = useState(false);
  const [list, setList] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      let colors = new Values(colors).all(10);
      console.log(colors);
    } catch(error) {
      setError(true);
      console.log(error);
    }
    
  }

  return (
    <>
      <section className='container'>
        <h3>color generator</h3>
        <form onSubmit={handleSubmit}>
          <input 
            type='text'
            value={color}
            onChange={(e) => setColor(e.target.value) }
            placeholder='#f15025'
            className={`${error ? 'error' : null}`}
          />
          <button className='btn' type='submit'>
            Submit
          </button>
        </form>
      </section>
      <section className='colors'>
        <h4>list goes here</h4>
      </section>
    </>
  )
}

export default App

// <></>
