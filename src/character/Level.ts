class Level {
  constructor(private _level: number = 1, private _experience: number = 0) {}

  get level(): number {
    return this._level;
  }
  get experience(): number {
    return this._experience;
  }
  addExperience(experience: number) {
    const remainingExp = this.getExperienceForNextLevel();

    if (experience >= remainingExp) {
      this._level++;
      this._experience = experience - remainingExp;
    } else {
      this._experience += experience;
    }

    if (this._experience >= this.getCurrentExperienceThreshold()) {
      this.addExperience(0);
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
