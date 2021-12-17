const mongodb = require('mongodb');
const ObjectId = mongodb.ObjectID;

let subscribers

module.exports = class TodoDAO {
  static async injectDB(conn) {
    if (subscribers) {
      return
    }
    try {
      subscribers = await conn.db('subscribers').collection("subscribers")
    } catch (e) {
      console.error(`Unable to establish collection handles in todoDAO: ${e}`)
    }
  }

  static async search() {
    try {
      let response = await subscribers.find({}).toArray();
      return (response);
    } catch (err) { console.log(err)}
  }

  static async addSubscriber(newSubscriber) {
    try {
      let response = await subscribers.insertOne(
        {...newSubscriber,
          "date": new Date() 
        });
        console.log(`added new entry to DB: `, response.insertedId);
        return (response);
    } catch (err) {console.log(err)}
  
  }

  static async deleteByEmail(Email) {
    try {
      let response = await subscribers.deleteOne({email: Email})
      if (response.deletedCount == 0) {
        console.log('no items deleted')
      }
      else console.log(`deleted ${Email} from DB`);
      return (response);
    } catch (err) {console.log(err)}
    
  }
  
}