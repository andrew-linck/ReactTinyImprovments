import React from 'react';

const Kudos = (props) => (
    <div>
        <div>To: {props.to}</div>
        <div>From: {props.from}</div>
        <div>Title: {props.title}</div>
        <div>Body: {props.body}</div>
    </div>
);

export default Kudos;