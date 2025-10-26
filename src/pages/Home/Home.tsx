import Card from "../../components/Card/Card"

const Home = () => {
    return (
        <>
            <div className="bg-amber-50 w-full py-8">
                <h1 className="text-center text-2xl">Home</h1>
                <div className="flex flex-col md:flex-row justify-between">
                    <Card titulo="Entradas" imagem="/imagens/guacamole.jpg" link="/categorias/entradas"></Card>
                    <Card titulo="Pratos Principais" imagem="/imagens/arroz.webp" link="/categorias/pratos-principais"></Card>
                    <Card titulo="Sobremesas" imagem="/imagens/torta-limao.jpeg" link="/categorias/sobremesas"></Card>
                </div>
            </div>
        </>
    )
}

export default Home
