import React from 'react';

import { connect } from 'react-redux';

import '../../assets/styles/dropDownComponent/index.scss';

const DropDownComponent = ({ fixedPrice }) => {
  return (
    <div className='drop-down'>
      <h2 className='drop-down__subtitle'>
        We value a freedom of choice. You can pick our pre-selected PRO
        specially for you or find one on your own. You decide
      </h2>
      <div className='drop-down__wrapper'>
        <div className='drop-down__wrapper-item'>
          <div className='left-content'>
            <p className='left-content__circle'/>
            <span className='left-content__text'>TaxGig Hero</span>
          </div>

          <div className='right-content'>
            <p className='right-content__text'>Fixed price</p>
            <p className='right-content__text'>${fixedPrice}</p>
          </div>
        </div>
        <div className='drop-down__wrapper-item'>
          <p className='circle'/>
          <p className='text'>Find another Pro</p>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (store) => ({
  fixedPrice: store.fixedPrice
});

export default connect(mapStateToProps)(DropDownComponent);