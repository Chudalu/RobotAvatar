import React, {Component} from 'react';
import {connect} from 'react-redux';
import Input from '../components/Input';
import Card from '../components/Card';
import {setInput, requestData} from '../actions';
import './App.css';


const mapStateToProps = state => {
  return{
    input: state.sendData.input,
    data: state.requestData.data,
    isPending: state.requestData.isPending,
    error: state.requestData.error
  }
}

const mapDispatchtoProps = (dispatch) => {
  
  return {
    onSearchChange: (event) => {
      dispatch(setInput(event.target.value))
      dispatch(requestData(event.target.value))
    },
  }
}



class App extends Component{
  
  
  render(){
    const {onSearchChange, data, isPending} = this.props
    var dataVal = {};
    if (isPending){
      dataVal = {};
    }else{
      dataVal = data;
    }
    
      return (
        <div className='tc'>
          <h1>Robot Avatar</h1>
          <Input searchChange={onSearchChange} />
          <br/><br/>
          <Card data={dataVal} />
        </div>
      )
    
    
  }
}

export default connect(mapStateToProps,mapDispatchtoProps)(App);