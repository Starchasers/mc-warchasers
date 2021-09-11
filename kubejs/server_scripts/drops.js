var endermanDrops = [
    { item: 'minecraft:chorus_fruit', chance: 0.1 },
]

var skeletonDrops = [
    { item: 'minecraft:wither_skeleton_skull', chance: 0.3 },
]


onEvent('entity.drops', event => {
    var entity = event.getEntity()
    var dropsList = event.getDrops()

    if (entity.getName() == "Enderman") {
        utils.listOf(endermanDrops).forEach(function(drop) {
            event.addDrop(Item.of(drop.item), drop.chance)
        })
    }
    if (entity.getName() == "Skeleton") {
        utils.listOf(skeletonDrops).forEach(function(drop) {
            event.addDrop(Item.of(drop.item), drop.chance)
        })
    }

})


onEvent('block.drops', event => {
    var entity = event.getEntity()
    var dropsList = event.getDrops()

    if (entity.getName() == "Enderman") {
        utils.listOf(endermanDrops).forEach(function(drop) {
            event.addDrop(Item.of(drop.item), drop.chance)
        })
    }
    if (entity.getName() == "Skeleton") {
        utils.listOf(skeletonDrops).forEach(function(drop) {
            event.addDrop(Item.of(drop.item), drop.chance)
        })
    }

})

onEvent('block.loot_tables', event => {
    event.build('minecraft:grass', table => { // Build loot table manually
        table.pool(pool => {
            pool.rolls = 1 // Use one of these 3 - fixed, uniform, binominal
            pool.addEntry(`
              {
          "type": "minecraft:alternatives",
          "children": [
            {
              "type": "minecraft:item",
              "conditions": [
                {
                  "condition": "minecraft:match_tool",
                  "predicate": {
                    "item": "minecraft:shears"
                  }
                }
              ],
              "name": "minecraft:grass"
            },
            {
              "type": "minecraft:item",
              "conditions": [
                {
                  "condition": "minecraft:random_chance",
                  "chance": 0.125
                }
              ],
              "functions": [
                {
                  "function": "minecraft:apply_bonus",
                  "enchantment": "minecraft:fortune",
                  "formula": "minecraft:uniform_bonus_count",
                  "parameters": {
                    "bonusMultiplier": 2
                  }
                },
                {
                  "function": "minecraft:explosion_decay"
                }
              ],
              "name": "minecraft:wheat_seeds"
            },
            {
              "type": "minecraft:item",
              "conditions": [
                {
                  "condition": "minecraft:random_chance",
                  "chance": 0.125
                }
              ],
              "functions": [
                {
                  "function": "minecraft:apply_bonus",
                  "enchantment": "minecraft:fortune",
                  "formula": "minecraft:uniform_bonus_count",
                  "parameters": {
                    "bonusMultiplier": 2
                  }
                },
                {
                  "function": "minecraft:explosion_decay"
                }
              ],
              "name": "minecraft:nether_wart"
            }
          ]
        }
        `)
        })
    })
})
