import React from 'react';
import { Provider } from '../KudosContext'; 

const GiveKudos = (props) => (
    // <Context.provider>
    <div>
        <form>
        <label>To:</label>
        <select onClick={props.handleClick}>
            <option>Andrew</option>
            <option>John</option>
            <option>James</option>
            <option>Superman</option>
        </select>
        <label>From:</label>
        <select>
            <option>Andrew</option>
            <option>John</option>
            <option>James</option>
            <option>Superman</option>
        </select>
        <label>Title:</label>
        <input />
        <label>Body:</label>
        <input />
        <input onClick={props.handleClick} type="submit" />
        </form>
    </div>
    // </Context.provider>
);

export default GiveKudos;