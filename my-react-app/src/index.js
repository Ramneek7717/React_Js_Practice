import React from 'react';
import ReactDOM from 'react-dom/client';

// const myFirstElement=<h1>Hello React !</h1>
// const container = document.getElementById('sandy');
// const root = ReactDOM.createRoot(container);
// // root.render(<p>Hallo</p>);
// root.render(myFirstElement);
// Without Expression
// const myElement=React.createElement('h1',{},'I do not use JSX!');
// const root=ReactDOM.createRoot(document.getElementById('root'));
// root.render(myElement);
// Expression in JSX
// const myElement = <h1>React is {5+5} times better with JSX</h1>;
// const root=ReactDOM.createRoot(document.getElementById('root'));
// root.render(myElement);
// Inserting a larger Block of HTML
// const myElement=(
//     <ul>
//        <li>apples</li>
//        <li>bananas</li>
//        <li>Cherries</li>
//     </ul>
// );
// const root=ReactDOM.createRoot(document.getElementById('root'));
// root.render(myElement);
//One Top level Element
// const myElement = (
//     <div>
//        <h1>I am a Header.</h1>
//        <h1>I am a Header too.</h1>
//     </div>
// );
// const root=ReactDOM.createRoot(document.getElementById('root'));
// root.render(myElement);
// Warp two paragraphs inside a fragment:
// const myElement=(
//     <>
//     <p> I am a paragraph.</p>
//     <p> I am a paragraph too.</p>
//     </>
// );
// const root=ReactDOM.createRoot(document.getElementById('root'));
// root.render(myElement);
// Elements Must be closed
// const myElement=<input type="text" />;
// const root=ReactDOM.createRoot(document.getElementById('root'));
// root.render(myElement);
// Use attribute className instead of class in JSX:
// const myElement = <h1 className="myclass">Hello World</h1>;

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(myElement);
// if statement outside of the JSX code:
// const x=5;
// let text="GoodBye";
// if(x<10)
// {
// text="Hello";
// }
// const myElement = <h1> {text}</h1>;
// const root=ReactDOM.createRoot(document.getElementById('root'));
// root.render(myElement);
//Use ternary Expressions instead:
// const x = 5 ;
// const myElement= <h1>{ (x) < 10 ? "Hello" : "Goodbye"}</h1>;
// const root=ReactDOM.createRoot(document.getElementById('root'));
// root.render(myElement);
// function Car()
// {
//     return <h2>Hi,I am Car!</h2>;

// }
// const root=ReactDOM.createRoot(document.getElementById('root'));
// root.render(<Car/>);

//Props
//Use an attribute to pass a color to the Car componet,and use it in the render() function:
//  function Car(props)
//  {
//     return <h2> I am a {props.color} Car!</h2>;
//  }
//  const root=ReactDOM.createRoot(document.getElementById('root'));
//  root.render(<Car color="red"/>);
//Components in Components=> components inside other Components:
//Use the Car components inside the Garage Components:
// function Car()
// {
//     return <h2>I am a Car!</h2>;
// }
// function Garage()
// {
//     return(
//         <>
//         <h1>Who lives in my Garage?</h1>
//         <Car/>
//         </>
//     );
// }
// const root= ReactDOM.createRoot(document.getElementById('root'));
// root.render(<Garage/>);
// //Components in Files 
// import Car from './Car.js';
// const root=ReactDOM.createRoot(document.getElementById('root'));
// root.render(<Car/>);
// //Display the Car component in the "root" element:
// class Car extends React.Component{
//     constructor()
//     {
//         super();
//         this.state={color:"red"};

//     }
//     render()
//     {
//         return<h2> I am a {this.state.color} Car!</h2>;
//     }
// }
// const root =ReactDOM.createRoot(document.getElementById('root'));
// root.render(<Car/>);
// //use an attribute to pass  a color to the Car component,and use it in the render() function:
// class Car extends React.Component{
//     render()
//     {
//         return <h2> I am a {this.props.color} Car! </h2>;
//     }
// }
// const root=ReactDOM.createRoot(document.getElementById('root'));
// root.render(<Car color="red"/>);
// //Props in the Constructorder

// class Car extends React.Component {
//     constructor(props) {
//       super(props); }
//     render() {
//       return <h2>I am a {this.props.model}!</h2>;
//     }
//   }
// const root=ReactDOM.createRoot(document.getElementById('root'));
// root.render(<Car model="Mustang"/>);
// //Components in Components
// class Car extends React.Component{
//     render()
//     {
//         return <h2> I am a Car!</h2>;
//     }
// } 
// class Garage extends React.Component {
//     render()
//     {
//         return(
//             <div>
//             <h1>WHo lives in my Garage?</h1>
//             <Car/>
//             </div>
//         );
//     }
// }
// const root =ReactDOM.createRoot(document.getElementById('root'));
// root.render(<Garage/>);
// // Components in files
// import Car1 from './Car1.js';
// const root=ReactDOM.createRoot(document.getElementById('root'));
// root.render(<Car1/>);
// // React Class Component State 
// class Car extends React.Component{
//     constructor(props)
//     {
//         super(props);
//         this.state={
//             brand:"Ford",
//             model:"Mustang",
//             color:"red",
//             year:1964
//         };
//     }
//     render()
//     {
//         return(
//             <>
//             <h1>My {this.state.brand}
//             </h1>
//             <p>
//              It is a {this.state.color} {this.state.model} From {this.state.year}.
//              </p>
//              </>
//         );
//     }
// }
// const container=document.getElementById('root');
// const root=ReactDOM.createRoot(container);
// root.render(<Car/>);
// //Changing the state object
// //Add a button with an onclick event that will change the color property:
// class Car extends React.Component{
//     constructor(props)
//     {
//         super(props);
//         this.state={
//             brand:"Ford",
//             model:"Mustang",
//             color:"red",
//             year:1964
//         };
//     }
//     changeColor=()=>{
//         this.setState({color:"blue"});
//     }
//     render()
//     {
//       return(  <div>
//         <h1>My {this.state.brand}</h1>
//         <p>
//             It is a {this.state.color} {this.state.model}
//               from { this.state.year}.
//          </p>
//           <button type="button"
//             onClick={this.changeColor}
//             >Change Color </button>
//             </div>
//        );
//     }
// }
// const root=ReactDOM.createRoot(document.getElementById('root'));
// root.render(<Car/>); 
// //The constructor method is called, by React,every time you make a component:
// import  Header from './Header.js';
// const root=ReactDOM.createRoot(document.getElementById('root'));
// root.render(<Header/>); 
// //The getDerivedStateFromPropd() method is called right before rendering the element (s) in the DOM
// import Header1 from './GetDerived.js';
// const root=ReactDOM.createRoot(document.getElementById('root'));
// root.render(<Header1 favcol="yellow"/>);
// //A simple component with a simple render() method 
// class Header extends React.Component{
//     render()
//     {
//         return(
//             <h1> This is the content of the Header component</h1>
//         );
//     }
// }
// const root =ReactDOM.createRoot(document.getElementById('root'));
// // root.render(<Header/>);
// // At first my favorite color is red, but give me a second, and it is yellow instead.
// class Header extends React.Component {
//     constructor(props) {
//       super(props);
//       this.state = {favoritecolor: "red"};
//     }
//     componentDidMount() {
//       setTimeout(() => {
//         this.setState({favoritecolor: "yellow"})
//       }, 1000)
//     }
//     render() {
//       return (
//         <h1>My Favorite Color is {this.state.favoritecolor}</h1>
//       );
//     }
//   }
// const root=ReactDOM.createRoot(document.getElementById('root'));
// root.render(<Header/>);
// //shouldComponentUpdate 
// //Stop the component from rendering at any update:
// class Header extends React.Component{
//     constructor(props){
//         super(props);
//         this.state={favoritecolor:"red"};

//     }
//     shouldComponentUpdate()
//     {
//         return false;
//     }
//     changeColor=()=>{
//         this.setState({favoritecolor:"blue"});
//     }
//     render(){
//     return(
//         <div>
//         <h1> My Favorite color is {this.state.favoritecolor}</h1>
//         <button type="button" onClick={this.changeColor}>Chnage color</button>
//         </div>
//     );
//     }

// }
// const root=ReactDOM.createRoot(document.getElementById('root'));
// root.render(<Header/>);
// //Same example as above, but this time the shouldComponentUpdate() method returns true instead:
// class Header extends React.Component{
//     constructor(props)
//     {
//         super(props);
//         this.state={favoritecolor:"red"};
//     }
//     shouldComponentUpdate()
//     {
//         return true;
//     }
//     changeColor=()=>{
//         this.setState({favoritecolor:"blue"});
//     }
//     render()
//     {
//         return(
//         <div>
//         <h1>My Favorite Color is {this.state.favoritecolor}</h1>
//         <button type="button" onClick={this.changeColor}>Change color</button>
//         </div>);
//     }
// }
// const root =ReactDOM.createRoot(document.getElementById('root'));
// root.render(<Header/>);
//render()
//Click the button to make a chnage in the component's state:
// class Header extends React.Component{
//     constructor(props)
//     {
//         super(props);
//         this.state={favoritecolor:"red"};
//     }
//     changeColor=()=>{
//         this.setState({favoritecolor:"blue"});
//     }
//     render()
//     {
//         return(
//             <div>
//             <h1> My Favorite Color is {this.state.favoritecolor}</h1>
//             <button type="button" onClick={this.changeColor}>Change color</button>
//             </div>
//         );
//     }
// }
// const root =ReactDOM.createRoot(document.getElementById('root'));
// root.render(<Header/>);
// //getSnapshotBeforeUpdate methorder
// //Use the getSnapshotBeforeUpdate() method to find out what the state object looked like before the update:
// class Header extends React.Component{
//     constructor (props)
//     {
//         super(props);
//         this.state={favoritecolor:"red"};

//     }
//     componentDidMount()
//     {
//         setTimeout(() => {
//            this.setState({favoritecolor:"yellow"}) 
//         }, 1000);
//     }
//     getSnapshotBeforeUpdate(prevProps,prevState){
//         document.getElementById("div1").innerHTML="Before the update,the favorite was "+prevState.favoritecolor;
//     }
//     componentDidUpdate()
//     {
//         document.getElementById("div2").innerHTML="The updated favorite is "+this.state.favoritecolor;
//     }
//     render()
//     { 
//         return(
//         <div>
//         <h1> My Favorite Color is {this.state.favoritecolor}</h1>
//         <div id="div1"></div>
//         <div id="div2"></div>
//         </div>
//         );
//     }
// }
// const root=ReactDOM.createRoot(document.getElementById('root'));
// root.render(<Header/>);
// //componentDidUpdate 
// //The componentDidUpdate method is called afetr the update has been rendered in the DOM:
// class Header extends React.Component{
//     constructor(props)
//     {
//         super(props);
//         this.state={favoritecolor:"red"};

//     }
//     componentDidMount()
//     {
//         setTimeout(() => {
//             this.setState({favoritecolor:"yellow"})
//         }, 1000);
//     }
//     componentDidUpdate()
//     {
//         document.getElementById("mydiv").innerHTML="The updated favorite is "+ this.state.favoritecolor;
//     }
//     render()
//     {
//         return(
//             <div>
//             <h1>My Favorite Color is {this.state.favoritecolor}</h1>
//             <div id="mydiv"></div>
//             </div>
//         );
//     }
// }
// const root =ReactDOM.createRoot(document.getElementById('root'));
// root.render(<Header/>);
// //Unmounting
// //componentWillUnmount()
// //Click the button to delete the header:
// class Container extends React.Component{
//     constructor(props)
//     {
//         super(props);
//         this.state={show:true};
//     }
//     delHeader=()=>{
//         this.setState({show:false});
//     }
//     render()
//     {
//         let myheader;
//         if(this.state.show)
//         {
//             myheader=<Child/>;
//         };
//         return(
//             <div>
//             {myheader}
//             <button type="button" onClick={this.delHeader}>Delete Header</button>
//             </div>
//         );
//     }

// }
// class Child extends React.Component{
//     componentWillUnmount()
//     {
//         alert("The component named Header is about to be unmounted.");
//     }
//         render(){
//             return(
//                 <h1>Hello World!</h1>
//             );
//         }
    
// }
// const root =ReactDOM.createRoot(document.getElementById('root'));
// root.render(<Container/>);
/**************************************** */
//React Props//
/**************************************** */
// //use the brand attribute in the component:
// function Car(props)
// {
//     return <h2> I am a {props.brand} ! </h2>;
// }
// const myElement=<Car brand="Ford"/>
// const root=ReactDOM.createRoot(document.getElementById('root'));
// root.render(myElement);
/* props Data*/
// //Send the "brand" property from the Garage component to the Car component:
// function Car(props)
// {
//     return <h2> I am a {props.brand}!</h2>;
// }
// function Garage()
// {
//     return(
//         <>
//         <h1>Who lives in my garage?</h1>
//         <Car brand="Ford"/>
//         </>
//     );
// }
// const root=ReactDOM.createRoot(document.getElementById('root'));
// root.render(<Garage/>);
// //Create a variable named carName and send it to the Car component:
// function Car(props)
// {
//     return <h2>I am a {props.brand} !</h2>;
// }
// function Garage()
// {
//     const carName="Ford";
//     return(
//         <>
//         <h1>Who lives in my garage?</h1>
//         <Car brand={carName}/>
//         </>
//     );
// }
// const root=ReactDOM.createRoot(document.getElementById('root'));
// root.render(<Garage/>);
// /*if it was an object */
// //Create an object named carInfo and send it to the Car component:
// function Car(props)
// {
//     return<h2> I am a {props.brand.model}!</h2>

// }
// function Garage()
// {
//     const carInfo={name:"Ford",model:"Mustang"};
//     return(
//         <>
//         <h1>Who lives in my garage ? </h1>
//         <Car brand={carInfo} />
//         </>

//     );
// }
// const root =ReactDOM.createRoot(document.getElementById('root'));
// root.render(<Garage/>);
/********************************************* */
////      React Events /////////////////
/******************************************** */
// /* Put the shoot function inside the Football component  */
// function Football() {
//     const shoot = () => {
//       alert("Great Shot!");
//     }
//     return (
//         <button onClick={shoot}>Take the shot!</button>
//       );
//     }

//     const root = ReactDOM.createRoot(document.getElementById('root'));
//     root.render(<Football />);
// /*Passing Arguments */
// /*Send "Goal!" as a parameter to the shoot function, using arrow function: */
// function Football(){
//     const shoot=(a)=>{
//         alert(a);
//     }
//     return(
//         <button onClick={()=>shoot("Goal!")}>Take the shot!</button>
//     );
// }
// const root=ReactDOM.createRoot(document.getElementById('root'));
// root.render(<Football/>);        
// //React Event Object 
// //Arrow Function: Sending the event object manually:
// function Football()
// {
//     const shoot=(a,b)=>{
//         alert(b.type);
//         /*'b' represents the React event that triggeres the function, in this case the 'click' event */
//     }
//     return(
//         <button onClick={(event)=>shoot("Goal!",event)}>Take the shot!</button>

//     );

    
// }
// const root= ReactDOM.createRoot(document.getElementById('root'));
// root.render(<Football/>);
// // if Statement 
// function MissedGoal()
// {
//     return <h1> Missed!</h1>;

// }
// function MadeGoal()
// {
//     return <h1> Goal!</h1>;
// }
// function Goal(props)
// {
//     const isGoal=props.isGoal;
//     if(isGoal)
//     {
//         return<MadeGoal/>;
//     }
//     return <MissedGoal/>;
// }
// const root=ReactDOM.createRoot(document.getElementById('root'));
// root.render(<Goal isGoal={true}/>);
// //Logical && Operatorder
// function Garage(props)
// {
//     const cars=props.cars;
//     return(
//         <>
//         <h1>Garage</h1>
//         {cars.length > 0 && 
//          <h2>
//          you have {cars.length} car in your garage.
//          </h2>
//          }
//          </>
//     );
// }
// const cars=['Ford','BMW','Audi'];
// const root=ReactDOM.createRoot(document.getElementById('root'));
// root.render(<Garage cars={cars}/>);
// //Ternary Operator 
// //Return the MadeGoal  component if isGoal is true, otherwise return the MissedGoal component:
// function MissedGoal()
// {
//     return <h1>Missed!</h1>;
// }
// function MadeGoal()
// {
//     return <h1>Goal!</h1>;
// }
// function Goal(props)
// {
//     const isGoal=props.isGoal;
//     return(
//         <>
//         {isGoal?<MadeGoal/>:<MissedGoal/>}
//         </>
//     );
// }
// const root=ReactDOM.createRoot(document.getElementById('root'));
// root.render(<Goal isGoal={false}/>);
/********************************************************** */
//               React List       //
/******************************************************** */
// //maps()
// //Let's render all of the cars from our garage:
// function Car(props)
// {
//     return <li> I am a {props.brand}</li>;

// }
// function Garage()
// {
//     const cars=['Ford','BMW','Audi'];
//     return(
//         <>
//         <h1>Who lives in my garage?</h1>
//         <ul>
//         {cars.map((car)=> <Car brand={car}/>)}
//         </ul>
//         </>

//     );
// }
// const root=ReactDOM.createRoot(document.getElementById('root'));
// root.render(<Garage/>);
// //keys 
// //Let's refactor our previous example to include keys:
// function Car(props) {
//     return <li>I am a { props.brand }</li>;
//   }
  
//   function Garage() {
//     const cars = [
//       {id: 1, brand: 'Ford'},
//       {id: 2, brand: 'BMW'},
//       {id: 3, brand: 'Audi'}
//     ];
//     return (
//       <>
//         <h1>Who lives in my garage?</h1>
//         <ul>
//           {cars.map((car) => <Car key={car.id} brand={car.brand} />)}
//         </ul>
//       </>
//     );
//   }
  
//   const root = ReactDOM.createRoot(document.getElementById('root'));
//   root.render(<Garage />);
/************************************************** */
////      React Forms   ////////
/*********************************************** */
// //Adding Forms in React 
// //Add a form that allows users to enter their name:
// function MyForm()
// {
//    return(
//     <form>
//       <label> Enter your name:
//       <input type="text" />
//       </label>
//       </form>
//    ) 
// }
// const root= ReactDOM.createRoot(document.getElementById('root'));
// root.render(<MyForm/>);
//Handling Forms
// //Use the useState Hook to manage the input:
// import { useState } from 'react';
// function MyForm()
// {
//     const [name,setName]=useState("");
//     return(
//         <form>
//         <label>Enter Your name:
//         <input
//            type="text"
//            value={name}
//            onChange={(e)=>setName(e.target.value)}
//            />
//            </label>
//            </form>
//     )
// }
// const root=ReactDOM.createRoot(document.getElementById('root'));
// root.render(<MyForm/>);
// //Submitting Forms 
// //Add a submit button and an event handler in the onSubmit attribute:
// import { useState } from 'react';
// function MyForm()
// {
//     const [name,setName]=useState("");
//     const handleSubmit=(event)=>{
//         event.preventDefault();
//         alert(`The name you entered was:${name}`)
//     }
//     return(
//         <form onSubmit={handleSubmit}>
//         <label>Enter your name:
//         <input 
//           type="text"
//           value={name}
//           onChnage={(e)=>setName(e.target.value)}
//           />
//           </label>
//           <input type="submit" />
//           </form>
//     )
// }
// const root=ReactDOM.createRoot(document.getElementById('root'));
// root.render(<MyForm/>);
// //Multiple Input Fields 
// import { useState } from 'react';

// function MyForm()
// {
//     const [inputs,setInputs]=useState({});
//     const handleChange=(event)=>{
//         const name=event.target.name;
//         const value=event.target.value;
//         setInputs(values=>({...values,[name]:value}))
//     }
//     const handleSubmit=(event)=>{
//         event.preventDefalut();
//         alert(inputs);
//     }
//     return(
//         <form onSubmit={handleSubmit}>
//         <label>ENter your name:
//         <input
//           type="text"
//           name="username"
//           value={inputs.username ||""}
//           onChange={handleChange}
//           />
//           </label>
//           <label>Enter your age:
//           <input 
//            type="number"
//            name="age"
//            value={inputs.age || ""}
//            onChange={handleChange}
//            />
//            </label>
//            <input type="submit" />
//            </form>
//     )
// }
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<MyForm />);
// //  Textarea
// // A simple textarea with some content:
// import { useState } from 'react';
// function MyForm() {
//   const [textarea, setTextarea] = useState(
//     "The content of a textarea goes in the value attribute"
//   );

//   const handleChange = (event) => {
//     setTextarea(event.target.value)
//   }

//   return (
//     <form>
//       <textarea value={textarea} onChange={handleChange} />
//     </form>
//   )
// }

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<MyForm />);
// //Select 
// //A simple select box, where the selected value "Volvo" is initialized in the constructor:
// import { useState } from "react";
// // import ReactDOM from "react-dom/client";

// function MyForm() {
//   const [myCar, setMyCar] = useState("Volvo");

//   const handleChange = (event) => {
//     setMyCar(event.target.value)
//   }

//   return (
//     <form>
//       <select value={myCar} onChange={handleChange}>
//         <option value="Ford">Ford</option>
//         <option value="Volvo">Volvo</option>
//         <option value="Fiat">Fiat</option>
//       </select>
//     </form>
//   )
// }

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<MyForm />);
// /************************************* */
// //////////React Router //////////////////
// /****************************************/
// import {BrowserRouter,Routes,Route} from "react-router-dom";
// import Layout from "./pages/Layout";
// import Home from "./pages/Home";
// import Blogs from "./pages/Blogs";
// import Contact from "./pages/Contact";
// import NoPage from "./pages/NoPage";
// export default function App()
// {
//   return(
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<Layout />}>
//           <Route index element={<Home/>}/>
//           <Route path="blogs" element={<Blogs/>}/>
//           <Route path="contact" element={<Contact/>}/>
//           <Route path="*" element={<NoPage/>}/>
//         </Route>
//       </Routes>
//     </BrowserRouter>
//   );
// }

// const root=ReactDOM.createRoot(document.getElementById('root'));
// root.render(<App />);
// ///////////////////////////////////////////////////////
// /****************** React Memo **************************/
// ///////////////////////////////////////////////////////
// //**Problem => In this example , the Todos component re-renders even when the todos have not changed.**/
// import { useState } from "react";
// import Todos from "./Todos";
// const App=()=>{
//   const [count,setCount]=useState(0);
//   const[todos,setTodos]=useState(["todo 1","todo 2"]);
//   const increment=()=>{
//     setCount((c)=>c+1);
//   };
//   return(
//     <>
//       <Todos todos={todos}/>
//       <hr/>
//       <div>
//         Count:{count}
//         <button onClick={increment}>+</button>
//       </div>
//     </>
//   );
// }
// const root=ReactDOM.createRoot(document.getElementById('root'));
// root.render(<App/>);
/////////////////////////////////////////////////////////////
/*************Styling React Using CSS */
////////////////////////////////////////////////////////
/********Inline Styling***********/
//////////////////////////////////////////////////////
// const Header=()=>{
//   return (
//     <>
//     <h1 style={{color:"red",fontSize: "10px"}}>Hello Style!</h1>
//     <p> Add a little style!</p>
//     <h1 style={{backgroundColor: "lightblue"}}>Hello Style!</h1>
//     </>

//   );
// }
// const root=ReactDOM.createRoot(document.getElementById('root'));
// root.render(<Header/>);
// //////////////////////////////////////////////////////////
// /********************JAVASCRIPT OBJECT*******************/
// //////////////////////////////////////////////////////
// /*Create a style object named mystyle:*/
// const Header = () => {
//   const myStyle = {
//     color: "white",
//     backgroundColor: "DodgerBlue",
//     padding: "10px",
//     fontFamily: "Sans-Serif"
//   };
//   return(
//     <>
//     <h1 style={myStyle}>Hello Style!</h1>
//     <p> Add a little style!</p>
//     </>
//   );
// }
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<Header />);
// //////////////////////////////////////////////////
// /****************CSS Stylesheet *****************/
// /////////////////////////////////////////////////
// import './App.css';
// const Header=()=>{
//   return(
//     <>
//     <h1>Hello Style!</h1>
//     <p>Add a little style!.</p>
//     </>
//   );
// }
// const root=ReactDOM.createRoot(document.getElementById('root'));
// root.render(<Header />);
///////////////////////////////////////////////////
/********CSS Modules*********************/
/////////////////////////////////////////////////
// import Car2 from './Car2.js';
// const root=ReactDOM.createRoot(document.getElementById('root'));
// root.render(<Car2/>);
////////////////////////////////////////////////////
/******Hook*********/
///////////////////////////////////////////////////
// import {useState} from "react";
// function FavoriteColor()
// {
//   const [color,setColor]=useState("red");
//   return(
//     <>
//     <h1> My favorite color is {color}!</h1>
//     <button type="button" onClick={()=>setColor("blue")}>
//     Blue </button>
//     <button type="button" onClick={()=>setColor("red")}>
//     Red</button>
//     <button type="button" onClick={()=>setColor("pink")}>Pink</button>
//     <button type="button" onClick={()=>setColor("green")}>Green</button>
//     </>
//   );
// }
// const root=ReactDOM.createRoot(document.getElementById('root'));
// root.render(<FavoriteColor />);
// //READ STATE 
// import {useState} from "react";
// function FavoriteColor()
// {
//   const [color, setColor]=useState("red");
//   return <h1> My favorite color is {color}!</h1>
// }
// const root= ReactDOM.createRoot(document.getElementById('root'));
// root.render(<FavoriteColor />);
//UPDATE STATE
// import {useState} from "react";
// function FavoriteColor(){
//   const [color, setColor]=useState("red");
//   return(
//     <>
//     <h1>My favorite color is {color}!</h1>
//     <button type="button" onClick={()=>setColor("blue")}>Blue</button>
//     </>
//   )
// }
// const root= ReactDOM.createRoot(document.getElementById('root'));
// root.render(<FavoriteColor />);
/////////////////////////////////////////////
/***Multiple state Hooks: */
// ////////////////////////////////////////////
// import {useState} from "react";
// function Car()
// {
//   const [brand]=useState("Ford");
//   const [model]=useState("Mustang");
//   const [year]=useState("1964");
//   const [color]=useState("red");
//   return(
//     <>
//     <h1>My {brand}</h1>
//     <p>
//      It is a {color} {model} from {year}.
//      </p>
//     </>
//   )
// }
// const root =ReactDOM.createRoot(document.getElementById('root'));
// root.render(<Car/>);
// //////////////////////////////
// /*Create a single Hook that holds an object: */
// import {useState} from "react";

// function Car()
// {
//   const [car]=useState({
//     brand:"Ford",
//     model:"Mustang",
//     year:"1964",
//     color:"red"
//   });
//   return(
//     <>
//     <h1>My {car.brand}</h1>
//     <p>
//     It is a {car.color} {car.model} from {car.year}.
//      </p>
//      </>
//   )
// }
// const root=ReactDOM.createRoot(document.getElementById('root'));
// root.render(<Car />);
///////////////////////////////////////////////////////////////////////
// Updating Objects and Arrays in state
// 
/////////////////////////////////////////////////////
/*****React useEffect Hooks */
////////////////////////////////////////////////////
// import {useState, useEffect} from "react";
// function Timer()
// {
//   const [count,setCount]=useState(0);
//   useEffect(()=>{
//     setTimeout(()=>{setCount((count)=>count +1);},1000);
//    });
//    return <h1> I 've rendered {count} times!</h1>;

// }
// const root=ReactDOM.createRoot(document.getElementById('root'));
// root.render(<Timer />);
// //Only run the effect on the initial render:
// import {useState,useEffect} from 'react';
// function Timer()
// {
//   const [count,setCount]=useState(0);
//   useEffect(() => {
//       setTimeout(() => {
//         setCount((count)=>count +1);
//       }, 1000);
//   }, []);//<- Add empty brackets here
//  return <h1> I 've rendered {count} times!</h1>;
// }
// const root=ReactDOM.createRoot(document.getElementById('root'));
// root.render(<Timer/>);
// //Here is an example of a useEffect Hook that is dependent on a variable.If the count Variable updates, the effect will run again:
// import {useState,useEffect} from "react";
// function Counter()
// {
//   const [count,setCount]=useState(0);
//   const[calculation,setCalculation]=useState(0);
//   useEffect(()=>{
//     setCalculation(()=>count*2);
//   },[count]);//<- add the count variable here 
//   return(
//     <>
//     <p>Count: {count}</p>
//     <button onClick={()=>setCount((c)=>c+1)}>+</button>
//     <p>Calculation:{calculation}</p>
//     </>
//   );
// }
// const root =ReactDOM.createRoot(document.getElementById('root'));
// root.render(<Counter />);
// //Clean up the timer at the end of the useEffect Hook:
// import {useState, useEffect} from "react";
// function Timer()
// {
//     const [count,setCount]=useState(0);
//     useEffect(()=>{
//          let timer = setTimeout(()=>{
//             setCount((count)=>count+1);
//         },1000);
//         return ()=>clearTimeout(timer)
//     },[]);
//     return <h1> I' ve rendered {count} times !</h1>;
// }
// const root= ReactDOM.createRoot(document.getElementById('root'));
// root.render(<Timer />);
// /*Note : To clear the timer, we had to name it.*/
///////////////////////////////////////////////////////
/************React useContext Hook *****************/
//////////////////////////////////////////////////////
/////////////PROBLEM///////////
/*passing "props" through nested components:*/
// import {useState} from "react";
// function Component1()
// {
//     const [user]=useState("Jesse Hall");
//     return(
//     <>
//     <h1>{`Hello ${user}!`}</h1>
//     <Component2 user={user}/>
//     </>

//    );
// }
// function Component2({user}){
//     return(
//         <>
//         <h1>Component 2</h1>
//         <Component3 user={user} />
//         </>
//     );
// }
// function Component3({user})
// {
//     return(
//         <>
//          <h1>Component 3</h1>
//          <Component4 user={user}/>
//         </>
//     );
// }
// function Component4({user})
// {
//     return(
//           <>
//           <h1>Component 4 </h1>
//           <Component5 user={user}/>
//           </>
//     );
// }
// function Component5({user})
// {
//     return(
//         <>
//         <h1>Component 5</h1>
//         <h2>{`Hello ${user} again!`}</h2>
//         </>
//     );
// }   
// const root=ReactDOM.createRoot(document.getElementById('root'));
// root.render(<Component1/>);
////////////SOLUTION /////////////////
// /*Here is the full example using Ract Context*/
// import {useState,createContext,useContext} from "react";
// const UserContext=createContext();
// function Component1()
// {
//     const [user,setUser]=useState("Jesse Hall");
//     return(
//         <UserContext.Provider value={user}>
//         <h1>{`Hello ${user}!`}</h1>
//         <Component2/>
//         </UserContext.Provider>
//     );
// }
// function Component2()
// {
//     return(
//         <>
//         <h1>Component 2</h1>
//         <Component3 />
//         </>
//     );
// }
// function Component3()
// {
//     return(
//         <>
//         <h1>Component 3 </h1>
//         <Component4/>
//         </>

//     );
// }
// function Component4()
// {
//     return(
//         <>
//         <h1>Component 4 </h1>
//         <Component5/>
//         </>
//     );
// }
// function Component5()
// {
//     const user=useContext(UserContext);
//     return(
//         <>
//     <h1>Component 5</h1>
//     <h2>{`Hello ${user} again!`}</h2>
//     </>
//     );
// }
// const root=ReactDOM.createRoot(document.getElementById('root'));
// root.render(<Component1/>);]
////////////////////////////////////////////////////////////
/***React useRef Hook */
//Use useRef to track application renders.
// import {useState,useEffect,useRef} from "react";

// function App()
// {
//     const [inputValue,setInputValue]=useState("");
//     const count=useRef(0);
//     useEffect(()=>
//     {
//         count.current=count.current+1;
//     });
//     return(
//         <>
//         <input type="text" value={inputValue} onChange={(e)=>setInputValue(e.target.value)}
//         />
//         <h1>Render Count:{count.current}</h1>
//         </>);    
// }
// const root=ReactDOM.createRoot(document.getElementById('root'));
// root.render(<App/>);
// //Use useRef to focus the input:
// import { useRef } from "react";
// function App1()
// {
//     const inputElement = useRef();

//     const focusInput = () => {
//       inputElement.current.focus();
//     };
//      return (
//         <>
//           <input type="text" ref={inputElement} />
//           <button onClick={focusInput}>Focus Input</button>
//         </>
//       );
// }
// const root= ReactDOM.createRoot(document.getElementById('root'));
// root.render(<App1 />);
//////////////////////////////////////////
//Tracking State Changes//
/////////////////////////////////////////
// /*Use useRef to keep track of previous state values: */
// import { useState, useEffect, useRef } from "react";

// function App() {
//     const [inputValue, setInputValue] = useState("");
//     const previousInputValue = useRef("");
//     useEffect(() => {
//         previousInputValue.current = inputValue;
//       }, [inputValue]);
    
//     return(
//         <>
//          <input type="text" value={inputValue} onChange={(e)=>setInputValue(e.target.value)} />
//          <h2>Current Value:{inputValue}</h2>
//          <h2>Pervious Value:{previousInputValue.current}</h2>
//         </>
//     );

// }
// const root =ReactDOM.createRoot(document.getElementById('root'));
// root.render(<App/>);
// ////////////////////////////////////////////
// /////////React useReducer Hook/////////////
// ///////////////////////////////////////////
// import {useReducer} from "react";
// const initialTodos=[
//     {
//         id:1,
//         title:"Todo 1",
//         complete:false,
//     },
//     {
//         id:2,
//         title:"Todo 2",
//         complete:false,
//     },
// ];
// const reducer=(state,action)=>{
//     switch(action.type)
//     {
//         case "COMPLETE":
//             return state.map((todo)=>{
//                 if(todo.id===action.id)
//                 {
//                     return{...todo,complete:!todo.complete};
//                 }else{
//                     return todo;
//                 }
//             });
//             default:
//                 return state;
//     }
// };
// function Todos(){
//     const[todos,dispatch]=useReducer(reducer,initialTodos);
//     const handleComplete=(todo)=>{
//         dispatch({type:"COMPLETE",id:todo.id});
//     };
//     return(
//         <>
//          {todos.map((todo)=>(
//             <div key={todo.id}>
//             <label>
//             <input type="checkbox" checked={todo.complete} onChange={()=>handleComplete(todo)}/>
//             {todo.title}
//             </label>
//             </div>
//          ))}
//         </>
//     );
// }
// const root=ReactDOM.createRoot(document.getElementById('root'));
// root.render(<Todos/>);
//////////////////////////////////////////////////
//// React useCallback Hook///////
//////////////////////////////////////////
//////PROBLEM///////////////
/////////////////////
// import {useState} from "react";
// import Todos from "./Todos1";
// const App=()=>{
//     const [count,setCount]=useState(0);
//     const [todos,setTodos]=useState([]);
//     const increment=()=>{
//         setCount((c)=>c+1);
//     };
//     const addTodo = () => {
//         setTodos((t) => [...t, "New Todo"]);
//       };
//     return(
//         <>
//         <Todos todos={todos} addTodo={addTodo} />
//         <hr/>
//         <div>
//         Count:{count}
//         <button onClick={increment}>+</button>
//         </div>
//         </>

//     );
// };
// const root=ReactDOM.createRoot(document.getElementById('root'));
// root.render(<App />);
//////////////////////////
///SOULTION//////
//////////////////
// import { useState,useCallback} from "react";
// import Todos from "./Todos1";

// const App = () => {
//     const [count, setCount] = useState(0);
//     const [todos, setTodos] = useState([]);
  
//     const increment = () => {
//       setCount((c) => c + 1);
//     };
//     const addTodo = useCallback(() => {
//       setTodos((t) => [...t, "New Todo"]);
//     }, [todos]);
  
//     return (
//       <>
//         <Todos todos={todos} addTodo={addTodo} />
//         <hr />
//         <div>
//           Count: {count}
//           <button onClick={increment}>+</button>
//         </div>
//       </>
//     );
//   };
  
//   const root = ReactDOM.createRoot(document.getElementById('root'));
//   root.render(<App />);
////////////////////////////////////////////////////////////////////////
/******************React useMemo Hook ******************/
//////////////////////////////////////////////////////////////
// /////Performance////////
// /*A poor performing function. The expensive Calculation function runs on every render*/
// import { useState } from "react";
// const App=()=>{
//     const [count,setCount]=useState(0);
//     const [todos,setTodos]=useState([]);
//     const calculation=expensiveCalculation(count);
//     const increment=()=>{
//         setCount((c)=>c+1);
//     };
//     const addTodo=()=>{
//         setTodos((t)=>[...t,"New Todo"]);
//     };
//     return(
//         <div>
//             <div>
//                 <h2> My Todos</h2>
//                     {
//                         todos.map((todo,index)=>{
//                         return <p key={index}>{todo}</p>;
//                     })}
//                 <button onClick={addTodo}>Add Todo</button>
//             </div>
//         <hr/>
//         <div>
//         Count:{count}
//         <button onClick={increment}>+</button>
//         <h2>Expensive Calculation</h2>
//         {calculation}
//         </div>
//       </div>
//     );
// };
// const expensiveCalculation=(num)=>{
//     console.log("Calculating...");
//     for(let i=0;i<1000000000;i++)
//     {
//         num+=1;

//     }
//     return num;
// };
// const root=ReactDOM.createRoot(document.getElementById('root'));
// root.render(<App />); 
//Use useMemo
// /*Performance example using the useMemo Hook: */
// import {useState,useMemo} from "react";
// const App=()=>{
//     const [count,setCount]=useState(0);
//     const [todos,setTodos]=useState([]);
//     const calculation=useMemo(()=>expensiveCalculation(count),[count]);
//     const increment=()=>{
//         setCount((c)=>c+1);
//     };
//     const addTodo=()=>
//     {
//         setTodos((t)=>[...t,"New Todo"]);
//     };
//     return(
//         <div>
//         <div>
//         <h2>My Todos</h2>
//         {todos.map((todo,index)=>{
//             return <p key={index}>{todo}</p>;
//         })}
//         <button onClick={addTodo}>Add Todo</button>
//         </div>
//         <hr />
//         <div>
//         Count:{count}
//         <button onClick={increment}>+</button>
//         <h2>Expensive Calculation</h2>
//         {calculation}
//         </div>
//         </div>

//     );
// };
// const expensiveCalculation=(num)=>{
//     console.log("Calculating...");
//     for(let i=0;i<1000000000;i++)
//     {
//         num+=1;
//     }
//     return num;
// };
// const root=ReactDOM.createRoot(document.getElementById('root'));
// root.render(<App />);
// /////////////////////////////////////////////
// /****React Custom Hooks ********/
// ///////////////////////////////////////////
// import { useState, useEffect } from "react";
// const Home=()=>{
//     const [data,setData]=useState(null);
//     useEffect(()=>{
//         fetch("https://jsonplaceholder.typicode.com/todos")
//         .then((res)=>res.json())
//         .then((data)=>setData(data));
//     },[]);
//     return(
//         <>
//         {data && data.map((item)=>{
//             return <p key ={item.id}>{item.title}</p>;
//         })}
//         </>
//     );
// };
// const root=ReactDOM.createRoot(document.getElementById('root'));
// root.render(<Home />);
//The fetch logic may be needed in other components as well, so we will extract that itno a cistom Hook.
//Move the fetch logic to a new file to be used as a custom Hook:
import useFetch from "./useFetch";
const Home=()=>{
    const [data]=useFetch("https://jsonplaceholder.typicode.com/todos");
    return(
        <>
        {data && data.map ((item)=>{
            return <p key={item.id}>{item.title}</p>;
        })}
        </>
    );
};
const root=ReactDOM.createRoot(document.getElementById('root'));
root.render(<Home />);