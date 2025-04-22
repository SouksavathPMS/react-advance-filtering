import React from 'react'
import './Category.css'
import Input from '../../components/Input'

function Category({ handleChange }) {
    return (
        <div className='ml'>
            <h2 className="sidebar-title price-title color-title">Category</h2>
            <label className='sidebar-label-container'>
                <input
                    type='radio'
                    onChange={handleChange}
                    value=""
                    color=""
                    name="category"
                />
                <span className='checkmark'></span>All
            </label>

            <Input
                handleChange={handleChange}
                value="sneakers"
                title="Sneakers"
                name="category"
            />
            <Input
                handleChange={handleChange}
                value="flats"
                title="Flats"
                name="category"
            />
            <Input
                handleChange={handleChange}
                value="sandles"
                title="Sandles"
                name="category"
            />
            <Input
                handleChange={handleChange}
                value="heels"
                title="Heels"
                name="category"
            />


        </div>
    );
}

export default Category