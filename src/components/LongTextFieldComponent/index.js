import React from 'react';

import '../../assets/styles/longTextFieldComponent/index.scss';

const LongTextFieldComponent = ({ setInputValue }) => {
  const onChangeInput = (e) => {
    const value = e.target.value;

    setInputValue(Number(value));
  }

  return (
    <div className='long-text-field'>
      <p className='text'>Please enter a quantity</p>
      <input placeholder={1} onChange={onChangeInput} type='number'/>
    </div>
  );
};

export default LongTextFieldComponent;