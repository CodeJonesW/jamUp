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
    const [loggedInUserId, setUserId] = useState(null)

  // load in all jams on page
  const [jamData, setJams] = useState("");
    useEffect( () => {
      // using set timeout to allow time for firebase and my db to create user so that 
      // we can grab the user by uid
      setTimeout(function(){
        // jamCalls.postUser({"email": auth.user.email, "firebase": auth.user.uid})

        jamCalls.getUserByUid(auth.user.uid)
        .then((data) => {
          if(data.msg){
            auth.signout()
          }
          console.log(data)
          console.log("here", data.userInfo[0].id)
          setUserId(data.userInfo[0].id)
          jamCalls.findUserFavoriteJams(data.userInfo[0].id)
        .then((userFavoriteJamData) => {
          setUserFavoriteJams(userFavoriteJamData.userFavoriteJams)
        })
      }, 2000);
      
      })
     
      fetch('http://localhost:3000/jams')
      .then(res => res.json())
      .then(data => {
        setJams(data.allJams)
      })
    }, []);


// --------------------------------------------------
// FILTER JAMS KEYWORDS (SEARCH)

  const [searchTerm, setSearchTerm] = useState("");
  const [filteredJams, setFilteredJams] = useState("");

    useEffect(() => {
      if(jamData){
        const results = jamData.filter(jam =>
          jam.title.toLowerCase().includes(searchTerm)
        );
        setFilteredJams(results);
      }
  
    }, [searchTerm]);
  
    // this runs onchange in search filtering jams
    const handleJamSearch = (e) => {
      setSearchTerm(e.target.value);
    }



// -------------------------------------------------------------
// POST NEW JAM
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
          jamDate: jamDate.current.value,
          jamTime: jamTime.current.value,
          location: jamLocation.current.value,
          userId: loggedInUserId
        }
        // FIREBASE UPDATE ^ FROM USER ID
          jamCalls.postJam(jamData)
          .then((data) => {
           
            // grab new jam id and at it to the jam about to be posted to state
            jamData.id = data.createdJamId
             // set new jam state
            setJam(jamData)
            // turn off modal
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
        const jamTime = useRef(null)
        const jamDate = useRef(null)
        const jamLocation = useRef(null)
        // html for  post modal
        const body = (
          <div className={classes.paper}>
            <h2 id="simple-modal-title">Create a New Jam</h2>
            <input ref={jamTitleInput} placeholder="Jam Title"/>
            <input ref={jamInfoInput} placeholder="Info"/>
            <input ref={jamGenreInput} placeholder="Genre"/>
            <input ref={jamTime}type="time"/>
            <input ref={jamDate}type="date"/>
            <input ref={jamLocation} placeholder="Location"></input>
            <button onClick={(e) => handlePost(e)}>Create Jam</button>
          </div>
        );





// ----------------------------------------------------------
// POST FAVORITE JAM

            const postFavoriteJam = (e) => {
              let likedJamId = e.currentTarget.dataset.jamid
              console.log(e.currentTarget)
              console.log(e.currentTarget.dataset.jamid)
              jamCalls.postFavoriteJam(likedJamId, loggedInUserId).then((data) => {
                console.log(data)
                if(data.msg){
                  alert(data.msg)
                } else {
                  alert("Added to Favorites")
                }
              })
              // FIREBASE UPDATE FROM USER ID ^^
              
            }

// --------------------------------------------------------------
// FILTER FOR USERS FAVORITES
            const [displayFavorites, toggleDisplayFavorites] = useState(false)
            const [userFavoriteJams, setUserFavoriteJams] = useState(null)

            const handleShowFavorites = async () => {
              toggleDisplayFavorites(!displayFavorites)
              let data = await jamCalls.findUserFavoriteJams(loggedInUserId)
                // console.log(data, displayFavorites)
                setUserFavoriteJams(data.userFavoriteJams)
                
            }

            useEffect(() => {
              // console.log(displayFavorites)
            }, [displayFavorites]);

    return (
        <div>
            {/* APP BAR AND BUTTONS BELOW  */}
            <PrimarySearchAppBar handleJamSearch={handleJamSearch}></PrimarySearchAppBar>
            <SideMenu handleShowFavorites={handleShowFavorites} togglePostModal={togglePostModal} handlePost={handlePost}/>
            {/* ------------------------------------------------------------ */}
            {/* POST NEW JAM MODAL */}
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
            {/* CONTAINER OF AVALIABLE JAMS */}
            
            <JamContainer displayFavorites={displayFavorites} userFavoriteJams={userFavoriteJams} postFavoriteJam={postFavoriteJam} jamData={jamData} filteredJams={filteredJams}/>
        </div>
      
    )
   
    
    
};


export default Dashboard;