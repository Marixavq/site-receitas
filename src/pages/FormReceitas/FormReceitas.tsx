const FormReceitas = () => {
  return (
    <>
      <div className="bg-green-400 w-full">
        <div className="fieldset border border-black w-96 h-h mx-auto rounded p-4">
          <h1 className="text-center pb-4">Envie suas receitas</h1>

          <div className="pb-4">
            <label htmlFor="email" className="pr-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="bg-transparent border border-black rounded-sm w-4/5"
            />
          </div>

          <div className="pb-3 flex flex-col">
            <label htmlFor="ingredientes" className="pr-2 text-center">
              Ingredientes
            </label>
            <textarea
              id="ingredientes"
              rows={4}
              className="bg-transparent border border-black rounded-sm"
            />
          </div>

          <div className="pb-3 flex flex-col">
            <label htmlFor="preparo" className="pr-2 text-center">
              Modo de preparo
            </label>
            <textarea
              id="preparo"
              rows={8}
              className="bg-transparent border border-black rounded-sm" 
            />
          </div>

          <div className="flex justify-between">
            <p className="my-auto">link de cadastro</p>
            <button className="bg-blue-500 border border-black px-4 py-3  rounded">
              Enviar
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default FormReceitas;
