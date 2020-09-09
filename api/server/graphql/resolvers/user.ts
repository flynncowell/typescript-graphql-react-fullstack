import { PubSub } from "apollo-server";
import jwt from "jsonwebtoken";
import mongoose from 'mongoose';
import config from '../../../config'
import User from '.../../models/user'
import { transformUser } from 'merge';

const pubsub = new PubSub();

const UserQueries = {
    users: async (parent, args, context) => {
        try {
            const users = await User.find();
            return users.map((user) => {
                return transformUser(user);   
            });
        } catch (err) {
            throw err;
        }
    }
},
user: async (parent, { userId }) => {
    try {
      const user = await User.findById(userId);
      return transformUser(user);
    } catch (err) {
      throw err;
    }
  },

login: async (parent, { email, password }) => {
    try {
        const user = await User.findOne({ email, password });
        if (!user)
    }
}