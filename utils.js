/**
 *  require: migration function
 */

;(() => {
  window.utils = {
    loadPreference: async () => {
      let results = await browser.storage.local.get()
      let syncResults = await browser.storage.sync.get()
      results.list = results.list && results.list.sort((a, b) => b.time - a.time)

      if ((typeof results.length === 'number') && (results.length > 0)) {
        results = results[0]
      }

      if (!results.version && !syncResults.version) {
        await browser.storage.local.set(defaultPreference)
        return defaultPreference
      }

      if (results.version === defaultPreference.version) {
        return results
      }
      else {
        if (window.migration) {
          await window.migration(results, syncResults)
        }
      }

      let updateKeys = Object.keys(defaultPreference).filter( key => results[key] === undefined)
      if (updateKeys.length === 0) { return results; }

      let update = updateKeys.reduce( (obj, key) => ({
        ...obj,
        key: defaultPreference[key]
      }), results)


      await browser.storage.local.set(update)
      return update
    },
    serializeNotes: (list) => {
      return list.map(note => `${note.title ? `<<TITLE>>${note.title}<<\/TITLE>>\n` : ''}${note.content}\n\n<<${note.time}>>\n\n`).filter(c => c).join('')
    },
    deserializeNotes: (text) => {
      var tmp = text.split(/\n\n<<([0-9]+)>>\n\n/g).slice(0, -1)
      var newnotes = []
      for (var i = 0; i < tmp.length; i += 2) {
        let contentStr = tmp[i]
        let title = ''
        let titleMatch = contentStr.match(/^<<TITLE>>([\s\S]*?)<<\/TITLE>>\n/)
        if (titleMatch) {
          title = titleMatch[1]
          contentStr = contentStr.substring(titleMatch[0].length)
        }
        let note = { content: contentStr, time: parseInt(tmp[i + 1]) }
        if (title) note.title = title
        newnotes.push(note)
      }
      return newnotes
    }
  }
})()
