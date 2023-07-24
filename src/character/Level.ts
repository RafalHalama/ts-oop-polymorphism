class Level {
  constructor(private _level: number = 1, private _experience: number = 0) {}

  get level(): number {
    return this._level;
  }
  get experience(): number {
    return this._experience;
  }
  addExperience(experience: number) {
    const remainingexp = this.getExperienceForNextLevel();

    if (experience >= remainingexp) {
      this._level++;
      this._experience = experience - remainingexp;
    } else {
      this._experience += experience;
    }
    if (this._experience >= this.getCurrentExperienceThreshold()) {
      this._experience = 0;
      this.addExperience(this._experience);
    }
  }

  private getExperienceForNextLevel() {
    return this._level * 10 - this._experience;
  }
  private getCurrentExperienceThreshold() {
    return this.level * 10;
  }
}

export default Level;
