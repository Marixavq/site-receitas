const BrownieChocolate = () => {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">Brownie de Chocolate</h1>
      <p>Brownie denso e fudgy, perfeito para os amantes de chocolate.</p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">Ingredientes:</h2>
      <ul className="list-disc list-inside">
        <li>200g de chocolate meio amargo</li>
        <li>150g de manteiga</li>
        <li>200g de açúcar</li>
        <li>3 ovos</li>
        <li>100g de farinha de trigo</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6 mb-2">Modo de preparo:</h2>
      <ol className="list-decimal list-inside">
        <li>Derreta o chocolate com a manteiga em banho-maria.</li>
        <li>Bata os ovos com o açúcar até formar um creme fofo.</li>
        <li>Adicione o chocolate derretido e depois a farinha.</li>
        <li>Asse em forno preaquecido a 180°C por 25-30 minutos.</li>
      </ol>
    </div>
  );
};

export default BrownieChocolate;
