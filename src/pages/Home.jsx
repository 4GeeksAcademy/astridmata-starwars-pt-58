import { useEffect } from "react";
import rigoImageUrl from "../assets/img/rigo-baby.jpg";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import CardPeople from "../components/CardPeople.jsx";
export const Home = () => {

	const { store, dispatch } = useGlobalReducer()

	async function character() {

		const response = await fetch("https://www.swapi.tech/api/people/")

		const data = await response.json()
		const personajesBasicos = data.results;
		dispatch({
			type: "get_personajes",
			payload: { personaje: personajesBasicos }
		})


	}



	useEffect(() => {
		character()
	}, [])

	return (
		<div className="text-center mt-5">
			<h1>Starwars!</h1>
			{store.character.map((value, index) => {
				return (
					<CardPeople key={index} people={value} />
				)
			})}



		</div>
	);
}; 