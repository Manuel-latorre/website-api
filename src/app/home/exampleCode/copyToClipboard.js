export default function copyToClipboard(){
    let code = document.getElementById('code')
    let button = document.getElementById('button')

    navigator.clipboard.writeText(code.textContent)
    button.textContent = 'copiado'
}