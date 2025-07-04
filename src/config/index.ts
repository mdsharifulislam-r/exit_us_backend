import dotenv from 'dotenv';
import path from 'path';
dotenv.config({ path: path.join(process.cwd(), '.env') });

export default {
  ip_address: process.env.IP_ADDRESS,
  database_url: process.env.DATABASE_URL,
  node_env: process.env.NODE_ENV,
  port: process.env.PORT,
  bcrypt_salt_rounds: process.env.BCRYPT_SALT_ROUNDS,
  jwt: {
    jwt_secret: process.env.JWT_SECRET,
    jwt_expire_in: Number(process.env.JWT_EXPIRE_IN),
  },
  email: {
    from: process.env.EMAIL_FROM,
    user: process.env.EMAIL_USER,
    port: process.env.EMAIL_PORT,
    host: process.env.EMAIL_HOST,
    pass: process.env.EMAIL_PASS,
  },
  super_admin: {
    email: process.env.SUPER_ADMIN_EMAIL,
    password: process.env.SUPER_ADMIN_PASSWORD,
  },
  twilio:{
    accountSid: process.env.TWILIO_ACCOUNT_SID,
    authToken: process.env.TWILIO_AUTH_TOKEN,
    fromPhone: process.env.TWILIO_FROM_PHONE,
  },
  geo:{
    apiKey:process.env.GEO_API_KEY,
    host:process.env.GEO_HOST
  },
  redis:{
    url:process.env.REDIS_URL,
    token:process.env.REDIS_TOKEN
  },
  paypal:{
    client_id: process.env.PAYPAL_CLIENT_ID,
    client_secret: process.env.PAYPAL_CLIENT_SECRET,
  },
  gemeni:{
    apiKey:process.env.GEMINI_API_KEY
  },
  togoAdvisory:{
    apiKey:process.env.TRAVEL_ADVISORY_KEY
  },
  locationAPi:{
    apiKey:process.env.LOCATION_KEY,
    geoApiKey:process.env.GEO_KEY
  },
  musicApi:{
    apiKey:process.env.MUSIC_KEY
  },
  livingCostApi:{
    apiKey:process.env.LIVING_COST_KEY
  },
  photosApi:{
    apiKey:process.env.PHOTOS_API_KEY
  },
  baseUrl:{
    baseUrl:process.env.BASE_URL
  },
  apple:{
    password:process.env.APPLE_SHARED_SECRET,
  }
};
