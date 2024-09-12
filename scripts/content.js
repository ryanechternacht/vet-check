function generateReminders() {
  const byPlayer = {}
  function addCard (obj, playerId, cardName) {
    if (playerId) {
      if (!obj[playerId]) {
        obj[playerId] = []
      }
      obj[playerId].push(cardName)
    }
  }

  const vetPlayer = document.querySelector(".player-board-inPlay-sponsors:has(#card-S203_Veterinarian)")
  if (vetPlayer) {
    const playerId = vetPlayer.id.split('-')[2]
    addCard(byPlayer, playerId, 'Veternarian')
  }

  const qlabPlayer = document.querySelector(".player-board-inPlay-sponsors:has(#card-S225_QuarantineLab)")
  if (qlabPlayer) {
    const playerId = qlabPlayer.id.split('-')[2]
    addCard(byPlayer, playerId, 'Quarantine Lab')
  }

  const hydroPlayer = document.querySelector(".player-board-inPlay-sponsors:has(#card-S241_Hydrologist)")
  if (hydroPlayer) {
    const playerId = hydroPlayer.id.split('-')[2]
    addCard(byPlayer, playerId, 'Hydrologist')
  }

  const geoPlayer = document.querySelector(".player-board-inPlay-sponsors:has(#card-S242_Geologist)")
  if (geoPlayer) {
    const playerId = geoPlayer.id.split('-')[2]
    addCard(byPlayer, playerId, 'Geologist')
  }

  const wazaSmallPlayer = document.querySelector(".player-board-inPlay-sponsors:has(#card-S228_WazaSmallAnimalsProgram)")
  if (wazaSmallPlayer) {
    const playerId = wazaSmallPlayer.id.split('-')[2]
    addCard(byPlayer, playerId, 'Waza Small')
  }

  const wazaLargePlayer = document.querySelector(".player-board-inPlay-sponsors:has(#card-S263_WazaLargeAnimalProgram)")
  if (wazaLargePlayer) {
    const playerId = wazaLargePlayer.id.split('-')[2]
    addCard(byPlayer, playerId, 'Waza Large')
  }

  const specialAssignmentPlayer = document.querySelector(".player-board-inPlay-sponsors:has(#card-S227_WazaSpecialAssignment)")
  if (specialAssignmentPlayer) {
    const playerId = specialAssignmentPlayer.id.split('-')[2]
    addCard(byPlayer, playerId, 'Waza Special Assignment')
  }

  const playerLookup = Object.keys(byPlayer).reduce((obj, playerId) => {
    
    const playerDiv = document.querySelector(`#player_name_${playerId} a`)

    obj[playerId] = {
      id: playerId, 
      name: playerDiv.innerHTML,
      color: playerDiv.style.color,
    }

    return obj
  }, {})

  function formatPlayerCards (playerCards) {
    const [id, cards] = playerCards
    const { name, color } = playerLookup[id]

    return `<div><span style="font-weight: 600; color: ${color};">${name}:</span> ${cards.join(', ')}</div>`
  }

  ourBox.innerHTML = 
    `<div style="font-style: italic; font-size: 12px; width: 60px; margin-left: 20px; color: #222;">Reminders</div>
      <div style="justify-content: center; display: flex; flex-direction: row; gap: 8px; align-items: center; margin-right: 80px; width: 100%">
      ${Object.entries(byPlayer).map(formatPlayerCards).join('')}
    </div>`
}


const mainHeader = document.querySelector('#page-title')
mainHeader.insertAdjacentHTML('afterend', `<div id="reminder-box" style="margin-top: 8px; background-color: #f0f0f0; box-shadow: 0 3px 8px rgba(0,0,0,.3); padding-top: 8px; padding-bottom: 8px; display: flex; flex-direction: row; align-items: center;"></div>`)
const ourBox = document.querySelector('#reminder-box')

setInterval(generateReminders, 5000)

generateReminders()

console.log('Ark Nova Reminders loaded successfully')
