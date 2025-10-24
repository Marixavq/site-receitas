const AsinhasFrango = () => {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">Asinhas de Frango Picantes</h1>
      <p>Asinhas marinadas em temperos picantes e assadas até ficarem crocantes.</p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">Ingredientes:</h2>
      <ul className="list-disc list-inside">
        <li>500g de asinhas de frango</li>
        <li>2 colheres de sopa de molho de pimenta</li>
        <li>2 colheres de sopa de azeite</li>
        <li>1 colher de chá de páprica</li>
        <li>Sal e pimenta a gosto</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6 mb-2">Modo de preparo:</h2>
      <ol className="list-decimal list-inside">
        <li>Marinar as asinhas com azeite, molho de pimenta, páprica, sal e pimenta.</li>
        <li>Assar em forno preaquecido a 200°C por 25-30 minutos.</li>
        <li>Virar na metade do tempo para dourar por igual.</li>
      </ol>
    </div>
  );
};

export default AsinhasFrango;
