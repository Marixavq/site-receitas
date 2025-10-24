const BrigadeiroChocolate = () => {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">Brigadeiro de Colher</h1>
      <p>Docinho cremoso de chocolate, perfeito para saborear de colher.</p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">Ingredientes:</h2>
      <ul className="list-disc list-inside">
        <li>1 lata de leite condensado</li>
        <li>2 colheres de sopa de chocolate em pó</li>
        <li>1 colher de sopa de manteiga</li>
        <li>Chocolate granulado ou raspas para decorar (opcional)</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6 mb-2">Modo de preparo:</h2>
      <ol className="list-decimal list-inside">
        <li>Em uma panela, misture leite condensado, chocolate em pó e manteiga.</li>
        <li>Cozinhe em fogo baixo, mexendo sempre, até engrossar.</li>
        <li>Despeje em potinhos individuais e decore com granulado.</li>
      </ol>
    </div>
  );
};

export default BrigadeiroChocolate;

