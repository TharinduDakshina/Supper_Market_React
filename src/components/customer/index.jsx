import {Component} from "react";
import {withStyles} from "@mui/styles";
import {styleSheet} from "./styles"
import {Autocomplete, Button, TextField} from "@mui/material";
import SaveIcon from '@mui/icons-material/Save';
import CleaningServicesIcon from '@mui/icons-material/CleaningServices';

class Customer extends Component{

    constructor(props) {
        super(props);
    }

    render() {
        let {classes}=this.props;
        return(
            <div className={classes.container}>
                {/*form*/}
                <div className={classes.form__container}>
                    <div className={classes.form__container__childrens}>
                        <TextField
                            id="outlined-required"
                            label="Username"
                            style={{margin:"10px",display:"-webkit-flex",justifyContent:"center"}}
                        />

                        <TextField
                            id="outlined-required"
                            label="NIC number"
                            style={{margin:"10px"}}
                        />
                    </div>
                    <div className={classes.form__container__children}>
                        <Autocomplete
                            disablePortal
                            id="combo-box-demo"
                            options={values}
                            sx={{ width: 240,margin:"10px 0 10px 202px" }}
                            renderInput={(params) => <TextField {...params} label="Movie" />}
                        />

                        <TextField
                            id="outlined-required"
                            label="Email"
                            sx={{ margin:"10px 0 10px 202px" }}
                        />

                    </div>
                </div>

                {/*button*/}
                <div className={classes.button__container}>
                    <Button href="" style={{ color: "black", fontSize: "1em"}} size="small" variant="contained" endIcon={<SaveIcon />}>Save</Button>
                    <Button href="" style={{ marginRight:"5px",color: "black", fontSize: "1em"}} size="small" color="warning" variant="contained" endIcon={<CleaningServicesIcon />}>Clear</Button>
                </div>

                {/*table*/}
                <div></div>
            </div>
        );
    }
}

const values = [
    { label: 'Male' },
    { label: 'Female' }
]

export default withStyles(styleSheet)(Customer);