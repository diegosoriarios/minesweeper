import React, {Component} from 'react'
import './App.css'

class Grid extends Component{
    constructor(props){
        super(props);
        this.state = {
            grid: []
        }
    }

    componentDidMount(){
        let grid = []
        let random = []
        for(var i = 0; i < 10; i++){
            random = random.concat(Math.floor(Math.random() * 100))
        }
        for(i = 0; i < 100; i++){
            grid = grid.concat(0);
        }
        random.forEach((v) => {
            grid[v] = 1;
        })
        this.setState({
            grid: grid
        })
    }

    renderGrid(){
        return this.state.grid.map((value, index) => {
            if(index === 0){
                return <div className="grid">{value}</div>
            }else{
                if(index % 10 !== 9){
                    return <div className="grid">{value}</div>
                }else{
                    return <span><div className="grid">{value}</div><br /></span>
                }
            }
        })
    }

    render(){
        return(
            <div className="container">
                {this.renderGrid()}
            </div>
        );
    }
}

export default Grid;