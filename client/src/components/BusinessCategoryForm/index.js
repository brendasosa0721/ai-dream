

import React, { useEffect } from 'react';
import { useQuery } from '@apollo/client';
import { useStoreContext } from '../../utils/GlobalState';
import {
  UPDATE_BUSINESS_CATEGORIES,
  UPDATE_CURRENT_BUSINESS_CATEGORY,
  UPDATE_CURRENT_BUSINESS_TYPE,
  UPDATE_CONCEPT_INFO
} from '../../utils/actions';
import { QUERY_BUSINESS_CATEGORIES } from "../../utils/queries";
import { idbPromise } from '../../utils/helpers';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';

function BusinessCategoryForm() {

  const [state, dispatch] = useStoreContext();
  const { businessCategories, currentBusinessCategory } = state;

  const { loading, data: buisinessCategoryData } = useQuery(QUERY_BUSINESS_CATEGORIES);
  useEffect(() => {

    if (buisinessCategoryData) {
      dispatch(
        {
          type: UPDATE_BUSINESS_CATEGORIES,
          businessCategories: buisinessCategoryData.businessCategories,
        }
      );
      buisinessCategoryData.businessCategories.forEach((category) => {
        idbPromise('businessCategories', 'put', category);
      });
    } else if (!loading) {
      idbPromise('businessCategories', 'get').then((businessCategories) => {
        dispatch({
          type: UPDATE_BUSINESS_CATEGORIES,
          businessCategories: businessCategories,
        }
        );
      });
    }
  }, [buisinessCategoryData, loading, dispatch]);

  const handleValueChange = event => {
    dispatch({
      type: UPDATE_CURRENT_BUSINESS_CATEGORY,
      currentBusinessCategory: event.target.value,
    },
    {
      type: UPDATE_CURRENT_BUSINESS_TYPE,
      currentBusinessType: "Select type...",
    }
    );
  };
  return (
    <>
      <InputLabel id="type">Company Category</InputLabel>
      <Select
        labelId="type"
        id="type"
        label="Type"
        value={currentBusinessCategory}
        onChange={handleValueChange}
      >        
        <MenuItem value={currentBusinessCategory}>{currentBusinessCategory}</MenuItem>
        {businessCategories.map((item) => (
        <MenuItem key={item._id} 
                  value={item.name} 
                  >{item.name}
        </MenuItem>
        ))}
      </Select>
    </>
  );
}

export default BusinessCategoryForm;
