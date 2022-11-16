import {Component} from "react";
import {withStyles} from "@mui/styles";
import {styleSheet} from "./styles"
import {
    Autocomplete,
    Button, Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    TextField
} from "@mui/material";
import SaveIcon from '@mui/icons-material/Save';
import CleaningServicesIcon from '@mui/icons-material/CleaningServices';

class Customer extends Component{

    constructor(props) {
        super(props);
        this.state={

        }
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
                <div className={classes.table_container}>
                    <TableContainer component={Paper}>
                        <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
                            <TableHead>
                                <TableRow>
                                    <TableCell>Dessert (100g serving)</TableCell>
                                    <TableCell align="right">Calories</TableCell>
                                    <TableCell align="right">Fat&nbsp;(g)</TableCell>
                                    <TableCell align="right">Carbs&nbsp;(g)</TableCell>
                                    <TableCell align="right">Protein&nbsp;(g)</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {rows.map((row) => (
                                    <TableRow
                                        key={row.name}
                                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                    >
                                        <TableCell component="th" scope="row">
                                            {row.name}
                                        </TableCell>
                                        <TableCell align="right">{row.calories}</TableCell>
                                        <TableCell align="right">{row.fat}</TableCell>
                                        <TableCell align="right">{row.carbs}</TableCell>
                                        <TableCell align="right">{row.protein}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </div>
            </div>
        );
    }
}

function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
}

const rows = [
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    createData('Eclair', 262, 16.0, 24, 6.0),
    createData('Cupcake', 305, 3.7, 67, 4.3),
    createData('Gingerbread', 356, 16.0, 49, 3.9),
];

const values = [
    { label: 'Male' },
    { label: 'Female' }
]

export default withStyles(styleSheet)(Customer);