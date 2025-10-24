const BolinhoQueijo = () => {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">Bolinho de Queijo</h1>
      <p>Deliciosos bolinhos recheados com queijo derretido, crocantes por fora.</p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">Ingredientes:</h2>
      <ul className="list-disc list-inside">
        <li>200g de queijo mussarela ralado</li>
        <li>100g de farinha de trigo</li>
        <li>1 ovo</li>
        <li>Óleo para fritar</li>
        <li>Sal e pimenta a gosto</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6 mb-2">Modo de preparo:</h2>
      <ol className="list-decimal list-inside">
        <li>Misture o queijo com a farinha, ovo, sal e pimenta.</li>
        <li>Modele bolinhas e frite em óleo quente até dourar.</li>
        <li>Escorra em papel toalha e sirva quente.</li>
      </ol>
    </div>
  );
};

export default BolinhoQueijo;
