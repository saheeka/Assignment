
import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import './orderlist.css'
import {Link} from 'react-router-dom'



function createData(title, category, customer,address, qty,price, status) {
    return { title, category, customer,address, qty,price, status};
  }
  
  const rows = [
    createData('Title1','Category1','Customer','Address', 159, 1450,<button className='archive'>Archive</button> ),
    createData('Title1','Category1','Customer','Address', 159, 1450,<button className='archive'>Archive</button> ),
    createData('Title1','Category1','Customer','Address', 159, 1450,<button className='archive'>Archive</button> ),
    createData('Title1','Category1','Customer','Address', 159, 1450 ,<button className='archive'>Archive</button>),
    createData('Title1','Category1','Customer','Address', 159, 1450 ,<button className='archive'>Archive</button>),
    createData('Title1','Category1','Customer','Address', 159, 1450 ,<button className='archive'>Archive</button>),
    createData('Title1','Category1','Customer','Address', 159, 1450 ,<button className='archive'>Archive</button>),
    createData('Title1','Category1','Customer','Address', 159, 1450 ,<button className='archive'>Archive</button>),
    createData('Title1','Category1','Customer','Address', 159, 1450 ,<button className='archive'>Archive</button>),
    createData('Title1','Category1','Customer','Address', 159, 1450 ,<button className='archive'>Archive</button>)
   
  ];
  

function Orderlist() {
    return (
        <div  className='orderlist'> 
            <div className="topbarr">
            <div className='topbarwrapperr'>
                <div className='topleftt'>
            <h5>Table</h5></div>
            <div className='toprightt'><input type="text" placeholder=' &#x1F50D; search here....'></input></div>
            <div>
            <Link to="/addorder">
            <button className="addnew" > Add new</button>
            </Link>
           </div>   
               </div>
        
            </div>
 <TableContainer component={Paper} className='tablec'>
      <Table sx={{ minWidth: 650}} aria-label="simple table">
         
        <TableHead> 
          <TableRow className="cell">
            <TableCell className="cell">TITLE</TableCell>
            <TableCell  className="cell" align="right" >CATEGORY</TableCell>
            <TableCell className="cell" align="right">CUSTOMER</TableCell>
            <TableCell className="cell" align="right">ADDRESS</TableCell>
            <TableCell className="cell" align="right">QTY</TableCell>
            <TableCell className="cell" align="right">PRICE</TableCell>
            <TableCell className="cell" align="right">STATUS</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.title}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.title}
              </TableCell>
              <TableCell align="right">{row.category}</TableCell>
              <TableCell align="right">{row.customer}</TableCell>
              <TableCell align="right">{row.address}</TableCell>
              <TableCell align="right">{row.qty}</TableCell>
              <TableCell align="right">{row.price}</TableCell>
              <TableCell align="right">{row.status}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
            
        </div>
    )
}

export default Orderlist
