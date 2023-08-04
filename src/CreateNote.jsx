import React, { useState } from "react";
// import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import IconButton from '@mui/material/IconButton';

const CreateNote = (props) => {
  const [expand, setExpand] = useState(false);


  const [note, setNote] = useState({
    title:"",
    content:"",
  });

  const InputEvent = (event) => {
    // const value = event.target.value;
    // const name = event.target.name;
    const {name, value} = event.target;
    setNote((prevData) =>{
      return{
        ...prevData,
        [name]: value,
      };

    });
    console.log(note);
  };

  const addEvent = () => {
    props.passNote(note);
    setNote({
      title: "",
      content:"",
    });
  };
  
  const expandIt = () =>{
    setExpand(true);
  }

  const btoNormal = () =>{
    setExpand(false);
  }

    return(
        <>
          
                <form>
                
                <div className="card-body  border-0  card text-dark bg-light "style={{justifycontent:"center",alignItems:"center"}} onDoubleClick={btoNormal} >

                 <div class="card-header">
                  {expand? (<input type="text" name="title" value={note.title} onChange={InputEvent}  placeholder="Title" autoComplete="off" style={{color:"red"}} className="p-2 m-1 border-0 "/>):null}
                 </div>

                    <textarea rows="" column="" name="content" value={note.content} onChange={InputEvent} placeholder="Write a note" onClick={expandIt} style={{color:"blue"}} autoComplete="off" className="border-0 p-3"/>
                  
                  <div className="position-absolute top-100 end-0 translate-middle-y"style={{width:"42%"}}>
                    { expand? <IconButton aria-label="add" size="large" onClick={addEvent}  style={{color:"green"}}>
                        <AddIcon fontSize="inherit"/>
                     </IconButton> : null }
                    </div>
                  </div>
                </form>
        </>
    )
}
export default CreateNote;