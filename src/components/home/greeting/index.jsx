import {Component} from "react";
import {styleSheet} from "./styles"
import {withStyles} from "@mui/styles";
import {Button, Typography} from "@mui/material";


class Greeting extends Component{

    constructor(props) {
        super(props);
    }

    render() {
        let {classes}=this.props;
        return(
            <div className={classes.container}>
                <div className={classes.title__container}>
                    <div className={classes.title__container_characters}>
                        <Typography variant="h3" gutterBottom>
                            Dashboard
                        </Typography>
                    </div>
                    <div className={classes.title__container_characters}>
                        <Button variant="text" style={{marginRight:"15%",color:"black",fontSize:"1.5em"}}>Customer</Button>

                        <Button variant="text" style={{color:"black",fontSize:"1.5em"}}>Item</Button>

                    </div>

                </div>

                <div className={classes.contentBody}>

                </div>
            </div>
        );
    }
}

export default withStyles(styleSheet)(Greeting);