// import { request } from 'graphql-request';
// import ApolloClient, { gql } from 'apollo-boost';
import ApolloClient from 'apollo-client';
import React from 'react';
import { render } from 'react-dom';
import { createHttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-boost';
import App from './App';
import Vote from './vote';
import { ApolloProvider } from '@apollo/react-hooks';

const link = createHttpLink({ uri: 'https://snowtooth.moonhighway.com' });

const cache = new InMemoryCache();

const client = new ApolloClient({
	link,
	cache,
});
console.log('client', client.cache.data);
render(
	<ApolloProvider client={client}>
		<App />
	</ApolloProvider>,
	document.getElementById('root')
);
// import gql from 'graphql-tag';
// import { InMemoryCache } from 'apollo-cache-inmemory';
// let url = 'https://snowtooth.moonhighway.com';

// const query = gql`
// 	query {
// 		allLifts {
// 			name
// 		}
// 	}
// `;

// const mutation = gql`
// 	mutation($id: ID!, $status: LiftStatus!) {
// 		setLiftStatus(id: $ID, status: $status) {
// 			name
// 			status
// 		}
// 	}
// `;
// const client = new ApolloClient({
// 	uri: 'https://snowtooth.moonhighway.com',
// 	// cache,
// });

// const lifts = async () => {
// 	await client.query({ query });
// 	let readCache = client.readQuery({ query });
// 	console.log('readcache', readCache);
// };

// lifts();

// client.query({ query }).then(console.log);
// client.mutate({ mutation, variables: { id: 'panorama', status: 'HOLD' } });

// console.log('CACHE', client.cache.data.data);
// let query = `${url}`;

// let opt = {
// 	method: 'POST',
// 	headers: { 'Content-Type': 'application/json' },
// 	body: JSON.stringify({ query }),
// };

// fetch(url, opt)
// 	.then(res => res.json())
// 	.then(({ data }) => `<p>Lifts: ${data.allLifts.map(lift => lift.name)}</p>`)
// 	.then(text => (document.body.innerHTML = text));

// .request(url, query)
// .then(console.log);
