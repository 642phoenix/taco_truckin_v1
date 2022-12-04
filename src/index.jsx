import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import Order from './routes/Order';  
import Signup from './routes/Signup';
import Login from './routes/Login';
import Contact from './routes/Contact';
import Menu from './routes/Menu';
// import { Provider} from 'react-redux';
// import { configureStore } from '@reduxjs/toolkit';

// const initialState = {
//   user: { userInfo: "" }
// }
// const store = configureStore()

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <Provider store={store} >
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App/>}></Route>
          <Route path='Menu' element={<Menu />}></Route>
          <Route path='Signup' element={<Signup />}></Route>
          <Route path='Login' element={<Login />}></Route>
          <Route path='Contact' element={<Contact />}></Route>
        
      </Routes>
    </BrowserRouter>
  // </Provider>
);

// <React.StrictMode>
// <App />
// </React.StrictMode>


// const rootElement = document.getElementById('app');
// ReactDOM.render(
//   <BrowserRouter>
//     <Routes>
//       <Route path="/" element={<App />}>
//         <Route path="expenses" element={<Expenses />} />
//         <Route path="invoices" element={<Invoices />}>
//           <Route
//             index
//             element={
//               <main style={{ padding: '1rem' }}>
//                 <p>Select an invoice</p>
//               </main>
//             }
//           />
//           <Route path=":invoiceId" element={<Invoice />} />
//         </Route>
//         <Route
//           path="*"
//           element={
//             <main style={{ padding: '1rem' }}>
//               <p>There's nothing here!</p>
//             </main>
//           }
//         />
//       </Route>
//     </Routes>
//   </BrowserRouter>,
//   rootElement
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
