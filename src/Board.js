import React from 'react'
import Square from './Square.js'

class Board extends React.Component {
    renderSquare(i) {
      return (
        <Square 
            value={this.props.squares[i]}
            onClick={() => this.props.onClick(i)}
        />
      )
    }
  
    render() {
      return (
        <div>
          <div className="board-row">
            {[0,1,2].map(e=>this.renderSquare(e))}
          </div>
          <div className="board-row">
            {[3,4,5].map(e=>this.renderSquare(e))}
          </div>
          <div className="board-row">
            {[6,7,8].map(e=>this.renderSquare(e))}
          </div>
        </div>
      );
    }
  }

  export default Board