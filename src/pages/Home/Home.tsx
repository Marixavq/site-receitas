import Card from "../../components/Card/Card"

const Home = () => {
    return (
        <>
            <div className="flex justify-between">
                <Card title="Entrada" imagemUrl="/imagens/lamenanime.jfif"></Card>
                <Card title="Pratos Principais" imagemUrl="/imagens/lamenanime.jfif"></Card>
                <Card title="Sobremesas" imagemUrl="/imagens/lamenanime.jfif"></Card>
            </div>
        </>
    )
}

export default Home
