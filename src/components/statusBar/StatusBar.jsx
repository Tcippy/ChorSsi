import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import PhoneIcon from '@mui/icons-material/Phone';
import VerifiedIcon from '@mui/icons-material/Verified';
import CancelIcon from '@mui/icons-material/Cancel';
import { grey } from '@mui/material/colors';

function StatusBar() {

  var active = localStorage.getItem("status").split(", ");
  var allPart = localStorage.getItem("participant").split(", ");
  //console.log("name :", name) : console.log("name :", 0) )

  const [value, setValue] = React.useState('one');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{width:'100%', border:2,borderColor:'crimson', display: 'flex',backgroundColor:'rgb(244, 46, 85)',
            justifyContent:'center'}}>
      <Tabs
      sx={{'& .MuiTabs-indicator':{backgroundColor:'rgb(255, 188, 201)'},'& .MuiButtonBase-root':{  borderColor:'crimson'},
      '& .MuiButtonBase-root.Mui-selected':{ backgroundColor:'rgb(255, 188, 201)'},'& .MuiButtonBase-root.MuiTab-textColorPrimary':{  color:'white', fontWeight: 'bold'}
      ,'& .MuiButtonBase-root.MuiTab-textColorPrimary.Mui-selected':{  color:'black', fontWeight: 'bold',} }}
        value={value}
        onChange={handleChange}
        aria-label="wrapped label tabs example"
        //indicatorColor='secondary'
        centered
      >
        {allPart.map((name) =>( active.includes(name) ?(
          <Tab 
            //sx={{'& .MuiButtonBase-root':{backgroundColor:'black'}}}
            icon={<VerifiedIcon style={{ color: "green" }} />}
            iconPosition="bottom"
            value={allPart.indexOf(name)=== 0 ? "one"  : allPart.indexOf(name)}
            key={allPart.indexOf(name)}
            label={name}
            wrapped
          />
        ):<Tab
        icon={<CancelIcon style={{ color: "black" }} />}
        iconPosition="bottom"
        value={allPart.indexOf(name)=== 0 ? "one" : allPart.indexOf(name)}
        key={allPart.indexOf(name)}
        label={name}
        wrapped
      />))}
      </Tabs>
    </Box>  
    )
}

export default StatusBar;