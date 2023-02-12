import { useContext } from "react";
import NavigationContext from "../context/navigataion";

function useNavigation() {
	return useContext(NavigationContext);
}

export default useNavigation;
