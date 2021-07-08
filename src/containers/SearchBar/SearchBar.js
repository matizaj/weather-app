import React, {useState, useEffect} from "react";
import {connect} from 'react-redux';
import {fetchWeatcher} from '../../store/actions';

const SearchBar = (props) => {
const [term, setTerm]=useState('');

useEffect(()=>{
    
    
  }, []);

const onInputHandler=(e)=>{
    setTerm(e.target.value);
    console.log(e.target.value);
}

const onSubmitHandler=(e)=>{
    e.preventDefault();
    if(term) {
        props.fetchWeatcher(term);
    }
}
  return (
    <form className="input-group" onSubmit={onSubmitHandler}>
        <input placeholder="Get a faive-day forecast in your favourite cities" value={term} onChange={onInputHandler} className="form-control"/>
        <span className="input-group-btn">
            <button className="btn btn-secondary" type="submit">Search</button>
        </span>
    </form>
  )
};
const mapStateToProps=state=> {
    console.log(state);
    return {
        weather: state
    }
}
export default connect(mapStateToProps, {fetchWeatcher})(SearchBar);
