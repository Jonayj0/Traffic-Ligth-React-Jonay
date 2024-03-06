import React, {useState} from "react";

//create your first component
const Home = () => {

	const [lightGreen,setLightGreen] = useState("btn-success")
	const [lightYellow,setLightYellow] = useState("btn-secondary")
	const [lightRed,setLightRed] = useState("btn-secondary")

	function changeColor() {
		if (lightRed === "btn-danger") {
			setLightRed("btn-secondary")
			setLightGreen("btn-success")
		} else if  (lightGreen === "btn-success"){
			setLightGreen("btn-secondary")
			setLightYellow("btn-warning")
		} else if (lightYellow === "btn-warning"){
			setLightYellow("btn-secondary")
			setLightRed("btn-danger")
		} else lightGreen === "btn-success"
	}

	// const [lightGreen,setLightGreen] = useState("btn-success")
	// const [lightYellow,setLightYellow] = useState("btn-warning")
	// const [lightRed,setLightRed] = useState("btn-danger")

	// function changeColor() {
	// 		if (lightRed === "btn-danger") {
	// 			setLightRed("btn-secondary")
	// 		} else setLightRed("btn-danger")

	// 		if (lightYellow === "btn-warning") {
	// 			setLightYellow("btn-secondary")
	// 		} else setLightYellow("btn-warning")

	// 		if (lightGreen === "btn-success") {
	// 			setLightGreen("btn-secondary")
	// 		} else setLightGreen("btn-success")
	// 	}

	return (
		<>
		<div className={"container d-flex justify-content-center bg-dark text-white"}>
		</div>
			<div className={"ligths container d-flex justify-content-center flex-column bg-dark"}>
				<div className={"btn rounded-circle "+lightRed} onClick={changeColor}></div>
				<div className={"btn rounded-circle "+lightYellow} onClick={changeColor}></div>
				<div className={"btn rounded-circle "+lightGreen} onClick={changeColor}></div>
			</div>
		</>
	);
};

export default Home;
