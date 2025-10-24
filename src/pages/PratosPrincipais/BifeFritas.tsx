const BifeFritas = () => {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">Bife com Fritas</h1>
      <p>Bife suculento acompanhado de batatas fritas crocantes.</p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">Ingredientes:</h2>
      <ul className="list-disc list-inside">
        <li>2 bifes de alcatra</li>
        <li>Sal e pimenta a gosto</li>
        <li>Óleo ou manteiga para fritar</li>
        <li>3 batatas médias cortadas em palitos</li>
        <li>Sal a gosto para fritas</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6 mb-2">Modo de preparo:</h2>
      <ol className="list-decimal list-inside">
        <li>Tempere os bifes com sal e pimenta.</li>
        <li>Aqueça a frigideira com óleo e frite os bifes ao ponto desejado.</li>
        <li>Frite as batatas em óleo quente até dourarem, tempere com sal.</li>
        <li>Sirva os bifes acompanhados das fritas.</li>
      </ol>
    </div>
  );
};

export default BifeFritas;
