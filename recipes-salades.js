// ============================================================
// SALADES & TABOULÉS — banque de remplacement "Envie de fraîcheur"
// 10 taboulés + 15 salades originales et gourmandes
// Chargé dynamiquement par index.html, jamais affiché ailleurs que dans
// le choix "Salades & Taboulés" du popup de remplacement d'un déjeuner/dîner
// ============================================================

const RECIPES_SALADES = {
  "taboules": [
    {
      id:"sal-tab-1", cat:"taboule", label:"Taboulé",
      name:"Taboulé traditionnel menthe-citron-persil",
      kcal:340, p:9, g:48, l:13, time:"25 min",
      ingredients:[{name:"Semoule fine",base:80,unit:"g"},{name:"Persil frais",base:30,unit:"g"},{name:"Menthe fraîche",base:15,unit:"g"},{name:"Tomates",base:2,unit:""},{name:"Concombre",base:0.5,unit:""},{name:"Citron (jus)",base:1,unit:""},{name:"Huile d'olive",base:2,unit:"c.à.s."}],
      steps:`<div class="step-block"><div class="step-header"><div class="step-num">1</div><div class="step-title">Préparer la semoule</div><span class="step-timing">⏱ 10 min</span></div><div class="step-desc">Versez la semoule dans un saladier, couvrez d'eau bouillante à hauteur, couvrez et laissez gonfler 10 min. Égrenez à la fourchette.</div><div class="step-tip">Ne mettez pas trop d'eau — la semoule doit gonfler sans devenir pâteuse.</div></div><div class="step-block"><div class="step-header"><div class="step-num">2</div><div class="step-title">Préparer les légumes et herbes</div><span class="step-timing">⏱ 10 min</span></div><div class="step-desc">Hachez finement persil et menthe. Coupez tomates et concombre en petits dés. Mélangez le tout à la semoule.</div></div><div class="step-block"><div class="step-header"><div class="step-num">3</div><div class="step-title">Assaisonner</div><span class="step-timing">⏱ 5 min</span></div><div class="step-desc">Arrosez de jus de citron et huile d'olive. Salez, poivrez. Mélangez bien et réfrigérez au moins 30 min avant de servir.</div></div>`
    },
    {
      id:"sal-tab-2", cat:"taboule", label:"Taboulé",
      name:"Taboulé quinoa, grenade et amandes effilées",
      kcal:380, p:11, g:42, l:18, time:"25 min",
      ingredients:[{name:"Quinoa",base:80,unit:"g"},{name:"Graines de grenade",base:60,unit:"g"},{name:"Amandes effilées",base:20,unit:"g"},{name:"Menthe fraîche",base:10,unit:"g"},{name:"Citron (jus)",base:1,unit:""},{name:"Huile d'olive",base:1.5,unit:"c.à.s."}],
      steps:`<div class="step-block"><div class="step-header"><div class="step-num">1</div><div class="step-title">Cuire le quinoa</div><span class="step-timing">⏱ 15 min</span></div><div class="step-desc">Rincez le quinoa, cuisez-le dans 2 fois son volume d'eau salée 12-15 min jusqu'à absorption complète. Laissez refroidir.</div></div><div class="step-block"><div class="step-header"><div class="step-num">2</div><div class="step-title">Torréfier les amandes</div><span class="step-timing">⏱ 3 min</span></div><div class="step-desc">Faites dorer les amandes effilées à sec dans une poêle 2-3 min en remuant constamment. Réservez.</div><div class="step-tip">Surveillez bien — les amandes effilées brûlent très vite.</div></div><div class="step-block"><div class="step-header"><div class="step-num">3</div><div class="step-title">Assembler</div><span class="step-timing">⏱ 7 min</span></div><div class="step-desc">Mélangez quinoa froid, graines de grenade, menthe ciselée. Arrosez de citron et huile d'olive. Parsemez d'amandes torréfiées au moment de servir.</div></div>`
    },
    {
      id:"sal-tab-3", cat:"taboule", label:"Taboulé",
      name:"Taboulé libanais concombre-tomate-menthe fraîche",
      kcal:310, p:7, g:44, l:11, time:"25 min",
      ingredients:[{name:"Semoule fine ou boulgour",base:70,unit:"g"},{name:"Concombre",base:1,unit:""},{name:"Tomates",base:2,unit:""},{name:"Menthe fraîche",base:20,unit:"g"},{name:"Persil frais",base:20,unit:"g"},{name:"Citron (jus)",base:1.5,unit:""},{name:"Huile d'olive",base:2,unit:"c.à.s."}],
      steps:`<div class="step-block"><div class="step-header"><div class="step-num">1</div><div class="step-title">Préparer la base</div><span class="step-timing">⏱ 10 min</span></div><div class="step-desc">Faites gonfler la semoule à l'eau bouillante 10 min (ou cuisez le boulgour selon le paquet). Égrenez.</div></div><div class="step-block"><div class="step-header"><div class="step-num">2</div><div class="step-title">Couper finement</div><span class="step-timing">⏱ 10 min</span></div><div class="step-desc">Épépinez le concombre et coupez-le en petits dés. Coupez les tomates en dés. Hachez très finement menthe et persil — c'est la base du goût libanais.</div></div><div class="step-block"><div class="step-header"><div class="step-num">3</div><div class="step-title">Mélanger et assaisonner</div><span class="step-timing">⏱ 5 min</span></div><div class="step-desc">Mélangez tous les ingrédients. Citron généreux, huile d'olive, sel. Le taboulé libanais est traditionnellement très citronné et herbacé.</div></div>`
    },
    {
      id:"sal-tab-4", cat:"taboule", label:"Taboulé",
      name:"Taboulé boeuf émincé épicé, menthe et citron",
      kcal:420, p:28, g:40, l:16, time:"30 min",
      ingredients:[{name:"Semoule fine",base:70,unit:"g"},{name:"Boeuf émincé (faux-filet ou rumsteck)",base:130,unit:"g"},{name:"Menthe fraîche",base:15,unit:"g"},{name:"Cumin",base:1,unit:"c.à.c."},{name:"Citron (jus)",base:1,unit:""},{name:"Huile d'olive",base:1.5,unit:"c.à.s."}],
      steps:`<div class="step-block"><div class="step-header"><div class="step-num">1</div><div class="step-title">Préparer la semoule</div><span class="step-timing">⏱ 10 min</span></div><div class="step-desc">Faites gonfler la semoule à l'eau bouillante 10 min. Égrenez à la fourchette.</div></div><div class="step-block"><div class="step-header"><div class="step-num">2</div><div class="step-title">Saisir le boeuf épicé</div><span class="step-timing">⏱ 8 min</span></div><div class="step-desc">Assaisonnez le boeuf émincé de cumin, sel, poivre. Saisissez à feu vif 3-4 min dans un filet d'huile — il doit rester rosé et tendre. Laissez tiédir.</div><div class="step-tip">Ne surcuisez pas le boeuf émincé, sinon il devient sec dans la salade.</div></div><div class="step-block"><div class="step-header"><div class="step-num">3</div><div class="step-title">Assembler</div><span class="step-timing">⏱ 12 min</span></div><div class="step-desc">Mélangez semoule, menthe ciselée, citron et huile d'olive. Disposez le boeuf tiède dessus au moment de servir.</div></div>`
    },
    {
      id:"sal-tab-5", cat:"taboule", label:"Taboulé",
      name:"Taboulé pois chiches grillés épicés et coriandre",
      kcal:360, p:14, g:50, l:12, time:"30 min",
      ingredients:[{name:"Semoule fine",base:70,unit:"g"},{name:"Pois chiches cuits",base:150,unit:"g"},{name:"Coriandre fraîche",base:20,unit:"g"},{name:"Cumin-paprika",base:1,unit:"c.à.c."},{name:"Citron (jus)",base:1,unit:""},{name:"Huile d'olive",base:1.5,unit:"c.à.s."}],
      steps:`<div class="step-block"><div class="step-header"><div class="step-num">1</div><div class="step-title">Griller les pois chiches</div><span class="step-timing">⏱ 15 min</span></div><div class="step-desc">Égouttez et séchez bien les pois chiches. Assaisonnez de cumin, paprika, sel, filet d'huile. Four 200°C, 15 min jusqu'à légèrement croustillants.</div><div class="step-tip">Bien sécher les pois chiches avant cuisson est la clé pour qu'ils croustillent.</div></div><div class="step-block"><div class="step-header"><div class="step-num">2</div><div class="step-title">Préparer la semoule</div><span class="step-timing">⏱ 10 min</span></div><div class="step-desc">Faites gonfler la semoule à l'eau bouillante 10 min. Égrenez, ajoutez coriandre ciselée, citron et huile.</div></div><div class="step-block"><div class="step-header"><div class="step-num">3</div><div class="step-title">Assembler</div><span class="step-timing">⏱ 5 min</span></div><div class="step-desc">Mélangez la semoule aux pois chiches grillés encore tièdes. Servez rapidement pour profiter du croquant.</div></div>`
    },
    {
      id:"sal-tab-6", cat:"taboule", label:"Taboulé",
      name:"Taboulé feta-olives noires-citron confit",
      kcal:400, p:14, g:40, l:21, time:"20 min",
      ingredients:[{name:"Semoule fine",base:70,unit:"g"},{name:"Feta",base:70,unit:"g"},{name:"Olives noires",base:40,unit:"g"},{name:"Citron confit",base:0.5,unit:""},{name:"Persil frais",base:15,unit:"g"},{name:"Huile d'olive",base:1.5,unit:"c.à.s."}],
      steps:`<div class="step-block"><div class="step-header"><div class="step-num">1</div><div class="step-title">Préparer la semoule</div><span class="step-timing">⏱ 10 min</span></div><div class="step-desc">Faites gonfler la semoule à l'eau bouillante 10 min. Égrenez à la fourchette.</div></div><div class="step-block"><div class="step-header"><div class="step-num">2</div><div class="step-title">Préparer les garnitures</div><span class="step-timing">⏱ 5 min</span></div><div class="step-desc">Émiettez la feta. Dénoyautez et coupez les olives. Hachez finement le citron confit (juste l'écorce, sans l'amertume du blanc).</div></div><div class="step-block"><div class="step-header"><div class="step-num">3</div><div class="step-title">Assembler</div><span class="step-timing">⏱ 5 min</span></div><div class="step-desc">Mélangez tous les ingrédients à la semoule, persil ciselé et huile d'olive. Pas besoin de sel — feta et olives en apportent déjà.</div></div>`
    },
    {
      id:"sal-tab-7", cat:"taboule", label:"Taboulé",
      name:"Taboulé crevettes-citron vert-coriandre",
      kcal:350, p:24, g:38, l:11, time:"25 min",
      ingredients:[{name:"Semoule fine",base:70,unit:"g"},{name:"Crevettes décortiquées",base:150,unit:"g"},{name:"Coriandre fraîche",base:20,unit:"g"},{name:"Citron vert (jus)",base:1,unit:""},{name:"Gingembre frais",base:1,unit:"c.à.c."},{name:"Huile d'olive",base:1,unit:"c.à.s."}],
      steps:`<div class="step-block"><div class="step-header"><div class="step-num">1</div><div class="step-title">Cuire les crevettes</div><span class="step-timing">⏱ 5 min</span></div><div class="step-desc">Poêlez les crevettes 2-3 min à feu vif avec le gingembre râpé jusqu'à ce qu'elles soient roses et opaques. Laissez tiédir.</div></div><div class="step-block"><div class="step-header"><div class="step-num">2</div><div class="step-title">Préparer la semoule</div><span class="step-timing">⏱ 10 min</span></div><div class="step-desc">Faites gonfler la semoule à l'eau bouillante 10 min. Égrenez, ajoutez coriandre ciselée, citron vert et huile.</div></div><div class="step-block"><div class="step-header"><div class="step-num">3</div><div class="step-title">Assembler</div><span class="step-timing">⏱ 10 min</span></div><div class="step-desc">Mélangez les crevettes tièdes à la semoule citronnée. Servez frais ou tiède selon votre préférence.</div></div>`
    },
    {
      id:"sal-tab-8", cat:"taboule", label:"Taboulé",
      name:"Taboulé chou-fleur (sans féculent) menthe-grenade",
      kcal:180, p:6, g:18, l:10, time:"20 min",
      ingredients:[{name:"Chou-fleur",base:300,unit:"g"},{name:"Graines de grenade",base:50,unit:"g"},{name:"Menthe fraîche",base:15,unit:"g"},{name:"Citron (jus)",base:1,unit:""},{name:"Huile d'olive",base:1.5,unit:"c.à.s."}],
      steps:`<div class="step-block"><div class="step-header"><div class="step-num">1</div><div class="step-title">Râper le chou-fleur</div><span class="step-timing">⏱ 8 min</span></div><div class="step-desc">Mixez le chou-fleur cru par à-coups jusqu'à obtenir une texture type semoule fine (sans réduire en purée).</div><div class="step-tip">Cette technique remplace totalement la semoule — riche en fibres, beaucoup moins de glucides.</div></div><div class="step-block"><div class="step-header"><div class="step-num">2</div><div class="step-title">Assaisonner</div><span class="step-timing">⏱ 7 min</span></div><div class="step-desc">Mélangez le chou-fleur émietté avec menthe ciselée, citron et huile d'olive. Salez légèrement.</div></div><div class="step-block"><div class="step-header"><div class="step-num">3</div><div class="step-title">Finir</div><span class="step-timing">⏱ 5 min</span></div><div class="step-desc">Parsemez de graines de grenade juste avant de servir pour le croquant et la couleur.</div></div>`
    },
    {
      id:"sal-tab-9", cat:"taboule", label:"Taboulé",
      name:"Taboulé poulet mariné citron-za'atar",
      kcal:400, p:32, g:38, l:13, time:"35 min",
      ingredients:[{name:"Semoule fine",base:70,unit:"g"},{name:"Blanc de poulet",base:150,unit:"g"},{name:"Za'atar (mélange d'épices)",base:1,unit:"c.à.s."},{name:"Citron (jus)",base:1.5,unit:""},{name:"Persil frais",base:15,unit:"g"},{name:"Huile d'olive",base:1.5,unit:"c.à.s."}],
      steps:`<div class="step-block"><div class="step-header"><div class="step-num">1</div><div class="step-title">Mariner et cuire le poulet</div><span class="step-timing">⏱ 15 min</span></div><div class="step-desc">Enrobez le poulet de za'atar, citron et huile. Faites-le griller à la poêle 6-8 min de chaque côté jusqu'à cuisson complète. Laissez tiédir puis coupez en lanières.</div></div><div class="step-block"><div class="step-header"><div class="step-num">2</div><div class="step-title">Préparer la semoule</div><span class="step-timing">⏱ 10 min</span></div><div class="step-desc">Faites gonfler la semoule à l'eau bouillante 10 min. Égrenez, ajoutez persil ciselé, citron et huile.</div></div><div class="step-block"><div class="step-header"><div class="step-num">3</div><div class="step-title">Assembler</div><span class="step-timing">⏱ 10 min</span></div><div class="step-desc">Disposez le poulet za'atar sur la semoule citronnée. Servez tiède ou froid.</div></div>`
    },
    {
      id:"sal-tab-10", cat:"taboule", label:"Taboulé",
      name:"Taboulé figues fraîches-menthe-pignons de pin",
      kcal:320, p:6, g:42, l:14, time:"20 min",
      ingredients:[{name:"Semoule fine",base:70,unit:"g"},{name:"Figues fraîches",base:3,unit:""},{name:"Menthe fraîche",base:15,unit:"g"},{name:"Pignons de pin",base:20,unit:"g"},{name:"Citron (jus)",base:1,unit:""},{name:"Huile d'olive",base:1.5,unit:"c.à.s."}],
      steps:`<div class="step-block"><div class="step-header"><div class="step-num">1</div><div class="step-title">Torréfier les pignons</div><span class="step-timing">⏱ 3 min</span></div><div class="step-desc">Faites dorer les pignons à sec dans une poêle 2-3 min en remuant. Réservez.</div></div><div class="step-block"><div class="step-header"><div class="step-num">2</div><div class="step-title">Préparer la semoule</div><span class="step-timing">⏱ 10 min</span></div><div class="step-desc">Faites gonfler la semoule à l'eau bouillante 10 min. Égrenez, ajoutez menthe ciselée, citron et huile.</div></div><div class="step-block"><div class="step-header"><div class="step-num">3</div><div class="step-title">Assembler</div><span class="step-timing">⏱ 7 min</span></div><div class="step-desc">Coupez les figues en quartiers. Disposez-les sur la semoule avec les pignons torréfiés. Léger et délicatement sucré-salé.</div></div>`
    }
  ],
  "salades": [
    {
      id:"sal-sal-1", cat:"salade", label:"Salade",
      name:"Salade pâtes croustillantes au four, feta et tomates confites",
      kcal:430, p:16, g:48, l:18, time:"35 min",
      ingredients:[{name:"Pâtes complètes",base:80,unit:"g"},{name:"Feta",base:70,unit:"g"},{name:"Tomates cerises",base:200,unit:"g"},{name:"Huile d'olive",base:2,unit:"c.à.s."},{name:"Basilic frais",base:10,unit:"feuilles"}],
      steps:`<div class="step-block"><div class="step-header"><div class="step-num">1</div><div class="step-title">Confire les tomates</div><span class="step-timing">⏱ 20 min</span></div><div class="step-desc">Coupez les tomates cerises en deux. Four 180°C avec un filet d'huile, sel, 20 min jusqu'à légèrement confites et fondantes.</div></div><div class="step-block"><div class="step-header"><div class="step-num">2</div><div class="step-title">Cuire les pâtes croustillantes</div><span class="step-timing">⏱ 10 min</span></div><div class="step-desc">Cuisez les pâtes al dente, égouttez bien. Étalez-les sur une plaque avec un filet d'huile, four 200°C 8-10 min jusqu'à légèrement dorées et croustillantes sur les bords.</div><div class="step-tip">Cette étape change tout — les pâtes deviennent croquantes plutôt que molles, parfait en salade.</div></div><div class="step-block"><div class="step-header"><div class="step-num">3</div><div class="step-title">Assembler</div><span class="step-timing">⏱ 5 min</span></div><div class="step-desc">Mélangez pâtes croustillantes, tomates confites, feta émiettée et basilic frais. Servez tiède.</div></div>`
    },
    {
      id:"sal-sal-2", cat:"salade", label:"Salade",
      name:"Salade lentilles tièdes, betterave rôtie et chèvre chaud croustillant",
      kcal:450, p:20, g:38, l:22, time:"40 min",
      ingredients:[{name:"Lentilles vertes cuites",base:150,unit:"g"},{name:"Betterave crue",base:200,unit:"g"},{name:"Bûche de chèvre",base:60,unit:"g"},{name:"Pain complet",base:20,unit:"g"},{name:"Huile d'olive",base:1.5,unit:"c.à.s."}],
      steps:`<div class="step-block"><div class="step-header"><div class="step-num">1</div><div class="step-title">Rôtir la betterave</div><span class="step-timing">⏱ 35 min</span></div><div class="step-desc">Coupez la betterave en cubes, enrobez d'huile, sel. Four 200°C, 30-35 min jusqu'à tendre.</div></div><div class="step-block"><div class="step-header"><div class="step-num">2</div><div class="step-title">Chèvre croustillant</div><span class="step-timing">⏱ 8 min</span></div><div class="step-desc">Mixez le pain en chapelure grossière. Coupez le chèvre en tranches, enrobez de chapelure. Four ou grill 5-8 min jusqu'à doré et croustillant à l'extérieur, fondant dedans.</div></div><div class="step-block"><div class="step-header"><div class="step-num">3</div><div class="step-title">Assembler</div><span class="step-timing">⏱ 5 min</span></div><div class="step-desc">Mélangez lentilles tièdes et betterave rôtie, filet d'huile. Disposez le chèvre croustillant chaud dessus.</div></div>`
    },
    {
      id:"sal-sal-3", cat:"salade", label:"Salade",
      name:"Bowl pois chiches grillés épicés, sauce tahini-citron",
      kcal:400, p:15, g:42, l:18, time:"25 min",
      ingredients:[{name:"Pois chiches cuits",base:200,unit:"g"},{name:"Épinards frais",base:50,unit:"g"},{name:"Tahini",base:1.5,unit:"c.à.s."},{name:"Citron (jus)",base:1,unit:""},{name:"Cumin-paprika",base:1,unit:"c.à.c."}],
      steps:`<div class="step-block"><div class="step-header"><div class="step-num">1</div><div class="step-title">Griller les pois chiches</div><span class="step-timing">⏱ 18 min</span></div><div class="step-desc">Séchez bien les pois chiches, assaisonnez d'épices et d'un filet d'huile. Four 200°C, 18 min jusqu'à croustillants.</div></div><div class="step-block"><div class="step-header"><div class="step-num">2</div><div class="step-title">Sauce tahini-citron</div><span class="step-timing">⏱ 3 min</span></div><div class="step-desc">Mélangez tahini + jus de citron + un peu d'eau pour fluidifier. La sauce doit napper sans être liquide.</div></div><div class="step-block"><div class="step-header"><div class="step-num">3</div><div class="step-title">Assembler</div><span class="step-timing">⏱ 4 min</span></div><div class="step-desc">Disposez épinards frais en base, pois chiches grillés tièdes dessus, nappez de sauce tahini-citron.</div></div>`
    },
    {
      id:"sal-sal-4", cat:"salade", label:"Salade",
      name:"Salade poulet croustillant au four, sauce yaourt-ail-citron",
      kcal:420, p:36, g:24, l:18, time:"35 min",
      ingredients:[{name:"Blanc de poulet",base:150,unit:"g"},{name:"Chapelure",base:30,unit:"g"},{name:"Yaourt grec",base:80,unit:"g"},{name:"Ail",base:1,unit:"gousse"},{name:"Citron (jus)",base:1,unit:""},{name:"Salade verte",base:80,unit:"g"}],
      steps:`<div class="step-block"><div class="step-header"><div class="step-num">1</div><div class="step-title">Paner le poulet</div><span class="step-timing">⏱ 8 min</span></div><div class="step-desc">Coupez le poulet en lanières. Enrobez de chapelure assaisonnée.</div></div><div class="step-block"><div class="step-header"><div class="step-num">2</div><div class="step-title">Cuire croustillant au four</div><span class="step-timing">⏱ 20 min</span></div><div class="step-desc">Disposez sur une plaque avec un filet d'huile. Four 200°C, 18-20 min en retournant à mi-cuisson, jusqu'à doré et croustillant.</div></div><div class="step-block"><div class="step-header"><div class="step-num">3</div><div class="step-title">Sauce et dressage</div><span class="step-timing">⏱ 7 min</span></div><div class="step-desc">Mélangez yaourt + ail écrasé + citron + sel pour la sauce. Servez le poulet croustillant sur la salade verte, nappé de sauce.</div></div>`
    },
    {
      id:"sal-sal-5", cat:"salade", label:"Salade",
      name:"Salade quinoa croquant, légumes rôtis et sauce avocat-coriandre",
      kcal:440, p:13, g:46, l:24, time:"35 min",
      ingredients:[{name:"Quinoa",base:70,unit:"g"},{name:"Courgette",base:1,unit:""},{name:"Poivron",base:1,unit:""},{name:"Avocat",base:0.5,unit:"entier"},{name:"Coriandre fraîche",base:15,unit:"g"},{name:"Citron vert (jus)",base:1,unit:""}],
      steps:`<div class="step-block"><div class="step-header"><div class="step-num">1</div><div class="step-title">Rôtir les légumes</div><span class="step-timing">⏱ 22 min</span></div><div class="step-desc">Coupez courgette et poivron en cubes. Four 200°C avec un filet d'huile, 20 min jusqu'à légèrement caramélisés.</div></div><div class="step-block"><div class="step-header"><div class="step-num">2</div><div class="step-title">Cuire le quinoa</div><span class="step-timing">⏱ 15 min</span></div><div class="step-desc">Cuisez le quinoa selon les instructions du paquet. Laissez tiédir.</div></div><div class="step-block"><div class="step-header"><div class="step-num">3</div><div class="step-title">Sauce avocat-coriandre</div><span class="step-timing">⏱ 8 min</span></div><div class="step-desc">Mixez avocat + coriandre + citron vert + un peu d'eau jusqu'à obtenir une sauce onctueuse et vert vif. Assemblez quinoa, légumes rôtis et sauce.</div></div>`
    },
    {
      id:"sal-sal-6", cat:"salade", label:"Salade",
      name:"Salade halloumi grillé, pastèque et menthe",
      kcal:380, p:18, g:28, l:21, time:"20 min",
      ingredients:[{name:"Halloumi",base:100,unit:"g"},{name:"Pastèque",base:250,unit:"g"},{name:"Menthe fraîche",base:15,unit:"g"},{name:"Citron vert (jus)",base:1,unit:""},{name:"Huile d'olive",base:1,unit:"c.à.s."}],
      steps:`<div class="step-block"><div class="step-header"><div class="step-num">1</div><div class="step-title">Griller l'halloumi</div><span class="step-timing">⏱ 6 min</span></div><div class="step-desc">Coupez l'halloumi en tranches. Poêlez à sec 2-3 min de chaque côté jusqu'à bien doré — il doit rester fondant à l'intérieur.</div><div class="step-tip">L'halloumi grillé chaud sur la pastèque froide crée un contraste délicieux.</div></div><div class="step-block"><div class="step-header"><div class="step-num">2</div><div class="step-title">Préparer la pastèque</div><span class="step-timing">⏱ 8 min</span></div><div class="step-desc">Coupez la pastèque en cubes, retirez les pépins. Disposez dans une assiette.</div></div><div class="step-block"><div class="step-header"><div class="step-num">3</div><div class="step-title">Assembler</div><span class="step-timing">⏱ 6 min</span></div><div class="step-desc">Disposez l'halloumi chaud sur la pastèque. Parsemez de menthe fraîche ciselée, filet de citron vert et huile d'olive.</div></div>`
    },
    {
      id:"sal-sal-7", cat:"salade", label:"Salade",
      name:"Salade riz croustillant façon riz soufflé, thon et sésame",
      kcal:400, p:24, g:40, l:16, time:"25 min",
      ingredients:[{name:"Riz cuit (de la veille idéalement)",base:150,unit:"g"},{name:"Thon au naturel",base:120,unit:"g"},{name:"Graines de sésame",base:1,unit:"c.à.s."},{name:"Sauce soja",base:1.5,unit:"c.à.s."},{name:"Concombre",base:0.5,unit:""}],
      steps:`<div class="step-block"><div class="step-header"><div class="step-num">1</div><div class="step-title">Croustiller le riz</div><span class="step-timing">⏱ 12 min</span></div><div class="step-desc">Étalez le riz cuit (idéalement de la veille, plus sec) sur une plaque avec un filet d'huile. Four 200°C, 10-12 min jusqu'à doré et croustillant par endroits.</div><div class="step-tip">Le riz de la veille fonctionne bien mieux — moins d'humidité, plus de croustillant.</div></div><div class="step-block"><div class="step-header"><div class="step-num">2</div><div class="step-title">Préparer le reste</div><span class="step-timing">⏱ 8 min</span></div><div class="step-desc">Émiettez le thon. Coupez le concombre en dés. Torréfiez les graines de sésame à sec 1-2 min.</div></div><div class="step-block"><div class="step-header"><div class="step-num">3</div><div class="step-title">Assembler</div><span class="step-timing">⏱ 5 min</span></div><div class="step-desc">Mélangez riz croustillant tiède, thon, concombre. Arrosez de sauce soja, parsemez de sésame.</div></div>`
    },
    {
      id:"sal-sal-8", cat:"salade", label:"Salade",
      name:"Salade patate douce rôtie, kale croustillant et sauce miso",
      kcal:360, p:9, g:48, l:14, time:"35 min",
      ingredients:[{name:"Patate douce",base:200,unit:"g"},{name:"Kale (chou frisé)",base:80,unit:"g"},{name:"Pâte miso",base:1,unit:"c.à.s."},{name:"Huile d'olive",base:2,unit:"c.à.s."},{name:"Graines de sésame",base:1,unit:"c.à.c."}],
      steps:`<div class="step-block"><div class="step-header"><div class="step-num">1</div><div class="step-title">Rôtir la patate douce</div><span class="step-timing">⏱ 25 min</span></div><div class="step-desc">Coupez en cubes, enrobez d'huile. Four 200°C, 22-25 min jusqu'à tendre et caramélisée.</div></div><div class="step-block"><div class="step-header"><div class="step-num">2</div><div class="step-title">Kale croustillant</div><span class="step-timing">⏱ 10 min</span></div><div class="step-desc">Effeuillez le kale, massez-le avec un peu d'huile. Four 160°C, 8-10 min jusqu'à croustillant comme des chips.</div><div class="step-tip">Surveillez bien le kale en fin de cuisson — il passe vite de croustillant à brûlé.</div></div><div class="step-block"><div class="step-header"><div class="step-num">3</div><div class="step-title">Sauce miso et assemblage</div><span class="step-timing">⏱ 5 min</span></div><div class="step-desc">Délayez le miso avec un peu d'eau et d'huile. Assemblez patate douce, kale croustillant, nappez de sauce, parsemez de sésame.</div></div>`
    },
    {
      id:"sal-sal-9", cat:"salade", label:"Salade",
      name:"Salade saumon mariné, agrumes et sauce yaourt-aneth",
      kcal:410, p:28, g:24, l:22, time:"20 min",
      ingredients:[{name:"Saumon (pavé ou fumé)",base:130,unit:"g"},{name:"Orange",base:1,unit:""},{name:"Pamplemousse",base:0.5,unit:""},{name:"Yaourt grec",base:60,unit:"g"},{name:"Aneth frais",base:10,unit:"g"}],
      steps:`<div class="step-block"><div class="step-header"><div class="step-num">1</div><div class="step-title">Préparer le saumon</div><span class="step-timing">⏱ 8 min</span></div><div class="step-desc">Si saumon frais : poêlez 3-4 min de chaque côté. Si fumé : émiettez-le directement, pas de cuisson nécessaire.</div></div><div class="step-block"><div class="step-header"><div class="step-num">2</div><div class="step-title">Préparer les agrumes</div><span class="step-timing">⏱ 7 min</span></div><div class="step-desc">Pelez à vif orange et pamplemousse, détaillez en suprêmes (sans la peau blanche).</div></div><div class="step-block"><div class="step-header"><div class="step-num">3</div><div class="step-title">Sauce et assemblage</div><span class="step-timing">⏱ 5 min</span></div><div class="step-desc">Mélangez yaourt + aneth ciselé + sel. Disposez saumon et agrumes, nappez de sauce.</div></div>`
    },
    {
      id:"sal-sal-10", cat:"salade", label:"Salade",
      name:"Salade falafels maison croustillants, sauce tahini-grenade",
      kcal:440, p:16, g:50, l:19, time:"40 min",
      ingredients:[{name:"Pois chiches secs trempés",base:150,unit:"g"},{name:"Oignon",base:0.5,unit:""},{name:"Coriandre fraîche",base:15,unit:"g"},{name:"Tahini",base:1.5,unit:"c.à.s."},{name:"Graines de grenade",base:30,unit:"g"}],
      steps:`<div class="step-block"><div class="step-header"><div class="step-num">1</div><div class="step-title">Préparer la pâte à falafels</div><span class="step-timing">⏱ 10 min</span></div><div class="step-desc">Mixez pois chiches égouttés (non cuits, juste trempés une nuit) + oignon + coriandre + épices jusqu'à obtenir une texture grossière qui se tient.</div><div class="step-tip">Les pois chiches secs trempés (pas cuits) donnent des falafels qui se tiennent bien mieux à la cuisson.</div></div><div class="step-block"><div class="step-header"><div class="step-num">2</div><div class="step-title">Cuire au four</div><span class="step-timing">⏱ 25 min</span></div><div class="step-desc">Formez des boulettes aplaties. Four 200°C avec un filet d'huile, 20-25 min en retournant à mi-cuisson, jusqu'à dorés et croustillants.</div></div><div class="step-block"><div class="step-header"><div class="step-num">3</div><div class="step-title">Servir</div><span class="step-timing">⏱ 5 min</span></div><div class="step-desc">Mélangez tahini avec un peu d'eau pour la sauce. Servez les falafels avec la sauce et les graines de grenade.</div></div>`
    },
    {
      id:"sal-sal-11", cat:"salade", label:"Salade",
      name:"Salade boulgour croquant, noix et sauce miel-moutarde",
      kcal:400, p:11, g:46, l:18, time:"25 min",
      ingredients:[{name:"Boulgour",base:80,unit:"g"},{name:"Noix",base:30,unit:"g"},{name:"Moutarde",base:1,unit:"c.à.c."},{name:"Miel brut",base:1,unit:"c.à.c."},{name:"Huile d'olive",base:1.5,unit:"c.à.s."}],
      steps:`<div class="step-block"><div class="step-header"><div class="step-num">1</div><div class="step-title">Cuire le boulgour</div><span class="step-timing">⏱ 15 min</span></div><div class="step-desc">Cuisez le boulgour selon les instructions du paquet, généralement 12-15 min à l'eau bouillante. Égouttez et laissez tiédir.</div></div><div class="step-block"><div class="step-header"><div class="step-num">2</div><div class="step-title">Torréfier les noix</div><span class="step-timing">⏱ 5 min</span></div><div class="step-desc">Faites dorer les noix concassées à sec dans une poêle 3-4 min.</div></div><div class="step-block"><div class="step-header"><div class="step-num">3</div><div class="step-title">Sauce et assemblage</div><span class="step-timing">⏱ 5 min</span></div><div class="step-desc">Mélangez moutarde + miel + huile pour la vinaigrette. Mélangez boulgour, noix torréfiées et sauce.</div></div>`
    },
    {
      id:"sal-sal-12", cat:"salade", label:"Salade",
      name:"Salade chou rouge croquant, edamame et sauce cacahuète-soja",
      kcal:370, p:14, g:32, l:20, time:"20 min",
      ingredients:[{name:"Chou rouge",base:150,unit:"g"},{name:"Edamame",base:100,unit:"g"},{name:"Purée de cacahuète",base:1,unit:"c.à.s."},{name:"Sauce soja",base:1.5,unit:"c.à.s."},{name:"Citron vert (jus)",base:1,unit:""}],
      steps:`<div class="step-block"><div class="step-header"><div class="step-num">1</div><div class="step-title">Préparer le chou</div><span class="step-timing">⏱ 10 min</span></div><div class="step-desc">Émincez très finement le chou rouge à la mandoline ou au couteau.</div></div><div class="step-block"><div class="step-header"><div class="step-num">2</div><div class="step-title">Cuire les edamame</div><span class="step-timing">⏱ 5 min</span></div><div class="step-desc">Faites cuire les edamame à l'eau bouillante salée 4-5 min selon le paquet. Égouttez.</div></div><div class="step-block"><div class="step-header"><div class="step-num">3</div><div class="step-title">Sauce et assemblage</div><span class="step-timing">⏱ 5 min</span></div><div class="step-desc">Mélangez purée de cacahuète + sauce soja + citron vert + un peu d'eau pour fluidifier. Mélangez chou rouge, edamame et sauce.</div></div>`
    },
    {
      id:"sal-sal-13", cat:"salade", label:"Salade",
      name:"Salade champignons rôtis croustillants, parmesan et sauce balsamique-miel",
      kcal:320, p:12, g:22, l:20, time:"30 min",
      ingredients:[{name:"Champignons de Paris",base:250,unit:"g"},{name:"Parmesan",base:30,unit:"g"},{name:"Vinaigre balsamique",base:1.5,unit:"c.à.s."},{name:"Miel brut",base:1,unit:"c.à.c."},{name:"Huile d'olive",base:1.5,unit:"c.à.s."}],
      steps:`<div class="step-block"><div class="step-header"><div class="step-num">1</div><div class="step-title">Rôtir les champignons</div><span class="step-timing">⏱ 22 min</span></div><div class="step-desc">Coupez les champignons en quartiers. Four 200°C avec un filet d'huile, 20-22 min jusqu'à dorés et légèrement croustillants sur les bords.</div></div><div class="step-block"><div class="step-header"><div class="step-num">2</div><div class="step-title">Réduction balsamique-miel</div><span class="step-timing">⏱ 5 min</span></div><div class="step-desc">Faites réduire à feu doux le vinaigre balsamique avec le miel jusqu'à consistance sirupeuse.</div></div><div class="step-block"><div class="step-header"><div class="step-num">3</div><div class="step-title">Assembler</div><span class="step-timing">⏱ 3 min</span></div><div class="step-desc">Disposez les champignons rôtis, copeaux de parmesan, nappez de réduction balsamique-miel.</div></div>`
    },
    {
      id:"sal-sal-14", cat:"salade", label:"Salade",
      name:"Salade crevettes panées au four, mangue et sauce yaourt-curry",
      kcal:410, p:26, g:38, l:16, time:"30 min",
      ingredients:[{name:"Crevettes décortiquées",base:150,unit:"g"},{name:"Chapelure",base:30,unit:"g"},{name:"Mangue",base:1,unit:""},{name:"Yaourt grec",base:60,unit:"g"},{name:"Curry en poudre",base:1,unit:"c.à.c."}],
      steps:`<div class="step-block"><div class="step-header"><div class="step-num">1</div><div class="step-title">Paner les crevettes</div><span class="step-timing">⏱ 8 min</span></div><div class="step-desc">Enrobez les crevettes de chapelure assaisonnée.</div></div><div class="step-block"><div class="step-header"><div class="step-num">2</div><div class="step-title">Cuire au four</div><span class="step-timing">⏱ 12 min</span></div><div class="step-desc">Disposez sur une plaque avec un filet d'huile. Four 200°C, 10-12 min jusqu'à dorées et croustillantes.</div></div><div class="step-block"><div class="step-header"><div class="step-num">3</div><div class="step-title">Sauce et assemblage</div><span class="step-timing">⏱ 10 min</span></div><div class="step-desc">Mélangez yaourt + curry pour la sauce. Coupez la mangue en cubes. Assemblez crevettes panées, mangue et sauce.</div></div>`
    },
    {
      id:"sal-sal-15", cat:"salade", label:"Salade",
      name:"Salade burrata, tomates confites et croûtons maison à l'ail",
      kcal:430, p:18, g:30, l:26, time:"30 min",
      ingredients:[{name:"Burrata",base:100,unit:"g"},{name:"Tomates cerises",base:200,unit:"g"},{name:"Pain complet",base:50,unit:"g"},{name:"Ail",base:1,unit:"gousse"},{name:"Basilic frais",base:10,unit:"feuilles"}],
      steps:`<div class="step-block"><div class="step-header"><div class="step-num">1</div><div class="step-title">Confire les tomates</div><span class="step-timing">⏱ 20 min</span></div><div class="step-desc">Coupez les tomates cerises en deux. Four 180°C avec un filet d'huile, sel, 20 min jusqu'à fondantes.</div></div><div class="step-block"><div class="step-header"><div class="step-num">2</div><div class="step-title">Croûtons à l'ail</div><span class="step-timing">⏱ 8 min</span></div><div class="step-desc">Coupez le pain en cubes, frottez d'ail. Poêlez ou four 200°C 6-8 min jusqu'à dorés et croustillants.</div></div><div class="step-block"><div class="step-header"><div class="step-num">3</div><div class="step-title">Assembler</div><span class="step-timing">⏱ 2 min</span></div><div class="step-desc">Disposez la burrata entière au centre, entourée des tomates confites et croûtons. Basilic frais, filet d'huile d'olive. Cassez la burrata au moment de servir.</div></div>`
    }
  ]
};

window.RECIPES_SALADES_DATA = RECIPES_SALADES;
