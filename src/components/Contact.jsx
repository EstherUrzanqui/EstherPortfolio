import React from 'react'
import { SocialIcon } from 'react-social-icons';
import "./Contact.css"

function contact() {
  return(
    <div className="getintouch">
      <h3>Get in touch</h3>
      <div className="socialicons">
        <SocialIcon url="https://github.com/EstherUrzanqui" bgColor="#ec239f" style={{ margin: "1%" }}/>
        <SocialIcon url="https://www.linkedin.com/in/esther-urzanqui/" bgColor="#ec239f" style={{ margin: "1%" }}/>
        <SocialIcon url="https://twitter.com/EstherUrzanqui" bgColor="#ec239f" style={{ margin: "1%" }}/>
        <SocialIcon url="mailto:estherurzanqui81@gmail.com" bgColor="#ec239f" style={{ margin: "1%" }}/>
      </div>
    </div>
  )
}

export default contact