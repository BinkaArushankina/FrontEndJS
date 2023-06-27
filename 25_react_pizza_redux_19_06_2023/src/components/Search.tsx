import React, { useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { onClickCategory } from '../redux/slices/filterSlice';

const Search: React.FC = () => {

    const [localValue, setLocalValue] = useState<string>('');//stroka po umoltschaniu pustaja
    const dispatch = useDispatch();
    const [isFocus, setisFocus] = useState<boolean>(false);//nachoditsa li input w fokuse,   boolean po umoltschaniu false
    const [active, setActive] = useState<boolean>(false);//aktiwen li

    const inputRef = useRef<HTMLInputElement>(null);//ssilka na input. moschem rabotatj w js s html, wnisu w inpute ostawlaem huk useref inputrefa
    //huk useref odin is metodow, kotorij predostawlaet react dlja polutschenia ssilki na jsx.Element

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setLocalValue(e.target.value);
        dispatch(onClickCategory(0))//po umoltschaniu budet pokasiwatj wse categorii
    };

    const onClickClear = () => {
        setLocalValue('');//stschistil input, potomuschto oni swasani dwuchstoronej swasju
        //odin id klassitscheskich primerow ispols. huka useRef, s pomoschju ssilki na input elm, mi ustanowili focus na nem
        inputRef.current?.focus();//  esli takoj input suschestwuet (esli on ne null, no po umoltschaniu on null) to sdelaj focus(metod) sfokusirujsa na etom elm
    }

  return (
    <div className={`search ${isFocus ? 'search:focus' : ''}`}>
        <button onClick={() => setActive(!active)}></button>
        <input 
            type="text" 
            placeholder='search items...'
            //w atribute ref peredaem to schto polutschili is huka useRef, proischodit swjaska meschdu elm(input) i s hukom useRef
            ref={inputRef}
            //sraotaet kogda elm w fokuse
            onFocus={() => setisFocus(true)}
            //sraotaet kogda elm ne w fokuse
            onBlur={() => setisFocus(false)}
            //kaschdij ras kogda input menaetsa, pri kaschdom nowom simwole, sostojanie menaetsa i localValue
            onChange={onChange}
            //input i huk swasani dwuchstorone, ismenem localvalue ismenitsa input, ismenim input ismenitsa localvalue
            value={localValue}
        />
        <button
            onClick={onClickClear}
        ></button>
    </div>
  );
};

export default Search;