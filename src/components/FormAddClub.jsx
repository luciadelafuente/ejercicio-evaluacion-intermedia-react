function FormAddClub({changeNewClub, addNewClub}) {
    const handleInput = (event) => {
        changeNewClub(event.target.id, event.target.value)
    }
    const handleInputChecked = (event) => {
        changeNewClub(event.target.id, event.target.checked)
    }
    const handleClick = (event) => {
        event.preventDefault()
        addNewClub()
    }
  return (
    <form >
        <label htmlFor="name">Nombre del club</label>
            <input type="text" name="name" id="name" onChange={handleInput}/>
        <label htmlFor="openOnWeekdays">¿Abre entre semana?</label>
            <input type="checkbox" name="openOnWeekdays" id="openOnWeekdays" onChange={handleInputChecked}/>
        <label htmlFor="openOnWeekend">¿Abre los fines de semana?</label>
            <input type="checkbox" name="openOnWeekend" id="openOnWeekend" onChange={handleInputChecked}/>
        <button onClick={handleClick}>Añadir un nuevo club</button>
        
    </form>
  )
}

export default FormAddClub