import React, {Component} from 'react';
import {SocialIcon} from 'react-social-icons';


class Experience extends Component{
    render(){
        return(
        <div className="condiv">
            <h1 className="subtopic">Projects</h1>
            <h2>Capstone Project</h2>
            <br></br>
            <ul>
                <li>Objective: Create a child-friendly alarm clock Android Application
                    that a parent could use to help keep their children to a schedule.
                </li>
                <li>Worked in an AGILE team to meet our sponser's requirements for the application.
                </li>
                <li>Created the application in Android Studio using Flutter API and the Dart
                    programming language. We used Github for version control
                </li>
                <li>
                    The project was done over 3 one month long sprints. We updated and revised
                    requirements documents, design documents, and testing documents after each
                    meeting with our sponser at the end of the sprints.
                </li>
                <li>
                    Overall, quite a fun project as we were attempting to create a sort of application
                    that a busy parent could use to keep a child to a schedule. It was meant to be
                    displayed on a tablet in a living room or child's room with customizable alarms
                    and a large clock face. 
                </li>
            </ul>
            <br></br>
            <SocialIcon url="https://github.com/saldanaj97/Child-Friendly-Clock"></SocialIcon>
            <br></br>
            <br></br>
            <h2>Android Application</h2>
            <br></br>
            <ul>
                <li>
                    Created an Android application called Chorify to help connect independent workers
                    like maids, plumbers, or gardeners with people looking for those services
                </li>
                <li>
                    The application was created using Android Studio, Github, Flutter API, and Dart.
                    We used Firebase as our backend database to store user information.
                </li>
            </ul>
            <br></br>
            <SocialIcon url="https://github.com/rsol1123/Chorify"></SocialIcon>
            <br></br>
            <br></br>
            <h2>Property Rental Website</h2>
            <br></br>
            <ul>
                <li>Worked with a group to create a property rental website.</li>
                <li>This project was more focused on creating a great user interface.</li>
                <li>We created the application using HTML, ASP, and github for version control.</li>
                <li>We focused on creating a quickly responding search function, a pleasing look
                    to the entire website, all planed with wireframes, and filterable results.
                </li>
            </ul>
            <br></br>
            <SocialIcon url="https://github.com/rsol1123/WebApplication1"></SocialIcon>
        </div>
        )
    }
}

export default Experience


