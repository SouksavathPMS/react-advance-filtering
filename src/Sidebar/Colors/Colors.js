import React from 'react'
import './Colors.css'
import Input from '../../components/Input'

function Colors({ handleChange }) {
  return (
    <div>
      <h2 className="sidebar-title price-title color-title">Colors</h2>
      <label className='sidebar-label-container'>
        <input
          type='radio'
          onChange={handleChange}
          value=""
          color=""
          name="color"
        />
        <span className='checkmark all'></span>All
      </label>
      <Input
        handleChange={handleChange}
        value="black"
        title="Black"
        name="color"
        color="black"
      />
      <Input
        handleChange={handleChange}
        value="blue"
        title="Blue"
        name="color"
        color="blue"
      />
      <Input
        handleChange={handleChange}
        value="red"
        title="Red"
        name="color"
        color="red"
      />
      <Input
        handleChange={handleChange}
        value="green"
        title="Green"
        name="color"
        color="green"
      />

      <lable className="sidebar-label-container">
        <input type="radio" onChange={handleChange} value="white" name='color' />
        <span className='checkmark' style={{ background: "white", border: "2px solid black", color: "black" }}></span>White
      </lable>
    </div >
  )
}

export default Colors