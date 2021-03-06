import React, { useState, useEffect, useRef } from "react";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import InfoHeader from "./infoHeader";
import PrimarySearchAppBar from "./PrimaryBar";
import JamContainer from "./JamContainer";
import SideMenu from "./SideMenu";
import { useAuth } from "../../Hooks/use-auth";
import { makeStyles } from "@material-ui/core/styles";
import jamCalls from "../../utils/jamAPI";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    color: "black",
    display: "flex",
    flexDirection: "column",
  },
}));

const Dashboard = (props) => {
  const auth = useAuth();
  const classes = useStyles();
  const [loggedInUserId, setUserId] = useState(null);

  // load in all jams on page
  const [jamData, setJams] = useState("");
  useEffect(async () => {
    async function fetchData() {
      // await for DB to process
      await timeout(3000);
      // console.log(auth.user)
      jamCalls.getUserByUid(auth.user.uid).then((data) => {
        // console.log("HERE", data)
        if (data.msg) {
          auth.signout();
          return;
        }
        // console.log(loggedInUserId)
        setUserId(data.userInfo[0].id);
        jamCalls
          .findUserFavoriteJams(data.userInfo[0].id)
          .then((userFavoriteJamData) => {
            // console.log("HERE", userFavoriteJamData)
            setUserFavoriteJams(userFavoriteJamData.userFavoriteJams);
          });
      });
    }

    fetchData();

    jamCalls.getAllJams().then((data) => {
      setJams(data.allJams);
    });
  }, []);

  function timeout(delay) {
    return new Promise((res) => setTimeout(res, delay));
  }

  // --------------------------------------------------
  // FILTER JAMS KEYWORDS (SEARCH)

  const [searchTerm, setSearchTerm] = useState("");
  const [filteredJams, setFilteredJams] = useState("");
  const [jamsToSearch, setJamsToSearch] = useState("");
  // refactor to use DB
  useEffect(() => {
    // if the search term does not exist grab the jams by page via get all jams
    // set the two states involving search to false so that correct data renders
    // and return
    if (!searchTerm) {
      jamCalls.getAllJams().then((data) => {
        setJamsToSearch(false);
        setFilteredJams(false);
        setJams(data.allJams);
        return;
      });
    } else {
      // otherwise grab all the grabs from the db and set to state
      // jams to search
      jamCalls.getAllJamsForSearch().then((data) => {
        setJamsToSearch(data.allJams);
      });

      // if this state has been populated there is a current search term
      if (jamsToSearch) {
        // filter results
        const results = jamsToSearch.filter((jam) =>
          jam.title.toLowerCase().includes(searchTerm)
        );
        setFilteredJams(results);
        // the existence of this ^ state will trigger a rendering of different data in the
        // jam container
      }
    }
  }, [searchTerm]);

  // this runs onchange in search filtering jams
  const handleJamSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  // -------------------------------------------------------------
  // POST NEW JAM
  // --------------------------------------------------
  // state and useEffect for when posting new jam
  const [postedJam, setJam] = useState("");
  useEffect(() => {
    // if posted jam changes repopulate state with all previous + new
    if (postedJam) {
      // console.log('newjam', postedJam)
      setJams([postedJam, ...jamData]);
    }
  }, [postedJam]);

  const handlePost = (e) => {
    // console.log(e)
    // data from new jam form
    // post to server
    if (!jamDate.current.value || !jamTime.current.value) {
      alert("Jams must have a date and time");
      return;
    }
    // console.log(loggedInUserId)
    let newJam = {
      title: jamTitleInput.current.value,
      genre: jamGenreInput.current.value,
      info: jamInfoInput.current.value,
      jamDate: jamDate.current.value,
      jamTime: jamTime.current.value,
      location: jamLocation.current.value,
      userId: loggedInUserId,
    };

    jamCalls.postJam(newJam).then((data) => {
      // console.log(data)
      // changing jamDate to hold utc so correct time is displayed immediately after post
      const d = new Date(newJam.jamDate + "T" + newJam.jamTime);
      const newUtcDate = d.toUTCString();
      newJam.jamDate = newUtcDate;
      // grab new jam id and append it to the jam about to be posted to state
      newJam.id = data.createdJamId;
      // set new jam state
      setJam(newJam);
      // turn off modal
      togglePostModal();
    });
  };

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
  const jamTime = useRef(null);
  const jamDate = useRef(null);
  const jamLocation = useRef(null);
  // html for  post modal
  const body = (
    <div className={classes.paper}>
      <h2 id="simple-modal-title">Create a New Jam</h2>
      <input ref={jamTitleInput} placeholder="Jam Title" />
      <input ref={jamInfoInput} placeholder="Info" />
      <input ref={jamGenreInput} placeholder="Genre" />
      <input ref={jamTime} type="time" />
      <input ref={jamDate} type="date" />
      <input ref={jamLocation} placeholder="Location"></input>
      <button onClick={(e) => handlePost(e)}>Create Jam</button>
    </div>
  );

  // ----------------------------------------------------------
  // POST/TOGGLE FAVORITE JAM

  const postFavoriteJam = (e) => {
    let likedJamId = e.currentTarget.dataset.jamid;
    // console.log(e.currentTarget)
    // console.log(e.currentTarget.dataset.jamid)
    // console.log(loggedInUserId)
    jamCalls.postFavoriteJam(likedJamId, loggedInUserId).then((data) => {
      console.log(data);
      setUserFavoriteJams(data.userFavoriteJams);
      alert(data.msg);
    });
  };

  // --------------------------------------------------------------
  // Delete User's Jam

  const handleDeleteJam = (e) => {
    // console.log(e.currentTarget)
    let jamIdToDelete = e.currentTarget.dataset.jamid;
    // console.log(jamIdToDelete)
    let answer = window.confirm("Are you sure you want to delete this jam?");
    if (answer) {
      jamCalls
        .deleteJamById(jamIdToDelete, loggedInUserId, pageNumber)
        .then((data) => {
          // console.log(data)
          setJams(data.allJams);
        });
    } else {
      return;
    }
  };

  // --------------------------------------------------------------
  // FILTER FOR USERS FAVORITES
  const [displayFavorites, toggleDisplayFavorites] = useState(false);
  const [userFavoriteJams, setUserFavoriteJams] = useState([]);
  useEffect(() => {
    // console.log("User Favorite Jams: ",userFavoriteJams)
  }, [userFavoriteJams]);

  const handleShowFavorites = async () => {
    toggleDisplayFavorites(!displayFavorites);
    let data = await jamCalls.findUserFavoriteJams(loggedInUserId);

    // console.log(data, displayFavorites)
    setUserFavoriteJams(data.userFavoriteJams);
  };

  useEffect(() => {
    // console.log(displayFavorites)
    // console.log(userFavoriteJams)
  }, [displayFavorites]);

  // ---------------------------------------------------
  // Handle Learn More Modal
  // modal to come

  const handleLearnMore = (e, props) => {
    // console.log(e.currentTarget)
    // console.log(props)
    jamCalls.findUsersWhoFavoritedJam(props.id).then((data) => {
      // console.log(data)
      // console.log("users who like jam", data.usersWhoFavoriteJamId)
      alert(
        `Currently, ${data.usersWhoFavoriteJamId.length} musicians are attending this jam`
      );
    });
  };

  // ------------------------------------------------------
  // Handle Pages of Jams
  const [pageNumber, setPageNumber] = useState(0);

  const handleNextPage = () => {
    if (jamData.length < 4) {
      alert("No more jams");
      return;
    }
    // console.log("Page number is ", pageNumber, "currently. about to Increase by 4")
    setPageNumber(pageNumber + 4);
  };

  const handlePreviousPage = () => {
    if (pageNumber === 0) {
      alert("No previous jams");
      return;
    }
    // console.log("Page number is ", pageNumber, "currently. about to Increase by 4")
    setPageNumber(pageNumber - 4);
  };

  useEffect(() => {
    // console.log("page increase")

    // if display favorites is true adjust a new state for
    // Favorites Page number and implementpagination
    jamCalls.getAllJams(pageNumber).then((data) => {
      setJams(data.allJams);
    });
  }, [pageNumber]);

  return (
    <div>
      {/* APP BAR AND BUTTONS BELOW  */}
      <PrimarySearchAppBar
        handleJamSearch={handleJamSearch}
      ></PrimarySearchAppBar>
      <SideMenu
        displayFavorites={displayFavorites}
        handlePreviousPage={handlePreviousPage}
        handleNextPage={handleNextPage}
        handleShowFavorites={handleShowFavorites}
        togglePostModal={togglePostModal}
        handlePost={handlePost}
      />
      {/* ------------------------------------------------------------ */}
      <InfoHeader
        pageNumber={pageNumber}
        displayFavoritesStatus={displayFavorites}
      />
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
        <Fade in={open}>{body}</Fade>
      </Modal>
      {/* LEARN MORE MODAL */}

      {/* CONTAINER OF AVALIABLE JAMS */}

      <JamContainer
        handleLearnMore={handleLearnMore}
        handleDeleteJam={handleDeleteJam}
        loggedInUserId={loggedInUserId}
        displayFavorites={displayFavorites}
        userFavoriteJams={userFavoriteJams}
        postFavoriteJam={postFavoriteJam}
        jamData={jamData}
        filteredJams={filteredJams}
      />
    </div>
  );
};

export default Dashboard;
