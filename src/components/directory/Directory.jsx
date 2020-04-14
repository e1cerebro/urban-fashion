import React from 'react';
import './Directory.scss';
import MenuItem from '../../components/menu-item/MenuItem';
import { connect } from 'react-redux';
import { selectProductCategories } from '../../store/selectors/category.selector';

const Directory = ({ categories }) => {
  return (
    <div className='directory-menu'>
      {categories.map(({ id, ...otherSectionProps }) => (
        <MenuItem key={id} {...otherSectionProps} />
      ))}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    categories: selectProductCategories(state),
  };
};

export default connect(mapStateToProps, null)(Directory);
