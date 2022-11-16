import {Component} from "react";
import {styleSheet} from "./styles"
import {withStyles} from "@mui/styles";
import {Button, Card, CardActions, CardContent, Typography} from "@mui/material";
import ButtonBase from '@mui/material/ButtonBase';
import {styled} from '@mui/material/styles';
import image1 from "../../../assets/images/supermarker1.jpg"
import {Link} from "react-router-dom";


class Greeting extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        let {classes} = this.props;
        return (<div className={classes.container}>
                <div className={classes.title__container}>
                    <div className={classes.title__container_characters}>
                        <Typography variant="h3" gutterBottom>
                            Dashboard
                        </Typography>
                    </div>
                    <div className={classes.title__container_characters}>


                        <Button href="Customer" style={{ marginRight: "15%",color: "black", fontSize: "1.5em"}}>Customer</Button>

                        <Button href="" style={{ color: "black", fontSize: "1.5em"}}>Item</Button>


                    </div>

                </div>

                <div className={classes.contentBody}>
                    <Card className={classes.card}>
                        <CardContent className={classes.content__card1}>
                            <img src={image1} alt="home_image" className={classes.card_image}/>
                        </CardContent>
                    </Card>
                </div>
            </div>);
    }
}

export default withStyles(styleSheet)(Greeting);