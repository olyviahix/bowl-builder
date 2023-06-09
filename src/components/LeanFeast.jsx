import Form from 'react-bootstrap/Form';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import { useState,useEffect } from 'react';
import axios from 'axios';
import useGoogleSheets from 'use-google-sheets';
import Test from './FormOption';
import bowl from '../images/bowl.jpeg'

function LeanFeast() {
  const [protienOptionsArr, setProtienOptionsArr] = useState([])

  const { data, loading, error } = useGoogleSheets({
    apiKey: 'AIzaSyDmcXeNM5sRiG9z7dvyj7aCfxcox5Jsp7k',
    sheetId: '1U8Ync9ZnUeGqF06lgiGITMCgXb70RYX_vean31rNBFE',
    sheetsOptions: [{ id: 'BAB-protein' }],
  });
  console.log(data)

  if (data[0]) {
    var protienOptionsArray=data[0].data
  }

  return (
    <div class='LeanFeast'>
      
    <Form.Select aria-label="Default select example">
      {/* {data[0].data} */}
      
      <option>Select From Protiens</option>
      <option value="1">Ground Beef</option>
      <option value="2">Ground Turkey</option>
      <option value="3">Pork Sausage Link</option>
      <option value="4">Salmon</option>
      <option value="5">Shrimp</option>
      <option value="6">Swai</option>
      <option value="7">Steak</option>
      <option value="8">Turkey Fire Ball</option>
      <option value="9">Turkey Meatball</option>
      <option value="10">Turkey Sausage link</option>  
      <option value="11">Plant Based Ground</option> 
      <option value="12">Plant Based Balls</option> 
      <option value="13">Plant Based Nuggets</option>
      <option value="14">Plant Based Patties</option>
    </Form.Select>
    <img src={bowl}/>
    </div>
  );
}

export default LeanFeast;