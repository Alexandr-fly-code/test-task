import React from 'react';

import '../../assets/styles/containerComponent/index.scss';

import ArrowActive from '../Icons/ArrowActive';
import ArrowUnActive from '../Icons/ArrowUnActive';

const ContainerComponent = ({
  children,
  title,
  setIsShowRadioButtonComponent,
  setIsShowLongTextFieldComponent,
  setIsShowCheckBoxesComponent,
  setIsShowDropDownComponent,
  componentName,
  radioButtonValue,
  className
}) => {
  const onClickBtnNextStep = () => {
    switch (componentName) {
      case 'radio-button':
        if (radioButtonValue === 10 || radioButtonValue === 20) {
          setIsShowRadioButtonComponent(false);
          setIsShowCheckBoxesComponent(true);
        }else {
          setIsShowRadioButtonComponent(false);
          setIsShowLongTextFieldComponent(true);
        }
        break;
      case 'long-text-field':
        setIsShowLongTextFieldComponent(false);
        setIsShowCheckBoxesComponent(true);
        break;
      case 'checkboxes':
        setIsShowCheckBoxesComponent(false);
        setIsShowDropDownComponent(true);
        break;
      default:
        return false;
    }
  };

  const onClickBtnBack = () => {
    switch (componentName) {
      case 'long-text-field':
        setIsShowLongTextFieldComponent(false);
        setIsShowRadioButtonComponent(true);
        break;
      case 'checkboxes':
        if (radioButtonValue === 10 || radioButtonValue === 20) {
          setIsShowCheckBoxesComponent(false);
          setIsShowRadioButtonComponent(true);
        }else {
          setIsShowCheckBoxesComponent(false);
          setIsShowLongTextFieldComponent(true);
        }
        break;
      case 'dropdown':
        setIsShowDropDownComponent(false);
        setIsShowCheckBoxesComponent(true);
        break;
      default:
        return false;
    }
  };

  return (
    <section className={`container ${className}`}>
      <header className='container-header'/>

      <main className='container-main'>
        <h1 className='container-main__header'>{title}</h1>
        <section className='container-main__content'>
          {children}
        </section>
      </main>

      <footer className='container-footer'>
        {componentName !== 'radio-button' ? (
          <button className='btn-back' onClick={onClickBtnBack}>Back</button>
        ): (
          <button/>
        )}

        {componentName === 'dropdown' ? (
          <button className='btn-next-step un-active' disabled>
            <p className='btn-next-step__text'>Next step</p>
            <ArrowUnActive/>
          </button>
        ) : (
          <button className='btn-next-step' onClick={onClickBtnNextStep}>
            <p className='btn-next-step__text'>Next step</p>
            <ArrowActive/>
          </button>
        )}
      </footer>
    </section>
  );
};

export default ContainerComponent;