import React from "react"
import "./card.css"

export default function Card(props){
    return(
    
        <div id="card-container">
            <img src={require("../images/card-photo.jfif")} alt="business card photo"/>
            <h3>Advertisement</h3>
            <p>Address here</p>
            <button>Email</button>
            <br />
            <div class="testimonials">
                <p class="titles">Testimonial</p>
                <p class="content">Testimonial Text Here Placeholder Lorem Ipsum</p>
            </div>
            <div class="testimonials">
                <p class="titles">Testimonial</p>
                <p class="content">Testimonial Text Here Placeholder Lorem Ipsum</p>
            </div>
            
            <div class="socials">
                <p>Github</p>
                <p>LinkedIn</p>
                <p>Twitter</p>
            </div>

        </div>

    )
}