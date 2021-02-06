import React, { useState, useEffect } from 'react';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';

import PrimarySearchAppBar from './PrimaryBar'
import JamContainer from './JamContainer'
import SideMenu from './SideMenu'
import { useAuth } from "../../Hooks/use-auth";
import { makeStyles } from '@material-ui/core/styles';
import jamCalls from '../../utils/jamAPI'


const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

const Dashboard = (props) => {
    const auth = useAuth();
    const classes = useStyles();
    const [jamData, setJams] = useState("");
    const [searchTerm, setSearchTerm] = useState("");
    const [filteredJams, setFilteredJams] = useState("");

  // load in all jams onto dash
    useEffect(() => {
      fetch('http://localhost:3000/jams')
      .then(res => res.json())
      .then(data => {
        setJams(data.allJams)
      })
  
     
    }, []);
  // used for searching through jam list
    useEffect(() => {
      if(jamData){
        const results = jamData.filter(jam =>
          jam.title.toLowerCase().includes(searchTerm)
        );
        setFilteredJams(results);
      }
  
    }, [searchTerm]);
  
  
    const handleJamSearch = (e) => {
      setSearchTerm(e.target.value);
    }

// --------------------------------------------------
    // state and useEffect for when posting new jam
      const [postedJam, setJam] = useState('')
      useEffect(() => {
        // if posted jam changes repopulate state with all previous + new   
          if(postedJam){
            console.log('newjam', postedJam)
            setJams([...jamData, postedJam])
          }
          
        }, [postedJam]);


      const handlePost = (jamData) => {
        // data from new jam form
        // post to server
          let newJam = jamCalls.postJam(jamData)
        // set new jam state
          setJam(jamData)
        }
    

        // state for post new jam via modal
        const [open, setOpen] = useState(false);

        // modal open and close functions
        const togglePostModal = () => {
          setOpen(!open);
        };
      

        // html for  post modal
        const body = (
          <div style={{"backgroundColor": "blue", "height": "90%"}}>
            <h2 id="simple-modal-title">Text in a modal</h2>
            <p id="simple-modal-description">
              Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
            </p>
          </div>
        );

    return (
        <div>
            <PrimarySearchAppBar handleJamSearch={handleJamSearch}></PrimarySearchAppBar>
            <SideMenu togglePostModal={togglePostModal} handlePost={handlePost}/>
            <Modal
              open={open}
              onClose={togglePostModal}
              className={classes.modal}
              aria-labelledby="simple-modal-title"
              aria-describedby="simple-modal-description"
            >
              <Fade in={open}>
                {body}
              </Fade>
             
            </Modal>
            <JamContainer jamData={jamData} filteredJams={filteredJams}/>
        </div>
      
    )
   
    
    
};


export default Dashboard;