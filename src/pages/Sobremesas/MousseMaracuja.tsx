const MousseMaracuja = () => {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">Mousse de Maracujá</h1>
      <p>Mousse aerada e cítrica, feita com polpa de maracujá fresco.</p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">Ingredientes:</h2>
      <ul className="list-disc list-inside">
        <li>1 lata de leite condensado</li>
        <li>1 lata de creme de leite</li>
        <li>1 lata de suco de maracujá concentrado</li>
        <li>Polpa de maracujá para decorar</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6 mb-2">Modo de preparo:</h2>
      <ol className="list-decimal list-inside">
        <li>Bata o leite condensado, creme de leite e suco de maracujá no liquidificador.</li>
        <li>Despeje em taças individuais ou em um refratário.</li>
        <li>Leve à geladeira por pelo menos 4 horas antes de servir.</li>
        <li>Decore com a polpa de maracujá.</li>
      </ol>
    </div>
  );
};

export default MousseMaracuja;

