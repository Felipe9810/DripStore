import Input from "./Input.jsx";

function FormSection(props) {
    return (
      <>
        <div className="flex flex-col gap-2">
          <h3 className="text-[14px] font-bold">{props.titulo}</h3>
          <hr />
          <Input htmlFor="cep" type="text" label="cep" required={true} placeholder=" Insira seu Cep"  />
          <Input htmlFor="complemento" type="text" label="complemento" placeholder=" Insira complemento"  />
          <Input htmlFor="endereço"  type="text" label="endereço"  placeholder="Insira seu Endereço" required={true} />
          <Input htmlFor="bairro" type="text" label="bairro" placeholder="Insira seu Birro" required={true} />
          <Input htmlFor="cidade" type="text" label="cidade" placeholder="Insira sua Cidade" required={true}/>
          </div>
      </>
    );
}


export default FormSection;
