const catElement = document.getElementById('cat')
const catBtn = document.getElementById('catBtn')
catBtn.addEventListener('click', generateCat)

async function generateCat() {
  const config = {
    headers: {
      Accept: 'application/json',
    },
  }

  const res = await fetch('https://catfact.ninja/fact', config)
  const data = await res.json()
  catElement.innerHTML = data.fact
}
