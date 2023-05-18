import React from 'react';

interface IProps {
    button:number;
    plus: (id: string, buttonValue: number)=>void;
    id:string;
    minus:(id: string, buttonValueMinus: number)=> void;
}

const Button = (props:IProps) => {
    return (
        <div>
            <b> - </b>
            <button  style={{border:"1px solid teal", fontSize:"18px", borderRadius:7, marginTop:5}} onClick={()=>props.minus(props.id, props.button)}>
                {props.button}
            </button>
            <b> + </b>
            <button  style={{border:"1px solid teal", fontSize:"18px", borderRadius:7}} onClick={()=>props.plus(props.id, props.button)}>
                {props.button}
            </button>
            {' '}

        </div>
    );
};

export default Button;
