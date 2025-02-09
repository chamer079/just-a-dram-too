import { useState } from "react"

import StockImg from "../../images/StockImg.png"


const WhiskyForm = () => {
    const [formData, setFormData] = useState({
        name: "",
        distillery: "",
        image: "",
        type: "",
        origin: "",
        age: "",
        flavor: "",
        hue: "",
        alcohol_content: "",
        notes: "",
    })

    const handleChange = (evt) => {
        setFormData({...formData, [evt.target.name]: evt.target.value})
    }

    const handleSubmit = (evt) => {
        evt.preventDefault()
        console.log("formData", formData)   //<- DELETE WHEN CLEANING CODE
    }

    return(
        <main>
            <form onSubmit={handleSubmit}>
            <section>
                <div className="img-input">
                    <label htmlFor="image-input">Image URL</label>
                    <input 
                        type="text"
                        name="image"
                        id="image-input"
                        value={formData.image}
                        onChange={handleChange}
                    />
                    <img src={StockImg}  alt="filler image"/>
                </div>
            </section>
            <section>
                <div className="two-column-input-fields">
                    <label htmlFor="name-input">Name</label>
                    <input
                        required
                        type="text"
                        name="name"
                        id="name-input"
                        value={formData.name}
                        onChange={handleChange}
                    />
                    <label htmlFor="distillery-input">Distillery</label>
                    <input 
                        type="text"
                        name="distillery"
                        id="distillery-input"
                        value={formData.distillery}
                        onChange={handleChange}
                    />
                    <label htmlFor="type-input">Type</label>
                    <input 
                        type="text"
                        name="type"
                        id="type-input"
                        value={formData.type}
                        onChange={handleChange}
                    />
                    <label htmlFor="origin-input">Country</label>
                    <input 
                        type="text"
                        name="origin"
                        id="origin-input"
                        value={formData.origin}
                        onChange={handleChange}
                    />
                    <label htmlFor="age-input">Age</label>
                    <input 
                        type="text"
                        name="age"
                        id="age-input"
                        value={formData.age}
                        onChange={handleChange}
                    />
                    <label htmlFor="alcohol-content-input">Alcohol Content</label>
                    <input 
                        type="text"
                        name="alcohol-content"
                        id="alcohol-content-input"
                        value={formData.alcohol_content}
                        onChange={handleChange}
                    />
                </div>
                <div className="single-column-input-fields">
                    <label htmlFor="hue-input">Hue</label>
                    <input 
                        type="text"
                        name="hue"
                        id="hue-input"
                        value={formData.hue}
                        onChange={handleChange}
                    />
                    <label htmlFor="flavor-input">Flavor Profile</label>
                    <input
                        type="text"
                        name="flavor"
                        id="flavor-input"
                        value={formData.flavor}
                        onChange={handleChange}
                    />
                    <label htmlFor="notes-input">Notes</label>
                    <textarea 
                        type="text"
                        name="notes"
                        id="notes-input"
                        value={formData.notes}
                        onChange={handleChange}
                    />
                </div>
            </section>
            <button type="submit">Add New Entry</button>
            </form>
        </main>
    )
}

export default WhiskyForm