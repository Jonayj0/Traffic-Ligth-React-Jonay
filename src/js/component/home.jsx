import React, {useState} from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {

	const [lightGreen,setLightGreen] = useState("btn-success")
	const [lightYellow,setLightYellow] = useState("btn-warning")
	const [lightRed,setLightRed] = useState("btn-danger")

	function changeColor() {
		if (lightRed === "btn-danger") {
			setLightRed("btn-secondary")
		} else {
			setLightRed("btn-danger")
		}
		
	// if (lightGreen === "btn-success") {
	// 	setLightYellow("btn-secondary")
	// 	setLightRed("btn-secondary")
	// }
	// 	setLightGreen("btn-secondary")
	// 	setLightYellow("btn-secondary")
	// 	setLightRed("btn-secondary")
	}

	return (
		<>
		<div className="traffic top bg-dark d-flex">top</div>
			<div className="container d-flex align-items-center flex-column bg-dark">
				<div className={"btn rounded-circle "+lightRed} onClick={changeColor}>red</div>
				<div className={"btn rounded-circle "+lightYellow} onClick={changeColor}>yellow</div>
				<div className={"btn rounded-circle "+lightGreen} onClick={changeColor}>green</div>
			</div>
		</>

		// <div className="text-center">
		// 	<h1 className="text-center mt-5">Seguidores {contador}</h1>
		// 	<p>
		// 		<img src={rigoImage} />
		// 	</p>
		// 	<a href="#" className={"btn "+colorBtn} onClick={contadorFollowers}>
		// 		{text}
		// 	</a>
		// 	<p>
		// 		Made by{" "}
		// 		<a href="http://www.4geeksacademy.com">4Geeks Academy</a>, with
		// 		love!
		// 	</p>
		// </div>
	);
};

export default Home;
