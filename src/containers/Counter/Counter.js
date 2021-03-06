import React, { Component } from 'react';
import {connect} from 'react-redux';
import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';

class Counter extends Component {
  

   

    render () {
        return (
            <div>
                <CounterOutput value={this.props.ctr} />
                <CounterControl label="Increment" clicked={ this.props.agregaUno} />
               {/*<CounterControl label="Decrement" clicked={() => this.counterChangedHandler( 'dec' )}  />
                 <CounterControl label="Add 5" clicked={() => this.counterChangedHandler( 'add', 5 )}  />
        <CounterControl label="Subtract 5" clicked={() => this.counterChangedHandler( 'sub', 5 )}  />*/}
            </div>
        );
    }
}

const mapStateToProps = (state) =>{
    console.log ( state)
    return {
        ctr: state.counter
    }
}
const mapDispatchToProps = (dispatch) => {
    console.log (dispatch)
    return {
        agregaUno : () =>{
            return dispatch({type : 'SUMAUNO'})
        }

    }

}
export default connect(mapStateToProps, mapDispatchToProps)(Counter);
//funcion de alto nivel.