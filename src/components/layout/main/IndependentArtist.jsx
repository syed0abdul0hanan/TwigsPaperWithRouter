import React from 'react'
import IndependentArtistStyle from './IndependentArtistStyle.module.css'
import IndependentArtistProfiles from '../../cards/IndependentArtistProfiles'

function IndependentArtist() {
    return (
        <div className={IndependentArtistStyle.IndependentArtistContainer}>

            <div className={IndependentArtistStyle.IndependentArtistContent}>

                <div className={IndependentArtistStyle.IndependentArtistTitle}>
                    <h1>Check out our independent artists</h1>
                    <p>We collaborate with artists worldwide to bring you beautiful eco-friendly products and at the same time support small artists and their gorgeous work.</p>
                </div>

                <div className={IndependentArtistStyle.IndependentArtistButtonDiv}>
                    <button>See All Artist</button>
                </div>

            </div>

            <div className={IndependentArtistStyle.IndependentArtistProfilesContainer}>
                <IndependentArtistProfiles />
                <IndependentArtistProfiles />
                <IndependentArtistProfiles />
                <IndependentArtistProfiles />
                <IndependentArtistProfiles />
                <IndependentArtistProfiles />
                
               


            </div>


        </div>
    )
}

export default IndependentArtist