/* eslint-disable */
import React from 'react'
import './confidentiality.css'

const Confidentiality = () => {
  return (
    <>
        <section className="confidentiality">
            <h1 className='title_confidentiality'>Règles de confidentialité pour l'application MagicCounters</h1>
            <ul className='content_confiddentiality'>
                <li>I. Aucune information personnelle n'est collectée ou partagée par l'application</li>
                <li>II. Expo est utilisé en tant que bibliothèque SDK pour build l'application et rien de plus</li>
                <li>III. Aucune donnée utilisateur n'est transmise depuis mon serveur via un tiers ou une autre application tierce sur le même appareil</li>
                <li>IV. La seule interaction de l'utilisateur hors de l'application est une requête à l'api de Scryfall afin d'afficher l'image de son choix en fond</li>
            </ul>
        </section>
    </>
  )
}

export default Confidentiality
