import React, { useContext, useEffect, useState } from 'react'
import Lang from '../../../context/lang'

const Lobby = (props) => {
  const [lang, setLang] = useContext(Lang)
  return (
    <div>
      <button onClick={() => setLang(lang === 'fr' ? 'en' : 'fr')}>
        Click {lang}
      </button>
    </div>
  )
}
export default Lobby
