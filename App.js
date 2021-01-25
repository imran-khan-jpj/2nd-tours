import React, {useState, useEffect} from 'react';
import Tour from './components/Tour';


const url = 'https://course-api.netlify.app/api/react-tours-project';

const App = () => {
	const [loading, setLoading] = useState(true);
	const [tours, setTours] = useState([]);

	const deleteTour = (id) => {
			const newTours = tours.filter((tour) => tour.id !== id);
			setTours(newTours);
		}
	const fetchTours = async () => {
		try {
			setLoading(true);
			const response = await fetch(url);
			const data = await response.json();
			setLoading(false);
			setTours(data);
		}catch(e){
			setLoading(false);
			console.log(e)
		}
	}	

	useEffect(() => {
		fetchTours();
	}, [])	
		
	if(loading){
		return (
			<div>
				<h2>Loading...</h2>
			</div>
		)
	}
	return (
		<div className="container-fluid">
			<div className="row justify-content-center">
				<div className="col-6 border">
					<h1 className="text-center">Our Tours</h1>
					<hr className="bg-info w-25" style={{height: '5px'}} />
					{tours.length < 1 && <div className="text-center"><p>No Tour Left</p>
											  <p><button  className="btn btn-primary" onClick={() => fetchTours()}>Refresh</button></p></div>

						}
				</div>
			</div>
			{tours.map((tour) => {
				return <Tour key={tour.id} tour={tour} deleteTour={deleteTour}/>
			})}

		</div>
		
	)
}

export default App;