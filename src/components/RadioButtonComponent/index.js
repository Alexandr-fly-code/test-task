import React, {useState} from 'react';

import '../../assets/styles/radioButtonComponent/index.scss';

const RadioButtonComponent = ({ setRadioButtonValue }) => {
  const [isEmployedChecked, setIsEmployedChecked] = useState(true);
  const [isUnemployedChecked, setIsUnemployedChecked] = useState(false);
  const [isSelfEmployedChecked, setIsSelfEmployedChecked] = useState(false);

  const onChangeRadioButton = (e) => {
    const value = e.target.value;

    let valueFromRadioButton = 0;

    switch (true) {
      case Number(value) === 10:
        setIsEmployedChecked(true);

        valueFromRadioButton = value;

        setIsUnemployedChecked(false);
        setIsSelfEmployedChecked(false);
        break;
      case Number(value) === 20:
        setIsUnemployedChecked(true);

        valueFromRadioButton = value;

        setIsEmployedChecked(false);
        setIsSelfEmployedChecked(false);
        break;
      case Number(value) === 30:
        setIsSelfEmployedChecked(true);

        valueFromRadioButton = value;

        setIsEmployedChecked(false);
        setIsUnemployedChecked(false);
        break;
      default:
        return false;
    }

    setRadioButtonValue(Number(valueFromRadioButton));
  }
    return (
      <div className='radio-button'>
        <label className='radio-button__container'>
          <input type="radio" id="test1" name="radio-group" onChange={onChangeRadioButton} value={10} checked={isEmployedChecked}/>
            <label htmlFor="test1" className='radio-button__container-label'>Employed</label>
        </label>

        <label className='radio-button__container' htmlFor="test2">
          <input type="radio" id="test2" name="radio-group" onChange={onChangeRadioButton} value={20} checked={isUnemployedChecked}/>
            <label htmlFor="test2" className='radio-button__container-label'>Unemployed</label>
        </label>

        <label className='radio-button__container'>
          <input type="radio" id="test3" name="radio-group" onChange={onChangeRadioButton} value={30} checked={isSelfEmployedChecked}/>
            <label htmlFor="test3" className='radio-button__container-label'>Self-employed</label>
        </label>
      </div>
    );
};

export default RadioButtonComponent;