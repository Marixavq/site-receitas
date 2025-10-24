const TortaLimao = () => {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">Torta de Limão</h1>
      <p>Massa crocante com recheio cremoso de limão e cobertura de chantilly.</p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">Ingredientes:</h2>
      <ul className="list-disc list-inside">
        <li>1 pacote de biscoito maisena triturado</li>
        <li>100g de manteiga derretida</li>
        <li>1 lata de leite condensado</li>
        <li>1/2 xícara de suco de limão</li>
        <li>Chantilly para cobertura</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6 mb-2">Modo de preparo:</h2>
      <ol className="list-decimal list-inside">
        <li>Misture o biscoito triturado com manteiga e forre uma forma de torta.</li>
        <li>Bata o leite condensado com suco de limão e despeje sobre a base.</li>
        <li>Leve à geladeira por 3 horas.</li>
        <li>Cubra com chantilly antes de servir.</li>
      </ol>
    </div>
  );
};

export default TortaLimao;

