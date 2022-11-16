import {Component, Fragment} from "react";
import Customer from "../../components/customer/index";

class CustomerPage extends Component {


    constructor(props) {
        super(props);
    }

    render() {
        return (<div>
                <Fragment>
                    <Customer/>
                </Fragment>
            </div>);
    }
}

export default CustomerPage;