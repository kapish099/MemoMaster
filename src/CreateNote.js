import React, { useState } from "react";
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';

const CreateNote = (props) =>{
    const [expand,setExpand]=useState(false);
    const[note,setNote]=useState({
        title: "",
        content: "",
    });


    const InputEvent=(event)=>{
        const {name,value} = event.target;

        setNote((prevData)=>{
            return {
                ...prevData,
                [name]:value,
            };
        });
    };

    const addEve=()=>{
        props.passNote(note);
        setNote({
            title: "",
            content: "",
        });
    };

    const expandIt=()=>{
        setExpand(true);
    };

    const shrinkIt=()=>{
        setExpand(false);
    }
    return(
        <>
            <div className="main_note" onDoubleClick={shrinkIt}>
                <form>
                {expand?
                    <input 
                    type='text' 
                    name="title" 
                    value={note.title} 
                    onChange={InputEvent} 
                    placeholder="Title"
                    autoComplete="off"
                    /> : null}
                    <textarea 
                    rows='' 
                    column='' 
                    name="content" 
                    value={note.content} 
                    onChange={InputEvent} 
                    placeholder="Write a note..."
                    onClick={expandIt}>    
                    </textarea>
                    {expand?
                    <Button onClick={addEve}>
                        <AddIcon className="plus_sign"/>
                    </Button> : null}
                </form>
            </div>
        </>
    );
};

export default CreateNote;