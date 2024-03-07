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


/////------------------------------------ MI SEGUNDO CODIGO SE APAGAN TODOS-------------------------------/////
// const [lightGreen,setLightGreen] = useState("btn-success")
	// const [lightYellow,setLightYellow] = useState("btn-warning")
	// const [lightRed,setLightRed] = useState("btn-danger")

	// function changeColorRed() {
	// 		if (lightRed === "btn-danger") {
	// 			setLightRed("btn-secondary")
	// 		} else setLightRed("btn-danger")
	// }

		// function changeColorYellow() {
	// 		if (lightYellow === "btn-warning") {
	// 			setLightYellow("btn-secondary")
	// 		} else setLightYellow("btn-warning")
		// }

		// function changeColorGreen() {
	// 		if (lightGreen === "btn-success") {
	// 			setLightGreen("btn-secondary")
	// 		} else setLightGreen("btn-success")
	// 	}
	////------------------------------------ MI SEGUNDO CODIGO SE APAGAN TODOS-------------------------------/////



////------------------------------------ MI PRIMER CODIGO CON BOTONES Y BOTON SEMAFORO-------------------------------/////

// 	const [lightGreen,setLightGreen] = useState("btn-success")
// 	const [lightYellow,setLightYellow] = useState("btn-secondary")
// 	const [lightRed,setLightRed] = useState("btn-secondary")

// 	function changeColor() {
// 		if (lightRed === "btn-danger") {
// 			setLightRed("btn-secondary")
// 			setLightGreen("btn-success")
// 		} else if  (lightGreen === "btn-success"){
// 			setLightGreen("btn-secondary")
// 			setLightYellow("btn-warning")
// 		} else if (lightYellow === "btn-warning"){
// 			setLightYellow("btn-secondary")
// 			setLightRed("btn-danger")
// 		} else lightGreen === "btn-success"
// 	}

// 	return (
// 		<>
// 		<div className={"container d-flex justify-content-center bg-dark text-white"}>
// 		</div>
// 			<div className={"ligths container d-flex justify-content-center flex-column bg-dark"}>
// 				<div className={"btn rounded-circle "+lightRed} onClick={changeColor}></div>
// 				<div className={"btn rounded-circle "+lightYellow} onClick={changeColor}></div>
// 				<div className={"btn rounded-circle "+lightGreen} onClick={changeColor}></div>
// 			</div>
// 			<div className="d-flex justify-content-center">
// 			<div className="btn btn-info mt-5" onClick={changeColor}><b>SEMAFORO</b></div>
// 		</div>
// 		</>
// 	);
// };

// export default Home;
////------------------------------------ MI PRIMER CODIGO CON BOTONES Y BOTON SEMAFORO-------------------------------/////