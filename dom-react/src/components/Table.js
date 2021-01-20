//import '../App.css';
import React, { Component } from 'react'
import TableRow from './TableRow'

export default class Table extends Component {
    constructor() {
        super();
        this.state = {
            rows: 2,
            columns: 2,

            color: null,
            colorThem: false,
            clearThem: false,
            colorAllFlag: false,
        }
    }

    addRow = () => {
        this.setState({ rows: this.state.rows + 1 });
    }
    removeRow = () => {
        this.setState({ rows: this.state.rows - 1 });
    }

    addColumn = () => {
        this.setState({ columns: this.state.columns + 1 });
    }
    removeColumn = () => {
        this.setState({ columns: this.state.columns - 1 });
    }

    setColor = (e) => {
        this.setState({ color: e.target.value });
    }
    colorIt = (e) => {
        e.target.style.backgroundColor = this.state.color;
    }

    render() {
        let newTable = [];

        for (let i = 0; i < this.state.rows; i++) {
            newTable.push(
                <TableRow
                    columns={this.state.columns}
                    color={this.state.color}
                    colorIt={this.colorIt}
                />);
        }

        return (
            <div className="App">
                <select className="color-select" names="colors" onChange={this.setColor}>
                    <option value="">Select a color:</option>
                    <option value="blue" >Blue</option>
                    <option value="red" >Red</option>
                    <option value="green" >Green</option>
                    <option value="yellow" >Yellow</option>
                </select>
                <br/><br/>

                <div className="buttons">
                    <button className="addRowButton" onClick={this.addRow}>Add Row</button>
                    <button className="removeRowButton" onClick={this.removeRow}>Remove Row</button>
                    <button className="addColumnButton" onClick={this.addColumn}>Add Column</button>
                    <button className="removeColumnButton" onClick={this.removeColumn}>Remove Column</button>
                </div>

                <table className="table">{newTable}</table>
            </div>
        )
    }
}
