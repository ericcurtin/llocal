// Base URL of the Ollama-compatible server: llmman (https://github.com/llmmanorg/llmman)
// when LLMMAN_HOST ([host][:port]) is set, otherwise Ollama's default.
export const usingLlmman = process.env.LLMMAN_HOST !== undefined
const [hostname, port] = (process.env.LLMMAN_HOST ?? '').replace(/^https?:\/\//, '').split(':')
export const host = usingLlmman
  ? `http://${hostname || 'localhost'}:${port || '17434'}`
  : 'http://localhost:11434'
