import { useEffect, useState } from "react";

const CharacterCards = ({characters, setCharacters}) => {
    const get = async () => {
        const response = await fetch("http://localhost:5000/mainCharacters");
        const res = await response.json();
        setCharacters(res)
    }
    useEffect(() => {
        get()
    }, [])
}

export default CharacterCards;