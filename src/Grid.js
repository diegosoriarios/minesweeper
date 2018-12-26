import React, {Component} from 'react'
import './App.css'

class Grid extends Component{
    constructor(props){
        super(props);
        this.state = {
            grid: [],
            values: []
        }
        this.onClickHandler = this.onClickHandler.bind(this);
    }

    componentDidMount(){
        let grid = []
        let values = []
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
        for(i = 0; i < 100; i++){
            switch(grid[i]){
                case 1:
                    values[i] = '1⃣'
                    break;
                case 2:
                    values[i] = '2️⃣'
                    break;
                case 3:
                    values[i] = '3️⃣'
                    break;
                case 4:
                    values[i] = '4⃣'
                    break;
                case 5:
                    values[i] = '5⃣'
                    break;
                case 6:
                    values[i] = '6⃣'
                    break;
                case 7:
                    values[i] = '7⃣'
                    break;
                case 8:
                    values[i] = '8⃣'
                    break;
                case 9:
                    values[i] = '💣'
                    break;
                default:
                    values[i] = '_'
                    break;
            }
        }
        this.setState({
            grid: grid,
            values: values
        })
    }

    onClickHandler(e){
        let grid = [...this.state.grid]
        let values = [...this.state.values]
        grid[e] = values[e]
        this.setState({
            grid: grid
        })   
        if(this.state.grid[e] === 9){
            alert("Perdeu")
        }
    }

    renderGrid(){
        return this.state.grid.map((value, index) => {
            let valor = typeof value === 'number' ? '*' : value;
            if(index < 100){
                if(index === 0){
                    return <div className="grid" key={index} onClick={() => this.onClickHandler(index)}>{valor}</div>
                }else{
                    if(index % 10 !== 9){
                        return <div className="grid" key={index} onClick={() => this.onClickHandler(index)}>{valor}</div>
                    }else{
                        return <span><div className="grid" key={index} onClick={() => this.onClickHandler(index)}>{valor}</div><br /></span>
                    }
                }
            }
            return <br />
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