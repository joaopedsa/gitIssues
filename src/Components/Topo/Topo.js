import React from 'react';

import {Form,Container} from './style.js';

const Topo = ({repositorio}) => (
  <Container>
    <Form>
      <img src={repositorio ? repositorio.owner.avatar_url : ''} alt={repositorio ? repositorio.owner.id : ''}/>
      <ul>
        <li>
          <strong>{repositorio ? repositorio.name : ''}</strong>
        </li>
        <li>
          <small>{repositorio ? repositorio.owner.login : ''}</small>
        </li>
      </ul>
    </Form>
  </Container>
);
export default Topo;
