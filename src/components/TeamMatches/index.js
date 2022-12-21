// Write your code here
import {Component} from 'react'

import LatestMatch from '../LatestMatch'

import './index.css'

class TeamMatches extends Component {
  state = {
    matchesList: {},
  }

  componentDidMount() {
    this.getMatchesList()
  }

  getFormattedData = newData => ({
    competingTeam: newData.competing_team,
    competingTeamLogo: newData.competing_team_logo,
    date: newData.date,
    firstInning: newData.first_innings,
    id: newData.id,
    manOfTheMatch: newData.man_of_the_match,
    matchStatus: newData.match_status,
    result: newData.result,
    secondInning: newData.second_innings,
    umpires: newData.umpires,
    venue: newData.venue,
  })

  getMatchesList = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    console.log(id)

    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const data = await response.json()
    console.log(data)
    const updatedData = {
      teamBannerUrl: data.team_banner_url,
      latestMatchDetails: this.getFormattedData(data.latest_match_details),
      recentMatches: data.recent_matches.map(eachData =>
        this.getFormattedData(eachData),
      ),
    }
    console.log(updatedData)
    this.setState({matchesList: updatedData})
  }

  render() {
    const {matchesList} = this.state
    const {teamBannerUrl, latestMatchDetails} = matchesList

    return (
      <div className="team-container-app">
        <div className="team-container-home">
          <img className="banner-image" src={teamBannerUrl} alt="" />
          <ul className="latest-match-container">hh</ul>
          <LatestMatch latestMatchData={latestMatchDetails} />
        </div>
      </div>
    )
  }
}
export default TeamMatches
