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
    orders = [
        "Hold the Line!: Choose a friendly unit, this unit makes a 3 inch move toward it. Increase that unit's armor profile by 1(to a max of 5) until the end of the round."
    ]
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
    orders = [
        "Hold the Line!: Choose a friendly unit, this unit makes a 3 inch move toward it. Increase that unit's armor profile by 1(to a max of 5) until the end of the round."
    ]
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
    orders = [
        "Hold the Line!: Choose a friendly unit, this unit makes a 3 inch move toward it. Increase that unit's armor profile by 1(to a max of 5) until the end of the round."
    ]
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
    orders = [
    ]
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
    orders = [
    ]
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
    orders = [
    ]
}