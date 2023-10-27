import {Box, Typography, Grid, TableContainer, Table, Paper, Avatar,  TableCell, TableHead, TableBody, TableRow, TextField, FormControl, InputLabel, MenuItem, Select,FormControlLabel, Radio, FormLabel, RadioGroup,} from '@mui/material'
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns'
import { useState } from 'react';




function App() {
  // eslint-disable-next-line
  const [name, setName] = useState()
  // eslint-disable-next-line
  const [email, setEmail] = useState()
  const [dob, setDob]= useState(null)
  const [st, setSt] = useState('')

  



  return (
    <>
      <Box display="flex" justifyContent="center" sx={{backgroundColor:'error.light'}}>
        <Typography variant='h2' component="div" sx={{fontWeight:'bold', color:'white'}}>Resume Uploader</Typography>
      </Box>
      <Grid container justifyContent="center">
        <Grid item xs={5}>
          <Box component="form" sx={{p:3}} noValidate id='resume-form'>
            <TextField
              id="name" name='name' required fullWidth margin='normal' label='Name' onChange={(e)=>{setName(e.target.value)}}
            />
            <TextField
              id="email" name='email' required fullWidth margin='normal' label='Email'  onChange={(e)=>{setEmail(e.target.value)}}
            />
            <Box mt={2}>
              <LocalizationProvider dateAdapter={AdapterDateFns}>
                <DatePicker label='DOB' value={dob} onChange={(newValue)=>{setDob(newValue)}} rebderInput={(params)=><TextField {...params} />}></DatePicker>
              </LocalizationProvider>
            </Box>
            <FormControl fullWidth margin='normal'>
              <InputLabel id ='state-select-label' >State</InputLabel>
              <Select labelId='state-select-label'  id='state-select' value={st} label='st' onChange={(e)=>{setSt(e.target.value)}}>
                <MenuItem value="KE" >Kerala</MenuItem>
                <MenuItem value="TN" >Tamil Nadu</MenuItem>
              </Select>
              
            </FormControl>
            <FormControl fullWidth margin='normal'>
              <FormLabel id='gender-radio'>Gender</FormLabel>
                <RadioGroup >
                  <FormControlLabel value="male" control={<Radio />}>Male</FormControlLabel>
                </RadioGroup>
              </FormControl>          
          </Box>
        </Grid>
        <Grid item xs={7}>
          <Box display="flex" justifyContent="center" sx={{backgroundColor:'info.light', padding:1}}>
            <Typography variant='h5' component="div" sx={{fontWeight:'bold', color:'white'}}>List of Candidates</Typography>
          </Box>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell align="center">Name</TableCell>
                  <TableCell align="center">Email</TableCell>
                  <TableCell align="center">D.O.B</TableCell>
                  <TableCell align='center' >Kerala</TableCell>
                  <TableCell align='center' >Gender </TableCell>
                  <TableCell align='center' >Location </TableCell>
                  <TableCell align='center' >Image</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow sx={{'&:last-child td, &last-child th': {border:0}}}>
                  <TableCell component="th" scope="row" >Arun </TableCell>
                  <TableCell align='center' >arunmr801@gmail.com </TableCell>
                  <TableCell align='center' >8 May 1997 </TableCell>
                  <TableCell align='center' >Kerala</TableCell>
                  <TableCell align='center' >Male </TableCell>
                  <TableCell align='center' >Bangalore </TableCell>
                  <TableCell align='center' ><Avatar src="#"/></TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
      </Grid>
    </>
  );
}

export default App;
