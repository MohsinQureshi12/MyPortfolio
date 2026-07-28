import React from 'react'
import { Aboutherosection } from './aboutherosection'
import AboutOverview from './aboutoverview'
import Aboutmission from './aboutmission'
import Leadership from './leadership'

function AboutPage() {
    return (
        <div>
            
            <Aboutherosection />
            <AboutOverview/>
            <Aboutmission/>
            <Leadership/>
        </div>
    )
}

export default AboutPage