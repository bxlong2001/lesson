const mongoose = require('mongoose');
const mongooseDelete = require('mongoose-delete');
const slug = require('mongoose-slug-updater');

const Schema = mongoose.Schema;

const Word = new Schema(
    {
        name: { type: String, required: true },
        word: { type: String },
        mean: { type: String },
        slug: {
            type: String,
            slug: 'name',
            unique: true,
            slugOn: { updateOne: true },
        },
        video: { type: String, required: true },
    },
    {
        timestamps: true,
    },
);

mongoose.plugin(slug);
Word.plugin(mongooseDelete, {
    deletedAt: true,
    overrideMethods: 'all',
});

module.exports = mongoose.model('Word', Word);
