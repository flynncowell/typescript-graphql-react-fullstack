import { userMutation, UserQueries, UserSubscription } from "./user";

const rootresolver= {
    Query: {
        ...UserQueries  
    },
    Mutation: {
        ...userMutation
    },
    Subscription: {
        ...UserSubscription
    }
}

export default rootresolver