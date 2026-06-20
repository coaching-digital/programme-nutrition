// ============================================================
// BANQUE DE RECETTES — SEMAINE DE RÈGLES
// 40 recettes classées : Petits-déjeuners, Déjeuners, Dîners, Collations, Desserts
// Riches en fer, magnésium, oméga-3 — pensées pour le confort pendant cette période
// Chargé dynamiquement par index.html, jamais affiché dans la banque classique
// ============================================================

const RECIPES_REGLES = {
  "petitsDejeuners": [
    {
      id:"regles-pdj-1", cat:"pdj", label:"Petit-déjeuner · Spécial règles",
      name:"Porridge chocolat-graines de courge-cannelle",
      kcal:340, p:11, g:48, l:12, time:"10 min",
      ingredients:[{name:"Flocons d'avoine",base:50,unit:"g"},{name:"Lait demi-écrémé",base:200,unit:"ml"},{name:"Cacao non sucré",base:1,unit:"c.à.s."},{name:"Graines de courge",base:15,unit:"g"},{name:"Cannelle",base:0.5,unit:"c.à.c."},{name:"Miel brut",base:1,unit:"c.à.s."}],
      steps:`<div class="step-block"><div class="step-header"><div class="step-num">1</div><div class="step-title">Cuire le porridge</div><span class="step-timing">⏱ 6 min</span></div><div class="step-desc">Versez flocons + lait + cacao dans une casserole. Cuire à feu doux 5-6 min en remuant régulièrement jusqu'à consistance crémeuse.</div><div class="step-tip">Le cacao non sucré apporte du magnésium — un vrai allié pendant les règles pour calmer les crampes.</div></div><div class="step-block"><div class="step-header"><div class="step-num">2</div><div class="step-title">Finir et servir</div><span class="step-timing">⏱ 2 min</span></div><div class="step-desc">Hors du feu, ajoutez la cannelle et le miel. Versez dans un bol, parsemez de graines de courge.</div></div>`
    },
    {
      id:"regles-pdj-2", cat:"pdj", label:"Petit-déjeuner · Spécial règles",
      name:"Pancakes épinards-cacao",
      kcal:355, p:14, g:42, l:13, time:"15 min",
      ingredients:[{name:"Épinards frais",base:30,unit:"g"},{name:"Oeufs",base:2,unit:""},{name:"Flocons d'avoine",base:50,unit:"g"},{name:"Cacao non sucré",base:1,unit:"c.à.s."},{name:"Lait",base:50,unit:"ml"},{name:"Miel brut",base:1,unit:"c.à.s."}],
      steps:`<div class="step-block"><div class="step-header"><div class="step-num">1</div><div class="step-title">Mixer la pâte</div><span class="step-timing">⏱ 3 min</span></div><div class="step-desc">Mixez épinards + oeufs + flocons + cacao + lait jusqu'à obtenir une pâte lisse et bien verte foncée (presque noire avec le cacao).</div><div class="step-tip">On ne sent absolument pas le goût des épinards — juste un boost de fer invisible dans le chocolat.</div></div><div class="step-block"><div class="step-header"><div class="step-num">2</div><div class="step-title">Cuire les pancakes</div><span class="step-timing">⏱ 10 min</span></div><div class="step-desc">Poêle antiadhésive à feu moyen, sans matière grasse. Petites portions, 2-3 min par côté. Servez avec un filet de miel.</div></div>`
    },
    {
      id:"regles-pdj-3", cat:"pdj", label:"Petit-déjeuner · Spécial règles",
      name:"Toast avocat-oeuf-graines de sésame",
      kcal:365, p:18, g:28, l:20, time:"12 min",
      ingredients:[{name:"Pain complet",base:60,unit:"g"},{name:"Avocat",base:0.5,unit:"entier"},{name:"Oeuf",base:1,unit:""},{name:"Graines de sésame",base:1,unit:"c.à.c."},{name:"Citron (jus)",base:0.5,unit:"c.à.c."}],
      steps:`<div class="step-block"><div class="step-header"><div class="step-num">1</div><div class="step-title">Préparer l'oeuf</div><span class="step-timing">⏱ 8 min</span></div><div class="step-desc">Faites cuire l'oeuf à la coque ou au plat selon votre préférence — l'idée c'est le jaune coulant qui enrobe le toast.</div></div><div class="step-block"><div class="step-header"><div class="step-num">2</div><div class="step-title">Monter le toast</div><span class="step-timing">⏱ 4 min</span></div><div class="step-desc">Toastez le pain. Écrasez l'avocat avec citron et sel. Étalez généreusement, posez l'oeuf dessus, parsemez de graines de sésame (riches en fer et magnésium).</div></div>`
    },
    {
      id:"regles-pdj-4", cat:"pdj", label:"Petit-déjeuner · Spécial règles",
      name:"Bowl yaourt grec-grenade-noix",
      kcal:330, p:16, g:32, l:14, time:"5 min",
      ingredients:[{name:"Yaourt grec",base:170,unit:"g"},{name:"Graines de grenade",base:40,unit:"g"},{name:"Noix",base:15,unit:"g"},{name:"Miel brut",base:1,unit:"c.à.s."}],
      steps:`<div class="step-block"><div class="step-header"><div class="step-num">1</div><div class="step-title">Assembler</div><span class="step-timing">⏱ 5 min</span></div><div class="step-desc">Versez le yaourt grec dans un bol. Parsemez de graines de grenade et de noix concassées. Terminez par un filet de miel.</div><div class="step-tip">La grenade est riche en antioxydants et fer — un fruit parfait pendant cette période.</div></div>`
    },
    {
      id:"regles-pdj-5", cat:"pdj", label:"Petit-déjeuner · Spécial règles",
      name:"Smoothie betterave-fruits rouges-gingembre",
      kcal:280, p:7, g:50, l:5, time:"5 min",
      ingredients:[{name:"Betterave cuite",base:50,unit:"g"},{name:"Fruits rouges (frais ou surgelés)",base:100,unit:"g"},{name:"Banane",base:0,unit:""},{name:"Gingembre frais",base:1,unit:"c.à.c."},{name:"Lait d'amande",base:150,unit:"ml"},{name:"Miel brut",base:1,unit:"c.à.s."}],
      steps:`<div class="step-block"><div class="step-header"><div class="step-num">1</div><div class="step-title">Mixer</div><span class="step-timing">⏱ 5 min</span></div><div class="step-desc">Mixez betterave + fruits rouges + gingembre + lait d'amande + miel jusqu'à obtenir une texture lisse et homogène.</div><div class="step-tip">La betterave est l'un des aliments les plus riches en fer naturel — et son goût se fond complètement dans les fruits rouges.</div></div>`
    },
    {
      id:"regles-pdj-6", cat:"pdj", label:"Petit-déjeuner · Spécial règles",
      name:"Oeufs brouillés-épinards-feta",
      kcal:320, p:22, g:6, l:23, time:"12 min",
      ingredients:[{name:"Oeufs",base:3,unit:""},{name:"Épinards frais",base:50,unit:"g"},{name:"Feta",base:30,unit:"g"},{name:"Beurre",base:5,unit:"g"}],
      steps:`<div class="step-block"><div class="step-header"><div class="step-num">1</div><div class="step-title">Faire tomber les épinards</div><span class="step-timing">⏱ 3 min</span></div><div class="step-desc">Faites tomber les épinards 2-3 min à la poêle avec un peu de beurre. Réservez.</div></div><div class="step-block"><div class="step-header"><div class="step-num">2</div><div class="step-title">Oeufs brouillés</div><span class="step-timing">⏱ 7 min</span></div><div class="step-desc">Battez les oeufs, versez dans la poêle à feu doux. Remuez lentement. Ajoutez épinards et feta émiettée en fin de cuisson, encore baveux.</div></div>`
    },
    {
      id:"regles-pdj-7", cat:"pdj", label:"Petit-déjeuner · Spécial règles",
      name:"Porridge quinoa-cannelle-dattes",
      kcal:350, p:10, g:58, l:8, time:"15 min",
      ingredients:[{name:"Quinoa",base:50,unit:"g"},{name:"Lait demi-écrémé",base:200,unit:"ml"},{name:"Dattes",base:2,unit:""},{name:"Cannelle",base:0.5,unit:"c.à.c."}],
      steps:`<div class="step-block"><div class="step-header"><div class="step-num">1</div><div class="step-title">Cuire le quinoa au lait</div><span class="step-timing">⏱ 12 min</span></div><div class="step-desc">Rincez le quinoa. Cuisez-le dans le lait à feu doux 12 min jusqu'à absorption complète et texture crémeuse.</div><div class="step-tip">Le quinoa est une excellente source de fer végétal et de magnésium — variante originale du porridge classique.</div></div><div class="step-block"><div class="step-header"><div class="step-num">2</div><div class="step-title">Finir</div><span class="step-timing">⏱ 3 min</span></div><div class="step-desc">Ajoutez cannelle et dattes coupées en morceaux. Mélangez et servez tiède.</div></div>`
    },
    {
      id:"regles-pdj-8", cat:"pdj", label:"Petit-déjeuner · Spécial règles",
      name:"Pain complet-fromage frais-graines de courge-miel",
      kcal:310, p:13, g:38, l:11, time:"5 min",
      ingredients:[{name:"Pain complet",base:60,unit:"g"},{name:"Fromage frais",base:40,unit:"g"},{name:"Graines de courge",base:15,unit:"g"},{name:"Miel brut",base:1,unit:"c.à.s."}],
      steps:`<div class="step-block"><div class="step-header"><div class="step-num">1</div><div class="step-title">Assembler</div><span class="step-timing">⏱ 5 min</span></div><div class="step-desc">Toastez le pain. Étalez le fromage frais. Parsemez de graines de courge. Terminez par un filet de miel.</div><div class="step-tip">Simple et rapide pour les matins où vous manquez d'énergie — les graines de courge apportent zinc et magnésium.</div></div>`
    }
  ],
  "dejeuners": [
    {
      id:"regles-dej-1", cat:"dej", label:"Déjeuner · Spécial règles",
      name:"Salade de lentilles-betterave-feta-noix",
      kcal:440, p:22, g:38, l:22, time:"15 min",
      ingredients:[{name:"Lentilles vertes cuites",base:150,unit:"g"},{name:"Betterave cuite",base:80,unit:"g"},{name:"Feta",base:40,unit:"g"},{name:"Noix",base:15,unit:"g"},{name:"Huile d'olive",base:1,unit:"c.à.s."},{name:"Vinaigre balsamique",base:1,unit:"c.à.s."}],
      steps:`<div class="step-block"><div class="step-header"><div class="step-num">1</div><div class="step-title">Assembler la salade</div><span class="step-timing">⏱ 10 min</span></div><div class="step-desc">Coupez la betterave en dés. Mélangez avec les lentilles, la feta émiettée et les noix concassées.</div><div class="step-tip">Lentilles + betterave = duo de fer redoutable, particulièrement utile pendant les règles.</div></div><div class="step-block"><div class="step-header"><div class="step-num">2</div><div class="step-title">Assaisonner</div><span class="step-timing">⏱ 5 min</span></div><div class="step-desc">Arrosez d'huile d'olive et de vinaigre balsamique. Mélangez délicatement et servez.</div></div>`
    },
    {
      id:"regles-dej-2", cat:"dej", label:"Déjeuner · Spécial règles",
      name:"Curry de poulet-épinards-lait de coco",
      kcal:460, p:38, g:24, l:24, time:"30 min",
      ingredients:[{name:"Blanc de poulet",base:150,unit:"g"},{name:"Épinards frais",base:100,unit:"g"},{name:"Lait de coco",base:100,unit:"ml"},{name:"Curry en poudre",base:1,unit:"c.à.s."},{name:"Oignon",base:1,unit:""},{name:"Riz basmati",base:60,unit:"g"}],
      steps:`<div class="step-block"><div class="step-header"><div class="step-num">1</div><div class="step-title">Cuire le poulet</div><span class="step-timing">⏱ 10 min</span></div><div class="step-desc">Faites revenir l'oignon émincé puis le poulet en cubes 8 min à feu moyen-vif jusqu'à coloration.</div></div><div class="step-block"><div class="step-header"><div class="step-num">2</div><div class="step-title">Mijoter</div><span class="step-timing">⏱ 15 min</span></div><div class="step-desc">Ajoutez curry, lait de coco. Mijotez 10 min. Ajoutez les épinards 5 min avant la fin.</div></div><div class="step-block"><div class="step-header"><div class="step-num">3</div><div class="step-title">Servir</div><span class="step-timing">⏱ 5 min</span></div><div class="step-desc">Servez sur riz basmati chaud.</div></div>`
    },
    {
      id:"regles-dej-3", cat:"dej", label:"Déjeuner · Spécial règles",
      name:"Bowl quinoa-poulet-brocoli-tahini",
      kcal:445, p:36, g:38, l:16, time:"25 min",
      ingredients:[{name:"Quinoa",base:60,unit:"g"},{name:"Blanc de poulet",base:130,unit:"g"},{name:"Brocoli",base:120,unit:"g"},{name:"Tahini",base:1,unit:"c.à.s."},{name:"Citron",base:0.5,unit:""}],
      steps:`<div class="step-block"><div class="step-header"><div class="step-num">1</div><div class="step-title">Cuire les bases</div><span class="step-timing">⏱ 15 min</span></div><div class="step-desc">Cuisez le quinoa selon les instructions. En parallèle, poêlez le poulet en lanières et cuisez le brocoli à la vapeur.</div></div><div class="step-block"><div class="step-header"><div class="step-num">2</div><div class="step-title">Sauce tahini</div><span class="step-timing">⏱ 3 min</span></div><div class="step-desc">Mélangez tahini + jus de citron + un peu d'eau pour obtenir une sauce fluide.</div></div><div class="step-block"><div class="step-header"><div class="step-num">3</div><div class="step-title">Assembler</div><span class="step-timing">⏱ 2 min</span></div><div class="step-desc">Disposez tout dans un bowl, nappez de sauce tahini.</div></div>`
    },
    {
      id:"regles-dej-4", cat:"dej", label:"Déjeuner · Spécial règles",
      name:"Pâtes complètes-sauce tomate-boeuf haché-basilic",
      kcal:470, p:30, g:52, l:16, time:"25 min",
      ingredients:[{name:"Pâtes complètes",base:80,unit:"g"},{name:"Boeuf haché 5%",base:120,unit:"g"},{name:"Tomates concassées",base:200,unit:"g"},{name:"Basilic frais",base:5,unit:"feuilles"},{name:"Ail",base:1,unit:"gousse"}],
      steps:`<div class="step-block"><div class="step-header"><div class="step-num">1</div><div class="step-title">Sauce bolognaise rapide</div><span class="step-timing">⏱ 18 min</span></div><div class="step-desc">Faites revenir l'ail puis le boeuf haché 5 min. Ajoutez les tomates concassées, mijotez 12 min à feu doux.</div><div class="step-tip">Le boeuf rouge reste l'une des meilleures sources de fer héminique, le plus facilement assimilable par le corps.</div></div><div class="step-block"><div class="step-header"><div class="step-num">2</div><div class="step-title">Cuire les pâtes et servir</div><span class="step-timing">⏱ 7 min</span></div><div class="step-desc">Cuisez les pâtes al dente. Mélangez avec la sauce, parsemez de basilic frais ciselé.</div></div>`
    },
    {
      id:"regles-dej-5", cat:"dej", label:"Déjeuner · Spécial règles",
      name:"Saumon grillé-asperges-quinoa",
      kcal:450, p:34, g:30, l:20, time:"20 min",
      ingredients:[{name:"Pavé de saumon",base:140,unit:"g"},{name:"Asperges vertes",base:120,unit:"g"},{name:"Quinoa",base:50,unit:"g"},{name:"Citron",base:0.5,unit:""}],
      steps:`<div class="step-block"><div class="step-header"><div class="step-num">1</div><div class="step-title">Cuire le quinoa</div><span class="step-timing">⏱ 12 min</span></div><div class="step-desc">Cuisez le quinoa selon les instructions du paquet.</div></div><div class="step-block"><div class="step-header"><div class="step-num">2</div><div class="step-title">Saumon et asperges</div><span class="step-timing">⏱ 12 min</span></div><div class="step-desc">Poêlez le saumon 4-5 min de chaque côté. En parallèle, faites sauter les asperges 8 min. Arrosez de citron avant de servir.</div><div class="step-tip">Le saumon apporte des oméga-3 anti-inflammatoires, particulièrement utiles pour atténuer les douleurs de règles.</div></div>`
    },
    {
      id:"regles-dej-6", cat:"dej", label:"Déjeuner · Spécial règles",
      name:"Buddha bowl pois chiches-patate douce-épinards",
      kcal:430, p:18, g:56, l:16, time:"30 min",
      ingredients:[{name:"Pois chiches cuits",base:150,unit:"g"},{name:"Patate douce",base:150,unit:"g"},{name:"Épinards frais",base:50,unit:"g"},{name:"Huile d'olive",base:1,unit:"c.à.s."},{name:"Cumin",base:0.5,unit:"c.à.c."}],
      steps:`<div class="step-block"><div class="step-header"><div class="step-num">1</div><div class="step-title">Rôtir la patate douce</div><span class="step-timing">⏱ 22 min</span></div><div class="step-desc">Coupez la patate douce en cubes, assaisonnez d'huile et cumin. Four 200°C, 22 min.</div></div><div class="step-block"><div class="step-header"><div class="step-num">2</div><div class="step-title">Assembler</div><span class="step-timing">⏱ 5 min</span></div><div class="step-desc">Disposez pois chiches, patate douce rôtie et épinards frais dans un bowl. Filet d'huile d'olive pour finir.</div></div>`
    },
    {
      id:"regles-dej-7", cat:"dej", label:"Déjeuner · Spécial règles",
      name:"Wrap complet-houmous-poulet-crudités",
      kcal:420, p:30, g:42, l:14, time:"15 min",
      ingredients:[{name:"Galette complète",base:1,unit:""},{name:"Houmous",base:40,unit:"g"},{name:"Blanc de poulet cuit",base:100,unit:"g"},{name:"Crudités (carotte, concombre)",base:80,unit:"g"}],
      steps:`<div class="step-block"><div class="step-header"><div class="step-num">1</div><div class="step-title">Garnir la galette</div><span class="step-timing">⏱ 8 min</span></div><div class="step-desc">Étalez le houmous sur la galette. Ajoutez le poulet émincé et les crudités en julienne.</div></div><div class="step-block"><div class="step-header"><div class="step-num">2</div><div class="step-title">Rouler</div><span class="step-timing">⏱ 5 min</span></div><div class="step-desc">Roulez bien serré, coupez en deux. Repas pratique à emporter aussi.</div></div>`
    },
    {
      id:"regles-dej-8", cat:"dej", label:"Déjeuner · Spécial règles",
      name:"Riz complet-tofu mariné-brocoli-sésame",
      kcal:410, p:20, g:48, l:14, time:"25 min",
      ingredients:[{name:"Tofu ferme",base:150,unit:"g"},{name:"Riz complet",base:60,unit:"g"},{name:"Brocoli",base:120,unit:"g"},{name:"Sauce soja",base:2,unit:"c.à.s."},{name:"Graines de sésame",base:1,unit:"c.à.c."}],
      steps:`<div class="step-block"><div class="step-header"><div class="step-num">1</div><div class="step-title">Mariner et cuire le tofu</div><span class="step-timing">⏱ 15 min</span></div><div class="step-desc">Coupez le tofu en cubes, faites-le mariner 10 min dans la sauce soja. Poêlez 5 min jusqu'à coloration.</div></div><div class="step-block"><div class="step-header"><div class="step-num">2</div><div class="step-title">Cuire riz et brocoli</div><span class="step-timing">⏱ 20 min</span></div><div class="step-desc">Cuisez le riz complet selon les instructions. Cuisez le brocoli à la vapeur 8 min. Assemblez, parsemez de sésame.</div></div>`
    }
  ],
  "diners": [
    {
      id:"regles-din-1", cat:"din", label:"Dîner · Spécial règles",
      name:"Soupe miso-tofu-épinards-algues",
      kcal:280, p:18, g:20, l:14, time:"15 min",
      ingredients:[{name:"Pâte miso",base:1,unit:"c.à.s."},{name:"Tofu ferme",base:100,unit:"g"},{name:"Épinards frais",base:50,unit:"g"},{name:"Algues wakamé",base:5,unit:"g"},{name:"Bouillon",base:400,unit:"ml"}],
      steps:`<div class="step-block"><div class="step-header"><div class="step-num">1</div><div class="step-title">Préparer le bouillon</div><span class="step-timing">⏱ 8 min</span></div><div class="step-desc">Chauffez le bouillon, délayez la pâte miso hors du feu (elle ne doit jamais bouillir pour garder ses bienfaits).</div></div><div class="step-block"><div class="step-header"><div class="step-num">2</div><div class="step-title">Garnir</div><span class="step-timing">⏱ 7 min</span></div><div class="step-desc">Ajoutez tofu en cubes, épinards et algues réhydratées. Réchauffez doucement quelques minutes, servez chaud.</div><div class="step-tip">Léger et réconfortant — parfait pour un dîner qui digère facilement pendant les règles.</div></div>`
    },
    {
      id:"regles-din-2", cat:"din", label:"Dîner · Spécial règles",
      name:"Chili con carne allégé-haricots rouges",
      kcal:400, p:32, g:36, l:14, time:"30 min",
      ingredients:[{name:"Boeuf haché 5%",base:120,unit:"g"},{name:"Haricots rouges cuits",base:150,unit:"g"},{name:"Tomates concassées",base:200,unit:"g"},{name:"Oignon",base:1,unit:""},{name:"Paprika-cumin",base:1,unit:"c.à.c."}],
      steps:`<div class="step-block"><div class="step-header"><div class="step-num">1</div><div class="step-title">Faire revenir</div><span class="step-timing">⏱ 8 min</span></div><div class="step-desc">Faites revenir l'oignon puis le boeuf haché 6 min à feu vif.</div></div><div class="step-block"><div class="step-header"><div class="step-num">2</div><div class="step-title">Mijoter</div><span class="step-timing">⏱ 20 min</span></div><div class="step-desc">Ajoutez tomates, haricots rouges et épices. Mijotez 20 min à feu doux. Le chili épaissit en cuisant.</div></div>`
    },
    {
      id:"regles-din-3", cat:"din", label:"Dîner · Spécial règles",
      name:"Curry de lentilles corail-épinards-lait coco",
      kcal:380, p:18, g:48, l:12, time:"25 min",
      ingredients:[{name:"Lentilles corail",base:80,unit:"g"},{name:"Épinards frais",base:80,unit:"g"},{name:"Lait de coco",base:100,unit:"ml"},{name:"Curry-curcuma",base:1,unit:"c.à.s."},{name:"Oignon",base:1,unit:""}],
      steps:`<div class="step-block"><div class="step-header"><div class="step-num">1</div><div class="step-title">Cuire les lentilles</div><span class="step-timing">⏱ 18 min</span></div><div class="step-desc">Faites revenir l'oignon, ajoutez lentilles, épices et eau. Cuisez 15 min jusqu'à ce que les lentilles fondent.</div><div class="step-tip">Les lentilles corail sont très riches en fer et n'ont pas besoin de trempage — parfaites pour un dîner rapide et nourrissant.</div></div><div class="step-block"><div class="step-header"><div class="step-num">2</div><div class="step-title">Finir</div><span class="step-timing">⏱ 7 min</span></div><div class="step-desc">Ajoutez lait de coco et épinards en fin de cuisson. Réchauffez 5 min.</div></div>`
    },
    {
      id:"regles-din-4", cat:"din", label:"Dîner · Spécial règles",
      name:"Poêlée de boeuf-brocoli-gingembre",
      kcal:390, p:34, g:18, l:20, time:"15 min",
      ingredients:[{name:"Boeuf émincé",base:130,unit:"g"},{name:"Brocoli",base:150,unit:"g"},{name:"Gingembre frais",base:1,unit:"c.à.s."},{name:"Sauce soja",base:2,unit:"c.à.s."}],
      steps:`<div class="step-block"><div class="step-header"><div class="step-num">1</div><div class="step-title">Wok rapide</div><span class="step-timing">⏱ 15 min</span></div><div class="step-desc">Faites sauter le boeuf émincé à feu vif 3 min. Réservez. Faites sauter le brocoli avec gingembre 8 min. Remettez le boeuf, ajoutez sauce soja, mélangez 2 min.</div><div class="step-tip">Le gingembre est reconnu pour ses propriétés anti-inflammatoires — utile contre les crampes.</div></div>`
    },
    {
      id:"regles-din-5", cat:"din", label:"Dîner · Spécial règles",
      name:"Velouté de potimarron-graines de courge",
      kcal:260, p:8, g:36, l:10, time:"30 min",
      ingredients:[{name:"Potimarron",base:300,unit:"g"},{name:"Bouillon",base:300,unit:"ml"},{name:"Crème légère",base:50,unit:"ml"},{name:"Graines de courge",base:15,unit:"g"}],
      steps:`<div class="step-block"><div class="step-header"><div class="step-num">1</div><div class="step-title">Cuire le potimarron</div><span class="step-timing">⏱ 22 min</span></div><div class="step-desc">Coupez le potimarron en cubes (pas besoin de le peler). Cuisez dans le bouillon 20 min jusqu'à tendreté.</div></div><div class="step-block"><div class="step-header"><div class="step-num">2</div><div class="step-title">Mixer et servir</div><span class="step-timing">⏱ 8 min</span></div><div class="step-desc">Mixez avec la crème légère jusqu'à obtenir un velouté lisse. Parsemez de graines de courge pour le croquant et le magnésium.</div></div>`
    },
    {
      id:"regles-din-6", cat:"din", label:"Dîner · Spécial règles",
      name:"Saumon teriyaki-riz complet-edamame",
      kcal:420, p:30, g:38, l:16, time:"20 min",
      ingredients:[{name:"Pavé de saumon",base:130,unit:"g"},{name:"Riz complet",base:60,unit:"g"},{name:"Edamame",base:60,unit:"g"},{name:"Sauce soja-miel",base:2,unit:"c.à.s."}],
      steps:`<div class="step-block"><div class="step-header"><div class="step-num">1</div><div class="step-title">Cuire le riz</div><span class="step-timing">⏱ 18 min</span></div><div class="step-desc">Cuisez le riz complet selon les instructions du paquet.</div></div><div class="step-block"><div class="step-header"><div class="step-num">2</div><div class="step-title">Saumon glacé</div><span class="step-timing">⏱ 10 min</span></div><div class="step-desc">Poêlez le saumon, en fin de cuisson versez la sauce soja-miel pour le glacer. Servez avec riz et edamame chauds.</div></div>`
    },
    {
      id:"regles-din-7", cat:"din", label:"Dîner · Spécial règles",
      name:"Dahl de lentilles-coriandre-riz basmati",
      kcal:370, p:16, g:54, l:9, time:"25 min",
      ingredients:[{name:"Lentilles corail",base:80,unit:"g"},{name:"Riz basmati",base:50,unit:"g"},{name:"Curcuma-cumin",base:1,unit:"c.à.c."},{name:"Coriandre fraîche",base:1,unit:"c.à.s."},{name:"Ail-oignon",base:1,unit:"de chaque"}],
      steps:`<div class="step-block"><div class="step-header"><div class="step-num">1</div><div class="step-title">Préparer le dahl</div><span class="step-timing">⏱ 18 min</span></div><div class="step-desc">Faites revenir ail et oignon, ajoutez épices puis lentilles et eau. Cuisez 15 min jusqu'à texture fondante.</div></div><div class="step-block"><div class="step-header"><div class="step-num">2</div><div class="step-title">Servir</div><span class="step-timing">⏱ 7 min</span></div><div class="step-desc">Cuisez le riz basmati en parallèle. Servez le dahl sur le riz, parsemez de coriandre fraîche.</div></div>`
    },
    {
      id:"regles-din-8", cat:"din", label:"Dîner · Spécial règles",
      name:"Poulet rôti-patate douce-épinards sautés",
      kcal:410, p:36, g:30, l:14, time:"30 min",
      ingredients:[{name:"Blanc de poulet",base:150,unit:"g"},{name:"Patate douce",base:150,unit:"g"},{name:"Épinards frais",base:80,unit:"g"},{name:"Huile d'olive",base:1,unit:"c.à.s."}],
      steps:`<div class="step-block"><div class="step-header"><div class="step-num">1</div><div class="step-title">Rôtir</div><span class="step-timing">⏱ 22 min</span></div><div class="step-desc">Coupez la patate douce en cubes, enfournez avec le poulet à 200°C pendant 20-22 min.</div></div><div class="step-block"><div class="step-header"><div class="step-num">2</div><div class="step-title">Épinards sautés</div><span class="step-timing">⏱ 5 min</span></div><div class="step-desc">Faites sauter les épinards 3-4 min avec un filet d'huile. Servez le tout ensemble.</div></div>`
    }
  ],
  "collations": [
    {
      id:"regles-col-1", cat:"col", label:"Collation · Spécial règles",
      name:"Carré chocolat noir 85%-amandes",
      kcal:160, p:4, g:11, l:11, time:"2 min",
      ingredients:[{name:"Chocolat noir 85%",base:3,unit:"carrés"},{name:"Amandes",base:15,unit:"g"}],
      steps:`<div class="step-block"><div class="step-header"><div class="step-num">1</div><div class="step-title">Savourer</div><span class="step-timing">⏱ 2 min</span></div><div class="step-desc">Le combo magnésium du chocolat noir + bons gras des amandes — l'allié anti-craquage le plus efficace pendant les règles.</div></div>`
    },
    {
      id:"regles-col-2", cat:"col", label:"Collation · Spécial règles",
      name:"Compote pomme-cannelle maison",
      kcal:120, p:1, g:28, l:0, time:"15 min",
      ingredients:[{name:"Pommes",base:2,unit:""},{name:"Cannelle",base:1,unit:"c.à.c."}],
      steps:`<div class="step-block"><div class="step-header"><div class="step-num">1</div><div class="step-title">Cuire</div><span class="step-timing">⏱ 15 min</span></div><div class="step-desc">Épluchez et coupez les pommes en cubes. Cuisez 12-15 min avec un peu d'eau et la cannelle, jusqu'à texture fondante. Écrasez à la fourchette.</div></div>`
    },
    {
      id:"regles-col-3", cat:"col", label:"Collation · Spécial règles",
      name:"Yaourt grec-miel-graines de courge",
      kcal:175, p:11, g:18, l:6, time:"3 min",
      ingredients:[{name:"Yaourt grec",base:150,unit:"g"},{name:"Miel brut",base:1,unit:"c.à.s."},{name:"Graines de courge",base:10,unit:"g"}],
      steps:`<div class="step-block"><div class="step-header"><div class="step-num">1</div><div class="step-title">Assembler</div><span class="step-timing">⏱ 3 min</span></div><div class="step-desc">Versez le yaourt dans un bol, ajoutez miel et graines de courge.</div></div>`
    },
    {
      id:"regles-col-4", cat:"col", label:"Collation · Spécial règles",
      name:"Energy balls dattes-cacao-noix",
      kcal:165, p:3, g:20, l:9, time:"15 min",
      ingredients:[{name:"Dattes",base:6,unit:""},{name:"Cacao non sucré",base:1,unit:"c.à.s."},{name:"Noix",base:30,unit:"g"}],
      steps:`<div class="step-block"><div class="step-header"><div class="step-num">1</div><div class="step-title">Mixer</div><span class="step-timing">⏱ 8 min</span></div><div class="step-desc">Mixez dattes dénoyautées + noix + cacao jusqu'à obtenir une pâte collante et homogène.</div></div><div class="step-block"><div class="step-header"><div class="step-num">2</div><div class="step-title">Former les boules</div><span class="step-timing">⏱ 7 min</span></div><div class="step-desc">Formez des petites boules avec les mains. Réfrigérez 30 min. Se conservent 1 semaine au frigo — préparez-en plusieurs d'avance.</div></div>`
    },
    {
      id:"regles-col-5", cat:"col", label:"Collation · Spécial règles",
      name:"Tisane gingembre-curcuma + 2 carrés chocolat noir",
      kcal:90, p:1, g:9, l:5, time:"8 min",
      ingredients:[{name:"Gingembre frais",base:1,unit:"c.à.c."},{name:"Curcuma",base:0.5,unit:"c.à.c."},{name:"Chocolat noir 85%",base:2,unit:"carrés"}],
      steps:`<div class="step-block"><div class="step-header"><div class="step-num">1</div><div class="step-title">Infuser</div><span class="step-timing">⏱ 8 min</span></div><div class="step-desc">Faites infuser gingembre frais et curcuma dans de l'eau chaude 5-8 min. Dégustez avec 2 carrés de chocolat noir.</div><div class="step-tip">Le duo gingembre-curcuma est reconnu pour ses vertus anti-inflammatoires naturelles.</div></div>`
    },
    {
      id:"regles-col-6", cat:"col", label:"Collation · Spécial règles",
      name:"Mini-galette de riz-purée d'amande",
      kcal:130, p:3, g:14, l:7, time:"3 min",
      ingredients:[{name:"Galettes de riz",base:2,unit:""},{name:"Purée d'amande",base:1,unit:"c.à.s."}],
      steps:`<div class="step-block"><div class="step-header"><div class="step-num">1</div><div class="step-title">Tartiner</div><span class="step-timing">⏱ 3 min</span></div><div class="step-desc">Étalez la purée d'amande sur les galettes de riz. Simple, croquant, satisfaisant.</div></div>`
    },
    {
      id:"regles-col-7", cat:"col", label:"Collation · Spécial règles",
      name:"Pomme-beurre d'amande",
      kcal:155, p:4, g:22, l:6, time:"3 min",
      ingredients:[{name:"Pomme",base:1,unit:""},{name:"Purée d'amande",base:1,unit:"c.à.s."}],
      steps:`<div class="step-block"><div class="step-header"><div class="step-num">1</div><div class="step-title">Couper et tremper</div><span class="step-timing">⏱ 3 min</span></div><div class="step-desc">Coupez la pomme en quartiers, dégustez avec la purée d'amande à tremper.</div></div>`
    },
    {
      id:"regles-col-8", cat:"col", label:"Collation · Spécial règles",
      name:"Fruits secs-noix du Brésil",
      kcal:170, p:4, g:14, l:12, time:"1 min",
      ingredients:[{name:"Noix du Brésil",base:3,unit:""},{name:"Fruits secs (abricots, raisins)",base:20,unit:"g"}],
      steps:`<div class="step-block"><div class="step-header"><div class="step-num">1</div><div class="step-title">Déguster</div><span class="step-timing">⏱ 1 min</span></div><div class="step-desc">Les noix du Brésil sont parmi les plus riches en magnésium — 3 suffisent largement. Mélangez avec quelques fruits secs.</div></div>`
    }
  ],
  "desserts": [
    {
      id:"regles-des-1", cat:"dessert", label:"Dessert · Spécial règles",
      name:"Mousse chocolat noir-avocat",
      kcal:195, p:4, g:16, l:14, time:"10 min + 1h frigo",
      ingredients:[{name:"Avocat mûr",base:1,unit:""},{name:"Chocolat noir 70% fondu",base:50,unit:"g"},{name:"Cacao non sucré",base:1,unit:"c.à.s."},{name:"Miel brut",base:1,unit:"c.à.s."}],
      steps:`<div class="step-block"><div class="step-header"><div class="step-num">1</div><div class="step-title">Mixer</div><span class="step-timing">⏱ 8 min</span></div><div class="step-desc">Mixez avocat + chocolat fondu + cacao + miel jusqu'à obtenir une texture parfaitement lisse et mousseuse.</div><div class="step-tip">On ne goûte absolument pas l'avocat — juste une texture mousse incroyablement onctueuse et des bons gras en plus.</div></div><div class="step-block"><div class="step-header"><div class="step-num">2</div><div class="step-title">Réfrigérer</div><span class="step-timing">⏱ 1h</span></div><div class="step-desc">Versez en verrines, réfrigérez minimum 1h avant de déguster.</div></div>`
    },
    {
      id:"regles-des-2", cat:"dessert", label:"Dessert · Spécial règles",
      name:"Crumble pomme-cannelle-flocons d'avoine",
      kcal:210, p:4, g:34, l:7, time:"30 min",
      ingredients:[{name:"Pommes",base:2,unit:""},{name:"Flocons d'avoine",base:50,unit:"g"},{name:"Beurre",base:20,unit:"g"},{name:"Cannelle",base:1,unit:"c.à.c."},{name:"Miel brut",base:1,unit:"c.à.s."}],
      steps:`<div class="step-block"><div class="step-header"><div class="step-num">1</div><div class="step-title">Préparer la base</div><span class="step-timing">⏱ 5 min</span></div><div class="step-desc">Coupez les pommes en cubes, disposez dans un plat avec la cannelle.</div></div><div class="step-block"><div class="step-header"><div class="step-num">2</div><div class="step-title">Crumble et cuire</div><span class="step-timing">⏱ 25 min</span></div><div class="step-desc">Mélangez flocons + beurre froid + miel du bout des doigts. Recouvrez les pommes. Four 180°C, 22-25 min jusqu'à dorure.</div></div>`
    },
    {
      id:"regles-des-3", cat:"dessert", label:"Dessert · Spécial règles",
      name:"Brownie haricots noirs-chocolat",
      kcal:220, p:7, g:24, l:11, time:"35 min",
      ingredients:[{name:"Haricots noirs cuits",base:200,unit:"g"},{name:"Chocolat noir fondu",base:80,unit:"g"},{name:"Oeufs",base:2,unit:""},{name:"Cacao non sucré",base:2,unit:"c.à.s."},{name:"Miel brut",base:3,unit:"c.à.s."}],
      steps:`<div class="step-block"><div class="step-header"><div class="step-num">1</div><div class="step-title">Mixer la pâte</div><span class="step-timing">⏱ 10 min</span></div><div class="step-desc">Mixez haricots noirs égouttés + oeufs + chocolat fondu + cacao + miel jusqu'à obtenir une pâte lisse et homogène.</div><div class="step-tip">Les haricots noirs remplacent la farine — ils apportent du fer et des fibres sans dénaturer le goût chocolaté.</div></div><div class="step-block"><div class="step-header"><div class="step-num">2</div><div class="step-title">Cuire</div><span class="step-timing">⏱ 25 min</span></div><div class="step-desc">Versez dans un moule beurré. Four 180°C, 22-25 min. Le brownie doit rester fondant au centre.</div></div>`
    },
    {
      id:"regles-des-4", cat:"dessert", label:"Dessert · Spécial règles",
      name:"Compote poire-chocolat fondu",
      kcal:175, p:2, g:30, l:6, time:"18 min",
      ingredients:[{name:"Poires",base:2,unit:""},{name:"Chocolat noir 70%",base:25,unit:"g"}],
      steps:`<div class="step-block"><div class="step-header"><div class="step-num">1</div><div class="step-title">Cuire les poires</div><span class="step-timing">⏱ 15 min</span></div><div class="step-desc">Épluchez et coupez les poires en cubes. Cuisez 12-15 min avec un peu d'eau jusqu'à tendreté. Écrasez grossièrement.</div></div><div class="step-block"><div class="step-header"><div class="step-num">2</div><div class="step-title">Napper de chocolat</div><span class="step-timing">⏱ 3 min</span></div><div class="step-desc">Faites fondre le chocolat au bain-marie, versez sur la compote tiède.</div></div>`
    },
    {
      id:"regles-des-5", cat:"dessert", label:"Dessert · Spécial règles",
      name:"Yaourt grec-chocolat fondu-noisettes",
      kcal:230, p:11, g:18, l:13, time:"8 min",
      ingredients:[{name:"Yaourt grec",base:150,unit:"g"},{name:"Chocolat noir fondu",base:30,unit:"g"},{name:"Noisettes",base:15,unit:"g"}],
      steps:`<div class="step-block"><div class="step-header"><div class="step-num">1</div><div class="step-title">Assembler</div><span class="step-timing">⏱ 8 min</span></div><div class="step-desc">Faites fondre le chocolat au bain-marie. Versez sur le yaourt grec, parsemez de noisettes concassées.</div></div>`
    },
    {
      id:"regles-des-6", cat:"dessert", label:"Dessert · Spécial règles",
      name:"Fondant chocolat noir-coeur coulant",
      kcal:240, p:6, g:20, l:15, time:"20 min",
      ingredients:[{name:"Chocolat noir 70%",base:100,unit:"g"},{name:"Beurre",base:40,unit:"g"},{name:"Oeufs",base:2,unit:""},{name:"Miel brut",base:2,unit:"c.à.s."},{name:"Farine d'amande",base:30,unit:"g"}],
      steps:`<div class="step-block"><div class="step-header"><div class="step-num">1</div><div class="step-title">Préparer la pâte</div><span class="step-timing">⏱ 8 min</span></div><div class="step-desc">Fondez chocolat + beurre. Ajoutez miel + oeufs battus + farine d'amande. Mélangez bien.</div></div><div class="step-block"><div class="step-header"><div class="step-num">2</div><div class="step-title">Cuire 12 min pile</div><span class="step-timing">⏱ 12 min</span></div><div class="step-desc">Versez dans des ramequins beurrés. Four 200°C, exactement 12 min. Bords pris, centre tremblant pour le coeur coulant.</div></div>`
    },
    {
      id:"regles-des-7", cat:"dessert", label:"Dessert · Spécial règles",
      name:"Riz au lait-cannelle-raisins secs",
      kcal:200, p:6, g:36, l:4, time:"30 min",
      ingredients:[{name:"Riz rond",base:50,unit:"g"},{name:"Lait demi-écrémé",base:400,unit:"ml"},{name:"Cannelle",base:0.5,unit:"c.à.c."},{name:"Raisins secs",base:20,unit:"g"},{name:"Miel brut",base:1,unit:"c.à.s."}],
      steps:`<div class="step-block"><div class="step-header"><div class="step-num">1</div><div class="step-title">Cuire le riz au lait</div><span class="step-timing">⏱ 25 min</span></div><div class="step-desc">Versez le riz dans le lait chaud. Cuisez à feu doux 25 min en remuant régulièrement jusqu'à texture crémeuse.</div></div><div class="step-block"><div class="step-header"><div class="step-num">2</div><div class="step-title">Finir</div><span class="step-timing">⏱ 5 min</span></div><div class="step-desc">Ajoutez cannelle, raisins secs et miel hors du feu. Servez tiède ou froid.</div></div>`
    },
    {
      id:"regles-des-8", cat:"dessert", label:"Dessert · Spécial règles",
      name:"Smoothie bowl fruits rouges-cacao-graines de chia",
      kcal:190, p:5, g:32, l:6, time:"8 min",
      ingredients:[{name:"Fruits rouges surgelés",base:150,unit:"g"},{name:"Cacao non sucré",base:1,unit:"c.à.s."},{name:"Lait d'amande",base:80,unit:"ml"},{name:"Graines de chia",base:1,unit:"c.à.s."}],
      steps:`<div class="step-block"><div class="step-header"><div class="step-num">1</div><div class="step-title">Mixer</div><span class="step-timing">⏱ 5 min</span></div><div class="step-desc">Mixez fruits rouges + cacao + lait d'amande jusqu'à texture épaisse type glace.</div></div><div class="step-block"><div class="step-header"><div class="step-num">2</div><div class="step-title">Garnir</div><span class="step-timing">⏱ 3 min</span></div><div class="step-desc">Versez dans un bol, parsemez de graines de chia.</div></div>`
    }
  ]
};

window.RECIPES_REGLES_DATA = RECIPES_REGLES;
