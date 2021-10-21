import React from "react";
import pic1 from '../images/profile.JPG'
import pic2 from '../images/demo.JPG'
import pic3 from '../images/deployed application.JPG'
import Title from './animations/title'
import Footer from './animations/footer'
import '../styles/Portfolio.css'

function Portfolio() {
    const text = 'My Work (so far!)'
    return (
        <div class="worksection" id="goWork">
        
        <Title text={text}/> 

        
 
        <section id="first-demo">
            <div class="pictureContainer">
                <a href="https://secret-beach-64321.herokuapp.com/"><img src={pic1} alt="Avatar" class="image" id="first-demo-pic"/></a>
                <div class="overlay">Social Media Site For Gamers!</div>
                <a href="https://github.com/Gaitherdb/Social-Game-Library">
                    <button href = "https://github.com/Gaitherdb/Social-Game-Library" type="button" class="btn btn-primary" id="repo">Repository</button>
                </a>
                
              </div>
        </section>

        <div class="bottomsection">
            <section id="second-demo">
                <div class="pictureContainer">
                    <a href="https://nickleon92.github.io/Project-1/"><img src={pic2} alt="Avatar" class="image"/></a>
                    <div class="overlay">Cocktail Drink Recipes and trivia knowledge</div>
                    <a href="https://github.com/NickLeon92/Project-1">
                        <button href = "https://github.com/NickLeon92/Project-1" type="button" class="btn btn-primary" id="repo">Repository</button>
                    </a>
                  </div>
            </section>
            <section id="second-demo">
                <div class="pictureContainer">
                    <a href="https://nickleon92.github.io/Code-Quiz/#"><img src={pic3} alt="Avatar" class="image"/></a>
                    <div class="overlay">Timed Coding Quiz</div>
                    <a href="https://github.com/NickLeon92/Code-Quiz">
                        <button href = "https://github.com/NickLeon92/Code-Quiz" type="button" class="btn btn-primary" id="repo">Repository</button>
                    </a>
                  </div>
            </section>

            
        </div>

    
        <Footer/>
    </div>
    )
}

export default Portfolio