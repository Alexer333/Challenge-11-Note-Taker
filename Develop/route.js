const router = require(`express`).Router();

const notesRouter = require(`/notes`);

router.use(`./notes.js`, notesRouter)

module.exports = router;