// import React from 'react';
// import { useState } from 'react';

// function Calculator() {
//   const buttonStyle = {
//     display: 'inline-block',
//     width: '50px',
//     height: '50px',
//     lineHeight: '50px',
//     textAlign: 'center',
//     border: '1px solid black',
//     margin: '10px'
//   };
//   const [result,setResult]=useState(0);
//   const [roi,setRoi]=useState([]);
//   const 
//   const Rohitcalculation=()=>{

//   }

//   }
//   return (
//     <div className="container">
//       <div className="row">
//         <div className="col-sm-12">
//           <div style={{ marginTop: '10px' }}>
//             <span style={buttonStyle}>1</span>
//             <span style={buttonStyle}>2</span>
//             <span style={buttonStyle}>3</span>
//             <span style={buttonStyle}>4</span>
//             <span style={buttonStyle}>5</span>
//           </div>
//           <div style={{ marginTop: '10px' }}>
//             <span style={buttonStyle}>6</span>
//             <span style={buttonStyle}>7</span>
//             <span style={buttonStyle}>8</span>
//             <span style={buttonStyle}>9</span>
//             <span style={buttonStyle}>0</span>
//           </div>
//           <div style={{ marginTop: '10px' }}>
//             <span style={buttonStyle}>+</span>
//             <span style={buttonStyle}>-</span>
//             <span style={buttonStyle}>*</span>
//             <span style={buttonStyle}>%</span>
//             <span style={buttonStyle}>clr</span>
//           </div>
//         </div>
//       </div>
//       <div>
//         Result:{result}<br></br>
        
//       </div>
//     </div>
//   );
// }

// export default Calculator;
// import {useState} from 'react';
// function Calculator(){
//   const [roi,setRoi]=useState(0);
//   const [cal,setCal]=useState(0);

//   const Rohit=()=>{
//     setCal(eval(roi));
//     console.log(cal);
   
//   }
//   return(
//     <div>
//       <input type="text" value={roi} onChange={(e)=>setRoi(e.target.value)}/>
//       <button onClick={Rohit}>Submit</button>
//     </div>

//   )
// }
// export default Calculator;





// import React, { useRef } from 'react';

// function Calculator() {
//   const fileInputRef = useRef(null);

//   const handleButtonClick = () => {
//     fileInputRef.current.click();
//   };

//   const handleFileChange = (event) => {
//     const file = event.target.files[0];
//     if (file) {
//       const reader = new FileReader();
//       reader.onload = (e) => {
//         console.log('File content:', e.target.result); // You can process the file content here
//       };
//       reader.readAsText(file); // or reader.readAsDataURL(file) for images, reader.readAsArrayBuffer(file) for binary files
//     }
//   };

//   return (
//     <div>
//       <h1>Import File</h1>
//       <button onClick={handleButtonClick}>Import File</button>
//       <input
//         type="file"
//         ref={fileInputRef}
//         style={{ display: 'filename' }}
//         onChange={handleFileChange}
//       />
//     </div>
//   );
// }




import React, { useRef, useState } from 'react';

function Calculator() {
  const [fileName, setFileName] = useState(null);
  const fileInputRef = useRef(null);

  const handleButtonClick = () => {
    fileInputRef.current.click();
  };
  // const handleFileChange=(event)=>{
  //   const file=event.target.file[0];
  // }
  // if(file){
  //   setFileName(file.name);

  // }
  // const reader=newFileReader();
  // reader.onload=(e)=>{
  //   console.log(e.target.result);
  // };
  // reader.readAsText(file);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setFileName(file.name); // Update the state with the selected file name

      const reader = new FileReader();
      reader.onload = (e) => {
        console.log('File content:', e.target.result); // You can process the file content here
      };
      reader.readAsText(file); // or reader.readAsDataURL(file) for images, reader.readAsArrayBuffer(file) for binary files
    }
  };


  return (
    <div>
      <h1>Import File</h1>
      <button onClick={handleButtonClick}>Import File</button>
      <input
        type="file"
        ref={fileInputRef}
        style={{ display: 'none' }}
        onChange={handleFileChange}
      />
      {fileName && <p>Selected file: {fileName}</p>} {/* Display the selected file name */}
    </div>
  );
}

export default Calculator;



