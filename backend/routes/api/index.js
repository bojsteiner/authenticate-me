// backend/routes/api/index.js
const router = require('express').Router();
const sessionRouter = require('./session.js');
const usersRouter = require('./users.js');

router.use('/session', sessionRouter);

router.use('/users', usersRouter);

router.post('/test', function(req, res) {
    res.json({ requestBody: req.body });
  });

// // GET /api/set-token-cookie
// const { setTokenCookie } = require('../../utils/auth.js');
// const { User } = require('../../db/models');
// router.get('/set-token-cookie', async (_req, res) => {
//   const user = await User.findOne({
//       where: {
//         username: 'Demo-lition'
//       }
//     });
//   setTokenCookie(res, user);
//   return res.json({ user });
// });

// const { restoreUser } = require('../../utils/auth.js');
// router.get('/restore-user', restoreUser, (req, res) => {
//     return res.json(req.user);
//   }
// );

// const { requireAuth } = require('../../utils/auth.js');
// router.get( '/require-auth', requireAuth, (req, res) => {
//     return res.json(req.user);
//   }
// );

module.exports = router;
