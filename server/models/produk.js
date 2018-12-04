const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ProdukSchema = new Schema(
  {
    title: { type: String },
    user: {
      type: Schema.Types.ObjectId,
      ref: "user"
    },
    komentars: [
      {
        //tadinya lyrics, ngenyimpen data komentar2 yang ada
        type: Schema.Types.ObjectId,
        ref: "komentar" //lyric
      }
    ]
  },
  { usePushEach: true }
);

ProdukSchema.statics.addKomentar = function(id, content) {
  const Komentar = mongoose.model("komentar"); //Lyric, lyric

  return this.findById(id).then(produk => {
    const komentar = new Komentar({ content, produk }); //lyric, Lyric, song
    produk.komentars.push(komentar);
    return Promise.all([komentar.save(), produk.save()]).then(
      ([komentar, produk]) => produk
    );
  });
};

ProdukSchema.statics.findKomentar = function(id) {
  return this.findById(id)
    .populate("komentars")
    .then(produk => produk.komentars);
};

mongoose.model("produk", ProdukSchema);
