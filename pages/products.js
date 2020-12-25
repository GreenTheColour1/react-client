// pages/products.js

import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from "../components/Layout";
import { Card, Button, Container, Row, Col } from 'react-bootstrap';


const Produts = (props) => {
    return (
      <Layout>
        <Container>
          <Row className='justify-content-md-center'>
            {props.data.map((elem) => {
              return (
                <Card className='mx-4 my-3' style={{ width: "18rem" }}>
                  <Card.Img
                    variant="top"
                    src="https://www.bowerswilkins.com/sites/default/files/2019-09/Low--PX7%20Front%20-%20Space%20Grey.jpg"
                  />
                  <Card.Body>
                    <Card.Title>{elem.ProductName}</Card.Title>
                    <Card.Text>{elem.Description}</Card.Text>
                    <Button variant="primary">Learn More</Button>
                  </Card.Body>
                </Card>
              );
            })}
          </Row>
        </Container>
      </Layout>
    );
};

export async function getServerSideProps(context) {
    const res = await fetch(process.env.SERVER_ADDRESS + '/api/products');
    const data = await res.json();

    return {
      props: {data: data} , // will be passed to the page component as props
    }
}
  

export default Produts;