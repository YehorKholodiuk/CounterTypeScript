import React from 'react';
import Button from "./Button";


interface ICounter {
    id:string;
    value:number;
    buttons: number[]
}
interface IProps {
    counter:ICounter;
    plus: (id: string, buttonValue: number)=> void;
    minus:(id: string, buttonValueMinus: number)=> void;
    reset:(id:string)=>void;
}
const Counter = (props:IProps) => {
    return (
        <div style={{marginTop:20, color:"red"}}>

            <b> {props.counter.value} </b>
            <br/>


            <button
                onClick={()=>props.reset(props.counter.id)}
                style={{border:"1px solid black", fontSize:"15px", borderRadius:7, background:"orange", marginTop:5}}> Reset Counter</button>


            {props.counter.buttons.map((button, index) =>
                <Button  key={index} button={button} id={props.counter.id}
                         plus={props.plus}
                         minus={props.minus}
                />

            )}

        </div>
    );
};

export default Counter;
