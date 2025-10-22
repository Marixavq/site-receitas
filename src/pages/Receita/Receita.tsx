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

                <h1>Receita não encontrado!</h1>
            </>
        )
    }


    return (
        <>
            <h1>Lista de receitas</h1>
            <b>{receita.nome}</b><br />
            <strong>Ingredientes: </strong>{receita.ingredientes}<br />
            <b>Modo de preparo: </b>{receita.modoPreparo}<br />
            <b>Tempo de preparo: </b>{receita.tempo}<br />
            {/* <img src={`/imagens/${receita.imagem}`} width={'10%'} /><br /> */}
        </>
    )
}
export default Receita