import { useState, useEffect } from 'react';
import Api from '../../services/Api';
import { ApiConstants } from '../../services/ApiConstants';
// import { useDispatch, useSelector } from 'react-redux';

export function useSearch() {

    const [data, setData] = useState([]);
    const [isLoading, setLoading] = useState(true);
    const [error, setError] = useState("");
//   const characters = useSelector(characterListSelector);
//   const loading = useSelector(characterListLoadingSelector);
//   const dispatch = useDispatch();

//   const fetchCharacters = useCallback(() => {
//     dispatch(actions.fetchCharacters();
//   }, [dispatch])

  useEffect(() => {
    fetchMovies()
  }, [])

  const fetchMovies = async () => {
    setLoading(true)
    let response = await Api(ApiConstants.BASE_URL + ApiConstants.DISCOVER + "?api_key=0da056facc1dbb74414b3f930abbec33")
    setLoading(false)
    if (response && response.results && response.results.length > 0) {
        setData(response.results)
    }
  }

//   const data = {
//     loading,
//     characters,
//   }

//   const handlers = {
//     onRefresh: fetchCharacters,
//   }

  return { data, error, isLoading }
}