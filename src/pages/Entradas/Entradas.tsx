import Card from "../../components/Card/Card";
import bruschettaImg from "../../assets/bruschetta.jpg";
import bolinhoQueijoImg from "../../assets/bolinhoQueijo.jpg";
import capreseImg from "../../assets/caprese.jpg";
import camaraoImg from "../../assets/camarao.jpg";
import asasFrangoImg from "../../assets/asasFrango.jpg";
import abobrinhaImg from "../../assets/abobrinha.jpg";

const Entradas = () => {
  return (
    <main className="flex-1 container mx-auto p-6">
      <div className="grid grid-cols-3 gap-6">
        <Card
          titulo="Bruschetta de Tomate"
          imagem={bruschettaImg}
          link="/Pages/Entradas/BruschettaTomate"
        />
        <Card
          titulo="Bolinho de Queijo"
          imagem={bolinhoQueijoImg}
          link="/Pages/Entradas/BolinhoQueijo"
        />
        <Card
          titulo="Salada Caprese"
          imagem={capreseImg}
          link="/Pages/Entradas/SaladaCaprese"
        />
      </div>

      <div className="grid grid-cols-3 gap-6 mt-10">
        <Card
          titulo="Camarão Empanado"
          imagem={camaraoImg}
          link="/Pages/Entradas/CamaraoEmpanado"
        />
        <Card
          titulo="Asinhas de Frango Picantes"
          imagem={asasFrangoImg}
          link="/Pages/Entradas/AsinhasFrango"
        />
        <Card
          titulo="Palitos de Abobrinha"
          imagem={abobrinhaImg}
          link="/Pages/Entradas/PalitosAbobrinha"
        />
      </div>
    </main>
  );
};

export default Entradas;
