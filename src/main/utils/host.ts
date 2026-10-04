// Ollama-compatible server URL. First non-empty env var wins: [name, default port]
const hosts = [
  ['LLOCAL_HOST', '11434'],
  ['LLMMAN_HOST', '17434']
]
const [name, defaultPort] = hosts.find(([n]) => process.env[n]) ?? ['', '11434']
export const usingCustomHost = name !== ''

// accepts [host][:port] or a full http(s) URL
const value = process.env[name] ?? ''
const hasScheme = /^https?:\/\//.test(value)
const url = new URL(hasScheme ? value : `http://${value.replace(/^(?=:|$)/, '127.0.0.1')}`)
if (!hasScheme && !url.port) url.port = defaultPort
export const host = url.href.replace(/\/$/, '')
