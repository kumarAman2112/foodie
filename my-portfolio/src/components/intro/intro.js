import classes from "./intro.module.css";
import p from "../../img/p2.jpg"
const Intro = () => {
  return (
    <div className={classes.i}>
      <div className={classes.ileft}>
        <div className={classes.ileftwrapper}>
          <h2 className={classes.iintro}>Hello,My name is</h2>
          <h1 className={classes.iname}>Aman Kumar</h1>
          <div className={classes.ititle}>
            <div className={classes.ititlewrapper}>
              <div className={classes.ititleitem}>Web Developer</div>
              <div className={classes.ititleitem}>AI Engineer</div>
              <div className={classes.ititleitem}>Software Devepoler</div>
              <div className={classes.ititleitem}>Cyber Engineer</div>
            </div>
          </div>
          <p className={classes.idesc}>
            I am a React Developer having experience in the field of cyber
            security,software and web services.
            I am developing a website associated to health issues 
          </p>
        </div>
      </div>
      <div className={classes.iright}>
      <div className={classes.ibg}> <img src={p} alt="" className={classes.iimg}></img></div>
    
      </div>
    </div>
  );
};
export default Intro;
