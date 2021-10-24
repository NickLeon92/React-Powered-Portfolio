import React, { useEffect, useState } from "react";
import Title from './animations/title'
import Footer from './animations/footer'
import Card from './animations/card'
import '../styles/Portfolio.css'

const works = [
    {
        picId: 1,
        description: 'Social Media Site for Gamers!',
        repoLink: 'https://github.com/Gaitherdb/Social-Game-Library',
        appLink: 'https://secret-beach-64321.herokuapp.com/',

    },
    {
        picId: 2,
        description: 'Cocktail Recipe and Trivia Search Engine',
        repoLink: 'https://github.com/NickLeon92/Project-1',
        appLink: 'https://nickleon92.github.io/Project-1/',

    },
    {
        picId: 3,
        description: 'Public Tech Blog',
        repoLink: 'https://github.com/NickLeon92/MVC-Tech-Blog',
        appLink: 'https://open-tech-blog.herokuapp.com/',

    },
    {
        picId: 4,
        description: 'MongoDB Powered Fitness Tracker',
        repoLink: 'https://github.com/NickLeon92/Workout-Tracker',
        appLink: 'https://my-cool-workout-tracker.herokuapp.com',

    },
    {
        picId: 5,
        description: 'Save Notes to a Server',
        repoLink: 'https://github.com/NickLeon92/Note-Taker',
        appLink: 'https://note-taker-nl92.herokuapp.com/',

    },
    {
        picId: 6,
        description: 'Timed Coding Quiz',
        repoLink: 'https://github.com/NickLeon92/Code-Quiz',
        appLink: 'https://nickleon92.github.io/Code-Quiz/#',

    }
]



function Portfolio() {

    // const [count,setCount] = useState('hello')

    // useEffect(()=>{
    //     setTimeout(() => {
    //         if (count.length === 12){
    //             return
    //         }
    //         console.log(count.length-6)
    //         array.push(works[count.length-6])
    //         console.log(array)
    //         setCount(count+'o')
    //     }, 1000);
    // })

    const [array,setArray] = useState([])

    useEffect(() => {
        for (let i = 1; i <= 6; i++) {
          setTimeout(() => setArray((prevState) => [...prevState, works[i-1]]), 100 * i);
        }
      }, []);

    const text = 'Select Works'

    return (
        <div id='container'>

            <Title text={text} />


            <div class="worksection" id="goWork">

                <div class="bottomsection">
                        {array.map(work => <Card picId={work.picId} description={work.description} repoLink={work.repoLink} appLink={work.appLink} key={work.picId}/>)}
                </div>

            </div>

            <Footer />

        </div>
    )
}

export default Portfolio