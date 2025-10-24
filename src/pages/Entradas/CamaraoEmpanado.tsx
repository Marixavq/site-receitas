const CamaraoEmpanado = () => {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">Camarão Empanado</h1>
      <p>Camarões suculentos empanados e fritos, servidos com molho especial.</p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">Ingredientes:</h2>
      <ul className="list-disc list-inside">
        <li>300g de camarões limpos</li>
        <li>2 ovos batidos</li>
        <li>Farinha de rosca para empanar</li>
        <li>Óleo para fritar</li>
        <li>Sal, pimenta e limão a gosto</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6 mb-2">Modo de preparo:</h2>
      <ol className="list-decimal list-inside">
        <li>Tempere os camarões com sal, pimenta e limão.</li>
        <li>Passe-os nos ovos e depois na farinha de rosca.</li>
        <li>Frite em óleo quente até dourar e escorra em papel toalha.</li>
        <li>Sirva com molho de sua preferência.</li>
      </ol>
    </div>
  );
};

export default CamaraoEmpanado;
