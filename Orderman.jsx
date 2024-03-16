import React from 'react'
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'

function Orderman() {
  return (
    <div>
       
       <TableContainer>
        <Table>
            <TableHead>
                <TableRow>
                    <TableCell style={{color:'red',fontFamily:'cursive',fontSize:'20px'}}>Order no</TableCell>
                    <TableCell style={{color:'red',fontFamily:'cursive',fontSize:'20px'}}>Orders</TableCell>
                    <TableCell style={{color:'red',fontFamily:'cursive',fontSize:'20px'}}>Status of order</TableCell>
                </TableRow>
            </TableHead>
        
        </Table>

    </TableContainer>
</div>
   
  )
}

export default Orderman