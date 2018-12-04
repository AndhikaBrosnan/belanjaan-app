const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const KomentarSchema = new Schema({
  //LyricSchema

  produk: {
    //song
    type: Schema.Types.ObjectId,
    ref: "produk" //song
  },
  likes: { type: Number, default: 0 },
  content: { type: String }
});

KomentarSchema.statics.like = function(id) {
  //LyricSchema
  const Komentar = mongoose.model("komentar"); //nama variable: Lyric and model(lyric)

  return Komentar.findById(id).then(komentar => {
    //Lyric & lyric
    ++komentar.likes;
    return komentar.save();
  });
};

mongoose.model("komentar", KomentarSchema);
