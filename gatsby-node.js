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
    //     type Subscription {
    //         todoAdded: Todo
    //     }
    // `
    createTypes(typeDefs)
}

const Todo = require('./models/todo');

const TODO_ADDED = 'TODO_ADDED'

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
                        .find({ todoId: args.todoId })
                        .then(todosFound => todosFound[0])
                        .catch(err => { throw err; })
                }
            }
        },
        Mutation: {
            addTodo: {
                type: "Todo",
                resolve(source, args, context, info) {
                    const { description, todoId } = args.todoInput;

                    const todo = new Todo({
                        description,
                        isChecked: false,
                        todoId,
                    })

                    return todo.save()
                        .then(result => {
                            console.log('save todo succeded', result);
                            const newTodo = {...result._doc}
                            return newTodo
                        })
                        .catch(err => {
                            console.log('save todo error', err);
                            throw err;
                        });
                },
            },
            removeTodo: {
                type: "String",
                resolve(source, args, context, info) {
                    const { todoId } = args;

                    Todo.find({ todoId: todoId }).remove().exec();
                    
                    return todoId
                },
            },
            tickTodo: {
                type: "Todo",
                resolve(source, args, context, info) {
                    const { isChecked, todoId } = args;

                    // Todo.find({ todoId: todoId })
                    //     .then(todosFound => {
                    //         const todoToUpdate = todosFound[0].isChecked = isChecked
                    //         todoToUpdate.save()
                    //     })
                    //     .catch(err => { throw err; })

                    console.log('::::: todoId ::::::', todoId)
                    console.log('::::: isChecked ::::::', isChecked)

                    const filter = { todoId: todoId };
                    const update = { isChecked: isChecked };
                    return Todo.findOneAndUpdate(filter, update, { new: true })
                        .catch(err => console.log(err));
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