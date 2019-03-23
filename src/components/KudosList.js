import React from 'react';
import Kudos from './Kudos';

const KudosList = (props) => (
    <div>
        {props.kudoses.map(kudos => (
      <Kudos
        to={kudos.to}
        from={kudos.from}
        title={kudos.title}
        body={kudos.body}
      />))}
    </div>
);

export default KudosList;