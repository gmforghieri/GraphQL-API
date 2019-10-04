const graphql = require('graphql');

const{GraphQLOjectType, GraphQLString} = graphql;

const BookType = new GraphQLOjectType({
   name: 'Book',
   fields: () => ({
       id:{type: GraphQLString},
       name:{type: GraphQLString},
       genre:{type: GraphQLString},
   })
});

const RootQuery = new GraphQLOjectType({
    name:'RootQueryType',
    fields: {
       book: {
           type: BookType,
            args:{id:{type:GraphQLString}},
           resolve(parent,args){

           }
       }
    }
});