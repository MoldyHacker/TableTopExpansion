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
        str: abilityScoresComponents[6] === "true",
        dex: abilityScoresComponents[7] === "true",
        con: abilityScoresComponents[8] === "true",
        int: abilityScoresComponents[9] === "true",
        wis: abilityScoresComponents[10] === "true",
        cha: abilityScoresComponents[11] === "true"
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
    return {
      skillProficiencies: {
        athletics: proficiencyComponents[0] === "true",
        acrobatics: proficiencyComponents[1] === "true",
        slightOfHand: proficiencyComponents[2] === "true",
        stealth: proficiencyComponents[3] === "true",
        arcana: proficiencyComponents[4] === "true",
        history: proficiencyComponents[5] === "true",
        investigation: proficiencyComponents[6] === "true",
        nature: proficiencyComponents[7] === "true",
        religion: proficiencyComponents[8] === "true",
        animalHandling: proficiencyComponents[9] === "true",
        insight: proficiencyComponents[10] === "true",
        medicine: proficiencyComponents[11] === "true",
        perception: proficiencyComponents[12] === "true",
        survival: proficiencyComponents[13] === "true",
        deception: proficiencyComponents[14] === "true",
        intimidation: proficiencyComponents[15] === "true",
        performance: proficiencyComponents[16] === "true",
        persuasion: proficiencyComponents[17] === "true"
      },
      skillDoubleProficiencies: {
        athletics: proficiencyComponents[38] === "true",
        acrobatics: proficiencyComponents[39] === "true",
        slightOfHand: proficiencyComponents[40] === "true",
        stealth: proficiencyComponents[41] === "true",
        arcana: proficiencyComponents[42] === "true",
        history: proficiencyComponents[43] === "true",
        investigation: proficiencyComponents[44] === "true",
        nature: proficiencyComponents[45] === "true",
        religion: proficiencyComponents[46] === "true",
        animalHandling: proficiencyComponents[47] === "true",
        insight: proficiencyComponents[48] === "true",
        medicine: proficiencyComponents[49] === "true",
        perception: proficiencyComponents[50] === "true",
        survival: proficiencyComponents[51] === "true",
        deception: proficiencyComponents[52] === "true",
        intimidation: proficiencyComponents[53] === "true",
        performance: proficiencyComponents[54] === "true",
        persuasion: proficiencyComponents[55] === "true"
      },
      skillHalfProficiencies: {
        athletics: proficiencyComponents[57] === "true",
        acrobatics: proficiencyComponents[58] === "true",
        slightOfHand: proficiencyComponents[59] === "true",
        stealth: proficiencyComponents[60] === "true",
        arcana: proficiencyComponents[61] === "true",
        history: proficiencyComponents[62] === "true",
        investigation: proficiencyComponents[63] === "true",
        nature: proficiencyComponents[64] === "true",
        religion: proficiencyComponents[65] === "true",
        animalHandling: proficiencyComponents[66] === "true",
        insight: proficiencyComponents[67] === "true",
        medicine: proficiencyComponents[68] === "true",
        perception: proficiencyComponents[69] === "true",
        survival: proficiencyComponents[70] === "true",
        deception: proficiencyComponents[71] === "true",
        intimidation: proficiencyComponents[72] === "true",
        performance: proficiencyComponents[73] === "true",
        persuasion: proficiencyComponents[74] === "true"
      },
      skillHalfProficienciesRoundedUp: {
        athletics: proficiencyComponents[76] === "true",
        acrobatics: proficiencyComponents[77] === "true",
        slightOfHand: proficiencyComponents[78] === "true",
        stealth: proficiencyComponents[79] === "true",
        arcana: proficiencyComponents[80] === "true",
        history: proficiencyComponents[81] === "true",
        investigation: proficiencyComponents[82] === "true",
        nature: proficiencyComponents[83] === "true",
        religion: proficiencyComponents[84] === "true",
        animalHandling: proficiencyComponents[85] === "true",
        insight: proficiencyComponents[86] === "true",
        medicine: proficiencyComponents[87] === "true",
        perception: proficiencyComponents[88] === "true",
        survival: proficiencyComponents[89] === "true",
        deception: proficiencyComponents[90] === "true",
        intimidation: proficiencyComponents[91] === "true",
        performance: proficiencyComponents[92] === "true",
        persuasion: proficiencyComponents[93] === "true"
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

    for (const resourceGroup of resourceGroups) {
      const resource = resourceGroup.split('⊡');
      /*
      * index | resource
      *  0 | name
      *  1 | display name
      *  2 | max value
      *  3 | current value
      *  4 | size of the dice
      *  5 | 1 === spendable, 2 === static, 0 === never
      *  6 | number regained on short rest
      *  7 | number regained on a long red
      *  8 | ?
      *  9 | ?
      */
      const name = resource[0];
      const displayName = resource[1];
      const maxValue = parseInt(resource[2]);
      const currentValue = parseInt(resource[2]); // current value is set to the max value
      const dieSize = parseInt(resource[4]);
      const regainShort = parseInt(resource[6]);
      const regainLong = parseInt(resource[7]);

      let spendable = parseInt(resource[5]);
      if(spendable === 0) {
        spendable = "never"
      } else if(spendable === 1) {
        spendable = "spendable"
      } else if (spendable === 2) {
        spendable = "static"
      } else {
        spendable = "Unknown"
      }

      resources.push({name,displayName,maxValue,currentValue,dieSize,spendable,regainShort,regainLong});
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

    // offenseAbilityDisplay: parseInt(getData("offenseAbilityDisplay")), // not used 7/22/23

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


    name: getData("noteList").split('⊠')[15],
    classData: parseClasses(getData("classData").split('⊟')[0]),
    characterLevel: getCharacterLevel(getData("classData").split('⊟')[0]),
    experience: getData("noteList").split('⊠')[22],
    // classCustom: getData("noteList").split('⊠')[7], // User filled class
    // classLabel: getData("noteList").split('⊠')[16], // class user filled
    race: getData("classData").split('⊟')[7],
    get raceLabel() {return getData("classData").split('⊟')[8] === 'Custom Lineage' ? getData("noteList").split('⊠')[8] : getData("classData").split('⊟')[8]},
    skillInfo: parseSkillInfo(getData("skillInfo")),
    get background() {return getData("classData").split('⊟')[9] === 'Custom' ? getData("noteList").split('⊠')[9] : getData("classData").split('⊟')[9]},
    feats: getData("classData").split('⊟')[3].split('⊠').filter(el => el).sort(),
    asi: getData("classData").split('⊟')[4].split('⊡'),
    classFeatures: getData("classData").split('⊟')[1].split('⊠').filter(el => el),
    abilityScores: parseAbilityScores(getData("abilityScores")),
    features: getData("noteList").split('⊠')[0],


    resources: parseResources(getData("classData").split('⊟')[2]),


    // weaponList: parseWeapons(getData("weaponList")), // TODO: fix weapon parsing
    // spellList: getData("spellList").split('⊠'), // TODO: add spell parsing



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


    featuresAndTraits: {

    },


    proficienciesAndLanguages: {
      armorProficiencies: getData("noteList").split('⊠')[1].split("\n").filter(el => el).sort(),
      weaponProficiencies: getData("noteList").split('⊠')[2].split("\n").filter(el => el).sort(),
      toolProficiencies: getData("noteList").split('⊠')[3].split("\n").filter(el => el).sort(),
      languagesKnown: getData("noteList").split('⊠')[4].split("\n").filter(el => el).sort(),
    },

    equipment: getData("noteList").split('⊠')[5].split("\n").filter(el => el),




    inventory: {
      money: {
        cp: parseInt(getData("noteList").split('⊠')[17]),
        sp: parseInt(getData("noteList").split('⊠')[18]),
        ep: parseInt(getData("noteList").split('⊠')[19]),
        gp: parseInt(getData("noteList").split('⊠')[20]),
        pp: parseInt(getData("noteList").split('⊠')[21])
      },
      equipment: {},

    },

    hitDiceList: parseHitDice(getData("hitDiceList")),

    // classResource: getData("classResource").split('⊠'), // not used as of 7/18/23
  };
}
