export class Team {
  
  private static teams :Team[] = []

  public static addTeam(name :string, city :string) :string {
    new Team(name, city)
    return`/${name}`
  }

  public static getAllTeams() :Team[] {
    return Team.teams
  }

  public static getTeamByName(name :string) :Team | undefined {
    return Team.teams.find(e => e.name === name)
  }

  public static deleteTeamByName(name :string) :boolean {
    
    let returnValue = false

    const index = Team.teams.findIndex(e => e.name === name)

    if(index !== -1 ) {
      Team.teams.splice(index,1)
      returnValue = true
    }
    
    return returnValue

  }

  static {
    Team.addTeam("Eagles", "Philadelphia")
    Team.addTeam("Chiefs", "Kansas City")
    Team.addTeam("49ers", "San Francisco")
    Team.addTeam("Bengals", "Cinncinnati")
  }

  private name :string
  private city :string

  private constructor( name :string, city :string) {
    this.name = name
    this.city = city
    Team.teams.push(this)
  }

}