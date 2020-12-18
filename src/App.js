import React, { useState, lazy, Suspense, useEffect } from 'react';

import { connect } from 'react-redux';
import { getAndSetFixedPrice } from './components/redux/actions/fixedPriceAction';

import RadioButtonComponent from './components/RadioButtonComponent';

import ContainerComponent from "./components/ContainerComponent";

const LongTextFieldComponent = lazy(() => import('./components/LongTextFieldComponent'));
const CheckboxesComponent = lazy(() => import('./components/CheckboxesComponent'));
const DropDownComponent = lazy(() => import('./components/DropDownComponent'));

function App({ getAndSetFixedPrice }) {
  const [radioButtonValue, setRadioButtonValue] = useState(10);
  const [inputValue, setInputValue] = useState(0);
  const [totalPointFromCheckBoxes, setTotalPointFromCheckBoxes] = useState(0);

  const [isShowRadioButtonComponent, setIsShowRadioButtonComponent] = useState(true);
  const [isShowLongTextFieldComponent, setIsShowLongTextFieldComponent] = useState(false);
  const [isShowCheckBoxesComponent, setIsShowCheckBoxesComponent] = useState(false);
  const [isShowDropDownComponent, setIsShowDropDownComponent] = useState(false);

  let title = '';

  switch (true) {
    case isShowRadioButtonComponent:
      title = 'What is your employment status?';
      break;
    case isShowLongTextFieldComponent:
      title = 'How many separate sole proprietorships do you operate?';
      break
    case isShowCheckBoxesComponent:
      title = 'What best describes your filing status?';
      break;
    case isShowDropDownComponent:
      title = 'Ready to see your score?';
      break;
    default:
      title = '';
  }

  useEffect(() => {
    let fixedPrice;
    if ((radioButtonValue !== 10 || radioButtonValue !== 20) && inputValue) {
      fixedPrice = (radioButtonValue + totalPointFromCheckBoxes) * inputValue;
    }else {
      fixedPrice = radioButtonValue + totalPointFromCheckBoxes;
    }

    getAndSetFixedPrice(fixedPrice);
  }, [radioButtonValue, totalPointFromCheckBoxes, inputValue]);

  const fallback = <h1>Loading</h1>;

  return (
    <div className="App">
      {isShowRadioButtonComponent && (
        <ContainerComponent
          title={title}
          setIsShowRadioButtonComponent={setIsShowRadioButtonComponent}
          setIsShowLongTextFieldComponent={setIsShowLongTextFieldComponent}
          setIsShowCheckBoxesComponent={setIsShowCheckBoxesComponent}
          setIsShowDropDownComponent={setIsShowDropDownComponent}
          componentName='radio-button'
          radioButtonValue={radioButtonValue}
          className={isShowRadioButtonComponent && 'radio-button'}
        >
          <Suspense fallback={fallback}>
            <RadioButtonComponent setRadioButtonValue={setRadioButtonValue}/>
          </Suspense>
        </ContainerComponent>
      )}

      {isShowLongTextFieldComponent && (
        <ContainerComponent
          title={title}
          setIsShowRadioButtonComponent={setIsShowRadioButtonComponent}
          setIsShowLongTextFieldComponent={setIsShowLongTextFieldComponent}
          setIsShowCheckBoxesComponent={setIsShowCheckBoxesComponent}
          setIsShowDropDownComponent={setIsShowDropDownComponent}
          componentName='long-text-field'
          radioButtonValue={radioButtonValue}
          className={isShowLongTextFieldComponent && 'long-text-field'}
          >
          <Suspense fallback={fallback}>
            <LongTextFieldComponent setInputValue={setInputValue}/>
          </Suspense>
        </ContainerComponent>
      )}

      {isShowCheckBoxesComponent && (
        <ContainerComponent
          title={title}
          setIsShowRadioButtonComponent={setIsShowRadioButtonComponent}
          setIsShowLongTextFieldComponent={setIsShowLongTextFieldComponent}
          setIsShowCheckBoxesComponent={setIsShowCheckBoxesComponent}
          setIsShowDropDownComponent={setIsShowDropDownComponent}
          componentName='checkboxes'
          radioButtonValue={radioButtonValue}
          className={isShowCheckBoxesComponent && 'checkboxes'}
        >
          <Suspense fallback={fallback}>
            <CheckboxesComponent setTotalPointFromCheckBoxes={setTotalPointFromCheckBoxes}/>
          </Suspense>
        </ContainerComponent>
      )}

      {isShowDropDownComponent && (
        <ContainerComponent
          title={title}
          setIsShowRadioButtonComponent={setIsShowRadioButtonComponent}
          setIsShowLongTextFieldComponent={setIsShowLongTextFieldComponent}
          setIsShowCheckBoxesComponent={setIsShowCheckBoxesComponent}
          setIsShowDropDownComponent={setIsShowDropDownComponent}
          componentName='dropdown'
          radioButtonValue={radioButtonValue}
          className={isShowDropDownComponent && 'dropdown'}
        >
          <Suspense fallback={fallback}>
            <DropDownComponent/>
          </Suspense>
        </ContainerComponent>
      )}
    </div>
  );
}

const mapDispatchToProps = {
  getAndSetFixedPrice,
};

export default connect(null, mapDispatchToProps)(App);
