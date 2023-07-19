export default function fifthEditionCharacterSheetConverter(xmlData) {
  const character = xmlData.getElementsByTagName('character')[0];

  function getData(tagNameString) {
    return character.getElementsByTagName(tagNameString)[0].childNodes[0].nodeValue
  }

  function parseWeapons(weaponsString) {
    const weaponComponents = weaponsString.split('⊠');
    const weaponCount = parseInt(weaponComponents[0]);
    // TODO: fix weapon parsing. most weapon arrays are 13 elements long, but if custom they can be longer.

    let weapons = {};

    for (let i = 0; i < weaponCount; i++) {
      const startIndex = i * 13 + 1;
      const weaponType = weaponComponents[startIndex];

      if (!weapons[weaponType]) {
        weapons[weaponType] = [];
      }

      weapons[weaponType].push(weaponComponents.slice(startIndex, startIndex + 13));
    }

    return weapons;
  }

  function getCharacterLevel(classString) {
    const classComponents = classString.split('⊠');
    let classLevel = 0;

    for (const value of classComponents) {
      classLevel += parseInt(value.split('⊡')[2]);
    }

    return classLevel;
  }

  function parseClasses(classString) {
    const classComponents = classString.split('⊠');

    let classes = [];

    for (const value of classComponents) {
      const className = value.split('⊡')[0];
      const subclassName = value.split('⊡')[1];
      const level = parseInt(value.split('⊡')[2]);
      classes.push({className, subclassName, level});
    }

    return classes;
  }

  function parseAbilityScores(abilityScoresString) {
    const abilityScoresComponents = abilityScoresString.split('⊠');
    return {
      abilityScoresOverrides: {
        str: parseInt(abilityScoresComponents[0]),
        dex: parseInt(abilityScoresComponents[1]),
        con: parseInt(abilityScoresComponents[2]),
        int: parseInt(abilityScoresComponents[3]),
        wis: parseInt(abilityScoresComponents[4]),
        cha: parseInt(abilityScoresComponents[5])
      },
      abilitySaveProficiencies: {
        str: abilityScoresComponents[6],
        dex: abilityScoresComponents[7],
        con: abilityScoresComponents[8],
        int: abilityScoresComponents[9],
        wis: abilityScoresComponents[10],
        cha: abilityScoresComponents[11]
      },
      abilitySaveMisc: {
        str: parseInt(abilityScoresComponents[12]),
        dex: parseInt(abilityScoresComponents[13]),
        con: parseInt(abilityScoresComponents[14]),
        int: parseInt(abilityScoresComponents[15]),
        wis: parseInt(abilityScoresComponents[16]),
        cha: parseInt(abilityScoresComponents[17])
      },
    };
  }

  function parseSkillInfo(skillInfoString) {
    const proficiencyComponents = skillInfoString.split('⊠');
    console.log(proficiencyComponents[9])
    return {
      skillProficiencies: {
        athletics: proficiencyComponents[0],
        acrobatics: proficiencyComponents[1],
        slightOfHand: proficiencyComponents[2],
        stealth: proficiencyComponents[3],
        arcana: proficiencyComponents[4],
        history: proficiencyComponents[5],
        investigation: proficiencyComponents[6],
        nature: proficiencyComponents[7],
        religion: proficiencyComponents[8],
        animalHandling: proficiencyComponents[9],
        insight: proficiencyComponents[10],
        medicine: proficiencyComponents[11],
        perception: proficiencyComponents[12],
        survival: proficiencyComponents[13],
        deception: proficiencyComponents[14],
        intimidation: proficiencyComponents[15],
        performance: proficiencyComponents[16],
        persuasion: proficiencyComponents[17]
      },
      skillDoubleProficiencies: {
        athletics: proficiencyComponents[38],
        acrobatics: proficiencyComponents[39],
        slightOfHand: proficiencyComponents[40],
        stealth: proficiencyComponents[41],
        arcana: proficiencyComponents[42],
        history: proficiencyComponents[43],
        investigation: proficiencyComponents[44],
        nature: proficiencyComponents[45],
        religion: proficiencyComponents[46],
        animalHandling: proficiencyComponents[47],
        insight: proficiencyComponents[48],
        medicine: proficiencyComponents[49],
        perception: proficiencyComponents[50],
        survival: proficiencyComponents[51],
        deception: proficiencyComponents[52],
        intimidation: proficiencyComponents[53],
        performance: proficiencyComponents[54],
        persuasion: proficiencyComponents[55]
      },
      skillHalfProficiencies: {
        athletics: proficiencyComponents[57],
        acrobatics: proficiencyComponents[58],
        slightOfHand: proficiencyComponents[59],
        stealth: proficiencyComponents[60],
        arcana: proficiencyComponents[61],
        history: proficiencyComponents[62],
        investigation: proficiencyComponents[63],
        nature: proficiencyComponents[64],
        religion: proficiencyComponents[65],
        animalHandling: proficiencyComponents[66],
        insight: proficiencyComponents[67],
        medicine: proficiencyComponents[68],
        perception: proficiencyComponents[69],
        survival: proficiencyComponents[70],
        deception: proficiencyComponents[71],
        intimidation: proficiencyComponents[72],
        performance: proficiencyComponents[73],
        persuasion: proficiencyComponents[74]
      },
      skillHalfProficienciesRoundedUp: {
        athletics: proficiencyComponents[76],
        acrobatics: proficiencyComponents[77],
        slightOfHand: proficiencyComponents[78],
        stealth: proficiencyComponents[79],
        arcana: proficiencyComponents[80],
        history: proficiencyComponents[81],
        investigation: proficiencyComponents[82],
        nature: proficiencyComponents[83],
        religion: proficiencyComponents[84],
        animalHandling: proficiencyComponents[85],
        insight: proficiencyComponents[86],
        medicine: proficiencyComponents[87],
        perception: proficiencyComponents[88],
        survival: proficiencyComponents[89],
        deception: proficiencyComponents[90],
        intimidation: proficiencyComponents[91],
        performance: proficiencyComponents[92],
        persuasion: proficiencyComponents[93]
      },
      skillMiscBonus: {
        athletics: parseInt(proficiencyComponents[19]),
        acrobatics: parseInt(proficiencyComponents[20]),
        slightOfHand: parseInt(proficiencyComponents[21]),
        stealth: parseInt(proficiencyComponents[22]),
        arcana: parseInt(proficiencyComponents[23]),
        history: parseInt(proficiencyComponents[24]),
        investigation: parseInt(proficiencyComponents[25]),
        nature: parseInt(proficiencyComponents[26]),
        religion: parseInt(proficiencyComponents[27]),
        animalHandling: parseInt(proficiencyComponents[28]),
        insight: parseInt(proficiencyComponents[29]),
        medicine: parseInt(proficiencyComponents[30]),
        perception: parseInt(proficiencyComponents[31]),
        survival: parseInt(proficiencyComponents[32]),
        deception: parseInt(proficiencyComponents[33]),
        intimidation: parseInt(proficiencyComponents[34]),
        performance: parseInt(proficiencyComponents[35]),
        persuasion: parseInt(proficiencyComponents[36])
      },
    }
  }

  function parseResources(resourceString){
    const resourceGroups = resourceString.split('⊠');
    let resources = [];

    // for (let i = 0; i < resourceGroups.length; i++) {}
    for (const resourceGroup of resourceGroups) {
      const resource = resourceGroup.split('⊡');
      const name = resource[0];
      const displayName = resource[1];
      const maxValue = parseInt(resource[2]);
      // const currentValue = parseInt(resource[3]);
      const dieSize = parseInt(resource[4]);
      const spendable = parseInt(resource[5]); // spendable == 1, static == 2
      const reset = parseInt(resource[1]);
      const regainShort = parseInt(resource[6]);
      const regainLong = parseInt(resource[7]);
      resources.push({name,displayName,maxValue,dieSize,spendable,reset,regainShort,regainLong});
    }

    return resources;
  }

  function parseHitDice(hitDiceString){
    const  hitDiceComponents = hitDiceString.split('⊠');
    const diceSetCount = parseInt(hitDiceComponents[0]);

    let hitDiceArray = [];

    for (const hitDiceComponent of hitDiceComponents) {
      hitDiceArray.push(parseInt(hitDiceComponent));
    }

    let hitDiceSets = [];

    for (let i = 0; i < diceSetCount; i++) {
      const startIndex = i * 3 + 1;
      const diceType = hitDiceArray[startIndex + 1];

      // if (!hitDiceSets[diceType]) {
      //   hitDiceSets[diceType] = [];
      // }

      let numberOfDice = hitDiceArray[startIndex];
      let dieSize = diceType;
      let diceRemaining = numberOfDice;

      hitDiceSets.push({numberOfDice, dieSize, diceRemaining})
    }
    return hitDiceSets;
  }

  return {
    gameType: 'dnd5e',

    initMiscMod: parseInt(getData("initMiscMod")),
    improvedInitiative: parseInt(getData("improvedInitiative")),

    health: {
      max: parseInt(getData("maxHealth")),
      current: parseInt(getData("maxHealth")),
      // current: parseInt(getData("currentHealth")),
      temp: 0,
      // temp: parseInt(getData("currentTempHP")),
    },

    armorBonus: parseInt(getData("armorBonus")),
    shieldBonus: parseInt(getData("shieldBonus")),
    miscArmorBonus: parseInt(getData("miscArmorBonus")),
    unarmoredDefense: parseInt(getData("unarmoredDefense")),

    maxDex: parseInt(getData("maxDex")),

    proficiencyBonus: parseInt(getData("proficiencyBonus")),

    miscSpellAttackBonus: parseInt(getData("miscSpellAttackBonus")),
    miscSpellDCBonus: parseInt(getData("miscSpellDCBonus")),
    // castingStatCode: parseInt(getData("castingStatCode")), // not used as of 7/18/23

    offenseAbilityDisplay: parseInt(getData("offenseAbilityDisplay")),

    movementSpeed: {
      // baseSpeed: parseInt(getData("baseSpeed")), // Implemented in movement speed
      // speedMiscMod: parseInt(getData("speedMiscMod")), // Implemented in movement speed
      // movementMode: getData("movementMode"), // Implemented in movement speed
      activeMovementSpeed: 'walking',
      walking: parseInt(getData("baseSpeed")) + parseInt(getData("speedMiscMod")),
      walkingNotes: '',
      climbing: 0,
      climbingNotes: '',
      swimming: 0,
      swimmingNotes: '',
      flying: 0,
      flyingNotes: '',
      burrowing: 0,
      burrowingNotes: ''
    },

    classData: parseClasses(getData("classData").split('⊟')[0]),
    // classCustom: getData("noteList").split('⊠')[7], // User filled class
    // classLabel: getData("noteList").split('⊠')[16], // class user filled

    characterLevel: getCharacterLevel(getData("classData").split('⊟')[0]),
    resources: parseResources(getData("classData").split('⊟')[2]),
    feats: getData("classData").split('⊟')[3].split('⊠').filter(el => el).sort(),
    asi: getData("classData").split('⊟')[4].split('⊡'),

    abilityScores: parseAbilityScores(getData("abilityScores")),

    // weaponList: parseWeapons(getData("weaponList")), // TODO: fix weapon parsing

    skillInfo: parseSkillInfo(getData("skillInfo")),
    spellList: getData("spellList").split('⊠'),

    get background() {return getData("classData").split('⊟')[9] === 'Custom' ? getData("noteList").split('⊠')[9] : getData("classData").split('⊟')[9]},

    race: getData("classData").split('⊟')[7],
    get raceLabel() {return getData("classData").split('⊟')[8] === 'Custom Lineage' ? getData("noteList").split('⊠')[8] : getData("classData").split('⊟')[8]},


    description: {
      characterDetails: {
        alignment: getData("noteList").split('⊠')[10],
        faith: '',
        lifestyle: ''
      },
      physicalCharacteristics: {
        gender: '',
        eyes: '',
        height: '',
        faith: '',
        hair: '',
        skin: '',
        age: 0,
        weight: 0
      },
      personalCharacteristics: {
        personalityTraits: getData("noteList").split('⊠')[11],
        ideals: getData("noteList").split('⊠')[12],
        bonds: getData("noteList").split('⊠')[13],
        flaws: getData("noteList").split('⊠')[14],
      },
    },

    notes: {
      organizations: '',
      allies: '',
      enemies: '',
      backstory: '',
      other: getData("noteList").split('⊠')[6].split('\n').join()
    },

    features: getData("noteList").split('⊠')[0],

    proficienciesAndLanguages: {
      armorProficiencies: getData("noteList").split('⊠')[1].split("\n").filter(el => el).sort(),
      weaponProficiencies: getData("noteList").split('⊠')[2].split("\n").filter(el => el).sort(),
      toolProficiencies: getData("noteList").split('⊠')[3].split("\n").filter(el => el).sort(),
      languagesKnown: getData("noteList").split('⊠')[4].split("\n").filter(el => el).sort(),
    },

    equipment: getData("noteList").split('⊠')[5].split("\n").filter(el => el),

    name: getData("noteList").split('⊠')[15],
    money: {
      cp: parseInt(getData("noteList").split('⊠')[17]),
      sp: parseInt(getData("noteList").split('⊠')[18]),
      ep: parseInt(getData("noteList").split('⊠')[19]),
      gp: parseInt(getData("noteList").split('⊠')[20]),
      pp: parseInt(getData("noteList").split('⊠')[21])
    },

    experience: getData("noteList").split('⊠')[22],

    hitDiceList: parseHitDice(getData("hitDiceList")),

    // classResource: getData("classResource").split('⊠'), // not used as of 7/18/23
  };
}
