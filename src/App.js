import { useState } from 'react';
import { data } from './data';
import './App.css';

function App() {
  const[desserts, setDesserts] = useState (data);
  const removeDessert=(id)=>{
    let newDesserts = desserts.filter(element=>element.id!==id);
    setDesserts(newDesserts);
  }
  return (
    <div className='app'>
      <div>
        <h1>ТОП-{desserts.length} самых вкусных десертов мира, которых можно приготовить дома</h1> 
      </div>
      {desserts.map((item=>{
        const{id,name, country,picture,definition}=item;
        return(<div key={id} className='dessert_container'>
          <div className='title_container'>
            <div className='dessert_name'>
              <h2>{name}</h2>
            </div>
            <div className='dessert_country'>
              <h2>{country}</h2>
            </div>
          </div>
          
          <div className='container'>
            <img src={picture} width='500px' alt="dessert"/>
          </div>
          <div>
            <p>{definition}</p>
          </div>
          <div className='btn_container'>
            <button className='btn' onClick={()=>removeDessert(id)}>удалить</button>
          </div>
        </div>
        )
      }))}
    <div className='bnt_delete_container'>
      <button className='btn_delete' onClick={()=>setDesserts([])}>Удалить все</button>
    </div>
    </div>
  );
}

export default App;
