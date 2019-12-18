let duke = {
    name: "duke",
    title: "Duke",
    points: 55,
    type: "Command",
    stats = {
        meleeSkill: "2",
        rangedSkill: "0",
        range: "1",
        armorValue: "0",
        manpower: "0",
        bravery: "3",
        leadership: "11"
    },
    traits = ["Katerian Empire","Command","[Subfaction]"],
    abilities = [
        "Commander: This Unit is attached to another Unit for the duration of the Battle. That unit adds the Values, Abilities and Unique Orders of this one to itself.",
        "Lockstep: When another unit with the 'Katerian Empire' keyword is within 1 inch of either flank of this unit, both of them get +1 to their melee skill profile.",
        "Fight for Your Land!: Once per turn, choose a friendly unit that is within 6 inches of this one. If that unit is destroyed or breaks, it may make an attack roll before being removed from the board."
    ],
    card: "duke.png",
    orders = {
        name: "holdTheLine",
        title: "Hold the Line!",
        description: "Choose a friendly unit, this unit makes a 3 inch move toward it. Increase that unit's armor profile by 1(to a max of 5) until the end of the round." ,
        card: "holdTheLine.png"
    }
}

let count = {
    name: "count",
    title: "Count",
    points: 40,
    type: "Command",
    stats = {
        meleeSkill: "1",
        rangedSkill: "0",
        range: "1",
        armorValue: "0",
        manpower: "0",
        bravery: "2",
        leadership: "8"
    },
    traits = ["Katerian Empire","Command","[Subfaction]"],
    abilities = [
        "Commander: This Unit is attached to another Unit for the duration of the Battle. That unit adds the Values, Abilities and Unique Orders of this one to itself.",
        "Lockstep: When another unit with the 'Katerian Empire' keyword is within 1 inch of either flank of this unit, both of them get +1 to their melee skill profile.",
    ],
    card: "count.png",
    orders = {
        name: "holdTheLine",
        title: "Hold the Line!",
        description: "Choose a friendly unit, this unit makes a 3 inch move toward it. Increase that unit's armor profile by 1(to a max of 5) until the end of the round." ,
        card: "holdTheLine.png"
    }
}

let knightCap = {
    name: "knightCap",
    title: "Knight-Captain",
    points: 30,
    type: "Command",
    stats = {
        meleeSkill: "1",
        rangedSkill: "0",
        range: "1",
        armorValue: "0",
        manpower: "0",
        bravery: "1",
        leadership: "6"
    },
    traits = ["Katerian Empire","Command","[Subfaction]"],
    abilities = [
        "Commander: This Unit is attached to another Unit for the duration of the Battle. That unit adds the Values, Abilities and Unique Orders of this one to itself.",
        "Lockstep: When another unit with the 'Katerian Empire' keyword is within 1 inch of either flank of this unit, both of them get +1 to their melee skill profile.",
    ],
    card: "knightCap.png",
    orders = {
        name: "holdTheLine",
        title: "Hold the Line!",
        description: "Choose a friendly unit, this unit makes a 3 inch move toward it. Increase that unit's armor profile by 1(to a max of 5) until the end of the round." ,
        card: "holdTheLine.png"
    }
}

let peasant = {
    name: "peasant",
    title: "Peasant Mob",
    points: 50,
    type: "infantry",
    stats = {
        meleeSkill: "2",
        rangedSkill: "0",
        range: "1",
        armorValue: "0",
        manpower: "150",
        bravery: "2",
        leadership: "0"
    },
    weaponry = [
        "Spears"
    ],
    traits = ["Katerian Empire","infantry","[Subfaction]"],
    abilities = [
        "Lockstep: When another unit with the 'Katerian Empire' keyword is within 1 inch of either flank of this unit, both of them get +1 to their melee skill profile.",
    ],
    card: "peasant.png",
    orders = {
    }
    
}

let militia = {
    name: "militia",
    title: "Militia",
    points: 75,
    type: "infantry",
    stats = {
        meleeSkill: "3",
        rangedSkill: "0",
        range: "1",
        armorValue: "1",
        manpower: "150",
        bravery: "3",
        leadership: "0"
    },
    weaponry = [
        "Spears",
        "Two-handed Axes",
        "Halberds"
    ],
    traits = ["Katerian Empire","infantry","[Subfaction]"],
    abilities = [
        "Lockstep: When another unit with the 'Katerian Empire' keyword is within 1 inch of either flank of this unit, both of them get +1 to their melee skill profile.",
    ],
    card: "militia.png",
    orders = {
    }
}

let sergeants = {
    name: "sergeants",
    title: "Sergeants",
    points: 90,
    type: "infantry",
    stats = {
        meleeSkill: "4",
        rangedSkill: "0",
        range: "1",
        armorValue: "2",
        manpower: "150",
        bravery: "4",
        leadership: "0"
    },
    weaponry = [
        "Spears",
        "Two-handed Axes",
        "Halberds",
        "Swords and Shields",
        "Pikes"
    ],
    traits = ["Katerian Empire","infantry","[Subfaction]"],
    abilities = [
        "Lockstep: When another unit with the 'Katerian Empire' keyword is within 1 inch of either flank of this unit, both of them get +1 to their melee skill profile.",
    ],
    card: "sergeants.png",
    orders = {
        name: "keepCalm",
        title:"Keep calm!",
        description: "This unit loses its next movement order. It may remove a Fear Token from itself and one friendly unit within 2 inches." ,
        card: "keepCalm.png"
    }
    
}

let heavyInf = {
    name: "heavyInf",
    title: "Heavy Infantry",
    points: 110,
    type: "infantry",
    stats = {
        meleeSkill: "4",
        rangedSkill: "0",
        range: "1",
        armorValue: "4",
        manpower: "150",
        bravery: "6",
        leadership: "0"
    },
    weaponry = [
        "Halberds",
        "Pikes",
        "Polaxes"
    ],
    traits = ["Katerian Empire","infantry","[Subfaction]"],
    abilities = [
        "Lockstep: When another unit with the 'Katerian Empire' keyword is within 1 inch of either flank of this unit, both of them get +1 to their melee skill profile.",
    ],
    card: "heavyInf.png",
    orders = {
        name: "breakThem",
        title: "Break them!",
        description: "This unit makes a charge attack towards an enemy unit of your choice. If it is successful, the enemy unit aquires a Fear Token." ,
        card: "breakThem.png"
    }
    
}

let footKnights = {
    name: "footKnights",
    title: "Foot Knights",
    points: 130,
    type: "infantry",
    stats = {
        meleeSkill: "6",
        rangedSkill: "0",
        range: "1",
        armorValue: "5",
        manpower: "150",
        bravery: "6",
        leadership: "0"
    },
    weaponry = [
        "Polaxes",
        "Longswords"
    ],
    traits = ["Katerian Empire","infantry","[Subfaction]"],
    abilities = [
        "Lockstep: When another unit with the 'Katerian Empire' keyword is within 1 inch of either flank of this unit, both of them get +1 to their melee skill profile.",
    ],
    card: "footKnights.png",
    orders = {
        name: "rally",
        title: "Rally!",
        description: "This unit makes a charge action towards an enemy unit of your choice, If it is successful, this unit and all other friendly units within 3 inches of it's starting position may remove one Fear Token." ,
        card: "rally.png"
    }
    
}

let archers = {
    name: "archers",
    title: "archers",
    points: 120,
    type: "ranged",
    stats = {
        meleeSkill: "1",
        rangedSkill: "2",
        range: "12",
        armorValue: "0",
        manpower: "100",
        bravery: "3",
        leadership: "0"
    },
    weaponry = [
        "Bodkins",
        "Broadheads"
    ],
    traits = ["Katerian Empire","ranged","[Subfaction]"],
    abilities = [
        "Lockstep: When another unit with the 'Katerian Empire' keyword is within 1 inch of either flank of this unit, both of them get +1 to their melee skill profile.",
    ],
    card: "archers.png",
    orders = {
    }
    
}

let crossbowmen = {
    name: "crossbowmen",
    title: "Crossbowmen",
    points: 100,
    type: "ranged",
    stats = {
        meleeSkill: "1",
        rangedSkill: "3",
        range: "8",
        armorValue: "1",
        manpower: "100",
        bravery: "3",
        leadership: "0"
    },
    weaponry = [
        "Bodkins",
        "Broadheads"
    ],
    traits = ["Katerian Empire","ranged","[Subfaction]"],
    abilities = [
        "Lockstep: When another unit with the 'Katerian Empire' keyword is within 1 inch of either flank of this unit, both of them get +1 to their melee skill profile.",
    ],
    card: "crossbowmen.png",
    orders = {
    }
    
}

let scoutCav = {
    name: "scoutCav",
    title: "Scout Cavalry",
    points: 70,
    type: "cavalry",
    stats = {
        meleeSkill: "3",
        rangedSkill: "0",
        range: "1",
        armorValue: "2",
        manpower: "75",
        bravery: "3",
        leadership: "0"
    },
    weaponry = [
        "Spears",
        "Longswords"
    ],
    traits = ["Katerian Empire","cavalry","[Subfaction]"],
    abilities = [
        "Lockstep: When another unit with the 'Katerian Empire' keyword is within 1 inch of either flank of this unit, both of them get +1 to their melee skill profile.",
        "Disengage!: Once per round, if this unit takes damage you may immediately issue a move order as if it was the movement phase."
    ],
    card: "scoutCav.png",
    orders = {
    }
    
}

let mountedSerg = {
    name: "mountedSerg",
    title: "Mounted Sergeants",
    points: 120,
    type: "cavalry",
    stats = {
        meleeSkill: "4",
        rangedSkill: "0",
        range: "1",
        armorValue: "3",
        manpower: "75",
        bravery: "4",
        leadership: "0"
    },
    weaponry = [
        "Spears",
        "Longswords",
        "Lances"
    ],
    traits = ["Katerian Empire","cavalry","[Subfaction]"],
    abilities = [
        "Lockstep: When another unit with the 'Katerian Empire' keyword is within 1 inch of either flank of this unit, both of them get +1 to their melee skill profile."
    ],
    card: "mountedSerg.png",
    orders = {
    }
    
}

let mountedSerg = {
    name: "mountedSerg",
    title: "Mounted Sergeants",
    points: 120,
    type: "cavalry",
    stats = {
        meleeSkill: "4",
        rangedSkill: "0",
        range: "1",
        armorValue: "3",
        manpower: "75",
        bravery: "4",
        leadership: "0"
    },
    weaponry = [
        "Spears",
        "Longswords",
        "Lances"
    ],
    traits = ["Katerian Empire","cavalry","[Subfaction]"],
    abilities = [
        "Lockstep: When another unit with the 'Katerian Empire' keyword is within 1 inch of either flank of this unit, both of them get +1 to their melee skill profile."
    ],
    card: "mountedSerg.png",
    orders = {
    }
    
}

let mountedKnights = {
    name: "mountedKnights",
    title: "Mounted Knights",
    points: 120,
    type: "cavalry",
    stats = {
        meleeSkill: "6",
        rangedSkill: "0",
        range: "1",
        armorValue: "4",
        manpower: "75",
        bravery: "6",
        leadership: "0"
    },
    weaponry = [
        "Longswords",
        "Lances"
    ],
    traits = ["Katerian Empire","cavalry","[Subfaction]"],
    abilities = [
        "Lockstep: When another unit with the 'Katerian Empire' keyword is within 1 inch of either flank of this unit, both of them get +1 to their melee skill profile."
    ],
    card: "mountedKnights.png",
    orders = {
        name: "rally",
        title: "Rally!",
        description: "This unit makes a charge action towards an enemy unit of your choice, If it is successful, this unit and all other friendly units within 3 inches of it's starting position may remove one Fear Token." ,
        card: "rally.png"
    }
    
}

let movementOrders = [
        0 ={
            name: "oneInchStr",
            title: "1 Inch Straight Move",
            description: "Make a 1 inch straight move",
            card: "oneInchStr.png"
        },
        1 ={
            name: "twoInchStr",
            title: "2 Inch Straight Move",
            description: "Make a 2 inch straight move",
            card: "twoInchStr.png"
        },
        2 ={
            name: "threeInchStr",
            title: "3 Inch Straight Move",
            description: "Make a 3 inch straight move",
            card: "threeInchStr.png"
        },
        3 ={
            name: "fourInchStr",
            title: "4 Inch Straight Move",
            description: "Make a 4 inch straight move",
            card: "fourInchStr.png"
        },
        4 ={
            name: "twoInchHalfWheel",
            title: "2 Inch Half-Wheel",
            description: "Make a 2 Inch Half-Wheel",
            card: "twoInchHalfWheel.png"
        },
        5 ={
            name: "threeInchHalfWheel",
            title: "3 Inch Half-Wheel",
            description: "Make a 3 Inch Half-Wheel",
            card: "threeInchHalfWheel.png"
        },
        6 ={
            name: "twoInchWheel",
            title: "2 Inch Wheel",
            description: "Make a 2 Inch Wheel",
            card: "twoInchWheel.png"
        },
        7 ={
            name: "threeInchWheel",
            title: "3 Inch Wheel",
            description: "Make a 3 Inch Wheel",
            card: "threeInchWheel.png"
        },
        8 ={
            name: "holdPosition",
            title: "Hold Position!",
            description: "This Unit does not move",
            card: "holdPosition.png"
        },
        9 ={
            name: "formWedge",
            title: "Form Wedge!",
            description: "This Unit changes to a Wedge Formation",
            card: "formWedge.png"
        },
        10 ={
            name: "formColumn",
            title: "Form Column!",
            description: "This Unit changes to a Column Formation",
            card: "formColumn.png"
        }
]

let combatOrders = [
    0 = {
        name: "charge",
        title: "Charge!",
        description: "Select a unit to charge at, then make a 3 inch straight move. If this unit ends within 1 inch of the charged unit, the charge succeeds, add 2 to the unit's melee skill profile, then immediately make an attack action. If this unit does not end its move within 1 inch of the charged unit, the charge has failed.",
        card: "charge.png"
    },
    1 = {
        name: "disengage",
        title: "Disengage!",
        description: "This Unit disengages with the Unit it is currently Engaged with. It makes a 3 inch straight move away from the other Unit.",
        card: "disengage.png"
    },
    2 = {
        name: "carryOn",
        title: "Carry On!",
        description: "This Unit does nothing.",
        card: "carryOn.png"
    },
    3 = {
        name: "attack",
        title: "Attack!",
        description: "This Unit makes an attack action against a unit it is engaged with.",
        card: "attack.png"
    },
    4 = {
        name: "loftTheBanner",
        title: "Loft the Banner!",
        description: "This Unit's Bravery Score is improved by 1 until the end of the round.",
        card: "loftTheBanner.png"
    },
]

let infantryOrders = {
    movement = [
        0 ={
            name: "rightFace",
            title: "Right Face!",
            description: "This Unit changes its facing to 90 degrees of the right of its current facing.",
            card: "rightFace.png"
        },
        1 ={
            name: "leftFace",
            title: "Left Face!",
            description: "This Unit changes its facing to 90 degrees of the left of its current facing.",
            card: "leftFace.png"
        },
        2 ={
            name: "aboutFace",
            title: "About Face!",
            description: "This Unit changes its facing to 180 degrees of its current facing.",
            card: "aboutFace.png"
        },
        3 ={
            name: "formSquare",
            title: "Form Square!",
            description: "This Unit changes to a Square Formation",
            card: "formSquare.png"
        }
    ],
    combat = [
        0 = {
            name: "brace",
            title: "Brace!",
            description: "Any units that attack this one must re-roll all 6s. This Unit cannot be issued a Movement Order next turn.",
            card: "brace.png"
        }
    ]
}

let rangedOrders = {
    movement = [
        0 ={
            name: "rightFace",
            title: "Right Face!",
            description: "This Unit changes its facing to 90 degrees of the right of its current facing.",
            card: "rightFace.png"
        },
        1 ={
            name: "leftFace",
            title: "Left Face!",
            description: "This Unit changes its facing to 90 degrees of the left of its current facing.",
            card: "leftFace.png"
        },
        2 ={
            name: "aboutFace",
            title: "About Face!",
            description: "This Unit changes its facing to 180 degrees of its current facing.",
            card: "aboutFace.png"
        },
        3 ={
            name: "formSquare",
            title: "Form Square!",
            description: "This Unit changes to a Square Formation",
            card: "formSquare.png"
        }
    ],
    combat = [
        0 = {
            name: "volley",
            title: "Volley!",
            description: "If this unit did not move during the movement phase, add 4 to its ranged skill profile for this round, then select a Hostile Unit within Range and make a Ranged attack targeting them.",
            card: "volley.png"
        },
        1 = {
            name: "loose",
            title: "Loose at Will!",
            description: "This Unit makes a Ranged attack targeting a Unit of its choice within Range.",
            card: "loose.png"
        }
    ]
}

let cavalryOrders = {
    movement = [
        0 ={
            name: "fiveInchStr",
            title: "5 Inch Straight Move",
            description: "Make a 5 inch straight move",
            card: "fiveInchStr.png"
        },
        1 ={
            name: "sixInchStr",
            title: "6 Inch Straight Move",
            description: "Make a 6 inch straight move",
            card: "sixInchStr.png"
        },
        2 ={
            name: "fourInchHalfWheel",
            title: "4 Inch Half-Wheel",
            description: "Make a 4 Inch Half-Wheel",
            card: "fourInchHalfWheel.png"
        },
        3 ={
            name: "fiveInchHalfWheel",
            title: "5 Inch Half-Wheel",
            description: "Make a 5 Inch Half-Wheel",
            card: "fiveInchHalfWheel.png"
        },
        4 ={
            name: "fourInchWheel",
            title: "4 Inch Wheel",
            description: "Make a 4 Inch Wheel",
            card: "fourInchWheel.png"
        },
        5 ={
            name: "fiveInchWheel",
            title: "5 Inch Wheel",
            description: "Make a 5 Inch Wheel",
            card: "fiveInchWheel.png"
        }
    ],
    combat = [
        0 ={
            name: "soundCharge",
            title: "Sound the Charge!",
            description: "This unit makes a charge action towards a Hostile Unit of your choice, if the charge is not successful, immediately make another charge action towards the same Hostile Unit.",
            card: "soundCharge.png"
        }
    ]
}

let weaponry = [
    swordShield = {
        name: "swordShield",
        title:"Sword and Shields",
        ability = [
            0 ={ 
                name: "parry",
                title: "Parry",
                description: "Attacking enemy units must reroll all 6s for melee damage."
             }
         ],
        order = {
            name: "lockShields",
            title: "Lock Shields!",
            description: "Make a brace action and then an attack action.",
            card: "lockShields.png"
        }
    },
    axe = {
        name: "axe",
        title:"Two-Handed Axes",
        ability = [
            0 ={ 
                name: "hackingBlows",
                title: "Hacking Blows",
                description: "When this unit attacks another unit, that unit recieves a Fear Token on a 1 or a 2."
             }
         ],
        order = {
            name: "pushBack",
            title: "Push them back!",
            description: "This Unit makes an attack action. If this Units deals more than 30 damage to the attacked Unit, both it, and the attacked Unit make a straight 2 inch move to the attacking Unit's forward direction.",
            card: "pushBack.png"
        }
    },
    polaxe = {
        name: "polaxe",
        title:"Polaxes",
        ability = [
           0 ={ 
                name: "hackingBlows",
                title: "Hacking Blows",
                description: "When this unit attacks another unit, that unit recieves a Fear Token on a 1 or a 2."
            },
            1 ={ 
                name: "rend",
                title: "Rend",
                description: "Whenever this unit attacks an enemy unit, reduce that unit's armor value profile by 1 for the rest of the round."
            },
            2 ={ 
                name: "stickThem",
                title: "Stick Them!",
                description: "Reroll all 1s for melee damage"
            }
        ],
        order = {
            name: "changeStance",
            title: "Change Stance!",
            description: "This Unit's current active Weapon Ability is deactivated. Choose a new Weapon Ability from the Polaxe list, it becomes active.",
            card: "changeStance.png"
        }
    },
    spear = {
        name: "spear",
        title:"Spears",
        ability = [
            0 ={ 
                name: "rend",
                title: "Rend",
                description: "Whenever this unit attacks an enemy unit, reduce that unit's armor value profile by 1 for the rest of the round."
            }
        ],
        order = {
            name: "readySpears",
            title: "Ready Spears!",
            description: "If this unit is successfully charged this round, it increases its armor value profile by 1(to a max of 5).",
            card: "readySpears.png"
        }
    },
    halberd = {
        name: "halberd",
        title:"Halberds",
        ability = [
            0 ={ 
                name: "swingingBlades",
                title: "Swinging Blades",
                description: "This unit may add 1(to a max of 5) to its armor value profile."
            }
        ],
        order = {
            name: "carveThem",
            title: "Carve Them!",
            description: "Make an attack action against a hostile unit, that unit's melee skill profile is lowered by 1 until the end of this round.",
            card: "carveThem.png"
        }
    },
    pike = {
        name: "pike",
        title: "Pikes",
        ability = [
            0 ={ 
                name: "longReach",
                title: "Long Reach",
                description: "This Unit may make a Melee attack at ranges greater than 1 inch. This Unit's Range is increased to 3 inches."
            }
        ],
        order = {
            name: "pikesOut",
            title: "Pikes Out!",
            description: "Until the beginning of the next round, if this unit is charged by another unit with the 'Cavalry' keyword they may immediately make an attack roll against the charging unit. The damage is dealt before the charge is resolved.",
            card: "pikesOut.png"
        }
    },
    longsword = {
        name: "longsword",
        title: "Longswords",
        ability = [
            0 ={ 
                name: "duelists",
                title: "Duelists",
                description: "This unit may add 1 to its melee skill profile."
            }
        ],
        order = {
            name: "withdraw",
            title: "Withdraw!",
            description: "This Unit makes an attack action and then a disengage action.",
            card: "withdraw.png"
        }
    },
    lance = {
        name: "lance",
        title: "Lances",
        ability = [
            0 ={ 
                name: "couched",
                title: "Couched",
                description: "When This unit makes a Charge Action, add 2 to its melee skill profile."
            }
        ],
        order = {
            name: "drawSidearms",
            title: "Draw Sidearms!",
            description: "This Unit unequips this weapon and equips another.",
            card: "drawSidearms.png"
        }
    },
    bodkin = {
        name: "bodkin",
        title: "Bodkins",
        ability = [
            0 ={ 
                name: "rend",
                title: "Rend",
                description: "Whenever this unit attacks an enemy unit, reduce that unit's armor value profile by 1 for the rest of the round."
            }
        ],
        order = {
            name: "changeAmmunition",
            title: "Change Ammunition!",
            description: "This Unit unequips this ammunition and equips another.",
            card: "changeAmmunition.png"
        }
    },
    broadhead = {
        name: "broadhead",
        title: "Broadhead",
        ability = [
            0 ={ 
                name: "deepCuts",
                title: "Deep Cuts",
                description: "This unit may add 1 to its ranged skill profile."
            }
        ],
        order = {
            name: "changeAmmunition",
            title: "Change Ammunition!",
            description: "This Unit unequips this ammunition and equips another.",
            card: "changeAmmunition.png"
        }
    },
]