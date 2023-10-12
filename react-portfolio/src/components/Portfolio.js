import React, { useEffect, useState } from "react";
import Title from './animations/title'
import Footer from './animations/footer'
import Card from './animations/card'
import '../styles/Portfolio.css'

const works = [
    {
        picId: 1,
        description: 'share playlists and help others build them',
        repoLink: 'https://github.com/NickLeon92/Playlist-Social',
        appLink: 'https://preprod--playlistener.netlify.app/',

    },
    {
        picId: 3,
        description: 'a chat app but you can see what people type as they type',
        repoLink: 'https://github.com/NickLeon92/Anotyper',
        appLink: 'https://www.anotype.app/',

    },
    {
        picId: 2,
        description: 'Social Media Site for Gamers!',
        repoLink: 'https://github.com/Gaitherdb/Social-Game-Library',
        appLink: 'https://secret-beach-64321.herokuapp.com/',

    },
    {
        picId: 5,
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
        for (let i = 1; i <= 4; i++) {
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