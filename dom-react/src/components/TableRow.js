//import './App.css';
import React from 'react'
import TableCell from './TableCell'

export default function TableRow(props) {
    let cells = [];

    for (let i = 0; i < props.columns; i++) {
        cells.push(
            <TableCell color={props.color} colorIt={props.colorIt} />
        )
    }

    return (
        <tr>{cells}</tr>
    )
}