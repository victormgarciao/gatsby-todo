/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
const mongoose = require('mongoose');

const Todo = require('./models/todo');

exports.createSchemaCustomization = ({ actions }) => {
    const { createTypes } = actions
    const typeDefs = `
        type Todo {
            todoId: String!
            description: String!
            isChecked: Boolean!
        }

        input TodoInput {
            description: String!
            todoId: String!
        }

        type Query {
            todos: [Todo!]!
            todo(todoId: String!): Todo!
        }

        type Mutation {
            addTodo(todoInput: TodoInput!): Todo
            removeTodo(todoId: String!): String
            tickTodo(isChecked: Boolean!, todoId: String!): Todo
        }
    `
    createTypes(typeDefs)
}

exports.createResolvers = ({ createResolvers }) => {
    const resolvers = {
        Query: {
            todos: {
                type: `[Todo!]!`,
                resolve: () => Todo.find()
                    .then(todos => todos.map(({ _doc}) => ({ ..._doc })))
                    .catch(err => { throw err; })
            },
            todo: {
                type: `Todo!`,
                resolve: (source, args, context, info) => (
                    Todo.find({ todoId: args.todoId })
                        .then(todosFound => todosFound[0])
                        .catch(err => { throw err; })
                )
            }
        },
        Mutation: {
            addTodo: {
                type: "Todo",
                resolve: (source, args, context, info) => {
                    const { description, todoId } = args.todoInput;
                    const isChecked = false

                    const todo = new Todo({ description, isChecked, todoId})

                    return todo.save()
                        .then(({ _doc }) => ({..._doc}))
                        .catch(err => { throw err })
                },
            },
            removeTodo: {
                type: "String",
                resolve: (source, { todoId }, context, info) => {
                    Todo.find({ todoId: todoId }).remove().exec();

                    return todoId
                },
            },
            tickTodo: {
                type: "Todo",
                resolve(source, args, context, info) {
                    const { isChecked, todoId } = args;

                    const filter = { todoId: todoId };
                    const update = { isChecked: isChecked };
                    
                    return (
                        Todo.findOneAndUpdate(filter, update, { new: true })
                            .catch(err => console.log(err))
                    )
                },
            }
        },
    }
    createResolvers(resolvers)
}

exports.onPreInit = () => {
    mongoose.connect(`mongodb+srv://<user>:<password>@vicluster-j65o8.mongodb.net/gatsby-todo-db?retryWrites=true&w=majority`)
        .catch(err => console.log('Error connecting with mongoDB', err));
}
