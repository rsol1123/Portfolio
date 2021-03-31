import React, {Component} from 'react';
import ReactTypingEffect from 'react-typing-effect';
import profilepic from '../img/profile_photo.jpg';
import Social from '../components/Social';
import Resume from '../img/Resume.pdf';

class Home extends Component{
    render(){
        return(
            <div className="condiv home">
                <img src={profilepic} className="profilepic" alt="profile"></img>
                <Social></Social>
                <ReactTypingEffect className="typingeffect" text={['Hello, I am Rupesh Solanki','I am a software developer']} speed={100} eraseDelay={700}/>
                <a className="github" type="button" className="resumeDownload" href={Resume} download>Resume</a>
            </div>
        )
    }
}
export default Home