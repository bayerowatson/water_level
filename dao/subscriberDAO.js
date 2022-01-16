const mongodb = require('mongodb');
const ObjectId = mongodb.ObjectID;

let subscribers

module.exports = class TodoDAO {
  static async injectDB(conn) {
    if (subscribers) {
      return
    }
    try {
      subscribers = await conn.db('wl_subscribers').collection("subscribers")
    } catch (err) {
      console.error(`Unable to establish collection handles in todoDAO: ${err}`)
      throw new Error(err);
    }
  }

  static async getSubscribers() {
    try {
      let response = await subscribers.find({}).toArray();
      return (response);
    } catch (err) {
      console.log(err);
      throw new Error(err);
    }
  }

  static async addSubscriber(newSubscriber) {
    try {
      let response = await subscribers.insertOne(
        {...newSubscriber,
          "date": new Date() 
        });
        console.log(`added new entry to DB: `, response.insertedId);
        return (response);
    } catch (err) {
      console.log(err);
      throw new Error(err);
    }
  
  }

  static async deleteByEmail(email) {
    try {
      let response = await subscribers.deleteOne({email: email});
      if (response.deletedCount == 0) {
        console.log('no items deleted')
      }
      else console.log(`deleted ${email} from DB`);
      return (response);
    } catch (err) {
        console.log(err);
        throw new Error(err);
      }
  }

  static async findSubscriber(email) {
    try {
      let response = await subscribers.findOne({email: email});
      return (response);
    } catch (err) {
        throw new Error(err);
    }
  }
  
}