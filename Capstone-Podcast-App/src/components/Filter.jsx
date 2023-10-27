import React from "react";

export default function Filter() {
    const dropDownOptions = ["A-Z", "Z-A", "Newest", "Oldest"]
    
    const dropDown = dropDownOptions.map(option => {
        return( <option value={option} key={option}>{option}</option> )
    })

    const handleFilterSelect = () => {
        console.log("selected");
    }

    return(
        <div className="filter">
            <div className="filter--select">
                <label >Filter by:</label>
                <select defaultValue={""} onChange={handleFilterSelect} >
                    {dropDown}
                </select>
            </div>
            <div className="filter--search">
                <label htmlFor="stringSearch">Or Search for:</label>
                <input type="text" id="stringSearch" name="stringSearch" />
            </div>
        </div>
    )
}