////------------------------------------ MI CODIGO FINAL COMPLETO LARGO -------------------------------/////

import React, {useState} from "react";

//create your first component
const Home = () => {

	const [lightGreen,setLightGreen] = useState("btn-success")
	const [lightYellow,setLightYellow] = useState("btn-secondary")
	const [lightRed,setLightRed] = useState("btn-secondary")

	function modSemaforo() {
		if (lightRed === "btn-danger") {
			setLightRed("btn-secondary")
			setLightGreen("btn-success")
		} else if  (lightGreen === "btn-success"){
			setLightGreen("btn-secondary")
			setLightYellow("btn-warning")
		} else if (lightYellow === "btn-warning"){
			setLightYellow("btn-secondary")
			setLightRed("btn-danger")
		} else setLightGreen("btn-success")
	}

	return (
		<>
		<div className={"container d-flex justify-content-center bg-dark text-white"}>
		</div>
			<div className={"ligths container d-flex justify-content-center flex-column bg-dark"}>
				<div className={"btn rounded-circle "+lightRed} onClick={changeColorRed}></div>
				<div className={"btn rounded-circle "+lightYellow} onClick={changeColorYellow}></div>
				<div className={"btn rounded-circle "+lightGreen} onClick={changeColorGreen}></div>
			</div>
			<div className="d-flex justify-content-center">
			<div className="btn btn-info mt-5" onClick={modSemaforo}><b>SEMAFORO</b></div>
		</div>
		</>
	);

	function changeColorRed() {
				if (lightRed === "btn-danger") {
					setLightRed("btn-secondary")
					} else setLightRed("btn-danger")
					setLightYellow("btn-secondary")
					setLightGreen("btn-secondary")
				}
	
	function changeColorYellow() {
				if (lightYellow === "btn-warning") {
					setLightYellow("btn-secondary")
					} else setLightYellow("btn-warning")
					setLightRed("btn-secondary")
					setLightGreen("btn-secondary")
				}
	
	function changeColorGreen() {
				if (lightGreen === "btn-success") {
					setLightGreen("btn-secondary")
					} else setLightGreen("btn-success")
					setLightRed("btn-secondary")
					setLightYellow("btn-secondary")
				}
};

export default Home;




///////----------------------------------------------------------------------------------------------------------////////////
//////-------------------------------------------------------------------------------------------------------//////////
/////------------------------------------------------------------------------------------------------------///////

//----------------------------- MI SEGUNDO CODIGO SIN BTNS Y CON BOTON FALTA FUNCION SEMAFORO------------/////

// import React, {useState} from "react";

// //create your first component
// const Home = () => {

// 	const [light,setLight] = useState("green")
	

// 	return (
// 		<>
// 		<div className="post container"></div>
// 		<div className="top container">
// 				<div onClick={() => setLight("red")} className={"light red" + (light === "red" ? " onRed" : "")}></div>
// 				<div onClick={() => setLight("yellow")} className={"light yellow" + (light === "yellow" ? " onYellow" : "")}></div>
// 				<div onClick={() => setLight("green")} className={"light green" + (light === "green" ? " onGreen" : "")}></div>
// 		</div>
// 			<div className="d-flex justify-content-center">
// 			<div onClick={() => modSemaforo("")} className={"btn btn-info mt-5 "} ><b>SEMAFORO</b></div>
// 		</div>
// 		</>
// 	);
// 	function modSemaforo() {
// 				if (light === "onRed") {
// 					setLight("red")
// 					setLight("onGreen")
// 				} else if  (light === "onGreen"){
// 					setLight("green")
// 					setLight("onYellow")
// 				} else if (light === "onYellow"){
// 					setLight("yellow")
// 					setLight("onRed")
// 				} else setLight("onGreen")
// 			}
// };

// export default Home;
//----------------------------- MI SEGUNDO CODIGO SIN BTNS Y CON BOTON FALTA FUNCION SEMAFORO------------/////


//--------------------------------------------------- CODIGO ALEJANDRO-------------------------------/////
// const [selectedColor, setSelectedColor] = useState("red");

// 	return (
	
// 		<div className="traffic-light">
// 			<div onClick={() => setSelectedColor("red")} 
// 				 className={"ligth red" + (selectedColor === "red" ? " glow" : "")} ></div>
// 			<div onClick={() => setSelectedColor("yellow")} 
// 				 className={"ligth yellow" + (selectedColor === "yellow" ? " glow" : "")}></div>
// 			<div onClick={() => setSelectedColor("green")} 
// 				 className={"ligth green" + (selectedColor === "green" ? " glow" : "")}></div>
// 		</div>
// 		);
// 	};
//--------------------------------------------------- CODIGO ALEJANDRO-------------------------------/////


