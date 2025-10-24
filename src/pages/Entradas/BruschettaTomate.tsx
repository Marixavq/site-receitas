const Bruschetta = () => {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">Bruschetta</h1>
      <p>Pão italiano torrado com tomate, manjericão e azeite de oliva.</p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">Ingredientes:</h2>
      <ul className="list-disc list-inside">
        <li>6 fatias de pão italiano</li>
        <li>2 tomates maduros picados</li>
        <li>1 dente de alho</li>
        <li>Folhas de manjericão a gosto</li>
        <li>2 colheres de sopa de azeite de oliva</li>
        <li>Sal e pimenta a gosto</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6 mb-2">Modo de preparo:</h2>
      <ol className="list-decimal list-inside">
        <li>Torre as fatias de pão até ficarem douradas.</li>
        <li>Esfregue o alho nas fatias de pão torrado.</li>
        <li>Misture tomate, manjericão, azeite, sal e pimenta.</li>
        <li>Coloque a mistura sobre as torradas e sirva imediatamente.</li>
      </ol>
    </div>
  );
};

export default Bruschetta;
