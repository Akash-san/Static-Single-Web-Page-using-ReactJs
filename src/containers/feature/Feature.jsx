import React from 'react'
import { Features } from '../../components'
import './feature.css'

const featuresData = [
    {
        title: "Improving end distrusts instantly ",
        text: "From they fine john he give of rich he. They age and draw mrs like. Improving end distrusts may instantly was household applauded."
    },
    {
        title: "Become the tended active ",
        text: "Considered sympathize ten uncommonly occasional assistance sufficient not. Letter of on become he tended active enable to."
    },
    {
        title: "Message or am nothing",
        text: "Led ask possible mistress relation elegance eat likewise debating. By message or am nothing amongst chiefly address."
    },
    {
        title: "Improving end distrusts instantly ",
        text: "From they fine john he give of rich he. They age and draw mrs like. Improving end distrusts may instantly was household applauded."
    },
]
const Feature = () => {
    return (
        <div className='gpt3__features section__padding' id="features" >
            <div className='gpt3__features-heading'>
                <h1 className='gradient__text'>
                    The Future is Now and You Just Need To Realize It. Step into Future Today & Make it Happen.
                </h1>
                <p>
                    Request Early Access to Get Started
                </p>
            </div>
            <div className='gpt3__features-containers'>
                {featuresData.map((item, index) => (
                    <Features title={item.title} text={item.text} key={item.title + index} />
                ))}


            </div>
        </div>
    )
}


export default Feature


