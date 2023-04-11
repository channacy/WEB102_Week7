import React from 'react';
import './CreatePost.css'
import { useState } from 'react'


const CreatePost = ({supabase}) => {
    const [troop, setTroop] = useState({ name: "", count: ""});


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

    const createTroop = async () =>{
        const { data, error } = await supabase.from('Crew').insert([{name: troop.name, count: troop.count}]);
    }

    return (
        <div className='CreatePost'>
            <form>
                <label> Name </label>
                <input type="text" name="name" value={troop.name} onChange={handleChange} />

                <label>Count</label>
                <input type="number" name="count" value={troop.count} onChange={handleChange} />
                
                <input type="submit" value="submit" onClick={createTroop}></input>
            </form>
        </div>
    )
}

export default CreatePost;