const mongoose = require("mongoose");
const graphql = require("graphql");
const { GraphQLObjectType, GraphQLList, GraphQLID, GraphQLNonNull } = graphql;
const ProdukType = require("./produk_type");
const KomentarType = require("./komentar_type");
const Komentar = mongoose.model("komentar");
const Produk = mongoose.model("produk");

const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: () => ({
    produks: {
      type: new GraphQLList(ProdukType),
      resolve() {
        return Produk.find({});
      }
    },
    produk: {
      type: ProdukType,
      args: { id: { type: new GraphQLNonNull(GraphQLID) } },
      resolve(parentValue, { id }) {
        return Produk.findById(id);
      }
    },
    komentar: {
      type: KomentarType,
      args: { id: { type: new GraphQLNonNull(GraphQLID) } },
      resolve(parnetValue, { id }) {
        return Komentar.findById(id);
      }
    }
  })
});

module.exports = RootQuery;
