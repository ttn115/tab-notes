;(() => {
  const importJs = () => {
    const init = async () => {
      const $textarea = document.querySelector('#import-content')
      const $importBtn = document.querySelector('#import-button')
	  const data = await window.utils.loadPreference()

      $importBtn.addEventListener('click', () => {
        if (confirm("Are you sure you want to import these notes? All of your current notes will be replaced. This action cannot be undone.")) {
			console.log("replacing")
			var newnotes = window.utils.deserializeNotes($textarea.value)
			
			data.list = newnotes
			browser.storage.local.set({ list: data.list })
		}
      })
    }

    return {
      init
    }
  }

  window.addEventListener('load', () => {
    importJs().init()
  })
})()

