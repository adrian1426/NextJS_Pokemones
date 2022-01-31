import { useRouter } from 'next/router';
import Link from 'next/link';
import Imagen from 'next/image';

const DetallePokemon = ({ data }) => {
  const router = useRouter();
  const id = router.query.id;

  if (router.isFallback) {
    return <p>Cargando...</p>
  }

  return (
    <div>
      <h1>Pokemon: {id} - {data.name}</h1>
      <br />
      <Imagen
        src={data.sprites.front_default}
        width={150}
        height={150}
      />
      <br />
      <Link href='/'>Regresar</Link>
    </div>
  );
};

export default DetallePokemon;

export const getStaticProps = async (props) => {
  const { params } = props;

  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${params.id}`);
  const data = await response.json();

  return {
    props: {
      data
    }
  }
};

export const getStaticPaths = async () => {
  const paths = [
    { params: { id: '1' } },
    { params: { id: '2' } }
  ];

  return {
    paths,
    fallback: true
  };
};

// export const getServerSideProps = async (props) => {
//   const { params } = props;

//   const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${params.id}`);
//   const data = await response.json();

//   return {
//     props: {
//       data
//     }
//   }
// };