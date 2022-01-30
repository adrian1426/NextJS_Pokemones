import { useRouter } from 'next/router';
import Link from 'next/link';
import Imagen from 'next/image';

const DetallePokemon = ({ data }) => {
  const router = useRouter();
  const id = router.query.id;

  return (
    <div>
      <h1>Pokemon: {id} - {data.name}</h1>
      <br />
      <Imagen
        src={data.sprites.front_default}
        width={400}
        height={400}
      />
      <br />
      <Link href='/'>Regresar</Link>
    </div>
  );
};

export default DetallePokemon;

export const getServerSideProps = async (props) => {
  const { params } = props;

  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${params.id}`);
  const data = await response.json();

  return {
    props: {
      data
    }
  }
};