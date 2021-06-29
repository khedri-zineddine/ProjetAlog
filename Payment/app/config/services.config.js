import { STRIPE_KEY } from './constants.config'
export const Stripe = require('stripe')(STRIPE_KEY);