import React, { useState, useEffect, useRef } from 'react';
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
    color: "black",
    display: "flex",
    flexDirection: "column"
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





      const handlePost = (e) => {
        console.log(e)
        // data from new jam form
        // post to server
        let jamData = {
          title: jamTitleInput.current.value,
          genre: jamGenreInput.current.value,
          info: jamInfoInput.current.value,
          userId: 1
        }
          jamCalls.postJam(jamData)
          .then(() => {
            // set new jam state
            setJam(jamData)
            togglePostModal()
          })
    
        }
    

        // state for post new jam via modal
        const [open, setOpen] = useState(false);

        // modal open and close functions
        const togglePostModal = () => {
          setOpen(!open);
        };
        

        // add new refs for new inputs time date location
        const jamTitleInput = useRef(null);
        const jamGenreInput = useRef(null);
        const jamInfoInput = useRef(null);
        // html for  post modal
        const body = (
          <div className={classes.paper}>
            <h2 id="simple-modal-title">Create a New Jam</h2>
            <input ref={jamTitleInput} placeholder="Jam Title"/>
            <input ref={jamGenreInput} placeholder="Info"/>
            <input ref={jamInfoInput} placeholder="Genre"/>
            <input type="time"/>
            <input type="date"/>
            <input placeholder="Location"></input>
            <button onClick={(e) => handlePost(e)}>Create Jam</button>
          </div>
        );





// ----------------------------------------------------------
// POST FAVORITE JAMS

            const postFavoriteJam = (e) => {
              let likedJamId = e.currentTarget.getAttribute('data-jamid')
              console.log(e.currentTarget)
              jamCalls.postFavoriteJam(likedJamId, auth.user.uid)
            }



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
              closeAfterTransition
              BackdropComponent={Backdrop}
              BackdropProps={{
                timeout: 500,
              }}
            >
              <Fade in={open}>
                {body}
              </Fade>
             
            </Modal>
            <JamContainer postFavoriteJam={postFavoriteJam} jamData={jamData} filteredJams={filteredJams}/>
        </div>
      
    )
   
    
    
};


export default Dashboard;