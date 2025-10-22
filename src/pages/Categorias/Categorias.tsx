import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import type { ReceitaTipos } from "../../Types/ReceitaTipos";

const Categorias = () => {
    const [receitas, setReceitas] = useState<ReceitaTipos[]>([]);

    useEffect(() => {
        const buscarReceitas = async () => {
        try {
            const response = await fetch("/data/receitas.json");
            const data = await response.json();
            setReceitas(data);
        }
        catch (error) {
            console.error("Erro ao buscar receita: ", error)
        }
    }
        buscarReceitas()
    }, []);


    return (
        <>
            <h1>Home Page</h1>
            <ul>
                {
                    receitas.map((receita) => (
                        <li key={receita.id}>
                            <Link to={`/receita/${receita.link}`}>{receita.nome}</Link>
                        </li>
                    ))
                }
            </ul>
        </>
    )
}

export default Categorias
