import React from 'react'
import './About.css'

function about() {
  return(
    <div className='sobre'>
      <h2>About myself</h2>
      <p>A customer-first focused developer with a background in marketing. 
        Solving problems with tools like React.js, Express, Node.js, SQL and coding full-stack development solutions. 
        Being able to quickly adapt to any situation and communicating effectively on a team are skills I pride myself on.
        I consider myself curious, a continuous learner and passionate about computers and technology in general. 
        I’m confident, naturally problem solver and always working to improve myself professional and personally.
      </p>
      <button 
        type='button' 
        class='btn btn-outline-info btn-lg'
        onClick={(e) => {
          e.preventDefault();
          window.open('https://drive.google.com/file/d/1Xtt0BkdQAdx0uHZ-T_OxmUR_tjvAaT-K/view?usp=sharing');
        }}
      >
        My CV
      </button>
    </div>
  )
}

export default about