import { useRouter } from 'next/router';

const DetallePokemon = () => {
  const router = useRouter();
  const id = router.query.id;

  return (
    <div>
      <p>pokemon {id}</p>
    </div>
  );
};

export default DetallePokemon;