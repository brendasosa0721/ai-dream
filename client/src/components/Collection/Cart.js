
// import  React , { useState } from "react";
// import Badge from '@mui/material/Badge';
// import ButtonGroup from '@mui/material/ButtonGroup';
// import Button from '@mui/material/Button';
// import AddIcon from '@mui/icons-material/Add';
// import RemoveIcon from '@mui/icons-material/Remove';
// import MailIcon from '@mui/icons-material/Mail';
// import Switch from '@mui/material/Switch';
// import FormControlLabel from '@mui/material/FormControlLabel';


// import "./Collection.css";



// export default function Cart() {
//     const [ count , setCount ] = useState(1);
//     const [ count1 , setCount1 ] = useState(1);
//     const [count2, setCount2] = useState(1);
//     const [count3, setCount3] = useState(1);
    
//   return (
//     <aside className="cart-container">
//       <h2 className="cart-title"> Cart Items</h2>

//       <p>
//         Item1 <span onClick={() => setCount1(count1 - 1)}>-</span>
//         {count1}
//         <span onClick={() => setCount1(count1 + 1)}>+</span>
//       </p>

//       <p>
//         Item2 <span onClick={() => setCount2(count2 - 1)}>-</span>
//         {count2}
//         <span onClick={() => setCount2(count2 + 1)}>+</span>
//       </p>

//       <p>
//         Item1 <span onClick={() => setCount3(count3 - 1)}>-</span>
//         {count3}
//         <span onClick={() => setCount3(count3 + 1)}>+</span>
//       </p>

//       <p>Total:{count1 + count2 + count3}</p>

//       <button className="cart-btn">Check Out</button>
//     </aside>
//   );
   
// }



