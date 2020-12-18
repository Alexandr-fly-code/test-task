import React, { useEffect, useState } from 'react';

import '../../assets/styles/radioButtonComponent/index.scss';

const RadioButtonComponent = ({ setRadioButtonValue }) => {
  const [checkBoxValue, setCheckBoxValue] = useState('10');

  const onChangeRadioButton = (e) => {
    const value = e.target.value;

    setCheckBoxValue(value);
   };

    useEffect(() => {
      setRadioButtonValue(Number(checkBoxValue));
    }, [checkBoxValue]);

    return (
      <div className='radio-button'>
        <label className='radio-button__container'>
          <input type="radio" id="test1" name="radio-group" onChange={onChangeRadioButton} value={10} checked={'10' === checkBoxValue}/>
            <label htmlFor="test1" className='radio-button__container-label'>Employed</label>
        </label>

        <label className='radio-button__container' htmlFor="test2">
          <input type="radio" id="test2" name="radio-group" onChange={onChangeRadioButton} value={20} checked={'20' === checkBoxValue}/>
            <label htmlFor="test2" className='radio-button__container-label'>Unemployed</label>
        </label>

        <label className='radio-button__container'>
          <input type="radio" id="test3" name="radio-group" onChange={onChangeRadioButton} value={30} checked={'30' === checkBoxValue}/>
            <label htmlFor="test3" className='radio-button__container-label'>Self-employed</label>
        </label>
      </div>
    );
};

export default RadioButtonComponent;