import { useQuery } from 'react-query'

import { Search } from './Search'
import { Pokemon, Random } from './Pokemon'

import { getPokemon } from '../utils/pokemon'

interface Props {
  location: {
    search: string
  }
}

export const Home = ({ location: { search } }: Props) => {

  const { data, isLoading, error } = useQuery(
    ['pokemon', search],
    () => getPokemon(search),
    {
      enabled: Boolean(search)
    }
  )

  return (
    <>
      <Search
        isLoading={isLoading}
        search={search}
      />
      <div className="flex_ui">
        <Pokemon
          isLoading={isLoading}
          pokemon={data}
          error={error}
        />
      </div>
      <Random />
    </>
  )
}