
function Filter({filterClub}) {
    const handleInput = (event) => {
        filterClub(event.target.value);
      }
  return (
    <header>
         <h1>Mis clubs</h1>
         <select onChange={handleInput} name="" id="">
            <option id="" value="todos">Todos</option>
            <option id="" value="openOnWeekdays">Los que abren entre semana</option>
            <option id="" value="openOnWeekend">Los que abren los fines de semana</option>
         </select>

    </header>
  )
}

export default Filter