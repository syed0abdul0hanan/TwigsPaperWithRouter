import React from 'react'
import IndependentArtistProfilesStyle from './IndependentArtistProfilesStyle.module.css'
import ArtistProfile from '../../assets/profilePic.jfif'
import Item1 from '../../assets/ItemNo1.jfif'
import Item2 from '../../assets/ItemNo2.jpg'
import Item3 from '../../assets/ItemNo3.jfif'

function IndependentArtistProfiles() {
  return (
    <div className={IndependentArtistProfilesStyle.IndependentArtistProfilesContainer}>

                <div className={IndependentArtistProfilesStyle.IndependentArtistProfile}>

                    <div className={IndependentArtistProfilesStyle.IndependentArtistInfoContainer}>

                        <div className={IndependentArtistProfilesStyle.IndependentArtistInfo}>
                            <img src={ArtistProfile} alt="" />

                            <div>
                                <h3>Cuyler Black</h3>
                                <p>New Jersey, USA</p>
                            </div>

                        </div>

                        <div>
                            <button>Shop All</button>
                        </div>

                    </div>
                    <div className={IndependentArtistProfilesStyle.IndependentArtistItemsContainer}>
                        <img src={Item1} alt="" />
                        <img src={Item2} alt="" />
                        <img src={Item3} alt="" />
                    </div>

                </div>

            </div>
  )
}

export default IndependentArtistProfiles