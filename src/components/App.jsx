// Fichero src/components/App.jsx
import '../styles/App.css';
import initialData from "../services/data.json";
import { useState } from 'react';
import ClubsList from './ClubsList';
import FormAddClub from './FormAddClub';
import Filter from './Filter';

function App() {
const [clubs, setClubs] = useState(initialData);
const [clubsFilter, setClubsFilter] = useState(clubs);
const [newClub, setNewClub] = useState({ name: "", openOnWeekdays: "", openOnWeekend: "", id:"" });
const [valueSearch, setValueSearch] = useState("");
const changeNewClub = (key, value) => {

  newClub.id = clubs.length + 1
  setNewClub({ ...newClub, [key]: value })
  if (key === "name") {
    setNewClub({ ...newClub, name: value })
  } else if (key === "openOnWeekdays") {
    setNewClub({ ...newClub, openOnWeekdays: value })
  }else if(key === "openOnWeekend"){
    setNewClub({ ...newClub, openOnWeekend: value })
  }
 }

const addNewClub = () => {
  setClubs([...clubs, newClub]);
  filterClub(valueSearch);
}

const filterClub = (value) => {
  setValueSearch(value);
  if (value === "openOnWeekdays"){
    setClubsFilter(clubs.filter((item) => item.openOnWeekdays === true));
  }else if (value === "openOnWeekend"){
    setClubsFilter(clubs.filter((item) => item.openOnWeekend === true));
  }else{
    setClubsFilter(clubs);
  }
} 

const deleteClub = (index) => {
  const copyClubs = clubs;
  copyClubs.splice(index, 1);
  setClubs(copyClubs);
}

  return (
    <>
      <Filter filterClub = {filterClub}/>
      <ClubsList clubs = {clubsFilter} deleteClub = {deleteClub}/>
      <FormAddClub changeNewClub = {changeNewClub} addNewClub = {addNewClub}/>
    </>
  );
}

export default App;

