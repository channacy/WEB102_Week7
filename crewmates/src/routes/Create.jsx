import { useState } from 'react'


function Create({ supabase }) { 
  const [troop, setTroop] = useState({ name: null, count: null})

  const handleChange = (event) => {
    const {name, value} = event.target;
    console.log("Name: ", name, " value: ", value);
    setTroop( (prev) => {
        return {
            ...prev,
            [name]:value,
        }
    })
}

  const createTroop = async () => {
    const { data, error } = await supabase.from("Crew").insert([{ name: troop.name, count: troop.count }]);
  }


  
  return (
    <div className="Create"> 
      <form>
        <h1>Add your Clash of Clans Army</h1>
        <label> Name of Troop: </label>
          <input type="text" name="name" value={troop.name} onChange={handleChange} />

        <label>Number: </label>
        <input type="text" name="count" value={troop.count} onChange={handleChange} />
        <input type="submit" value="submit" onClick={createTroop}></input>
      </form>
    </div>
  );
}

export default Create;