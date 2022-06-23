module.exports = app => {
  const mongoose = app.mongoose
  const Schema = mongoose.Schema
  const PostsSchema = new Schema({
    title: {
      type: String,
    },
    description: {
      type: String,
    },
    tags: {
      type: Array
    },
    date: {
      type: String,
    },
    content: {
      type: String,
    },
  })

  return mongoose.model('Posts',PostsSchema)
}