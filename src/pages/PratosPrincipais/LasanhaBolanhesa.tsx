const LasanhaBolanhesa = () => {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">Lasanha à Bolonhesa</h1>
      <p>Massa em camadas com molho bolonhesa e queijo gratinado no topo.</p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">Ingredientes:</h2>
      <ul className="list-disc list-inside">
        <li>500g de massa para lasanha</li>
        <li>400g de carne moída</li>
        <li>1 cebola picada</li>
        <li>2 dentes de alho picados</li>
        <li>400ml de molho de tomate</li>
        <li>200g de mussarela fatiada</li>
        <li>Sal e pimenta a gosto</li>
        <li>Queijo parmesão ralado para gratinar</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6 mb-2">Modo de preparo:</h2>
      <ol className="list-decimal list-inside">
        <li>Refogue cebola e alho, adicione a carne e cozinhe até dourar.</li>
        <li>Acrescente o molho de tomate, tempere e cozinhe 10 minutos.</li>
        <li>Monte a lasanha alternando camadas de massa, molho e queijo.</li>
        <li>Finalize com parmesão e asse a 180°C por 30 minutos.</li>
      </ol>
    </div>
  );
};

export default LasanhaBolanhesa;
