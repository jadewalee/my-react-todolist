import React from 'react'
import Todo from './todo';
import '../App.css';
import {List,Input,Label} from 'reactstrap'


const Todopage = () => {

  return (
    <div className='todopage'>
      <Todo />
      {/* <div className='liststyles'> */}
        {/* <List type='unstyled'>
          <Input
          id="exampleCheckbox"
          name="checkbox"
          type="checkbox"
        />
          <Label check>
          <li>Milk</li>
        </Label> 
        </List> */}
      </div>
    // </div>
  )
}

export default Todopage;