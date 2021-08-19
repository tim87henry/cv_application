import React, {useState} from 'react';
import '../css/personalStyles.css'

const AddWork = (props) => {

    const [showNewForm, setShowNewForm] = useState(false);
    const [new_designation, setNew_designation] = useState('');
    const [new_company, setNew_company] = useState('');
    const [new_rnr, setNew_rnr] = useState('');
    const [new_from, setNew_from] = useState('');
    const [new_to, setNew_to] = useState('');
    const [ongoing, setOngoing] = useState(false);
    const [deleted, setDeleted] = useState(false);
    const [editing, setEditing] = useState(false);

    const displayForm = () => {
        let currentNewForm;
        currentNewForm = showNewForm? false: true;
        setShowNewForm(currentNewForm);
        setNew_designation('');
        setNew_company('');
        setNew_rnr('');
        setNew_from('');
        setNew_to('');
        setOngoing(false);
        setDeleted(false);
        setEditing(false);
    }

    const submitForm = () => {
        let values={
            designation: new_designation,
            company: new_company,
            rnr: new_rnr,
            from: new_from,
            to: new_to,
            ongoing: ongoing,
            deleted: deleted,
            editing: editing
        }
        props.onAdd(values)
        displayForm()
    }

    const onType = (target,value) => {
        let setOfVariables = {
            "new_designation": setNew_designation,
            "new_company": setNew_company,
            "new_rnr": setNew_rnr,
            "new_from": setNew_from,
            "new_to": setNew_to
        }
        setOfVariables[target](value);
    }

    const handleInput = (e) => {
        onType(e.target.name,e.target.value)
    }

    const handleOngoing = (e) => {
        let new_ongoing;
        new_ongoing = ongoing? false : true;
        setNew_to("Ongoing");
        setOngoing(new_ongoing);
    }

    return(
        <div>
            <input type="button" value="Add" onClick={displayForm} className="formButton"></input><br/><br/>
            {
                showNewForm ?
                <div className="addEditForm">
                    <span>
                        <label>Designation</label>
                        <input type="input" onChange={handleInput} name="new_designation" value={new_designation}></input>
                    </span>
                    <span>
                        <label>Company</label>
                        <input type="input" onChange={handleInput} name="new_company" value={new_company}></input>
                    </span>
                    <span>
                        <label>Roles and Responsibilites</label>
                        <textarea onChange={handleInput} name="new_rnr" value={new_rnr}></textarea>
                    </span>
                    <span>
                        <label>From</label>
                        <input type="date" onChange={handleInput} name="new_from" value={new_from}></input>
                    </span>
                    <span>
                    <label>To</label>
                    <input type="date" onChange={handleInput} name="new_to" value={new_to} disabled={ongoing}></input>&nbsp;&nbsp;
                    <input type="checkbox" onChange={handleOngoing} name="ongoing" value={ongoing}></input>Ongoing
                    </span>
                    <span>
                    <input type="button" value="Submit" onClick={submitForm} className="formButton"></input>&nbsp;&nbsp;&nbsp;&nbsp;
                    <input type="button" value="Cancel" onClick={displayForm} className="formButton"></input><br/><br/>
                    </span>
                </div>
                : null
            }
        </div>
    );
}

const EditWork = (props) => {

    const [new_designation, setNew_designation] = useState(props.designation);
    const [new_company, setNew_company] = useState(props.company);
    const [new_rnr, setNew_rnr] = useState(props.rnr);
    const [new_from, setNew_from] = useState(props.from);
    const [new_to, setNew_to] = useState(props.to);
    const [new_ongoing, setNew_ongoing] = useState(props.ongoing);

    const handleInput = (e) => {
        let setOfVariables = {
            "new_designation": setNew_designation,
            "new_company": setNew_company,
            "new_rnr": setNew_rnr,
            "new_from": setNew_from,
            "new_to": setNew_to
        }
        setOfVariables[e.target.name](e.target.value);
    }

    const handleUpdate = () => {
        let values = {
            designation: new_designation,
            company: new_company,
            rnr: new_rnr,
            from: new_from,
            to: new_to,
            ongoing: new_ongoing
        };
        props.onUpdate(props.index,values)
    }

    const handleOngoing = (e) => {
        let new_ongoing;
        new_ongoing = new_ongoing? false : true;
        setNew_to("Ongoing");
        setNew_ongoing(new_ongoing);
    }

    let check_box;
    if(new_to === "Ongoing") {
        check_box = <span><input type="checkbox" onChange={handleOngoing} name="ongoing" value={props.ongoing} checked></input>Ongoing</span>
    } else {
        check_box = <span><input type="checkbox" onChange={handleOngoing} name="ongoing" value={props.ongoing}></input>Ongoing</span>
    }
    return(
        <div className="addEditForm">
            <span>
                <label>Designation</label>
                <input type="input" onChange={handleInput} name="new_designation" value={new_designation}></input>
            </span>
            <span>
                <label>Company</label>
                <input type="input" onChange={handleInput} name="new_company" value={new_company}></input>
            </span>
            <span>
                <label>Roles and Responsibilites</label>
                <textarea onChange={handleInput} name="new_rnr" value={new_rnr}></textarea>
            </span>
            <span>
                <label>Year Started</label>
                <input type="date" onChange={handleInput} name="new_from" value={new_from}></input>
            </span>
            <span>
                <label>Year Completed</label>
                <input type="date" onChange={handleInput} name="new_to" value={new_to} disabled={props.ongoing}></input>&nbsp;&nbsp;
                { check_box }
            </span>
            <span>
                <input type="button" value="Submit" onClick={handleUpdate} className="formButton"></input>&nbsp;&nbsp;&nbsp;&nbsp;
                <input type="button" value="Cancel" onClick={() => props.onEdit(props.index)} className="formButton"></input><br/><br/>
            </span>
        </div>
    );

}

const WorkExperience = (props) => {

    let work_exp=[];
            for (let i=0;i<props.work.length;i++) {
                if (!props.work[i].deleted) {
                    if (props.work[i].editing) {
                        work_exp.push(<p>
                            <EditWork
                            designation={props.work[i].designation}
                            company={props.work[i].company}
                            rnr={props.work[i].rnr}
                            from={props.work[i].from}
                            to={props.work[i].to}
                            index={i}
                            onEdit={props.onEdit}
                            onUpdate={props.onUpdate}
                            />
                        </p>)
                    } else {
                        work_exp.push(
                            <div className="infoSection">
                                <table>
                                    <tr>
                                        <th>{props.work[i].from} - {(props.work[i].ongoing)? "Ongoing": props.work[i].to}</th>
                                        <td className="infoDetails">
                                            <div><b>{props.work[i].designation}</b></div>
                                            <div><b>{props.work[i].company}</b></div>
                                            <div className="infoDescr">{props.work[i].rnr}</div>
                                        </td>
                                    </tr>
                                </table>
                                {
                                    props.editMode ? (
                                        <span>
                                            <input type="button" value="Edit" onClick={() => props.onEdit(i)} className="formButton"></input>&nbsp;&nbsp;&nbsp;
                                            <input type="button" value="Del" onClick={() => props.onDelete(i)} className="formButton"></input><br/><br/>
                                        </span>
                                    ): null
                                }
                                
                            </div>)
                    }
                }
            }
    return(
        <div className="section">
            <div className="sectionTitle">Work Experience</div>
            {work_exp}
            {
                props.editMode ? (
                    <AddWork
                    work={props.work}
                    onAdd={props.onAdd}
                    />
                ): null
            }
        </div>
    );
} 

export default WorkExperience;
