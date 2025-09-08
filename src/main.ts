import './style.css'
import typescriptLogo from './typescript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.ts'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <h1>New Project</h1>
    <h2>Typescript + Vite</h2>
    <h3>Day 3 - Project Setup</h3>
  </div>
`

setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)
