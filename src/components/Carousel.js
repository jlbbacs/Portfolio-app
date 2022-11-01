import Carousel from 'react-bootstrap/Carousel';
import "../css/carousel.css";

const carousel = () => {
    return(
<Carousel id="car">
    <Carousel.Item >
      <img
        className="d-block w-100  carousel  "
        src="https://scontent.fmnl30-2.fna.fbcdn.net/v/t1.18169-9/24710_1240267852209_191622_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=cdbe9c&_nc_eui2=AeGa-s9-VnBLTuci22tY90vLqHY2QuPwzKuodjZC4_DMq66hVdTZMB3R9k8v5PY4rq8&_nc_ohc=T2zG6u7aCUAAX_8zKnN&_nc_ht=scontent.fmnl30-2.fna&oh=00_AfB15P6lXx4xNKaKueQTgM9NeqnWZ7BILzDIdFCMW5vFww&oe=6387C48D"
        alt="First slide"
      />
      <Carousel.Caption>
        {/* <h3>First slide label</h3>
        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100  carousel "
        src="https://scontent.fmnl30-2.fna.fbcdn.net/v/t1.18169-9/2791_1062072757443_2082157_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=cdbe9c&_nc_ohc=R39z98_ZQZQAX9L5pcb&_nc_ht=scontent.fmnl30-2.fna&oh=00_AT8cEeBFFtLCNwu8eCrFSDTthY39RT5UUFiAP365XiH-cw&oe=635A5FEE"
        alt="Second slide"
      />

      <Carousel.Caption>
        {/* <h3>Second slide label</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100  carousel "
        src="https://scontent.fmnl30-3.fna.fbcdn.net/v/t1.15752-9/309220187_675343220618028_5820466041166689259_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=ae9488&_nc_ohc=46pC8aSvsekAX_SoxRV&_nc_ht=scontent.fmnl30-3.fna&oh=03_AVKsgz9DxyV5UIAum7aK68m3uHgKGRzbahXX6NHnr7vRgw&oe=63602B1C"
        alt="Third slide"
      />

      <Carousel.Caption>
        {/* <h3>Third slide label</h3>
        <p>
          Praesent commodo cursus magna, vel scelerisque nisl consectetur.
        </p> */}
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>

    )
}
export default carousel;