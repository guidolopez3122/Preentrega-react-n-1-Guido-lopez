import "./formcheckout.css"

const FormCheckout = ({dataForm, handleChangeInput, handleSubmitForm}) => {
  return (
    <form onSubmit={handleSubmitForm}>
    <label>Nombre completo</label>
    <input type="text" name="fullname" value={dataForm.fullname} onChange={handleChangeInput} />

    <label>Telefono</label>
    <input type="number" name="phone" value={dataForm.phone} onChange={handleChangeInput} />

    <label>E-mail</label>
    <input type="email" name="email" value={dataForm.email} onChange={handleChangeInput} />

    <button type="submit">Enviar pedido</button>
  </form>
  )
}

export default FormCheckout
