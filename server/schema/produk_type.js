const mongoose = require("mongoose");
const graphql = require("graphql");
const { GraphQLObjectType, GraphQLString, GraphQLID, GraphQLList } = graphql;
const KomentarType = require("./komentar_type");
const Produk = mongoose.model("produk");

const ProdukType = new GraphQLObjectType({
  name: "ProdukType",
  fields: () => ({
    id: { type: GraphQLID },
    title: { type: GraphQLString },
    komentars: {
      type: new GraphQLList(KomentarType),
      resolve(parentValue) {
        return Produk.findKomentars(parentValue.id);
      }
    }
  })
});

module.exports = ProdukType;
