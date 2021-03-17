import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import FAQ from "./FAQ";
import FAQData from "../../assets/FAQ/FAQuestions";
const useStyles = makeStyles((theme) => ({
  link: {
    margin: "10% 0 10% 0",
    borderRadius: "5px",
  },

  h1: {
    textAlign: "center",
    fontSize: "4em",
    margin: "10% 0 0 0",
  },
  button: {
    width: "100%",
    margin: "5%",
  },
  outerDiv: {
    marginLeft: "25%",
    width: "50%",
    alignContent: "center",
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center",
    display: "flex",
  },
  FAQ: {
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "column",
  },
  topContent: {
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-start",
    flexDirection: "row",
  },
}));

export default function About(props) {
  const classes = useStyles();

  return (
    <div className={classes.outerDiv}>
      <div className={classes.topContent}>
        <h1 className={classes.h1}> FAQ</h1>
        <Link className={classes.link} to="/dashboard">
          <Button variant="contained" className={classes.button}>
            {" "}
            Back
          </Button>
        </Link>
      </div>

      <div className={classes.FAQ}>
        {FAQData.map((data, i) => {
          return (
            <FAQ key={i} question={data.question} answers={data.answers} />
          );
        })}
      </div>
    </div>
  );
}
