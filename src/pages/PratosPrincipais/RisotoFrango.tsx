const RisotoFrango = () => {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">Risoto de Frango</h1>
      <p>Risoto cremoso com peito de frango desfiado e toque de queijo parmesão.</p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">Ingredientes:</h2>
      <ul className="list-disc list-inside">
        <li>1 xícara de arroz arbóreo</li>
        <li>200g de peito de frango cozido e desfiado</li>
        <li>1 cebola picada</li>
        <li>2 colheres de sopa de manteiga</li>
        <li>1/2 xícara de vinho branco</li>
        <li>4 xícaras de caldo de frango quente</li>
        <li>50g de queijo parmesão ralado</li>
        <li>Sal e pimenta a gosto</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6 mb-2">Modo de preparo:</h2>
      <ol className="list-decimal list-inside">
        <li>Em uma panela, refogue a cebola na manteiga até ficar transparente.</li>
        <li>Adicione o arroz e mexa por 2 minutos.</li>
        <li>Despeje o vinho branco e cozinhe até evaporar.</li>
        <li>Adicione o caldo de frango aos poucos, mexendo sempre, até o arroz ficar al dente.</li>
        <li>Misture o frango desfiado e o queijo parmesão, ajuste o sal e a pimenta.</li>
        <li>Sirva imediatamente, bem cremoso.</li>
      </ol>
    </div>
  );
};

export default RisotoFrango;
