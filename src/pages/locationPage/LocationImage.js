import React, {useState, useContext} from 'react'

import officeStart from '../../images/locations/office.jpg'
import officeStage1 from '../../images/locations/office.jpg'
import officeStage2 from '../../images/locations/office.jpg'

import {LocationPuzzlesContext} from '../../context/LocationPuzzlesContext'

function LocationImage({location, stage=0}) {
    const {locationStage} = useContext(LocationPuzzlesContext)
    const [imageIndex] = useState({
        demo: {
            img: [officeStart, officeStage1, officeStage2],
            alt: "the professor's office"
        }
    })
    
    const {img, alt} = imageIndex.[location]

    return <img className="locationImg" src={img[locationStage]} alt={alt} />
}


export default LocationImage