import Layout from "../components/Layout";
import { Jumbotron, Button, Container, Row } from 'react-bootstrap';
import Link from 'next/link';

const Brands = (props) => {
    return (
      <Layout>
        <Container className='mt-4'>
          <Row className="justify-content-md-center">
            {props.data.map((elem) => {
              return (
                <Jumbotron key={elem.Id} style={{backgroundImage: 'url(/img/beatsEP.jpg)', backgroundRepeat: 'no-repeat'}}>
                  <h1>{elem.Name}</h1>
                  <p>
                    This is a simple hero unit, a simple jumbotron-style
                    component for calling extra attention to featured content or
                    information.
                  </p>
                  <p>
                    <Link href={'/brands/' + elem.Id}><Button variant="primary">Learn more</Button></Link>
                  </p>
                </Jumbotron>
              );
            })}
          </Row>
        </Container>
      </Layout>
    );
}

export async function getServerSideProps(context) {
    const res = await fetch(process.env.SERVER_ADDRESS + '/api/brands');
    const data = await res.json();

    return {
      props: {data: data} // will be passed to the page component as props
    }
}

export default Brands;