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
            console.log(v)
            grid[v] = 9;
            if(v % 10 === 0){
                grid[v+1] += grid[v+1] !== 9 ? 1 : 0;
                grid[v+11] += grid[v+11] !== 9 ? 1 : 0;
                grid[v+10] += grid[v+10] !== 9 ? 1 : 0;
                grid[v-9] += grid[v-9] !== 9 ? 1 : 0;
                grid[v-10] += grid[v-10] !== 9 ? 1 : 0;
                //vizinhos [v + 1], [v+11], [v+10], [v-9], [v-10]
            }else{
                if(v % 10 === 9){
                    grid[v-1] += grid[v-1] !== 9 ? 1 : 0;
                    grid[v-10] += grid[v-10] !== 9 ? 1 : 0;
                    grid[v-11] += grid[v-11] !== 9 ? 1 : 0;
                    grid[v+9] += grid[v+9] !== 9 ? 1 : 0;
                    grid[v+10] += grid[v+10] !== 9 ? 1 : 0;
                    //vizinhos [v - 1], [v - 10], [v - 11], [v + 9], [v+10] 
                }else{
                    if(v < 10){
                        grid[v-1] += grid[v-1] !== 9 ? 1 : 0;
                        grid[v+1] += grid[v+1] !== 9 ? 1 : 0;
                        grid[v+9] += grid[v+9] !== 9 ? 1 : 0;
                        grid[v+10] += grid[v+10] !== 9 ? 1 : 0;
                        grid[v+11] += grid[v+11] !== 9 ? 1 : 0;
                        //vizinhos [v-1], [v+1], [v+9], [v+10], [v+11]
                    }else{
                        if(v >= 90){
                            grid[v-1] += grid[v-1] !== 9 ? 1 : 0;
                            grid[v+1] += grid[v+1] !== 9 ? 1 : 0;
                            grid[v-9] += grid[v-9] !== 9 ? 1 : 0;
                            grid[v-10] += grid[v-10] !== 9 ? 1 : 0;
                            grid[v-11] += grid[v-11] !== 9 ? 1 : 0;
                            //vizinhos [v-1], [v+1], [v-9], [v-10], [v-11]
                        }else{
                            grid[v-1] += grid[v-1] !== 9 ? 1 : 0;
                            grid[v+1] += grid[v+1] !== 9 ? 1 : 0;
                            grid[v-9] += grid[v-9] !== 9 ? 1 : 0;
                            grid[v+9] += grid[v+9] !== 9 ? 1 : 0;
                            grid[v-10] += grid[v-10] !== 9 ? 1 : 0;
                            grid[v+10] += grid[v+10] !== 9 ? 1 : 0;
                            grid[v-11] += grid[v-11] !== 9 ? 1 : 0;
                            grid[v+11] += grid[v+11] !== 9 ? 1 : 0;
                        }
                    }
                }
            }
            
        })
        this.setState({
            grid: grid
        })
    }

    renderGrid(){
        return this.state.grid.map((value, index) => {
            if(index === 0){
                return <div className="grid" style={{backgroundColor: value === 9 ? 'red' : 'white'}}>{value}</div>
            }else{
                if(index % 10 !== 9){
                    return <div className="grid" style={{backgroundColor: value === 9 ? 'red' : 'white'}}>{value}</div>
                }else{
                    return <span><div className="grid" style={{backgroundColor: value === 9 ? 'red' : 'white'}} >{value}</div><br /></span>
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