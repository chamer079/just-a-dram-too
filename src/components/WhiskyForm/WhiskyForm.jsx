import { useState, useEffect } from "react"
import { useParams } from "react-router"

import * as whiskyService from "../../services/whiskyService"
import NavBar from "../NavBar/NavBar"
import StockImg from "../../images/StockImg.png"


const WhiskyForm = (props) => {
    const { whiskyId } = useParams()
    // console.log(whiskyId)   //<- DELETE WHEN CLEANING CODE
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
        // console.log("formData", formData)   //<- DELETE WHEN CLEANING CODE
        if(whiskyId){
            props.handleUpdateWhisky(whiskyId, formData)
            console.log("updated formData:", formData)  //<- DELETE WHEN CLEANING CODE

        } else{
            props.handleAddWhisky(formData)
            console.log("formData:", formData)  //<- DELETE WHEN CLEANING CODE
        }
        
        setFormData({
            name: "",
            distillery: "",
            image: "",
            type: "",
            origin: "",
            age: "",
            flavor: "",
            hue: "",
            alcohol_content: "",
            notes: ""
        })
    }

   useEffect(() => {
    const fetchWhisky = async () => {
        const whiskyData = await whiskyService.show(whiskyId)
        setFormData(whiskyData)
        console.log("whiskyData:", whiskyData)     //<- DELETE WHEN CLEANING CODE
    }
    if(whiskyId) fetchWhisky() 
   }, [whiskyId])

    const imgStyle = {
        width: "630px",
        height: "794px",
    }

    return(
        <main>
            <NavBar />
            <h1>{whiskyId ? "EDIT PAGE" : "CREATE PAGE"}</h1>
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
                    <img style={imgStyle} src={StockImg}  alt="filler image"/>
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
                        name="alcohol_content"
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
            <button type="submit">{whiskyId ? "Update Entry" : "Add New Entry"}</button>
            </form>
        </main>
    )
}

export default WhiskyForm