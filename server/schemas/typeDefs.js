const { gql } = require("apollo-server-express");

const typeDefs = gql`
	type Category {
		_id: ID
		name: String
	}

	type Product {
		_id: ID
		name: String
		description: String
		image: String
		price: Float
		category: Category
	}

	type Order {
		_id: ID
		address: String
		address2: String
		email: String
		firstName: String
		flCity: String
		flState: String
		lastName: String
		phone: String
		zipCode: String
		
	}

	type User {
		_id: ID
		username: String
		email: String
		orders: [Order]
	}

	type Checkout {
		session: ID
	}

	type Auth {
		token: ID!
		user: User
	}

	type Query {
		categories: [Category]
		products: [Product]
		product(_id: ID!): Product
		me: User
		users: [User]
		user(username: String!): User
		order(_id: ID!): Order
		orders: [Order]
		checkout(products: [ID]!): Checkout
	}

	type Mutation {
		addUser(username: String!, email: String!, password: String!): Auth
		addOrder(
			address: String!
			address2: String!
			email: String!
			firstName: String!
			flCity: String!
			flState: String!
			lastName: String!
			phone: String!
			zipCode: String!
      
		): Order
		updateProduct(_id: ID!, name: String!): Product
		login(email: String!, password: String!): Auth
		addItem(
			name: String!
			price: Int
			image: String!
			description: String!
		): Product
	}
`;

module.exports = typeDefs;
