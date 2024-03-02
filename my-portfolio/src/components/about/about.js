import classes from "./about.module.css"
import cmp from "../../img/abme.avif"
const About=()=>{
    return(
        <div className={classes.a}>
           <div className={classes.aleft}>
                <div className={classes.acard}>
                    <img src={cmp} alt="" className={classes.aimg}>

                    </img>
                </div>
            </div>
           
           <div className={classes.aright}>
            <div className={classes.aabout}>
            <h1 className={classes.atitle}>About Me</h1>
            <h2 className={classes.asubtitle}>Hi.I'm Aman,nice to meet you.Please take a look around.</h2>
            <p className={classes.adesc}>
                I'm passionate about developing exxellent softwares that improves the lives of those around me.I have specialization in building creative websites and softwares.
                I am working on a website associated with health of people.This website will provide  useful and neccessary medicines at minimum cost.People can also consult with reputed doctors.
                My further projects are based on Artificial Intellegince and Machine Learning.
            </p>
            </div>
           </div>
        </div>
    )
}
export default About;