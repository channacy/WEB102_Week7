import React from 'react';
import './CreatePost.css'
import { useState } from 'react'


const CreatePost = ({supabase}) => {
    const [troop, setTroop] = useState({ name: "", role: "", lane: ""});


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

    const createTroop = async (event) =>{
        event.preventDefault();
        const { data, error } = await supabase.from('Crew').insert([{name: troop.name, role: troop.role, lane: troop.lane}]);
        window.location = "/";
    }
    return (
        <div className='CreatePost'>
            <form>
                <label> Name </label>
                <input type="text" name="name" value={troop.name} onChange={handleChange} />

                <label>Role</label>
                <select name="role" value={troop.role} onChange={handleChange}>
                    <option value="Carry">Carry</option>
                    <option value="Nuker">Nuker</option>
                    <option value="Initiator">Initiator</option>
                    <option value="Initiator">Initiator</option>
                    <option value="Disabler">Disabler</option>
                    <option value="Durable">Durable</option>
                    <option value="Escape">Escape</option>
                    <option value="Support">Support</option>
                    <option value="Pusher">Pusher</option>
                    <option value="Jungler">Jungler</option>
                </select>

                <label>Lane</label>
                <select name="lane" value={troop.lane} onChange={handleChange}>
                    <option value="Top">Top</option>
                    <option value="Middle">Middle</option>
                    <option value="Bottom">Bottom</option>
                </select>
                
                <input type="submit" value="submit" onClick={createTroop}></input>

            </form>
        </div>
    )
}

export default CreatePost;