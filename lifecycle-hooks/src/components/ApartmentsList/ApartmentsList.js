import { useState, useEffect } from "react"
import axios from 'axios'

const apiURL = "https://ironbnb-m3.herokuapp.com/apartments"

function ApartmentsList() {

    const [apartments, setApartments] = useState([])

    useEffect(() => {
        axios
            .get(apiURL)
            .then(response => setApartments(response.data))
    }, [])


    return (
        <div>
            <h3>List of apartments</h3>
            {apartments.map((apt) => {
                return (
                    <div key={apt._id} className="card">
                        <img src={apt.img} alt="apartment" />
                        <h3>{apt.title}</h3>
                        <p>Price: {apt.pricePerDay}</p>
                    </div>
                )
            })}
        </div>
    );
}

export default ApartmentsList