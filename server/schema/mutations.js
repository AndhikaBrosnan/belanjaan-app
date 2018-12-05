const graphql = require("graphql");
const { GraphQLObjectType, GraphQLString, GraphQLID } = graphql;
const mongoose = require("mongoose");
const Produk = mongoose.model("produk");
const Komentar = mongoose.model("komentar");
const ProdukType = require("./produk_type");
const KomentarType = require("./komentar_type");

const mutation = new GraphQLObjectType({
  name: "Mutation",
  fields: {
    addProduk: {
      type: ProdukType,
      args: {
        title: { type: GraphQLString }
      },
      resolve(parentValue, { title }) {
        return new Produk({ title }).save();
      }
    },
    addKomentarToProduk: {
      type: ProdukType,
      args: {
        content: { type: GraphQLString },
        produkId: { type: GraphQLID }
      },
      resolve(parentValue, { content, produkId }) {
        return Produk.addKomentar(produkId, content);
      }
    },
    likeKomentar: {
      type: KomentarType,
      args: { id: { type: GraphQLID } },
      resolve(parentValue, { id }) {
        return Komentar.like(id);
      }
    },
    deleteProduk: {
      type: ProdukType,
      args: { id: { type: GraphQLID } },
      resolve(parentValue, { id }) {
        return Produk.findByIdAndRemove(id);
      }
    }
  }
});

module.exports = mutation;
