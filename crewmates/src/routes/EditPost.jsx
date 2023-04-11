import React from 'react';
import { useParams } from 'react-router-dom';
import './EditPost.css'
import { useState } from 'react'

const EditPost = ({supabase}) => {

    const {id} = useParams();
    const [troop, setTroops] = useState({ name: "", role: "", lane: ""});

    const updateTroop = async (event) => {
        event.preventDefault();
        console.log("Deleting post with id:", id);

        await supabase
        .from('Crew')
        .update({ name: troop.name, role: troop.role, lane: troop.lane})
        .eq('id', id);
        window.location = "/";
    }

    const deletePost = async (event) => {
        event.preventDefault();
        await supabase
        .from('Crew')
        .delete()
        .eq('id', id); 
        window.location = "/";
        
    }

    const handleChange = (event) => {
        const {name, value} = event.target;
        console.log("Name: ", name, " value: ", value);
        setTroops( (prev) => {
            return {
                ...prev,
                [name]:value,
            }
        })
    }

    return (
        <div>
            <form>
                <label>Edit Name </label>
                <input type="text" name="name" value={troop.name} onChange={handleChange} />

                <label>Edit Role</label>
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

                <label>Edit Lane</label>
                <select name="lane" value={troop.lane} onChange={handleChange}>
                    <option value="Top">Top</option>
                    <option value="Middle">Middle</option>
                    <option value="Bottom">Bottom</option>
                </select>
                
                
                <input type="submit" value="Submit Changes" onClick={updateTroop}></input>
            </form>
            <button className="deleteButton" onClick={deletePost}>Delete</button>

        </div>
    )
}

export default EditPost;