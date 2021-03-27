import { useEffect, useState } from 'react';

// api
import yelp from '../api/yelp';

export default () => {

  const [results, setResults] = useState([]);
	const [errorMessage, setErrorMessage] = useState('');

	const searchAPI = async (searchTerm) => {
		try {
			const response = await yelp.get('/search', {
				params: {
					limit: 50,
					term: searchTerm,
					location: {
						"country": 'us',
						"city": 'san jose'
					}
				},
			});
			setResults(response.data.businesses);
		} catch (err) {
			console.log(err);
			setErrorMessage('Something went wrong.');
		}
	};

	useEffect(() => {
		searchAPI('steak');
  }, []);
  
  return [searchAPI, results, errorMessage];
}