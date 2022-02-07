import { render, screen } from '@testing-library/react';
import Index, { getStaticProps } from '../../pages/index';

describe('Index.js', () => {

  describe('Renderizado de componente', () => {
    it('Se renderiza ', () => {
      const { getByTestId } = render(
        <Index
          pokemones={[
            { name: 'Adrian', url: '/pokemon/detalle/1' }
          ]}
        />
      );

      const parrafo = getByTestId('titulo-id')
      expect(parrafo).toBeInTheDocument();

      const pokemon = screen.getByText('Adrian');
      expect(pokemon).toBeInTheDocument();

      const urlHref = pokemon.getAttribute('href');
      expect(urlHref).toEqual('/pokemones/1');
    })
  });


  describe('getStaticProps', () => {
    global.fetch = jest.fn()
      .mockImplementation(url => {
        console.log(url);
        return new Promise(resolve => {
          resolve({
            json: () => Promise.resolve({
              results: 'lista de pokemones'
            })
          })
        })
      });

    it('consumiendo servicio', async () => {
      const { props } = await getStaticProps();
      expect(props.pokemones).toEqual('lista de pokemones');
    })
  });
});