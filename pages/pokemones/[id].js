import { useRouter } from 'next/router';

const DetallePokemon = ({ data }) => {
  const router = useRouter();
  const id = router.query.id;

  return (
    <div>
      <p>Pokemon: {id} - {data.name}</p>
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