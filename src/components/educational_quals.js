import React, {useState} from 'react';
import '../css/formStyles.css'
import '../css/personalStyles.css'

const AddDegree = (props) => {

    const [showNewForm, setShowNewForm] = useState(false);
    const [new_degree, setNew_degree] = useState('');
    const [new_uni, setNew_uni] = useState('');
    const [new_desc, setNew_desc] = useState('');
    const [new_start, setNew_start] = useState('');
    const [new_end, setNew_end] = useState('');
    const [ongoing, setOngoing] = useState(false);
    const [deleted, setDeleted] = useState(false);
    const [editing, setEditing] = useState(false);

    const DisplayForm = () => {
        let currentNewForm;
        currentNewForm = showNewForm? false: true;
        setShowNewForm(currentNewForm);
        setNew_degree('');
        setNew_uni('');
        setNew_desc('');
        setNew_start('');
        setNew_end('');
        setOngoing(false);
        setDeleted(false);
        setEditing(false);
    }

    const submitForm = () => {
        let values={
            degree: new_degree,
            uni: new_uni,
            desc: new_desc,
            start: new_start,
            end: new_end,
            ongoing: ongoing,
            deleted: deleted,
            editing: editing
        }
        props.onAdd(values)
        DisplayForm()
    }

    const onType = (target,value) => {
        let setOfVariables = {
            "new_degree": setNew_degree,
            "new_uni": setNew_uni,
            "new_desc": setNew_desc,
            "new_start": setNew_start,
            "new_end": setNew_end
        }
        setOfVariables[target](value);
    }

    const handleInput = (e) => {
        onType(e.target.name,e.target.value)
    }

    const handleOngoing = (e) => {
        let new_ongoing;
        new_ongoing = ongoing? false : true;
        setNew_end("Ongoing");
        setOngoing(new_ongoing);
    }

    return(
        <div className="addEducation">
            <input type="button" value="Add" onClick={DisplayForm} className="formButton"></input><br/><br/>
            {
                showNewForm ?
                <div className="addEditForm">
                    <span>
                        <label>Degree</label>
                        <input type="input" onChange={handleInput} name="new_degree" value={new_degree}></input>
                    </span>
                    <span>
                        <label>University/School</label>
                        <input type="input" onChange={handleInput} name="new_uni" value={new_uni}></input>
                    </span>
                    <span>
                        <label>Description</label>
                        <textarea onChange={handleInput} name="new_desc" value={new_desc}></textarea>
                    </span>
                    <span>
                        <label>Started</label>
                        <input type="date" onChange={handleInput} name="new_start" value={new_start}></input>
                    </span>
                    <span>
                        <label>Completed</label>
                        <input type="date" onChange={handleInput} name="new_end" value={new_end} disabled={ongoing}></input> &nbsp;&nbsp;
                        <input type="checkbox" onChange={handleOngoing} name="ongoing" value={ongoing}></input>Ongoing<br/><br/>
                    </span>
                    <span>
                        <input type="button" value="Submit" onClick={submitForm} className="formButton"></input>&nbsp;&nbsp;&nbsp;&nbsp;
                        <input type="button" value="Cancel" onClick={DisplayForm} className="formButton"></input>
                    </span>
                </div>
                : null
            }
        </div>
    );
}

const EditDegree = (props) => {

    const [new_degree, setNew_degree] = useState(props.degree);
    const [new_uni, setNew_uni] = useState(props.uni);
    const [new_desc, setNew_desc] = useState(props.desc);
    const [new_start, setNew_start] = useState(props.start);
    const [new_end, setNew_end] = useState(props.end);
    const [new_ongoing, setNew_ongoing] = useState(props.ongoing);

    const handleInput = (e) => {
        let setOfVariables = {
            "new_degree": setNew_degree,
            "new_uni": setNew_uni,
            "new_desc": setNew_desc,
            "new_start": setNew_start,
            "new_end": setNew_end
        }
        setOfVariables[e.target.name](e.target.value);
    }

    const handleUpdate = () => {
        let values = {
            degree: new_degree,
            uni: new_uni,
            desc: new_desc,
            start: new_start,
            end: new_end,
            ongoing: new_ongoing
        };
        props.onUpdate(props.index,values)
    }

    const handleOngoing = (e) => {
        let new_ongoing;
        new_ongoing = new_ongoing? false : true;
        setNew_end("Ongoing");
        setNew_ongoing(new_ongoing);
    }

    let check_box;
    if(new_end === "Ongoing") {
        check_box = <div><input type="checkbox" onChange={handleOngoing} name="ongoing" value={props.ongoing} checked></input>Ongoing<br/><br/></div>
    } else {
        check_box = <div><input type="checkbox" onChange={handleOngoing} name="ongoing" value={props.ongoing}></input>Ongoing<br/><br/></div>
    }
    return(
        <div className="addEditForm">
            <span>
                <label>Degree</label>
                <input type="input" onChange={handleInput} name="new_degree" value={new_degree}></input>
            </span>
            <span>
                <label>University/School</label>
                <input type="input" onChange={handleInput} name="new_uni" value={new_uni}></input>
            </span>
            <span>
                <label>Description</label>
                <textarea onChange={handleInput} name="new_desc" value={new_desc}></textarea>
            </span>
            <span>
                <label>Started</label>
                <input type="date" onChange={handleInput} name="new_start" value={new_start}></input>
            </span>
            <span>
                <label>Completed</label>
                <input type="date" onChange={handleInput} name="new_end" value={new_end} disabled={props.ongoing}></input>
                { check_box }
            </span>
            <span>
                <input type="button" value="Submit" onClick={handleUpdate} className="formButton"></input>&nbsp;&nbsp;&nbsp;&nbsp;
                <input type="button" value="Cancel" onClick={() => props.onEdit(props.index)} className="formButton"></input><br/><br/>
            </span>
        </div>
    );
}

const EducationalQual = (props) => {

    let educational_quals=[];
    for (let i=0;i<props.education.length;i++) {
        if (!props.education[i].deleted) {
            if (props.education[i].editing) {
                console.log("ACTUALLYYYYYY")
                educational_quals.push(<p>
                    <EditDegree
                    degree={props.education[i].degree}
                    uni={props.education[i].uni}
                    desc={props.education[i].desc}
                    start={props.education[i].start}
                    end={props.education[i].end}
                    index={i}
                    onEdit={props.onEdit}
                    onUpdate={props.onUpdate}
                    />
                </p>)
            } else {
                educational_quals.push(
                    <div className="infoSection">
                        <table>
                            <tr>
                                <th>{props.education[i].start} - {(props.education[i].ongoing)? "Ongoing": props.education[i].end}</th>
                                <td className="infoDetails">
                                    <div><b>{props.education[i].degree}</b></div>
                                    <div><b>{props.education[i].uni}</b></div>
                                    <div className="infoDescr">{props.education[i].desc}</div>
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
                    </div>
                    )
            }
        }
    }
    return(
        <div className="section">
            <div className="sectionTitle">Educational Qualifications</div>
            {educational_quals}
            {
                props.editMode ? (
                    <AddDegree
                    education={props.education}
                    onAdd={props.onAdd}
                    />
                ): null
            }
        </div>
    );
} 

export default EducationalQual;