import { render, screen } from '@testing-library/react';
import Index from '../../pages/index';

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
});