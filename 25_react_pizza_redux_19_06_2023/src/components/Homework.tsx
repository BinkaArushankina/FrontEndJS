import React, { useEffect, useRef } from 'react';

const Homework = () => {
    const inputRef = useRef<HTMLInputElement>(null);//input - ssilka, na kakoj elemnt ee powesim, do takogo elm udet dostup

    useEffect(() => {//kaschdij ras kogda straniza obnowlaetsa ili internet wikl. to ostaetsa podgruschennoe, a ostalnoe ne podgruschaetsa dalsche
       const savedValue = localStorage.getItem('myValue');//schto to podgruscheno?? smoschem dotanutsa
       if(savedValue && inputRef.current) {//esli smogli dotanutsa i inpute estj soderschimoe, to 
            inputRef.current.value = savedValue;//to pust soderschimoe inputa udet rawno podgeuschennomu
       }
    }, []);    

    const handleSave = () => { //dostawatj snatschenie kotoroe estj w input na dannij moment i sapisiwatj w localStorage
        const value = inputRef.current?.value ? inputRef.current?.value : '';//true value , false pustaja stroka
        localStorage.setItem('myValue', value);
    };    


  return (//powesili na input useRef
    <div>
        <input ref={inputRef} type="text" />
        <button onClick={handleSave}>save</button>
    </div>
  )
}

export default Homework;