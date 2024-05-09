import express from 'express';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import http from 'http';
import session from 'express-session';

import './db/config/config';

const PORT = process.env.PORT || 5000;

const app = express();
const server = http.createServer(app);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cookieParser());
app.use(cors());

app.use(
	session({
		secret: process.env.SESSION_SECRET,
		resave: false,
		saveUninitialized: true,
		cookie: {
			maxAge: Number(process.env.SESSION_LIFETIME) || 86400000,
		},
	}),
);

app.use((req, _res, next) => {
	req.headers.language = req.headers.language || 'en';
	next();
});

app.get('/health', (_req, res) => {
	return res.json({
		type: true,
		message: 'Server is up and running',
	});
});

server.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`);
});

export default app;
