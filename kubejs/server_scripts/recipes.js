onEvent('recipes', event => {
    event.shaped('minecraft:bee_spawn_egg', [
        ' B ',
        'PEP',
        ' G '
    ], {
        B: 'minecraft:blaze_rod',
        P: 'minecraft:blaze_powder',
        E: 'minecraft:egg',
        G: '#forge:ingots/gold'
    });
    event.shaped('minecraft:cobweb', [
        'SBS',
        'BSB',
        'SBS'
    ], {
        B: '#forge:slimeballs',
        S: 'minecraft:string'
    });
    event.shaped('minecraft:dragon_head', [
        'OOO',
        'EOE',
        'OOO'
    ], {
        E: 'minecraft:ender_pearl',
        O: 'minecraft:obsidian'
    });
    event.shapeless('minecraft:mycelium', ['minecraft:grass_block', '#forge:mushrooms']);
    event.shapeless('minecraft:grass_block', ['minecraft:dirt', 'minecraft:grass']);
    event.shaped('minecraft:trident', [
        'DND',
        'DSD',
        ' S '
    ], {
        D: 'minecraft:diamond',
        N: 'minecraft:nether_star',
        S: 'minecraft:stick'
    });
    event.shaped('minecraft:bell', [
        'GGG',
        'GIG',
        'G G'
    ], {
        I: '#forge:nuggets/iron',
        G: '#forge:ingots/gold'
    });
    event.shaped('minecraft:elytra', [
        'SES',
        'MDM',
        'M M'
    ], {
        M: 'minecraft:phantom_membrane',
        D: 'minecraft:diamond',
        E: 'minecraft:ender_pearl',
        S: 'minecraft:shulker_shell'
    });
    event.shaped('8x minecraft:end_stone', [
        'SSS',
        'SDS',
        'SSS'
    ], {
        S: '#forge:sandstone',
        D: 'minecraft:popped_chorus_fruit'
    });
    event.shapeless('4x minecraft:name_tag', ['minecraft:lead', '#minecraft:signs']);
    event.shaped('2x minecraft:wet_sponge', [
        'WYW',
        'YWY',
        'WBW'
    ], {
        Y: '#forge:dyes/yellow',
        W: '#minecraft:wool',
        B: 'minecraft:water_bucket'
    });
    event.shaped('minecraft:dragon_egg', [
        'NEN',
        'EOE',
        'NEN'
    ], {
        N: 'minecraft:nether_star',
        E: 'minecraft:egg',
        O: 'minecraft:obsidian'
    });
    event.shaped('minecraft:shulker_shell', [
        'PPP',
        'PSP',
        '   '
    ], {
        S: 'minecraft:scute',
        P: 'minecraft:chorus_fruit',
    });
    event.shaped('minecraft:heart_of_the_sea', [
        'LEL',
        'ENE',
        'LEL'
    ], {
        L: 'minecraft:lapis_lazuli',
        N: 'minecraft:nether_star',
        E: 'minecraft:ender_pearl',
    });
    event.shaped('minecraft:dragon_breath', [
        'ETE',
        'FBF',
        'GGG'
    ], {
        T: 'minecraft:ghast_tear',
        F: 'minecraft:fire_charge',
        E: 'minecraft:ender_pearl',
        B: 'minecraft:glass_bottle',
        G: 'minecraft:gunpowder',
    });

    event.shapeless(Item.of('minecraft:suspicious_stew', {Effects:[{EffectId:12, EffectDuration:80}]} ), ['minecraft:red_mushroom', 'minecraft:brown_mushroom','minecraft:bowl','minecraft:allium']);
    event.shapeless(Item.of('minecraft:suspicious_stew', {Effects:[{EffectId:15, EffectDuration:160}]} ), ['minecraft:red_mushroom', 'minecraft:brown_mushroom','minecraft:bowl','minecraft:azure_bluet']);
    event.shapeless(Item.of('minecraft:suspicious_stew', {Effects:[{EffectId:23, EffectDuration:7}]} ), ['minecraft:red_mushroom', 'minecraft:brown_mushroom','minecraft:bowl','minecraft:blue_orchid']);
    event.shapeless(Item.of('minecraft:suspicious_stew', {Effects:[{EffectId:23, EffectDuration:7}]} ), ['minecraft:red_mushroom', 'minecraft:brown_mushroom','minecraft:bowl','minecraft:dandelion']);
    event.shapeless(Item.of('minecraft:suspicious_stew', {Effects:[{EffectId:8, EffectDuration:120}]} ), ['minecraft:red_mushroom', 'minecraft:brown_mushroom','minecraft:bowl','minecraft:cornflower']);
    event.shapeless(Item.of('minecraft:suspicious_stew', {Effects:[{EffectId:19, EffectDuration:240}]} ), ['minecraft:red_mushroom', 'minecraft:brown_mushroom','minecraft:bowl','minecraft:lily_of_the_valley']);
    event.shapeless(Item.of('minecraft:suspicious_stew', {Effects:[{EffectId:10, EffectDuration:160}]} ), ['minecraft:red_mushroom', 'minecraft:brown_mushroom','minecraft:bowl','minecraft:oxeye_daisy']);
    event.shapeless(Item.of('minecraft:suspicious_stew', {Effects:[{EffectId:16, EffectDuration:100}]} ), ['minecraft:red_mushroom', 'minecraft:brown_mushroom','minecraft:bowl','minecraft:poppy']);
    event.shapeless(Item.of('minecraft:suspicious_stew', {Effects:[{EffectId:18, EffectDuration:180}]} ), ['minecraft:red_mushroom', 'minecraft:brown_mushroom','minecraft:bowl','minecraft:red_tulip']);
    event.shapeless(Item.of('minecraft:suspicious_stew', {Effects:[{EffectId:18, EffectDuration:180}]} ), ['minecraft:red_mushroom', 'minecraft:brown_mushroom','minecraft:bowl','minecraft:orange_tulip']);
    event.shapeless(Item.of('minecraft:suspicious_stew', {Effects:[{EffectId:18, EffectDuration:180}]} ), ['minecraft:red_mushroom', 'minecraft:brown_mushroom','minecraft:bowl','minecraft:white_tulip']);
    event.shapeless(Item.of('minecraft:suspicious_stew', {Effects:[{EffectId:18, EffectDuration:180}]} ), ['minecraft:red_mushroom', 'minecraft:brown_mushroom','minecraft:bowl','minecraft:pink_tulip']);
    event.shapeless(Item.of('minecraft:suspicious_stew', {Effects:[{EffectId:20, EffectDuration:160}]} ), ['minecraft:red_mushroom', 'minecraft:brown_mushroom','minecraft:bowl','minecraft:wither_rose']);

})
