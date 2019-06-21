import { spawn } from 'child_process'

const child = spawn('./bin.js')
child.stdout.on('data', data => {
  console.log(data.toString())
})
