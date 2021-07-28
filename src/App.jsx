// // import React from 'react';

// // function App() {
// //   let currDate = new Date(2021, 5, 20, 7);
// //   currDate = currDate.getHours();

// //   let greeting = '';
// //   let cssStyle = {};

// //   if (currDate >= 1 && currDate < 12) {
// //     greeting = 'GoodMorning';
// //     cssStyle.color = 'green';
// //   } else if (currDate >= 12 && currDate <= 19) {
// //     greeting = 'Good Afternoon';
// //     cssStyle.color = 'orange';
// //   } else {
// //     greeting = 'Good Night';
// //     cssStyle.color = 'black';
// //   }

// //   return (
// //     <>
// //       <div className='background'>
// //         <div className='centerBox'>
// //           <div className='text'>
// //             <h1>
// //               Hello Sir, <span style={cssStyle}>{greeting}</span>
// //             </h1>
// //           </div>
// //         </div>
// //       </div>
// //     </>
// //   );
// // }

// // export default App;

// //*********projrct 5 **********

// // import React from 'react';
// // import { add, sub, multi, div } from './Calc';

// // function App() {
// //   return (
// //     <>
// //       <ul>
// //         <li>{add(100, 23)}</li>
// //         <li>{sub(100, 23)}</li>
// //         <li>{multi(100, 23)}</li>
// //         <li>{div(100, 13)}</li>
// //       </ul>
// //     </>
// //   );
// // }
// // export default App;

// //*****************Project 6 ************
// //*************NETFLIX APP LIST***************
// import React from 'react';
// import Card from './Card';
// import Sdata from './Sdata';
// import Netflix from './Netflix';
// import Amazon from './Amazon';

// const FavSeries = 'Amazon';
// // const Fser = () => {
// //   if (FavSeries === 'Netflix') {
// //     return <Netflix />;
// //   } else {
// //     return <Amazon />;
// //   }
// // };

// const App = () => (
//   <>
//     <h1 className='heading'>list of top 5 netflix series in 2020</h1>
//     {/* <Fser /> */}
//     {FavSeries === 'Netflix' ? <Netflix /> : <Amazon />}

//     {/* {Sdata.map((val, index) => {
//       return (
//         <Card
//           key={val.id}
//           imgsrc={val.imgsrc}
//           title={val.title}
//           sname={val.sname}
//           link={val.links}
//         />
//       );
//     })} */}
//   </>
// );

// export default App;

//*****************Project 7 ************
//*************Slot Machine Game***************
// import React from 'react';
// import SlotM from './Slot';

// const App = () => {
//   return (
//     <>
//       <h1 className='heading_style'>
//         🎰 Welcome to
//         <span style={{ fontWeight: 'bold' }}>Slot Machine Game</span> 🎰
//       </h1>
//       <div className='slotmachine'>
//         <SlotM x='😃' y='😃' z='😃' />
//         <hr />
//         <SlotM x='😃' y='🐈' z='😠' />
//         <hr />
//         <SlotM x='🍇' y='🥧' z='🍇' />
//         <hr />
//         <SlotM x='🍎' y='🍎' z='🍎' />
//       </div>
//     </>
//   );
// };

// export default App;

//*****************Project 7 ************
//*************React hooks***************
// import React, { useState } from 'react';

// const App = () => {
//   const state = useState();
//   const [count, setCount] = useState(0);

//   const IncNum = () => {
//     setCount(count + 1);
//   };
//   return (
//     <>
//       <h1> {count} </h1>
//       <button onClick={IncNum}>Click Me</button>
//     </>
//   );
// };
// export default App;

//*****************Project 7 ************
//*************React hooks Change time with a button click***************
// import React, { useState } from 'react';

// const App = () => {
//   let newTime = new Date().toLocaleTimeString();
//   const [cTime, setCTime] = useState(newTime);

//   const GetTime = () => {
//     newTime = new Date().toLocaleTimeString();
//     setCTime(newTime);
//   };
//   return (
//     <>
//       <h1> {cTime} </h1>
//       <button onClick={GetTime}>Get Time</button>
//     </>
//   );
// };

// export default App;

//*****************Project 8 ************
//*************React hooks (Digital Clock)***************
// import React, { useState } from 'react';

// const App = () => {
//   let Time = new Date().toLocaleTimeString();
//   const [date, setDate] = useState(Time);

//   const updateTime = () => {
//     Time = new Date().toLocaleTimeString();
//     setDate(Time);
//   };
//   setInterval(updateTime, 1000);
//   return (
//     <>
//       <h1>{date}</h1>
//     </>
//   );
// };
// export default App;

//*****************Project 9 ************
//*************React hooks change css**********
// import React, { useState } from 'react';

// const App = () => {
//   const color = '#8e44ad';
//   const [bg, setBG] = useState(color);
//   const [name, chnText] = useState('Click Me');
//   const changeBG = () => {
//     let newBG = '#34495e';
//     setBG(newBG);
//     chnText('Oucch 😠');
//   };
//   const BG = () => {
//     setBG(color);
//     chnText('Ayyo!! 😕');
//   };
//   return (
//     <>
//       <div style={{ backgroundColor: bg }}>
//         <button onClick={changeBG} onDoubleClick={BG}>
//           {name}
//         </button>
//       </div>
//     </>
//   );
// };
// export default App;

//*****************Project 10 ************
//*************React hooks controlled event**********
// import React, { useState } from 'react';

// const App = () => {
//   const [name, chnName] = useState('');
//   const [fullName, chnFullName] = useState();
//   const inputEvent = e => {
//     let setName = e.target.value;
//     chnName(setName);
//   };
//   const onSubmit = () => {
//     chnFullName(name);
//   };
//   return (
//     <>
//       <h1>Hello, {fullName}</h1>
//       <input
//         type='text'
//         placeholder='Enter Your Name'
//         onChange={inputEvent}
//         value={name}
//       />
//       <button onClick={onSubmit}> CLick Me 👈</button>
//     </>
//   );
// };

// export default App;

//*****************Project 11 ************
//*************React hooks form with two input feilds**********
// import React, { useState } from 'react';

// const App = () => {
//   const [fullName, setFullName] = useState();
//   const [lastNameNew, changeLastName] = useState('');
//   const [name, setName] = useState('');
//   const [lastName, setLastName] = useState('');

//   const inputEvent = e => {
//     setName(e.target.value);
//   };
//   const inputEventTwo = event => {
//     setLastName(event.target.value);
//   };
//   const onSubmits = e => {
//     e.preventDefault();
//     setFullName(name);
//     changeLastName(lastName);
//   };
//   return (
//     <>
//       <div className='main_div'>
//         <form onSubmit={onSubmits}>
//           <div>
//             <h1>
//               Hello, {fullName} {lastNameNew}
//             </h1>
//             <input
//               type='text'
//               placeholder='Enter Your Name'
//               onChange={inputEvent}
//               value={name}
//             />
//             <br />
//             <input
//               type='text'
//               placeholder='Enter Your Name'
//               onChange={inputEventTwo}
//               value={lastName}
//             />
//             <br />
//             <button type='submit'> Submit Me 👈</button>
//           </div>
//         </form>
//       </div>
//     </>
//   );
// };
// export default App;

// //*****************Project 11 ************
// //*************React hooks form input feilds**********
// import React, { useState } from 'react';

// const App = () => {
//   const [fullName, setFullName] = useState({
//     fname: '',
//     lname: '',
//     email: '',
//     phone: '',
//   });

//   const inputEvent = e => {
//     console.log(e.target.value);
//     console.log(e.target.name);

//     const { value, name } = e.target;

//     setFullName(perValue => {
//       //console.log(perValue);
//       if (name === 'fName') {
//         return {
//           fname: value,
//           lname: perValue.lname,
//           email: perValue.email,
//           phone: perValue.phone,
//         };
//       } else if (name === 'lName') {
//         return {
//           fname: perValue.fname,
//           lname: value,
//           email: perValue.email,
//           phone: perValue.phone,
//         };
//       } else if (name === 'email') {
//         return {
//           fname: perValue.fname,
//           lname: perValue.lname,
//           email: value,
//           phone: perValue.phone,
//         };
//       } else if (name === 'phone') {
//         return {
//           fname: perValue.fname,
//           lname: perValue.lname,
//           email: perValue.email,
//           phone: value,
//         };
//       }
//     });
//   };

//   const onSubmits = e => {
//     e.preventDefault();
//     alert('form submitted');
//   };
//   return (
//     <>
//       <div className='main_div'>
//         <form onSubmit={onSubmits}>
//           <div>
//             <h1>
//               Hello, {fullName.fname} {fullName.lname}
//             </h1>
//             <p>{fullName.email}</p>

//             <p>{fullName.phone}</p>
//             <input
//               type='text'
//               placeholder='Enter Your First Name'
//               onChange={inputEvent}
//               name='fName'
//               value={fullName.fname}
//             />
//             <input
//               type='text'
//               placeholder='Enter Your Last Name'
//               onChange={inputEvent}
//               name='lName'
//               value={fullName.lname}
//             />
//             <input
//               type='email'
//               placeholder='Enter Your Email'
//               onChange={inputEvent}
//               name='email'
//               value={fullName.email}
//             />
//             <input
//               type='number'
//               placeholder='Enter Your Number'
//               onChange={inputEvent}
//               name='phone'
//               value={fullName.phone}
//             />
//             <button type='submit'> Submit Me 👈</button>
//           </div>
//         </form>
//       </div>
//     </>
//   );
// };
// export default App;

//*****************Project 12 ************
//*************React hooks form input feilds with spread operators(...array name)**********
// import React, { useState } from 'react';

// const App = () => {
//   const [fullName, setFullName] = useState({
//     fname: '',
//     lname: '',
//     email: '',
//     phone: '',
//   });

//   const inputEvent = e => {
//     console.log(e.target.value);
//     console.log(e.target.name);

//     const { value, name } = e.target;

//     setFullName(perValue => {
//       console.log(perValue);

//       return {
//         ...perValue,
//         [name]: value,
//       };
//     });
//   };

//   const onSubmits = e => {
//     e.preventDefault();
//     alert('form submitted');
//   };
//   return (
//     <>
//       <div className='main_div'>
//         <form onSubmit={onSubmits}>
//           <div>
//             <h1>
//               Hello, {fullName.fname} {fullName.lname}
//             </h1>
//             <p>{fullName.email}</p>

//             <p>{fullName.phone}</p>
//             <input
//               type='text'
//               placeholder='Enter Your First Name'
//               onChange={inputEvent}
//               name='fname'
//               value={fullName.fname}
//             />
//             <input
//               type='text'
//               placeholder='Enter Your Last Name'
//               onChange={inputEvent}
//               name='lname'
//               value={fullName.lname}
//             />
//             <input
//               type='email'
//               placeholder='Enter Your Email'
//               onChange={inputEvent}
//               name='email'
//               value={fullName.email}
//             />
//             <input
//               type='number'
//               placeholder='Enter Your Number'
//               onChange={inputEvent}
//               name='phone'
//               value={fullName.phone}
//             />
//             <button type='submit'> Submit Me 👈</button>
//           </div>
//         </form>
//       </div>
//     </>
//   );
// };
// export default App;

// *****************project 13***********
// ******************* Increment and decrement functionallity***********************

// import React, { useState } from 'react';
// import AddIcon from '@material-ui/icons/Add';
// import DeleteIcon from '@material-ui/icons/Delete';
// import Button from '@material-ui/core/Button';

// const App = () => {
//   const [num, setNum] = useState(0);

//   const incNum = () => {
//     setNum(num + 1);
//   };
//   const decNum = () => {
//     if (num > 0) {
//       setNum(num - 1);
//     } else {
//       alert('limit reached');
//     }
//   };
//   return (
//     <>
//       <div className='main_div'>
//         <div className='center_div'>
//           <h1>{num}</h1>
//           <div className='btn_div'>
//             <Button className='btn_green' onClick={incNum}>
//               <AddIcon />
//             </Button>
//             <Button className='btn_red' onClick={decNum}>
//               <DeleteIcon />
//             </Button>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };
// export default App;

// *****************project 13***********
// *****************Increment and decrement functionallity***********************
// import React, { useState } from 'react';

// const App = () => {
//   const [val, setVal] = useState({
//     name: 'vikram',
//     age: 21,
//     degree: 'Btech',
//   });
//   const chnData = e => {
//     console.log(e.target);
//     const { name, value } = e.target;
//     setVal({ ...val, name: 'singh' });
//   };
//   return (
//     <>
//       <h1>
//         Name: {val.name} & Age: {val.age} & Degree: {val.degree}
//       </h1>
//       <button onClick={chnData}>Update</button>
//     </>
//   );
// };

// export default App;
import React, { useState } from 'react';

const App = () => {
  const [fullDetail, setFullDetail] = useState({
    fname: '',
    lname: '',
  });
  const [record, setRecord] = useState([]);
  const inputEvent = e => {
    const { name, value } = e.target;
    setFullDetail(prev => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };
  const formSubmit = e => {
    e.preventDefault();
    console.log(e.target);
    const newRecord = { ...fullDetail, id: new Date().getTime().toString() };
    console.log(record);
    setRecord([...record, newRecord]);
  };
  return (
    <>
      <form>
        <input
          type='text'
          name='fname'
          value={fullDetail.fname}
          placeholder='First Name'
          onChange={inputEvent}
        />
        <input
          type='text'
          name='lname'
          value={fullDetail.lname}
          placeholder='Last Name'
          onChange={inputEvent}
        />
        <button onClick={formSubmit}>Submit me</button>
      </form>
      <div>
        {record.map(currElem => {
          return (
            <div key={currElem.id}>
              <p>{currElem.fname}</p>
              <p>{currElem.lname}</p>
            </div>
          );
        })}
      </div>
    </>
  );
};
export default App;
