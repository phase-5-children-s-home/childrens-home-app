import React from 'react';
import AddHomeWorkOutlinedIcon from '@mui/icons-material/AddHomeWorkOutlined';
import Diversity3OutlinedIcon from '@mui/icons-material/Diversity3Outlined';
import MedicationLiquidOutlinedIcon from '@mui/icons-material/MedicationLiquidOutlined';
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';
import BalanceOutlinedIcon from '@mui/icons-material/BalanceOutlined';
import AdminPanelSettingsOutlinedIcon from '@mui/icons-material/AdminPanelSettingsOutlined';
import CoronavirusOutlinedIcon from '@mui/icons-material/CoronavirusOutlined';
import './Whatwedo.css'
function Work() {
  return (
    <div id="icons" > 
    
      <span>
        
        <SchoolOutlinedIcon sx={{ fontSize: 100 }} color="success" />
        <h2>Educate the children</h2>
      </span>

      <span>
        
        <MedicationLiquidOutlinedIcon sx={{ fontSize: 100 }} color="success"/>
        <h2>Medical support for children the children</h2>
      </span> 

      <span>
        
        <Diversity3OutlinedIcon sx={{ fontSize: 100 }} color="success" />
        <h2>community and outreach services</h2>                      
      </span> 

      <span>
        
        <BalanceOutlinedIcon sx={{ fontSize: 100 }} color="success"/>
        <h2>justice for the children</h2>
      </span> 

      <span>
       
        <AddHomeWorkOutlinedIcon sx={{ fontSize: 100 }} color="success" />
        <h2>Homes</h2>
      </span> 

      <span>
        
        <CoronavirusOutlinedIcon sx={{ fontSize: 100 }} color="success" />
        <h2>Fight agaist corona virus </h2>
      </span>
      <span>
        
        <AdminPanelSettingsOutlinedIcon sx={{ fontSize: 100 }} color="success" />
        <h2>Humaniterian Relief Services </h2>
      </span> 
      
    </div>
  );
}

export default Work;
