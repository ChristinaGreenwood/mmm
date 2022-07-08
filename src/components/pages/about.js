import React from 'react'
import profilePicture from "../../../static/assets/images/bio/headshot.jpg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

                                        
export default function() {
    return (
        <div className='content-page-wrapper'>
            <div className='left-column' 
           style={{
            background: "url(" + profilePicture + ") no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center"
          }}
            />
            <div className='right-column'>
                <h1>Christina Greenwood</h1>
                <h2>"Make the world beautiful!"</h2>


            <h2>Frontend developer with a fast pace learning curve. Detail-oriented, aesthetics driven, and organized. 
            Experienced in creating new tools and content. Strong work ethics with a passion for working with others and strengthing team efforts. 
            fluent in creating visual tools, email marketing, social media campaigning, content creation, visual design, 
            public speaking, and program managing. Utilizing my attention to detail in software development and clean design.
            </h2>

            <h3>
            Soft Skills: Detail-Oriented, Avid Learner, Organized, Communication, Creative Problem Solver.
            Technical Skills: Javascript, ReactJS, UML, HTML5, CSS, Flask, JSON, Git, MongoDB, SQL Databases, SCSS/SASS, Flexbox, CSS Grid.
            </h3>

            <div className='icons-list'>
            <a><FontAwesomeIcon icon="brush"/></a>
            <a><FontAwesomeIcon icon="puzzle-piece"/></a>
            <a><FontAwesomeIcon icon="star"/></a>
            <a><FontAwesomeIcon icon="wrench"/></a>
            </div>

            <h1>Personal Background</h1>

            <h3>
            Total closet nerd, love comic books/movies, video games, coding, puzzles, anime, and pop culture. Creative and artistic, both digital 
            and art made with medium. Dabbled in makeup art, fashion, Paint, drawing, creating… I do it all! Love building visually pleasing 
            projects with fun and easy-to-use design.
            </h3>
            


            </div>
        </div>
   );
}