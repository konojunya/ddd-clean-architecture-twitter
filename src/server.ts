import * as express from 'express';
import * as cookieParser from 'cookie-parser';
const app = express();
const PORT = process.env.PORT || 3000;

app.use(cookieParser());

app.get('/', (req, res) => {
  res.json({
    hoge: 'hoge'
  });
});

app.listen(PORT);
