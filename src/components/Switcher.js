import { useContext, useState } from "react";
import { DarkModeSwitch } from "react-toggle-dark-mode";
import useDarkSide from "../hooks/useDarkSide";
import DarkContext from "../util/DarkContext";

export default function Switcher() {
	const [colorTheme, setTheme] = useDarkSide();
	const [darkSide, setDarkSide] = useState(
		colorTheme === "light" ? true : false
	);
	const {dark,setDark} = useContext(DarkContext);
	//console.log(dark)
	const toggleDarkMode = (checked) => {
		setDark(!dark);
		setTheme(colorTheme);
		setDarkSide(checked);
	};

	return (
		<>
			<DarkModeSwitch
				
				checked={darkSide}
				onChange={toggleDarkMode}
				
			/>
		</>
	);
}
