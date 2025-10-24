import Card from "../../components/Card/Card";
import pudimImg from "../../assets/pudim.jpg";
import brigadeiroImg from "../../assets/brigadeiro.jpg";
import mousseImg from "../../assets/mousse.jpg";
import tortaLimãoImg from "../../assets/tortaLimao.jpg";
import brownieImg from "../../assets/brownie.jpg";
import cheesecakeImg from "../../assets/cheesecake.jpg";

const Sobremesas = () => {
  return (
    <main className="flex-1 container mx-auto p-6">
      <div className="grid grid-cols-3 gap-6">
        <Card
          titulo="Pudim de Leite"
          imagem={pudimImg}
          link="/Pages/Sobremesas/PudimLeite"
        />
        <Card
          titulo="Brigadeiro de Colher"
          imagem={brigadeiroImg}
          link="/Pages/Sobremesas/BrigadeiroChocolate"
        />
        <Card
          titulo="Mousse de Maracujá"
          imagem={mousseImg}
          link="/Pages/Sobremesas/MousseMaracuja"
        />
      </div>

      <div className="grid grid-cols-3 gap-6 mt-10">
        <Card
          titulo="Torta de Limão"
          imagem={tortaLimãoImg}
          link="/Pages/Sobremesas/TortaLimao"
        />
        <Card
          titulo="Brownie de Chocolate"
          imagem={brownieImg}
          link="/Pages/Sobremesas/BrownieChocolate"
        />
        <Card
          titulo="Cheesecake de Frutas Vermelhas"
          imagem={cheesecakeImg}
          link="/Pages/Sobremesas/CheesecakeFrutasVermelhas"
        />
      </div>
    </main>
  );
};

export default Sobremesas;
