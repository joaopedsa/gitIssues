import React from 'react';

import {Container,SmallContainer} from './style.js';

const Issues = ({issues,filter}) => (
  <Container>
    {issues.map(issue=>(
      <SmallContainer key = {issue.id}>
        <img src = {issue.user.avatar_url} alt = {issue.user.login} />
        <ul>
          <li>
            <strong>
              {issue.title}
            </strong>
          </li>
          <li>
            <small>
              {issue.user.login}
            </small>
          </li>
          <li>
            <a href = {issue.html_url} target = "_blank"><button><i className="fa fa-rocket"></i>ABRIR ISSUE</button></a>
          </li>
        </ul>
      </SmallContainer>
    ))}
  </Container>
);

export default Issues;
