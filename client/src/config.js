  
import dotenv from 'dotenv'

dotenv.config()

export const BACKEND_URL=process.env.NODE_ENV === 'development'?"http://localhost:3000/": "https://hallallisongrace-cincinnati-tourism-capstone.herokuapp.com/"
