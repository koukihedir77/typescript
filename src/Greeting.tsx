import React from "react";
 interface greetingprop {
    name : string 
 }

 const Greeting = ({ name }: greetingprop)=>{
    return <div>Hello ,{name}!</div>;

 } ;
 export default Greeting;