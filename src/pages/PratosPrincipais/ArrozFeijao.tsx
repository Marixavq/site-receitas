const ArrozFeijao = () => {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">Arroz e Feijão</h1>
      <p>Prato tradicional brasileiro, simples e saboroso.</p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">Ingredientes:</h2>
      <ul className="list-disc list-inside">
        <li>1 xícara de arroz</li>
        <li>2 xícaras de água</li>
        <li>1 colher de sopa de óleo</li>
        <li>1 dente de alho picado</li>
        <li>Sal a gosto</li>
        <li>1 xícara de feijão cozido</li>
        <li>Água e sal para o feijão</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6 mb-2">Modo de preparo:</h2>
      <ol className="list-decimal list-inside">
        <li>Refogue o alho no óleo, adicione o arroz e refogue por 2 minutos.</li>
        <li>Acrescente a água e o sal, cozinhe em fogo baixo até secar.</li>
        <li>Cozinhe o feijão separado com água e sal.</li>
        <li>Sirva o arroz com o feijão quente.</li>
      </ol>
    </div>
  );
};

export default ArrozFeijao;
