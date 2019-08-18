/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
const mongoose = require('mongoose');

exports.createSchemaCustomization = ({ actions }) => {
    const { createTypes } = actions
    const typeDefs = `
        type Todo {
            _id: ID!
            description: String!
            isChecked: Boolean!
        }

        input TodoInput {
            description: String!
        }

        type Query {
            todos: [Todo!]!
            todo(id: String!): Todo!
        }

        type Mutation {
            addTodo(todoInput: TodoInput!): Todo
        }
    `
    createTypes(typeDefs)
}

const Todo = require('./models/todo');

exports.createResolvers = ({ createResolvers }) => {
    const resolvers = {
        Query: {
            todos: {
                type: `[Todo!]!`,
                resolve() {
                    return Todo.find()
                        .then(todos => {
                            return todos.map(todo => {
                                return { ...todo._doc }
                            })
                        })
                        .catch(err => { throw err; })
                },
            },
            todo: {
                type: `Todo!`,
                resolve(source, args, context, info) {
                    return Todo
                        .find({ _id: args.id })
                        .then(todosFound => todosFound[0])
                        .catch(err => { throw err; })
                }
            }
        },
        Mutation: {
            addTodo: {
                type: "Todo",
                resolve(source, args, context, info) {
                    const { description } = args.todoInput;

                    const todo = new Todo({
                        description,
                        isChecked: false,
                    })

                    return todo.save()
                        .then(result => {
                            console.log('save todo succeded', result);
                            return {...result._doc}
                        })
                        .catch(err => {
                            console.log('save todo error', err);
                            throw err;
                        });
                },
            },
        }
    }
    createResolvers(resolvers)
}

exports.onPreInit = () => {
    mongoose.connect(`mongodb+srv://<user>:<password>@<cluster>.mongodb.net/<database>?retryWrites=true&w=majority`)
        .catch(err => console.log('Error connecting with mongoDB', err));
}