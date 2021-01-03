// pages/products.js

import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from "../../components/Layout";
import { Card, Button, Container, Row } from 'react-bootstrap';
import Image from 'next/image';
import { useRouter } from 'next/router';


const Produts = (props) => {
  const router = useRouter();
  const {bid} = router.query;
  const products = props.data.filter(item => item.BrandId == bid);
  
    return (
      <Layout>
        <Container>
          <Row className='justify-content-md-center'>
            {products.map((elem) => {
              return (
                <Card className='mx-4 my-3' style={{ width: "18rem" }}>
                  <Image src={'/img/' + elem.GraphicName} alt='Picture of headphone' width={500} height={500}></Image>
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

export async function getStaticPaths() {
  return {
    paths: [
      { params: {bid: '2002'}, },
      { params: {bid: '2003'}, },
      { params: {bid: '2004'}, }
    ],
    fallback: false,
  };
}

export async function getStaticProps(context) {

    const res = await fetch(process.env.SERVER_ADDRESS + '/api/products');
    const data = await res.json();
    // const filter = data.filter(item => item.BrandId == bid);

    return {
      props: {data: data} , // will be passed to the page component as props
    }
}
  

export default Produts;