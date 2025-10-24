const FrangoGrelhado = () => {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">Frango Grelhado</h1>
      <p>Peito de frango grelhado com legumes e arroz, leve e saboroso.</p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">Ingredientes:</h2>
      <ul className="list-disc list-inside">
        <li>2 peitos de frango</li>
        <li>Sal, pimenta e limão a gosto</li>
        <li>1 colher de sopa de azeite</li>
        <li>Legumes variados para acompanhar (cenoura, abobrinha, brócolis)</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6 mb-2">Modo de preparo:</h2>
      <ol className="list-decimal list-inside">
        <li>Tempere o frango com sal, pimenta e limão.</li>
        <li>Aqueça o azeite em uma frigideira e grelhe o frango até dourar.</li>
        <li>Cozinhe os legumes no vapor até ficarem macios.</li>
        <li>Sirva o frango acompanhado dos legumes e arroz.</li>
      </ol>
    </div>
  );
};

export default FrangoGrelhado;
