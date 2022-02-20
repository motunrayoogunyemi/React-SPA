import React from 'react'
import "./filter.css"

const Filter = ({searchinput, onFormChange, formSubmit}) => {

    const handleChange = (event) => {
        onFormChange(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        formSubmit()
    }
    return (
        <div className='e__filter'>
            <div className='e__filter-container'>
                <form className='filter-form' onSubmit={handleSubmit}>
                    <h2>Filter Results</h2>
                    <div className='search-form' ><label>Name(contains)</label><br/><input type='text' value={searchinput} placeholder='text string' className='form-control' onChange={handleChange} /></div>
                    <div className='order-form' ><label>Order By</label><br/>
                    <select className='form-control'>
                        <option value="">Select option</option>
                        <option value="">Date</option>
                        <option value="">Ratings</option>
                    </select>
                    </div>
                    <div className='text-right'><button className='btn btn-primary mt-4 mybtn'>Clear</button></div>
                </form>
            </div>
        </div>
    )
}

export default Filter

