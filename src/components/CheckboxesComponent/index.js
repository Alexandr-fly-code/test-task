import React, {useEffect, useState} from 'react';

import '../../assets/styles/checkboxesComponent/index.scss';

const CheckboxesComponent = ({ setTotalPointFromCheckBoxes }) => {
  const [isCheckedFirstCheckbox, setIsCheckedFirstCheckbox] = useState(true);
  const [isCheckedSecondCheckbox, setIsCheckedSecondCheckbox] = useState(false);
  const [isCheckedThirdCheckbox, setIsCheckedThirdCheckbox] = useState(false);
  const [isCheckedFourthCheckbox, setIsCheckedFourthCheckbox] = useState(false);
  const [isCheckedFifthCheckbox, setIsCheckedFifthCheckbox] = useState(false);

  const [isMoreOneChekedCheckBox, setIsMoreOneChekedCheckBox] = useState(false);

  const [totalValueFromCheckBoxes, setTotalValueFromCheckBoxes] = useState(10);

  useEffect(() => {
    let arrayCheckedCheckBoxes = [isCheckedFirstCheckbox, isCheckedSecondCheckbox, isCheckedThirdCheckbox, isCheckedFourthCheckbox, isCheckedFifthCheckbox];

    arrayCheckedCheckBoxes = arrayCheckedCheckBoxes.filter(cheked => cheked);

    let state;

    if (arrayCheckedCheckBoxes.length > 1) {
      state = true;
    }else {
      state = false;
    }

    setIsMoreOneChekedCheckBox(state);

  }, [isCheckedFirstCheckbox, isCheckedSecondCheckbox, isCheckedThirdCheckbox, isCheckedFourthCheckbox, isCheckedFifthCheckbox, totalValueFromCheckBoxes])


  useEffect(() => {
    if (isMoreOneChekedCheckBox) {
      setTotalValueFromCheckBoxes(10);
    }
  }, [isMoreOneChekedCheckBox])

  useEffect(() => {
    if (totalValueFromCheckBoxes === 5) {
      setTotalPointFromCheckBoxes(totalValueFromCheckBoxes + 5);
    }else {
      setTotalPointFromCheckBoxes(totalValueFromCheckBoxes);
    }
  }, [totalValueFromCheckBoxes])

  const valueForCheckBox = isMoreOneChekedCheckBox ? 10 - 5 : 10;

  const onClickCheckBox = (e) => {
    const value = Number(e.target.value);
    const isChecked = e.target.checked;


    if (isChecked && isMoreOneChekedCheckBox && value !== 10) {
      setTotalValueFromCheckBoxes(totalValueFromCheckBoxes + value)
    }else if (!isChecked && isMoreOneChekedCheckBox && value !== 10){
      setTotalValueFromCheckBoxes(totalValueFromCheckBoxes - value)
    }
  }

  return (
    <div className='checkboxes'>
      <label className="wrapper">
        <input
          type="checkbox"
          checked={isCheckedFirstCheckbox}
          value={valueForCheckBox}
          onChange={(e) => setIsCheckedFirstCheckbox(e.target.checked)}
          onClick={onClickCheckBox}
        />
        <p>Single</p>
          <span className="checkmark"></span>
      </label>
      <label className="wrapper">
        <input
          type="checkbox"
          checked={isCheckedSecondCheckbox}
          value={valueForCheckBox}
          onChange={(e) => setIsCheckedSecondCheckbox(e.target.checked)}
          onClick={onClickCheckBox}
        />
        <p>Married filing jointly</p>
          <span className="checkmark"></span>
      </label>
      <label className="wrapper">
        <input
          type="checkbox"
          checked={isCheckedThirdCheckbox}
          value={valueForCheckBox}
          onChange={(e) => setIsCheckedThirdCheckbox(e.target.checked)}
          onClick={onClickCheckBox}
        />
        <p>Married filing separately</p>
          <span className="checkmark"></span>
      </label>
      <label className="wrapper">
        <input
          type="checkbox"
          checked={isCheckedFourthCheckbox}
          value={valueForCheckBox}
          onChange={(e) => setIsCheckedFourthCheckbox(e.target.checked)}
          onClick={onClickCheckBox}
        />
        <p>Head of Household</p>
          <span className="checkmark"></span>
      </label>
      <label className="wrapper">
        <input
          type="checkbox"
          checked={isCheckedFifthCheckbox}
          value={valueForCheckBox}
          onChange={(e) => setIsCheckedFifthCheckbox(e.target.checked)}
          onClick={onClickCheckBox}
        />
        <p>Qualifying window(-er) with dependent child</p>
        <span className="checkmark"></span>
      </label>
    </div>
  );
};

export default CheckboxesComponent;