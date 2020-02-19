import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
  table: {
    width: '100%',
  },
});

function createData(name,  pechuga,  comida1,  comida2) {
  return { name,  pechuga, comida1,  comida2 };
}

const rows = [
  createData('Medias', 1, 2, 3),
  createData('Enteras', 4, 5, 6),


];

export default function SimpleTable() {
  const classes = useStyles();

  const fontSize = {
      fontSize: 40
  }

  return (
    <TableContainer component={Paper} >
      <Table className={classes.table} aria-label="simple table" size="small">
        <TableHead>
          <TableRow>
            <TableCell>Comidas</TableCell>
            <TableCell align="center">Pechugas</TableCell>
            <TableCell align="center">Comida1</TableCell>
            <TableCell align="center">Comida2</TableCell>
            
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
                        <TableCell style={fontSize} align="center">{row.pechuga}</TableCell>
                        <TableCell style={fontSize} align="center">{row.comida1}</TableCell>
                        <TableCell style={fontSize} align="center">{row.comida2}</TableCell>                  


            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}