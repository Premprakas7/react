import React, {useEffect, useState} from 'react'
import { useSearchParams } from 'react-router-dom'
import { Box ,Stack,Checkbox,CheckboxGroup} from '@chakra-ui/react'
import { getData } from './Redux/action';
import { useDispatch } from 'react-redux';

const Filter = () => {
    const dispatch=useDispatch();
    const [searchParams, setSearchParams]=useSearchParams();
const [categoryValues, setCategoryValue]=useState((searchParams.getAll('category'))||[]);
const Categoryhandler=(values)=>{
  
setCategoryValue(values)
}

useEffect(()=>{
    if(categoryValues){
        setSearchParams({category:categoryValues});
        let params={
            category:searchParams.getAll('category')
        }
        dispatch(getData(params))
    }
},[categoryValues, searchParams,dispatch,setSearchParams])

  return (
    <Box  >Filter 
<CheckboxGroup colorScheme='green' defaultValue={[categoryValues]} onChange={Categoryhandler}>
  <Stack spacing={[1, 5]} direction={['column', 'row']}>
    <Checkbox value="men's clothing">Mens</Checkbox>
    <Checkbox value="women's clothing">Womens</Checkbox>
    <Checkbox value='jewelery'>Jewellery</Checkbox>
    <Checkbox value='electronics'>Electronics</Checkbox>
  </Stack>
</CheckboxGroup>
</Box>
  )
}

export default Filter
