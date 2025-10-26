import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import type { ReceitaTipos } from "../../Types/ReceitaTipos";

const Categorias = () => {
    const { nomeCategoria } = useParams();
    const [receitas, setReceitas] = useState<ReceitaTipos[]>([]);

    useEffect(() => {
        const buscarReceitas = async () => {
            try {
                const response = await fetch("/data/receitas.json");
                const data = await response.json();
                if (nomeCategoria) {
                    const filtradas = data.filter((r: ReceitaTipos) => {
                        const categoriaNormalizada = r.categoria.toLowerCase().replace(/\s+/g, "-");
                        const parametroNormalizado = nomeCategoria.toLowerCase();
                        return categoriaNormalizada === parametroNormalizado;
                    });
                    setReceitas(filtradas);
                } else {
                    setReceitas(data);
                }
            } catch (error) {
                console.error("Erro ao buscar receita: ", error);
            }
        };

        buscarReceitas();
    }, [nomeCategoria]);


    return (
        <>
            <div className="bg-amber-50 p-10">
                <h1 className="text-center text-2xl">Receitas</h1>
                <h2 className="text-center text-2xl pb-10">{nomeCategoria}</h2>
                <ul>
                    {
                        receitas.map((receita) => (
                            <ul className="list-disc list-inside ml-4">
                                <li key={receita.id}>
                                    <Link to={`/receita/${receita.link}`}>{receita.nome}</Link>
                                </li>
                            </ul>
                        ))
                    }
                </ul>
            </div>
        </>
    )
}

export default Categorias
