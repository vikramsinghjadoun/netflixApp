// import React from 'react';

// function App() {
//   let currDate = new Date(2021, 5, 20, 7);
//   currDate = currDate.getHours();

//   let greeting = '';
//   let cssStyle = {};

//   if (currDate >= 1 && currDate < 12) {
//     greeting = 'GoodMorning';
//     cssStyle.color = 'green';
//   } else if (currDate >= 12 && currDate <= 19) {
//     greeting = 'Good Afternoon';
//     cssStyle.color = 'orange';
//   } else {
//     greeting = 'Good Night';
//     cssStyle.color = 'black';
//   }

//   return (
//     <>
//       <div className='background'>
//         <div className='centerBox'>
//           <div className='text'>
//             <h1>
//               Hello Sir, <span style={cssStyle}>{greeting}</span>
//             </h1>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default App;

//*********projrct 5 **********

// import React from 'react';
// import { add, sub, multi, div } from './Calc';

// function App() {
//   return (
//     <>
//       <ul>
//         <li>{add(100, 23)}</li>
//         <li>{sub(100, 23)}</li>
//         <li>{multi(100, 23)}</li>
//         <li>{div(100, 13)}</li>
//       </ul>
//     </>
//   );
// }
// export default App;

//*****************Project 6 ************
//*************NETFLIX APP LIST***************
import React from 'react';
import Card from './Card';
import Sdata from './Sdata';
import Netflix from './Netflix';
import Amazon from './Amazon';

// const Fser = () => {
//   const FavSeries = 'Netflix';
//   if (FavSeries === 'Netflix') {
//     return <Netflix />;
//   } else {
//     return <Amazon />;
//   }
// };

const App = () => (
  <>
    <h1 className='heading'>list of top 5 netflix series in 2020</h1>
    {/* <Fser /> */}
    {Sdata.map((val, index) => {
      return (
        <Card
          key={val.id}
          imgsrc={val.imgsrc}
          title={val.title}
          sname={val.sname}
          link={val.links}
        />
      );
    })}
  </>
);

export default App;
