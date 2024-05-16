function ClubCard({club, deleteClub}) {
    const handleClick = (event) => {
        event.preventDefault()
        deleteClub(event.target.id);   
    }

  return (
   <article>
        <h3>{club.name}</h3>
        <h4>Abierto entre semana: {club.openOnWeekdays === true ? "Sí" : "No"}</h4>
        <h4>Abierto el fin de semana: {club.openOnWeekend === true ? "Sí" : "No"}</h4>
        <button onClick={handleClick} id = {club.id}>X</button>
   </article>       
   
  )
}

export default ClubCard