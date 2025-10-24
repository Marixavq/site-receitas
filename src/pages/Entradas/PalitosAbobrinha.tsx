const PalitosAbobrinha = () => {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">Palitos de Abobrinha</h1>
      <p>Palitos de abobrinha empanados e crocantes, servidos com molho de iogurte.</p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">Ingredientes:</h2>
      <ul className="list-disc list-inside">
        <li>2 abobrinhas cortadas em palitos</li>
        <li>2 ovos batidos</li>
        <li>Farinha de rosca para empanar</li>
        <li>Óleo para fritar</li>
        <li>Sal e pimenta a gosto</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6 mb-2">Modo de preparo:</h2>
      <ol className="list-decimal list-inside">
        <li>Tempere os palitos de abobrinha com sal e pimenta.</li>
        <li>Passe nos ovos e depois na farinha de rosca.</li>
        <li>Frite até dourar e escorra em papel toalha.</li>
        <li>Sirva com molho de iogurte.</li>
      </ol>
    </div>
  );
};

export default PalitosAbobrinha;
