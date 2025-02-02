import React,{useState,useEffect,useRef} from 'react';

function PP(){
  const inputRef1=useRef(null);
  const inputRef2=useRef(null);
  const inputRef3=useRef(null);


  useEffect(()=>{
    console.log("Component Rendered");
  })
  function handleclick1(){
        inputRef1.current.focus();
        inputRef1.current.style.backgroundColor="yellow";
        inputRef2.current.style.backgroundColor="";
        inputRef3.current.style.backgroundColor="";
  }
  function handleclick2(){
    inputRef2.current.focus();
    inputRef1.current.style.backgroundColor="";
    inputRef2.current.style.backgroundColor="yellow";
    inputRef3.current.style.backgroundColor="";
}
function handleclick3(){
    inputRef3.current.focus();
    inputRef1.current.style.backgroundColor="";
    inputRef2.current.style.backgroundColor="";
    inputRef3.current.style.backgroundColor="yellow";
}
  return(
    <div>
        <button onClick={handleclick1}>Click me1</button><br />
        <input ref={inputRef1}/><br />
        <button onClick={handleclick2}>Click me2</button><br />
        <input ref={inputRef2}/><br />
        <button onClick={handleclick3}>Click me3</button><br />
        <input ref={inputRef3}/>
    </div>
  )
}
export default PP;