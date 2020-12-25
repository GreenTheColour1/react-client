// pages/index.js

import Layout from "../components/Layout";
import 'bootstrap/dist/css/bootstrap.min.css';
import Link from 'next/link';
import Jumbotron from 'react-bootstrap/Jumbotron'
import Button from 'react-bootstrap/Button'


const Index = () => {
  return (
    <Layout>
      <Jumbotron className='mx-5 mt-3'>
        <h1>Welcome</h1>
        <p>
          This is a simple hero unit, a simple jumbotron-style component for
          calling extra attention to featured content or information.
        </p>
        <p>
          <Link href='/about'><Button variant="primary">Learn more</Button></Link>
        </p>
      </Jumbotron>
    </Layout>
  );
};

export default Index;