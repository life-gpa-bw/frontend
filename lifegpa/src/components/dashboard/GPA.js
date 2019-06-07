import React from 'react';
import { connect } from "react-redux";
import { circleCreator, calculateGPA } from '../../actions/index';

class GPA extends React.Component {
    componentDidMount() {
        this.props.circleCreator();
    } 
    render(){
    return (
        <div className="GPA">
           {this.props.circleCreator(this.props.gpa, '#ffec26', 'lifeGPA')}
        </div>
    )}
};


const mapStateToProps = state => ({
    GPA: state.dashboardReducer.GPA
});

export default connect(
    mapStateToProps,
    { circleCreator, calculateGPA }
)(GPA);