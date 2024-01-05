import React from "react"

class CounterComponent extends React.Component{
    constructor(){
        super();
        this.state ={
            count:0,
        }

    }

    

    render(){

        let incrementCount = ()=>{
            this.setState(prevState=>{
                return {count: prevState.count + 1}
            });
        }
        let decrementCount = ()=>{
            this.setState((prevState)=>{
                return{count: prevState.count - 1}
            })
        }
        let resetcounter = ()=>{
            this.setState({count:0})
            }
        

        return(
            <div>
                <h1>
                    Counter App
                </h1>
                <p>{this.state.count}</p>
                <div>
                    <button onClick={()=>incrementCount()}>+</button>
                    <button onClick={()=>decrementCount()}>-</button>
                    <button onClick={resetcounter}>Reset</button>
                </div>
            </div>
        )
    }

}
export default CounterComponent;
