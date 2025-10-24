import Card from "../../components/Card/Card";
import estrogonofeImg from "../../assets/estrogonofe.jpg";
import risotoImg from "../../assets/risoto.jpg";
import arrozFeijaoImg from "../../assets/arrozfeijao.jpg";
import bifeFritasImg from "../../assets/bifefritas.jpg";
import lasanhaImg from "../../assets/lasanha.jpg";
import frangoGrelhadoImg from "../../assets/frangogrelhado.jpg";

const PratosPrincipais = () => {
  return (
    <main className="flex-1 container mx-auto p-6">
      <div className="grid grid-cols-3 gap-6">
        <Card
          titulo="Estrogonofe de Carne"
          imagem={estrogonofeImg}
          link="/Pages/PratosPrincipais/EstrogonofeCarne"
        />
        <Card
          titulo="Risoto de Frango"
          imagem={risotoImg}
          link="/Pages/PratosPrincipais/RisotoFrango"
        />
        <Card
          titulo="Arroz e Feijão"
          imagem={arrozFeijaoImg}
          link="/Pages/PratosPrincipais/ArrozFeijao"
        />
      </div>

      <div className="grid grid-cols-3 gap-6 mt-10">
        <Card
          titulo="Bife com Fritas"
          imagem={bifeFritasImg}
          link="/Pages/PratosPrincipais/BifeFritas"
        />
        <Card
          titulo="Lasanha à Bolonhesa"
          imagem={lasanhaImg}
          link="/Pages/PratosPrincipais/LasanhaBolanhesa"
        />
        <Card
          titulo="Frango Grelhado"
          imagem={frangoGrelhadoImg}
          link="/Pages/PratosPrincipais/FrangoGrelhado"
        />
      </div>
    </main>
  );
};

export default PratosPrincipais;

