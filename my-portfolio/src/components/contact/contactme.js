import classes from "./contactme.module.css";
import contact from "../../img/contact.avif";
const ContactMe = () => {
  return (
    <>
      <div className={classes.c}>
        <div className={classes.cleft}>
          <div className={classes.title}>
            {" "}
            <h1 className={classes.contact}>Contact Me</h1>
          </div>
          <div className={classes.container}>
            <form className={classes.fm}>
              <input type="text" name="username" placeholder="Name"></input>
              <input type="text" placeholder="Email"></input>
              <input type="number" placeholder="Contact No.">
                </input>
                <button type="submit" >Submit</button>
            </form>
          </div>
        </div>
        <div className={classes.cright}>
          
          <div className={classes.cbg}>
            <img src={contact} alt="" className={classes.cimg}></img>
          </div>
          <h2 className={classes.csub}>
            Let's build something great together.
          </h2>
          <p className={classes.cdesc}>
            Hey,I'm here to help in developing great websites.
          </p>{" "}
        </div>
      </div>
    </>
  );
};
export default ContactMe;
