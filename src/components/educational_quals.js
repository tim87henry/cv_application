import React from 'react';

class AddDegree extends React.Component {

    displayForm() {
        let testing=<p>
        Degree
        <input type="input"></input><br/><br/>
        University/School
        <input type="input"></input><br/><br/>
        Year Started
        <input type="input"></input><br/><br/>
        Year Completed
        <input type="input"></input><br/><br/>
    </p>
        return testing
    }

    render() {
        return(
            <div>
                <input type="button" value="Add" onClick={this.displayForm}></input><br/><br/>
            </div>
        );
    }
}

class EducationalQual extends React.Component {

    render() {
        let educational_quals=[];
        // if(this.props.editMode===true) {
        //     educational_quals=<p>
        //     Degree
        //     <input type="input"></input><br/><br/>
        //     University/School
        //     <input type="input"></input><br/><br/>
        //     Year Started
        //     <input type="input"></input><br/><br/>
        //     Year Completed
        //     <input type="input"></input><br/><br/>
        //     <input type="button" value="Add"></input><br/><br/>
        // </p>
        // } else {
        //     educational_quals=<p>
        //         Degree {this.props.degree}<br/>
        //         University/School {this.props.uni}<br/>
        //         Year Started {this.props.start}<br/>
        //         Year Completed {this.props.end}
        //     </p>
        // }
        return(
            <div>
                <h3>Educational Qualifications</h3>
                {educational_quals}
                <AddDegree/>
            </div>
        );
    }
} 

export default EducationalQual;