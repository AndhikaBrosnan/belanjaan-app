const mongoose = require("mongoose");
const graphql = require("graphql");
const {
  GraphQLObjectType,
  GraphQLList,
  GraphQLID,
  GraphQLInt,
  GraphQLString
} = graphql;
const Komentar = mongoose.model("komentar");

const KomentarType = new GraphQLObjectType({
  name: "KomentarType",
  fields: () => ({
    id: { type: GraphQLID },
    likes: { type: GraphQLInt },
    content: { type: GraphQLString },
    produk: {
      type: require("./produk_type"),
      resolve(parentValue) {
        return Komentar.findById(parentValue)
          .populate("produk")
          .then(komentar => {
            console.log(komentar);
            return komentar.produk;
          });
      }
    }
  })
});

module.exports = KomentarType;
