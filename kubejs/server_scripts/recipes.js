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
    }).id('warchasers:bee_spawn_egg');
    event.shaped('minecraft:cobweb', [
        'SBS',
        'BSB',
        'SBS'
    ], {
        B: '#forge:slimeballs',
        S: 'minecraft:string'
    }).id('warchasers:cobweb');
    event.shaped('minecraft:dragon_head', [
        'OOO',
        'EOE',
        'OOO'
    ], {
        E: 'minecraft:ender_pearl',
        O: 'minecraft:obsidian'
    }).id('warchasers:dragon_head');
    event.shapeless('minecraft:mycelium', ['minecraft:grass_block', '#forge:mushrooms']).id('warchasers:mycelium');
    event.shapeless('minecraft:grass_block', ['minecraft:dirt', 'minecraft:grass']).id('warchasers:grass_block');
    event.shaped('minecraft:trident', [
        'DND',
        'DSD',
        ' S '
    ], {
        D: 'minecraft:diamond',
        N: 'minecraft:nether_star',
        S: 'minecraft:stick'
    }).id('warchasers:trident');
    event.shaped('minecraft:bell', [
        'GGG',
        'GIG',
        'G G'
    ], {
        I: '#forge:nuggets/iron',
        G: '#forge:ingots/gold'
    }).id('warchasers:bell');
    event.shaped('minecraft:elytra', [
        'SES',
        'MDM',
        'M M'
    ], {
        M: 'minecraft:phantom_membrane',
        D: 'minecraft:diamond',
        E: 'minecraft:ender_pearl',
        S: 'minecraft:shulker_shell'
    }).id('warchasers:elytra');
    event.shaped('8x minecraft:end_stone', [
        'SSS',
        'SDS',
        'SSS'
    ], {
        S: '#forge:sandstone',
        D: 'minecraft:popped_chorus_fruit'
    }).id('warchasers:end_stone');
    event.shapeless('4x minecraft:name_tag', ['minecraft:lead', '#minecraft:signs']).id('warchasers:name_tag');
    event.shaped('2x minecraft:wet_sponge', [
        'WYW',
        'YWY',
        'WBW'
    ], {
        Y: '#forge:dyes/yellow',
        W: '#minecraft:wool',
        B: 'minecraft:water_bucket'
    }).id('warchasers:wet_sponge');
    event.shaped('minecraft:dragon_egg', [
        'NEN',
        'EOE',
        'NEN'
    ], {
        N: 'minecraft:nether_star',
        E: 'minecraft:egg',
        O: 'minecraft:obsidian'
    }).id('warchasers:dragon_egg');
    event.shaped('minecraft:shulker_shell', [
        'PPP',
        'PSP',
        '   '
    ], {
        S: 'minecraft:scute',
        P: 'minecraft:chorus_fruit',
    }).id('warchasers:shulker_shell');
    event.shaped('minecraft:heart_of_the_sea', [
        'LEL',
        'ENE',
        'LEL'
    ], {
        L: 'minecraft:lapis_lazuli',
        N: 'minecraft:nether_star',
        E: 'minecraft:ender_pearl',
    }).id('warchasers:heart_of_the_sea');
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
    }).id('warchasers:dragon_breath');

    event.shapeless(Item.of('minecraft:suspicious_stew', {Effects:[{EffectId:12, EffectDuration:80}]} ), ['minecraft:red_mushroom', 'minecraft:brown_mushroom','minecraft:bowl','minecraft:allium']).id('warchasers:suspicious_stew_1');
    event.shapeless(Item.of('minecraft:suspicious_stew', {Effects:[{EffectId:15, EffectDuration:160}]} ), ['minecraft:red_mushroom', 'minecraft:brown_mushroom','minecraft:bowl','minecraft:azure_bluet']).id('warchasers:suspicious_stew_2');
    event.shapeless(Item.of('minecraft:suspicious_stew', {Effects:[{EffectId:23, EffectDuration:7}]} ), ['minecraft:red_mushroom', 'minecraft:brown_mushroom','minecraft:bowl','minecraft:blue_orchid']).id('warchasers:suspicious_stew_3');
    event.shapeless(Item.of('minecraft:suspicious_stew', {Effects:[{EffectId:23, EffectDuration:7}]} ), ['minecraft:red_mushroom', 'minecraft:brown_mushroom','minecraft:bowl','minecraft:dandelion']).id('warchasers:suspicious_stew_4');
    event.shapeless(Item.of('minecraft:suspicious_stew', {Effects:[{EffectId:8, EffectDuration:120}]} ), ['minecraft:red_mushroom', 'minecraft:brown_mushroom','minecraft:bowl','minecraft:cornflower']).id('warchasers:suspicious_stew_5');
    event.shapeless(Item.of('minecraft:suspicious_stew', {Effects:[{EffectId:19, EffectDuration:240}]} ), ['minecraft:red_mushroom', 'minecraft:brown_mushroom','minecraft:bowl','minecraft:lily_of_the_valley']).id('warchasers:suspicious_stew_6');
    event.shapeless(Item.of('minecraft:suspicious_stew', {Effects:[{EffectId:10, EffectDuration:160}]} ), ['minecraft:red_mushroom', 'minecraft:brown_mushroom','minecraft:bowl','minecraft:oxeye_daisy']).id('warchasers:suspicious_stew_7');
    event.shapeless(Item.of('minecraft:suspicious_stew', {Effects:[{EffectId:16, EffectDuration:100}]} ), ['minecraft:red_mushroom', 'minecraft:brown_mushroom','minecraft:bowl','minecraft:poppy']).id('warchasers:suspicious_stew_8');
    event.shapeless(Item.of('minecraft:suspicious_stew', {Effects:[{EffectId:18, EffectDuration:180}]} ), ['minecraft:red_mushroom', 'minecraft:brown_mushroom','minecraft:bowl','minecraft:red_tulip']).id('warchasers:suspicious_stew_9');
    event.shapeless(Item.of('minecraft:suspicious_stew', {Effects:[{EffectId:18, EffectDuration:180}]} ), ['minecraft:red_mushroom', 'minecraft:brown_mushroom','minecraft:bowl','minecraft:orange_tulip']).id('warchasers:suspicious_stew_10');
    event.shapeless(Item.of('minecraft:suspicious_stew', {Effects:[{EffectId:18, EffectDuration:180}]} ), ['minecraft:red_mushroom', 'minecraft:brown_mushroom','minecraft:bowl','minecraft:white_tulip']).id('warchasers:suspicious_stew_11');
    event.shapeless(Item.of('minecraft:suspicious_stew', {Effects:[{EffectId:18, EffectDuration:180}]} ), ['minecraft:red_mushroom', 'minecraft:brown_mushroom','minecraft:bowl','minecraft:pink_tulip']).id('warchasers:suspicious_stew_12');
    event.shapeless(Item.of('minecraft:suspicious_stew', {Effects:[{EffectId:20, EffectDuration:160}]} ), ['minecraft:red_mushroom', 'minecraft:brown_mushroom','minecraft:bowl','minecraft:wither_rose']).id('warchasers:suspicious_stew_13');
    
    event.shaped('create:blaze_burner', [
        'BBB',
        'BTB',
        'BBB'
    ], {
        T: 'create:empty_blaze_burner',
        B: 'minecraft:blaze_rod'
    }).id('warchasers:blaze_burner');
    
})
