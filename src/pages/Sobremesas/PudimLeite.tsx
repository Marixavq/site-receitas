const PudimLeite = () => {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">Pudim de Leite</h1>
      <p>Clássico pudim de leite condensado, cremoso e caramelizado.</p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">Ingredientes:</h2>
      <ul className="list-disc list-inside">
        <li>1 lata de leite condensado</li>
        <li>2 latas de leite (usar a lata de leite condensado como medida)</li>
        <li>3 ovos</li>
        <li>1 xícara de açúcar (para o caramelo)</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6 mb-2">Modo de preparo:</h2>
      <ol className="list-decimal list-inside">
        <li>Derreta o açúcar em uma panela até formar caramelo e despeje em uma forma de pudim.</li>
        <li>Bata no liquidificador o leite condensado, o leite e os ovos.</li>
        <li>Despeje a mistura na forma caramelizada.</li>
        <li>Cozinhe em banho-maria por 50-60 minutos. Deixe esfriar antes de desenformar.</li>
      </ol>
    </div>
  );
};

export default PudimLeite;

