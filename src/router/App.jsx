import  React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actionCreators from '../redux/actions/actionCreators';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    componentWillMount() {
        const pageId = this.props.match.params.id;
        this.props.getPageInfo(pageId);
    }
    render() { 
        const {id, name} = this.props.pageInfo;
        return ( 
            <div>
                {console.log(id, name)}
                App
            </div>
         );
    }
}
 

function mapStateToProps(state) {
    return {...state};
}

function mapDispatchToProps(dispatch) {
    return {
        getPageInfo: (id) => {
            dispatch(actionCreators.getPageInfo(id));
        },
        setPageInfo: (action) => {
            dispatch(actionCreators.setPageInfo(action));
        }
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);


