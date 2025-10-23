import Card from "../../components/Card/Card"

const Home = () => {
    return (
        <>
            <div className="flex justify-between">
                <Card titulo="Entrada" imagem="/imagens/lamenanime.jfif" link="/categorias/entradas"></Card>
                <Card titulo="Pratos Principais" imagem="/imagens/lamenanime.jfif" link="/categorias/pratos-principais"></Card>
                <Card titulo="Sobremesas" imagem="/imagens/lamenanime.jfif" link="/categorias/sobremesas"></Card>
            </div>
        </>
    )
}

export default Home
