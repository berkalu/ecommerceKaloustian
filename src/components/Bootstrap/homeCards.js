import React from "react";
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';

function GroupExample() {
  return (
    <div className="cardsInfo">
    <CardGroup>
      <Card className="cardsBox">
        <Card.Img variant="top" src="../assets/card1.jpg" />
        <Card.Body>
          <Card.Title>QUIENES SOMOS?</Card.Title>
          <Card.Text>
          BK TECH es una tienda de tecnología dedicada a la venta de notebooks, pc de escritorio, impresoras, monitores y accesorios de informática.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
      <Card className="cardsBox">
        <Card.Img variant="top" src="../assets/card2.jpg" />
        <Card.Body>
          <Card.Title>VENTAS CORPORATIVAS</Card.Title>
          <Card.Text>
            Solicita tu cotización especial para empresas.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
      <Card className="cardsBox">
        <Card.Img variant="top" src="../assets/card3.jpg" />
        <Card.Body>
          <Card.Title>AURICULARES GAMER</Card.Title>
          <Card.Text>
          Consejos para realizar una compra que se adecue a los que estas buscando.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
      <Card className="cardsBox">
        <Card.Img variant="top" src="../assets/card4.jpg" />
        <Card.Body>
          <Card.Title>SILLAS ERGONOMICAS VS. GAMER</Card.Title>
          <Card.Text>
          Cual consideras que son mejores para tu postura?.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
    </CardGroup>
    </div>
  );
}

export default GroupExample;
