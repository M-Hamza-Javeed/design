import React, { useState,useEffect } from 'react';

export function DivContainer(props){ return(<div>{props.children}</div>); }

const FancyButton = React.forwardRef((props, ref) => (  
<button ref={ref} className="FancyButton">{props.children}</button>
));
const ref = React.createRef();

export function CText(){
    const [todos, setTodos] = useState({ names: 'Hamza' });
    return(<div> <p>{todos.names}</p>
    <FancyButton ref={ref}>Click me!</FancyButton>
    <input type='button' value="Counter" onClick={()=>setTodos({ names: 'Ali' }) }/></div>); 
}


const MyComponents = {
    DatePicker: function DatePicker(props) {
      return <div>Imagine a {props.color} datepicker here.</div>;
    }
}


export function ColorsDatePick(props) { return <MyComponents.DatePicker color={props.color} />;}

export const CustomComponents=MyComponents