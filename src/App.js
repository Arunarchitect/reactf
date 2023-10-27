import {Box, Typography, Grid, TableContainer, Table, Paper, Avatar,  TableCell, TableHead, TableBody, TableRow, TextField, FormControl, InputLabel, MenuItem, Select,FormControlLabel, Radio, FormLabel, RadioGroup, FormGroup, Checkbox, Stack, Button } from '@mui/material'
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns'
import { useState } from 'react';
import {styled} from '@mui/material/styles'




function App() {
  // eslint-disable-next-line
  const Input = styled('input')({
    display:'none',
  })




  // eslint-disable-next-line
  const [name, setName] = useState()
  // eslint-disable-next-line
  const [email, setEmail] = useState()
  // eslint-disable-next-line
  const [gender, setGender] = useState()
  const [dob, setDob]= useState(null)
  const [st, setSt] = useState('')
  // eslint-disable-next-line
  const [pjl, setPjl] = useState([])
  // eslint-disable-next-line
  const getPjl = (e) =>{
    let data = pjl
    data.push(e.target.value)
    setPjl(data)
  } 

  



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
              id="email" email='email' required fullWidth margin='normal' label='Email'  onChange={(e)=>{setEmail(e.target.value)}}
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
                <RadioGroup row name='gender'>
                  <FormControlLabel value="male" control={<Radio />} label='Male' onChange={(e)=> setGender(e.target.value)}/>
                  <FormControlLabel value="female" control={<Radio />} label='Female'  onChange={(e)=> setGender(e.target.value)}/>
                  <FormControlLabel value="others" control={<Radio />} label='Others'  onChange={(e)=> setGender(e.target.value)}/>
                </RadioGroup>
              </FormControl>
              <FormControl component='fieldset' fullWidth margin='normal'>
                <FormLabel component='legend'>Preferred Job Location</FormLabel>
                <FormGroup row>
                  <FormControlLabel control={<Checkbox/>} label='Kollam' value='kollam' onChange={(e) => getPjl(e)}/>
                  <FormControlLabel control={<Checkbox/>} label='Kochi' value='kochi' onChange={(e) => getPjl(e)}/>
                </FormGroup>
              </FormControl>
              <Stack direction='row' alignItems='center' spacing={4}>
                <label htmlFor="profile-photo">
                  <Input accept="image/*" id='profile-photo' type="file" />
                  <Button variant='contained' component='span'>Upload Photo</Button>
                </label>
                <label htmlFor="resume-file">
                  <Input accept="doc/*" id='resume-file' type="file" />
                  <Button variant='contained' component='span'>Upload File</Button>
                </label>
              </Stack>
              <Box>
                <Button type='submit' variant='contained' sx={{mt:3, mb:2, px:5}} color='error'>Submit</Button>  
              </Box>          
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
