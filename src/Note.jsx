import React from "react";
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import IconButton from '@mui/material/IconButton';

const Note = (props) => {
  const deleteNote = () => {
    props.deleteItem(props.id);
  };

  return (
    <>
      <div className="d-inline-flex m-3 border border-danger bg-light shadow p-3 mb-5 bg-body rounded">
        {/* <div className="main_note"> */}
        <div className="d-inline">
          <h4 style={{ color: "red" }}>{props.title}</h4>
          <p style={{ color: "blue" }}>{props.content}</p>
        </div>

        <div className="position-absolute-fixed bottom-0 end-0">
          <IconButton
            aria-label="add"
            size="large"
            onClick={deleteNote}
            style={{ color: "brown" }}
          >
            <DeleteOutlineIcon className="deleteIcon" />
          </IconButton>
        </div>
      </div>

      {/* </div> */}
    </>
  );
};

export default Note;

