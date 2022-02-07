import { render, screen, waitFor } from '@testing-library/react';
import Poke from '../../pages/poke';

describe('Poke.js', () => {
  const mockResults = [{ name: 'Adrian', url: 'https://domi.com/pokemones/1' }];

  global.fetch = jest.fn()
    .mockImplementation(url => {
      console.log(url);
      return new Promise(resolve => {
        resolve({
          json: () => Promise.resolve({
            results: mockResults
          })
        })
      })
    });

  it('render pokemones', async () => {
    render(<Poke />);

    const loading = screen.getByText('Cargando...');
    expect(loading).toBeInTheDocument();

    await waitFor(() => screen.getByText('Pokemones'));

    const pokemon = screen.getByTestId(1);
    const link = pokemon.children[0];

    expect(link).toHaveAttribute('href', '/pokemones/1');
    expect(link).toHaveTextContent('Adrian');
  })
});