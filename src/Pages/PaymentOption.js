import React from 'react';
import Container from '@material-ui/core/Container';

export default function Home() {
  return (
    <React.Fragment>
        <Container fixed>
            <p>
                Welcome to your web application. Make something beautiful!
            </p>
            <p>
                To get started, edit <code>src/App.js</code>, save, and reload this page.
            </p>
        </Container>
    </React.Fragment>
  );
}