import ClubCard from "./ClubCard"

function ClubsList({clubs, deleteClub}) {
  return (
    <>
        <ul>
            {clubs.map((club, index)=> <li key={index}> <ClubCard club ={club} deleteClub = {deleteClub}/> </li>)}
        </ul>
    </>
  )
}

export default ClubsList