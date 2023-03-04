import { useEffect, useState } from "react";
import { getRandomFact } from "../services/facts";

export function useCatFact() {
    const [ catFact, setCatFact ] = useState()

    const refreshFact = () => {
        getRandomFact().then( newFact => setCatFact( newFact ))
    };
    useEffect( refreshFact, [])

    return { catFact, refreshFact }
}