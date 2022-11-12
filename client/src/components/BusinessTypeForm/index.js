import React, { useEffect } from 'react';
import { useQuery } from '@apollo/client';
import { useStoreContext } from '../../utils/GlobalState';
import {
  UPDATE_BUSINESS_TYPES,
  UPDATE_CURRENT_BUSINESS_TYPE
} from '../../utils/actions';
import { QUERY_CURRENT_BUSINESS_CATEGORY, QUERY_BUSINESS_TYPES } from "../../utils/queries";
import { idbPromise } from '../../utils/helpers';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';

function BusinessTypeForm() {

  const [state, dispatch] = useStoreContext();
  const { businessTypes, currentBusinessType,  currentBusinessCategory} = state;

  const { loading, data: buisinessTypeData } = useQuery(QUERY_BUSINESS_TYPES,{
    variables : {businessCategory: currentBusinessCategory}
    });

  useEffect(() => {

    if (buisinessTypeData) {
      dispatch(
        {
          type: UPDATE_BUSINESS_TYPES,
          businessTypes: buisinessTypeData.businessTypes,
        }
      );
      buisinessTypeData.businessTypes.forEach((types) => {

        idbPromise('businessTypes', 'put', types);
      });
    } else if (!loading) {
      idbPromise('businessTypes', 'get').then((businessTypes) => {
        dispatch({
          type: UPDATE_BUSINESS_TYPES,
          businessTypes: businessTypes,
        }
        );
      });
    }
  }, [buisinessTypeData, loading, dispatch]);

  const handleValueChange = event => {
    dispatch({
      type: UPDATE_CURRENT_BUSINESS_TYPE,
      currentBusinessType: event.target.value,
    },
    );
  };
  console.log(businessTypes);
  return (
    <>
      <InputLabel id="type">Company Type (Optional)</InputLabel>
      <Select
        labelId="type"
        id="type"
        label="Type"
        value={currentBusinessType}
        onChange={handleValueChange}
      >        
        <MenuItem value={currentBusinessType}>{currentBusinessType}</MenuItem>
        {businessTypes.map((item) => (
        <MenuItem key={item._id} 
                  value={item.title} 
                  >{item.title}
        </MenuItem>
        ))}
      </Select>
    </>
  );
}

export default BusinessTypeForm;
