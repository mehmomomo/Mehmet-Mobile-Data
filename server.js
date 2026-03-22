require('dotenv').config()
const express = require('express')
const cors    = require('cors')
const path    = require('path')

const app  = express()
const PORT = process.env.PORT || 3000

app.use(cors())
app.use(express.json())
app.use(express.static(__dirname))

// ── Health check (required for Koyeb) ────────────────
app.get('/health',  (req, res) => res.json({ status: 'ok' }))
app.get('/healthz', (req, res) => res.json({ status: 'ok' }))

// ── Routes (will be added once API keys are ready) ───
// app.use('/api/auth',    require('./routes/auth'))
// app.use('/api/orders',  require('./routes/orders'))
// app.use('/api/payment', require('./routes/payment'))
// app.use('/api/vtpass',  require('./routes/vtpass'))
// app.use('/api/admin',   require('./routes/admin'))

// ── Serve frontend ────────────────────────────────────
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'))
})

app.listen(PORT, '0.0.0.0', () => {
  console.log(`\n🚀 Mehmet Mobile Data running on port ${PORT}`)
  console.log(`📶 Visit: http://localhost:${PORT}\n`)
})
