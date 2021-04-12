import { MongoClient } from "mongodb";
import { MONGODB_PROVIDER, MONGO_LINK } from "../../constants/mongo/mongo.consants";

export const mongoDbProviders = [
    {
        provide: MONGODB_PROVIDER,
        //asynchonous provider
        useFactory: async () => new Promise((resolve, reject) => {
            MongoClient.connect(MONGO_LINK,
                { useUnifiedTopology: true },
                (error, client) => {
                    if (error) {
                        reject(error);
                    } else {
                        resolve(client.db('nestjs-sample'));
                    }
                });
        })
    },
];