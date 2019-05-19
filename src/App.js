import React from 'react';
import gql from 'graphql-tag';
import { useQuery, useMutation } from '@apollo/react-hooks';
import styled from 'styled-components';

const allLiftsQuery = gql`
	query {
		allLifts {
			id
			name
			status
			capacity
		}
	}
`;

const liftStatusMutatiion = gql`
	mutation($id: ID!, $status: LiftStatus!) {
		setLiftStatus(id: $id, status: $status) {
			id
			name
			status
		}
	}
`;

function App() {
	const { loading, data } = useQuery(allLiftsQuery);
	const [setStatus] = useMutation(liftStatusMutatiion);

	console.log('test', setStatus);
	return (
		<div>
			<h1>snowtooth lift status</h1>
			{loading && <p>Loading</p>}
			{data && !loading ? (
				<table>
					<tbody>
						{data.allLifts.map(lift => (
							<tr>
								<td>{lift.name}</td>
								<td>{lift.status}</td>
								<td>
									<StatusIndicator
										status={lift.status}
										onSelect={status =>
											setStatus({
												variables: {
													id: lift.id,
													status,
												},
											})
										}
									/>
								</td>
							</tr>
						))}
					</tbody>
				</table>
			) : null}
		</div>
	);
}

const StatusIndicator = ({ status, onSelect }) => (
	<>
		<Circle color="green" selected={status === 'OPEN'} onClick={() => onSelect('OPEN')} />
		<Circle color="yellow" selected={status === 'HOLD'} onClick={() => onSelect('OPEN')} />
		<Circle color="red" selected={status === 'CLOSE'} onClick={() => onSelect('CLOSE')} />
	</>
);
const Circle = styled.div`
	border-radius: 50%
  border: solid 1px black
  width: 20px
  height: 20px
  float: left 
 
	
`;

export default App;
