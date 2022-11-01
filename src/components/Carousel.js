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
        src="https://scontent.fmnl30-2.fna.fbcdn.net/v/t1.18169-9/2791_1062072757443_2082157_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=cdbe9c&_nc_eui2=AeHZgjhRxWgnPsgarecfBSxJVIQwvfdn9-JUhDC992f34pbUS5g4eUH7AAq7NthIXGc&_nc_ohc=3-TsTbo8kPEAX8uKE5E&_nc_ht=scontent.fmnl30-2.fna&oh=00_AfCiWM9cT6RiSN7KCJt7CTTaZlKmFhOZ9ayuys1OLBQ0_Q&oe=6385E16E"
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
        src="https://scontent.fmnl30-2.fna.fbcdn.net/v/t39.30808-6/309835242_10222032390224201_5607181952088344785_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=730e14&_nc_eui2=AeGWHpOTgO5iBFCo-_nGTDA8mfWCSHjzEu2Z9YJIePMS7UIbEORwC-SgQ5K-Zbp1lQ8&_nc_ohc=IGlSHJqoK_QAX8L6hN-&_nc_ht=scontent.fmnl30-2.fna&oh=00_AfBcqwZ4IUt0FBX_E00HLeCgl8FZVpHGWfYsFgMk1engrg&oe=63647BB7"
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