import Header from "./sub-components/Header";
import '../../../src/styles/referal.css'
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Link } from 'react-router-dom';

const Referal = () => {
    const user_id=localStorage.getItem('user-key');
    const StyledTableCell = styled(TableCell)(({ theme }) => ({
        [`&.${tableCellClasses.head}`]: {
          backgroundColor: "#9900EF",
          color: theme.palette.common.white,
        },
        [`&.${tableCellClasses.body}`]: {
          fontSize: 14,
        },
      }));
  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
      border: 0,
    },
  }));
  
  function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
  }
  const rows = [
    createData('Owoade123', '#2000', 'Level Refferal bonus', '18/12/2021 12:30', '#2000'),
  ];

    return ( 
        <div className="referal-container">
        <Header />  
          <div className="base-nav">
              <div className="container">
                 <div className="scroll-wrapper">
                        <nav>
                            <a href="#" >Overview</a>
                            <a href="#">Mine</a>
                            <a href="#" className="active">Referals</a>
                            <a href="#">Share & Earn</a>
                            <a href="#">Withdraw</a>
                            <a href="#">Marketplace</a>
                            <Link to="/notifications">Notifications</Link>
                            <a href="#">Upgrade</a>
                        </nav>
                    </div>    
                    
                </div>
            </div>
            
            <div className="container">
                <h2>Your Referal link</h2>
                <div className="referal-box">
                    <span>{`localhost:3000/?ref=${user_id}`}</span>
                </div>
                <h2>Referal Record</h2>
                <div className="referal-logs">
                                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 700 }} aria-label="customized table">
                        <TableHead>
                        <TableRow>
                            <StyledTableCell>Username</StyledTableCell>
                            <StyledTableCell align="right">Amount</StyledTableCell>
                            <StyledTableCell align="right">Description&nbsp;</StyledTableCell>
                            <StyledTableCell align="right">Date & Time&nbsp;</StyledTableCell>
                            <StyledTableCell align="right">Balance&nbsp;</StyledTableCell>
                        </TableRow>
                        </TableHead>
                        <TableBody>
                        {rows.map((row) => (
                            <StyledTableRow key={row.name}>
                            <StyledTableCell component="th" scope="row">
                                {row.name}
                            </StyledTableCell>
                            <StyledTableCell align="right">{row.calories}</StyledTableCell>
                            <StyledTableCell align="right">{row.fat}</StyledTableCell>
                            <StyledTableCell align="right">{row.carbs}</StyledTableCell>
                            <StyledTableCell align="right">{row.protein}</StyledTableCell>
                            </StyledTableRow>
                        ))}
                        </TableBody>
                    </Table>
                    </TableContainer> 
                </div>
            </div>
              
        </div>
     );
}
 
export default Referal;