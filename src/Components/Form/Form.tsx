

import React, { useState } from 'react';
import './Form.css'
import backF from '../../assets/BACK1.jpg'

interface FormState {
  name: string;
  description: string;
  time: string;
  shift: string;
}

const Form: React.FC = () => {
  const [formState, setFormState] = useState<FormState>({
    name: '',
    description: '',
    time: '00:00',
    shift: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="container-Form" style={{backgroundImage:`url(${backF})`, backgroundPosition: 'center', backgroundSize:'cover'}}>
        <form className='form-container'>
        <div className='formI'>
        <label className="name">Name:</label>
        <input className='select'
          type="text"
          id="name"
          name="name"
          value={formState.name}
          onChange={handleInputChange}
        />
      </div>
      <div className='formD'>
        <label className='Description'>Description:</label>
        <textarea className='select'
          id="description"
          name="description"
          value={formState.description}
          onChange={handleInputChange}
        />
      </div>
      <div className='formT'>
        <label className="time">Time:</label>
        <input className='inputF'
          type="time"
          id="time"
          name="time"
          value={formState.time}
          onChange={handleInputChange}
        />
      </div>
      <div className='formS'>
        <label className="shift">Shift:</label>
        <select className='select' id="shift" name="shift" value={formState.shift} onChange={handleInputChange}>
          <option value="">Select Shift</option>
          <option value="morning">Morning</option>
          <option value="afternoon">Afternoon</option>
          <option value="night">Night</option>
        </select>
      </div>
      <button className='formB' type="submit">Submit</button>
        
      
    </form>

    </div>
    
  );
};

export default Form;
