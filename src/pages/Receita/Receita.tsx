import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import type { ReceitaTipos } from "../../Types/ReceitaTipos";

const Receita = () => {
    const { link } = useParams();

    const [receita, setReceita] = useState<ReceitaTipos | null>(null);

    useEffect(() => {
        fetch("/data/receitas.json")
            .then((res) => res.json())
            .then((data: ReceitaTipos[]) => {
                const encontrado = data.find((r) => r.link === link);
                setReceita(encontrado || null)
            })
            .catch(() => setReceita(null))
    }, [link]);

    if (!receita) {
        return (
            <>
                <h1>Receita não encontrada!</h1>
            </>
        )
    }


    return (
        <>
            <div className="p-10 bg-amber-50">
                <h1 className="text-center text-2xl pb-10">{receita.nome}</h1>

                <ul>
                    <li>
                        <strong>Ingredientes:</strong>
                        <ul className="list-disc list-inside ml-4">
                            {receita.ingredientes.map((item, index) => (
                                <li key={index}>{item}</li>
                            ))}
                        </ul>
                    </li>

                    <li>
                        <strong>Modo de preparo:</strong> {receita.modoPreparo}
                    </li>

                    <li>
                        <strong>Tempo de preparo:</strong> {receita.tempo}
                    </li>
                </ul>

                {/* <img src={`/imagens/${receita.imagem}`} width={'10%'} /><br /> */}

            </div>
        </>
    )
}
export default Receita