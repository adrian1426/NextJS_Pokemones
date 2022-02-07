import { render, screen } from '@testing-library/react';
import Index from '../../pages/index';

describe('Index.js', () => {

  describe('Renderizado de componente', () => {
    it('Se renderiza ', () => {
      const { getByTestId } = render(
        <Index
          pokemones={[]}
        />
      )

      const parrafo = getByTestId('titulo-id')
      expect(parrafo).toBeInTheDocument();
    })
  });
});