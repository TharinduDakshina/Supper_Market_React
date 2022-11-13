import {Component, Fragment} from "react";
import Greeting from "../../components/home/greeting";

class HomePage extends Component{


    constructor(props) {
        super(props);
    }



    render() {
        return(
            <div>
                <Fragment>
                    <Greeting/>
                </Fragment>
            </div>
        );
    }
}
export default HomePage;