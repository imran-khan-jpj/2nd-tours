import {useState} from 'react';

const Tour = ({tour, deleteTour}) => {
	const {id, name, price, info, image } = tour;
	const [readMore, setReadMore] = useState(false);
	return (

			<div className="row justify-content-center">
				<div className="col-6  bg-light">
					<img src={image} alt="ksadfj" className="w-100 rounded" height="500" />
					<div className="d-flex justify-content-between mt-2">
						<h4 className="ml-2">{name}</h4>
						<button className="mr-2 btn btn-outline-info">Price ${price}</button>
					</div>
					<div>
						<p className="ml-2 mr-2 mt-2">{readMore ? info : `${info.substring(0, 100)}...`}
							<span className="text-info" onClick={() => setReadMore(!readMore)}>{readMore ? 'Show Less' : 'Read More'}</span>
						</p>
					</div>
					<div className="text-center mb-4">
						<button className="btn btn-outline-danger" onClick={() => deleteTour(id)}>Not Interested</button>
					</div>

				</div>

			</div>
		)
}

export default Tour;