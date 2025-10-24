const SaladaCaprese = () => {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">Salada Caprese</h1>
      <p>Clássica salada italiana com tomate, mussarela e manjericão fresco.</p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">Ingredientes:</h2>
      <ul className="list-disc list-inside">
        <li>2 tomates grandes fatiados</li>
        <li>200g de mussarela de búfala fatiada</li>
        <li>Folhas de manjericão fresco</li>
        <li>2 colheres de sopa de azeite de oliva</li>
        <li>Sal e pimenta a gosto</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6 mb-2">Modo de preparo:</h2>
      <ol className="list-decimal list-inside">
        <li>Intercale fatias de tomate e mussarela em um prato.</li>
        <li>Adicione folhas de manjericão entre as camadas.</li>
        <li>Regue com azeite, sal e pimenta.</li>
        <li>Sirva fresca como entrada.</li>
      </ol>
    </div>
  );
};

export default SaladaCaprese;
