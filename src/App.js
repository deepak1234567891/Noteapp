
// import React, { useState, useEffect } from "react";
// import Header from "./Header";
// import Footer from "./Footer";
// import CreateNote from "./CreateNote";
// import Note from "./Note";

// const App = () => {
//   const [addItem, setAddItem] = useState([]);

//   const addNote = (note) => {
//     setAddItem((prevData) => {
//       return [...prevData, note];
//     });
//   };

//   const onDelete = (id) => {
//     setAddItem((olddata) =>
//       olddata.filter((currdata, indx) => {
//         return indx !== id;
//       })
//     );
//   };

//  // Load notes from Local Storage when the component mounts
//  useEffect(() => {
//     const storedNotes = localStorage.getItem("notes");
//     if (storedNotes) {
//       setAddItem(JSON.parse(storedNotes));
//     }
//   }, []);

//   // Save notes to Local Storage whenever addItem changes
//   useEffect(() => {
//     localStorage.setItem("notes", JSON.stringify(addItem));
//   }, [addItem]);

//   return (
//     <>
//       <Header />
//       <CreateNote passNote={addNote} />

//       {addItem.map((val, indx) => {
//         return (
//           <Note
//             key={indx}
//             id={indx} // Pass the index as the id
//             title={val.title}
//             content={val.content}
//             deleteItem={onDelete} // Pass onDelete as the deleteItem prop
//           />
//         );
//       })}
//       <Footer />
//     </>
//   );
// };

// export default App;


import React, { useState, useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import CreateNote from "./CreateNote";
import Note from "./Note";

const App = () => {
  const [addItem, setAddItem] = useState([]);

  // Load notes from Local Storage when the component mounts
  useEffect(() => {
    const storedNotes = localStorage.getItem("notes");
    if (storedNotes) {
      setAddItem(JSON.parse(storedNotes));
    }
  }, []);

  // Save notes to Local Storage whenever addItem changes
  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(addItem));
  }, [addItem]);

  const addNote = (note) => {
    setAddItem((prevData) => {
      return [...prevData, note];
    });
  };

  const onDelete = (id) => {
    setAddItem((olddata) =>
      olddata.filter((currdata, indx) => {
        return indx !== id;
      })
    );
  };

  return (
    <>
      <Header />
      <CreateNote passNote={addNote} />

      {addItem.map((val, indx) => {
        return (
          <Note
            key={indx}
            id={indx}
            title={val.title}
            content={val.content}
            deleteItem={onDelete}
          />
        );
      })}
      <Footer />
    </>
  );
};

export default App;
