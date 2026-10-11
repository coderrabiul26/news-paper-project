import dns from 'node:dns'
import { betterAuth } from "better-auth";
import { MongoClient } from "mongodb";
import { mongodbAdapter } from "@better-auth/mongo-adapter";
dns.setServers(['8.8.8.8', '8.8.4.4', '1.1.1.1'])
const client = new MongoClient(process.env.MONGODB_URI as string);
const db = client.db('bangla-news-24');

export const auth = betterAuth({
    emailAndPassword:{
        enabled:true
    },
    socialProviders: {
        google: { 
            clientId: process.env.GOOGLE_OAUTH_CLIENT_ID as string, 
            clientSecret: process.env.GOOGLE_CLIENT_SECRET as string, 
        },
        github: { 
            clientId: process.env.GITHUB_OAUTH_CLIENT_ID as string, 
            clientSecret: process.env.GITHUB_CLIENT_SECRET as string, 
        }, 
      },
    database: mongodbAdapter(db, {
    client,
  }),
});