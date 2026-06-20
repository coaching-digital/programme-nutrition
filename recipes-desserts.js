// ============================================================
// BANQUE DE RECETTES — DESSERTS
// Chargé dynamiquement par index.html au démarrage
// ============================================================

const RECIPES_DESSERTS = [
{
      id:"bank-12", cat:"dessert", label:"Dessert",
      name:"Fondant au chocolat noir coulant & crème vanille légère",
      kcal:220, p:6, g:20, l:13, time:"20 min",
      ingredients:[{name:"Chocolat noir 70%",base:100,unit:"g"},{name:"Beurre",base:40,unit:"g"},{name:"Oeufs",base:2,unit:""},{name:"Miel brut",base:2,unit:"c.à.s."},{name:"Farine d'amande",base:30,unit:"g"},{name:"Fromage blanc 0%",base:100,unit:"g"},{name:"Extrait de vanille",base:1,unit:"c.à.c."}],
      steps:`<div class="step-block"><div class="step-header"><div class="step-num">1</div><div class="step-title">Fondant chocolat</div><span class="step-timing">⏱ 12 min</span></div><div class="step-desc">Fondez chocolat + beurre. Ajoutez miel + oeufs + farine d'amande. Versez en ramequins. Four 200°C exactement 12 min — les bords pris, le centre tremblant.</div><div class="step-tip">Le timing est sacré pour le coeur coulant. 12 min pile, pas une de plus.</div></div><div class="step-block"><div class="step-header"><div class="step-num">2</div><div class="step-title">Crème vanille légère</div><span class="step-timing">⏱ 2 min</span></div><div class="step-desc">Mélangez fromage blanc + extrait de vanille + 1 c.à.c. miel. Simple et délicieux à côté du fondant chaud.</div></div>`
    },
    {
      id:"bank-13", cat:"dessert", label:"Dessert",
      name:"Tarte tatin pommes-poires allégée (pâte filo)",
      kcal:200, p:3, g:35, l:6, time:"35 min",
      ingredients:[{name:"Pommes",base:2,unit:""},{name:"Poires",base:1,unit:""},{name:"Feuilles de pâte filo",base:3,unit:""},{name:"Miel brut",base:2,unit:"c.à.s."},{name:"Beurre",base:15,unit:"g"},{name:"Cannelle",base:1,unit:"c.à.c."},{name:"Jus de citron",base:1,unit:"c.à.s."}],
      steps:`<div class="step-block"><div class="step-header"><div class="step-num">1</div><div class="step-title">Caraméliser les fruits</div><span class="step-timing">⏱ 10 min</span></div><div class="step-desc">Dans un moule allant au four, faites fondre beurre + miel à feu moyen. Disposez les fruits pelés et tranchés en éventail, cuisez 8-10 min jusqu'à caramélisation dorée.</div><div class="step-tip">La pâte filo remplace la pâte feuilletée traditionnelle — beaucoup moins de beurre pour le même croustillant.</div></div><div class="step-block"><div class="step-header"><div class="step-num">2</div><div class="step-title">Couvrir de filo</div><span class="step-timing">⏱ 5 min</span></div><div class="step-desc">Superposez 3 feuilles filo badigeonnées d'huile d'olive sur les fruits. Rentrez les bords sous les fruits. Saupoudrez de cannelle.</div></div><div class="step-block"><div class="step-header"><div class="step-num">3</div><div class="step-title">Cuire et retourner</div><span class="step-timing">⏱ 20 min</span></div><div class="step-desc">Four 190°C, 20 min. Laissez tiédir 5 min puis retournez d'un coup sur une assiette. Servez tiède.</div></div>`
    },
    {
      id:"bank-14", cat:"dessert", label:"Dessert",
      name:"Profiteroles légères au chocolat noir",
      kcal:215, p:8, g:22, l:10, time:"45 min",
      ingredients:[{name:"Eau",base:125,unit:"ml"},{name:"Beurre",base:50,unit:"g"},{name:"Farine",base:75,unit:"g"},{name:"Oeufs",base:2,unit:""},{name:"Fromage blanc 0%",base:150,unit:"g"},{name:"Vanille",base:1,unit:"c.à.c."},{name:"Chocolat noir 70%",base:60,unit:"g"},{name:"Crème légère",base:40,unit:"ml"}],
      steps:`<div class="step-block"><div class="step-header"><div class="step-num">1</div><div class="step-title">Pâte à choux</div><span class="step-timing">⏱ 15 min</span></div><div class="step-desc">Portez eau + beurre à ébullition. Hors du feu, ajoutez farine d'un coup, mélangez vigoureusement. Remettez sur feu doux, desséchez 2 min. Hors du feu, incorporez les oeufs un à un.</div><div class="step-tip">La pâte à choux est prête quand elle forme un V quand vous soulevez la spatule.</div></div><div class="step-block"><div class="step-header"><div class="step-num">2</div><div class="step-title">Cuire les choux</div><span class="step-timing">⏱ 25 min</span></div><div class="step-desc">Formez des petits tas sur papier cuisson. Four 200°C, 20-25 min. N'ouvrez jamais le four pendant la cuisson. Laissez refroidir complètement.</div></div><div class="step-block"><div class="step-header"><div class="step-num">3</div><div class="step-title">Garnir et napper</div><span class="step-timing">⏱ 10 min</span></div><div class="step-desc">Mélangez fromage blanc + vanille. Garnissez les choux. Fondez chocolat + crème légère pour le nappage. Nappez et servez.</div></div>`
    },
    {
      id:"bank-15", cat:"dessert", label:"Dessert",
      name:"Ile flottante & crème anglaise à la vanille",
      kcal:180, p:8, g:24, l:5, time:"25 min",
      ingredients:[{name:"Blancs d'oeufs",base:3,unit:""},{name:"Jaunes d'oeufs",base:3,unit:""},{name:"Lait demi-écrémé",base:400,unit:"ml"},{name:"Miel brut",base:3,unit:"c.à.s."},{name:"Gousse de vanille",base:1,unit:""},{name:"Pincée de sel",base:1,unit:"pincée"}],
      steps:`<div class="step-block"><div class="step-header"><div class="step-num">1</div><div class="step-title">Crème anglaise</div><span class="step-timing">⏱ 15 min</span></div><div class="step-desc">Infusez vanille dans lait chaud 10 min. Fouettez jaunes + miel jusqu'à blanchiment. Versez le lait chaud progressivement. Cuisez à feu doux en remuant jusqu'à napper la cuillère (82°C). Refroidissez.</div><div class="step-tip">La crème anglaise ne doit jamais bouillir — elle trancherait. Feu doux et patience.</div></div><div class="step-block"><div class="step-header"><div class="step-num">2</div><div class="step-title">Iles flottantes</div><span class="step-timing">⏱ 8 min</span></div><div class="step-desc">Montez les blancs en neige ferme avec sel + 1 c.à.c. miel. Formez des quenelles. Pochez-les 1 min de chaque côté dans le lait frémissant. Égouttez.</div></div><div class="step-block"><div class="step-header"><div class="step-num">3</div><div class="step-title">Dresser</div><span class="step-timing">⏱ 2 min</span></div><div class="step-desc">Crème anglaise froide dans des coupes, iles flottantes posées dessus. Servez frais.</div></div>`
    },
    {
      id:"bank-16", cat:"dessert", label:"Dessert",
      name:"Crumble fruits rouges & flocons d'avoine",
      kcal:190, p:4, g:32, l:6, time:"30 min",
      ingredients:[{name:"Fruits rouges (frais ou surgelés)",base:200,unit:"g"},{name:"Flocons d'avoine",base:60,unit:"g"},{name:"Farine d'amande",base:30,unit:"g"},{name:"Beurre froid",base:25,unit:"g"},{name:"Miel brut",base:1,unit:"c.à.s."},{name:"Cannelle",base:0.5,unit:"c.à.c."}],
      steps:`<div class="step-block"><div class="step-header"><div class="step-num">1</div><div class="step-title">Préparer le crumble</div><span class="step-timing">⏱ 5 min</span></div><div class="step-desc">Mélangez flocons + farine d'amande + beurre froid en cubes + miel + cannelle. Sablez du bout des doigts jusqu'à obtenir une texture sableuse grumeleuse.</div><div class="step-tip">Le beurre doit être très froid — c'est ce qui donne la texture crumble. Sortez-le du frigo au dernier moment.</div></div><div class="step-block"><div class="step-header"><div class="step-num">2</div><div class="step-title">Monter et cuire</div><span class="step-timing">⏱ 25 min</span></div><div class="step-desc">Disposez les fruits dans un plat. Recouvrez généreusement de crumble. Four 180°C, 25 min jusqu'à ce que le dessus soit doré et les fruits bouillonnants.</div></div>`
    },
    {
      id:"bank-17", cat:"dessert", label:"Dessert",
      name:"Panna cotta coco & coulis de mangue",
      kcal:170, p:3, g:22, l:8, time:"10 min + 3h frigo",
      ingredients:[{name:"Lait de coco léger",base:200,unit:"ml"},{name:"Crème légère",base:100,unit:"ml"},{name:"Agar-agar",base:1,unit:"c.à.c."},{name:"Miel brut",base:1,unit:"c.à.s."},{name:"Mangue",base:1,unit:""},{name:"Jus de citron vert",base:1,unit:"c.à.s."}],
      steps:`<div class="step-block"><div class="step-header"><div class="step-num">1</div><div class="step-title">Panna cotta coco</div><span class="step-timing">⏱ 8 min</span></div><div class="step-desc">Portez lait de coco + crème + agar-agar à ébullition douce en remuant 2 min. Ajoutez miel hors du feu. Coulez en verrines. Réfrigérez minimum 3 heures.</div></div><div class="step-block"><div class="step-header"><div class="step-num">2</div><div class="step-title">Coulis de mangue</div><span class="step-timing">⏱ 3 min</span></div><div class="step-desc">Mixez chair de mangue + jus citron vert + 1 c.à.c. miel. Coulez sur les panna cottas au moment de servir.</div></div>`
    },
    {
      id:"bank-18", cat:"dessert", label:"Dessert",
      name:"Verrines fraises-basilic & chantilly légère",
      kcal:140, p:4, g:18, l:5, time:"15 min",
      ingredients:[{name:"Fraises",base:200,unit:"g"},{name:"Basilic frais",base:5,unit:"feuilles"},{name:"Crème liquide légère",base:100,unit:"ml"},{name:"Miel brut",base:1,unit:"c.à.s."},{name:"Jus de citron",base:1,unit:"c.à.s."}],
      steps:`<div class="step-block"><div class="step-header"><div class="step-num">1</div><div class="step-title">Macérer les fraises</div><span class="step-timing">⏱ 10 min</span></div><div class="step-desc">Coupez les fraises en quartiers. Mélangez avec miel + citron + basilic ciselé. Laissez macérer 10 min — elles vont rendre un jus délicieux.</div></div><div class="step-block"><div class="step-header"><div class="step-num">2</div><div class="step-title">Chantilly légère</div><span class="step-timing">⏱ 3 min</span></div><div class="step-desc">Montez la crème bien froide en chantilly légère. Dressez fraises en verrine, chantilly dessus, feuille de basilic pour décorer.</div><div class="step-tip">Mettez le bol et les fouets au congélateur 15 min avant — la crème monte beaucoup mieux.</div></div>`
    },
    {
      id:"bank-19", cat:"dessert", label:"Dessert",
      name:"Charlotte aux fraises maison",
      kcal:195, p:6, g:28, l:6, time:"30 min + 2h frigo",
      ingredients:[{name:"Biscuits à la cuillère",base:12,unit:""},{name:"Fraises",base:250,unit:"g"},{name:"Fromage blanc 0%",base:200,unit:"g"},{name:"Crème légère",base:80,unit:"ml"},{name:"Miel brut",base:2,unit:"c.à.s."},{name:"Jus de citron",base:1,unit:"c.à.s."},{name:"Sirop de fraises (eau + quelques fraises mixées)",base:50,unit:"ml"}],
      steps:`<div class="step-block"><div class="step-header"><div class="step-num">1</div><div class="step-title">Mousse fraises</div><span class="step-timing">⏱ 10 min</span></div><div class="step-desc">Mixez la moitié des fraises avec miel + citron. Montez la crème en chantilly légère. Incorporez délicatement au fromage blanc puis au coulis de fraises.</div></div><div class="step-block"><div class="step-header"><div class="step-num">2</div><div class="step-title">Monter la charlotte</div><span class="step-timing">⏱ 10 min</span></div><div class="step-desc">Trempez les biscuits rapidement dans le sirop. Chemisez un moule. Alternez couches de mousse et fraises fraîches coupées. Terminez par des biscuits. Filmez et réfrigérez 2h minimum.</div></div><div class="step-block"><div class="step-header"><div class="step-num">3</div><div class="step-title">Démouler</div><span class="step-timing">⏱ 2 min</span></div><div class="step-desc">Retournez sur une assiette. Décorez de fraises fraîches. Servez frais.</div></div>`
    },
    {
      id:"bank-20", cat:"dessert", label:"Dessert",
      name:"Soufflé au citron allégé",
      kcal:165, p:8, g:20, l:4, time:"30 min",
      ingredients:[{name:"Citrons (jus + zeste)",base:2,unit:""},{name:"Oeufs",base:3,unit:""},{name:"Miel brut",base:3,unit:"c.à.s."},{name:"Farine",base:20,unit:"g"},{name:"Lait demi-écrémé",base:100,unit:"ml"}],
      steps:`<div class="step-block"><div class="step-header"><div class="step-num">1</div><div class="step-title">Base citron</div><span class="step-timing">⏱ 8 min</span></div><div class="step-desc">Chauffez lait + zeste citron. Fouettez jaunes + miel + farine. Versez le lait chaud, remettez sur feu doux, épaississez en remuant. Ajoutez jus de citron hors du feu. Laissez tiédir.</div></div><div class="step-block"><div class="step-header"><div class="step-num">2</div><div class="step-title">Monter et incorporer</div><span class="step-timing">⏱ 5 min</span></div><div class="step-desc">Montez les blancs en neige ferme. Incorporez 1/3 des blancs vigoureusement à la base citron, puis le reste délicatement à la maryse.</div><div class="step-tip">Le soufflé n'attend pas — préparez tout à l'avance et enfournez au dernier moment.</div></div><div class="step-block"><div class="step-header"><div class="step-num">3</div><div class="step-title">Cuire et servir immédiatement</div><span class="step-timing">⏱ 12 min</span></div><div class="step-desc">Beurrez et sucrez les ramequins. Versez la préparation aux 3/4. Four préchauffé 190°C, 12 min. Servez immédiatement — il redescend en 2 min.</div></div>`
    },
    {
      id:"bank-21", cat:"dessert", label:"Dessert",
      name:"Mille-feuille revisité pâte filo & crème légère",
      kcal:200, p:5, g:26, l:8, time:"25 min",
      ingredients:[{name:"Feuilles de pâte filo",base:4,unit:""},{name:"Fromage blanc 0%",base:150,unit:"g"},{name:"Crème légère",base:80,unit:"ml"},{name:"Miel brut",base:2,unit:"c.à.s."},{name:"Extrait de vanille",base:1,unit:"c.à.c."},{name:"Fruits rouges",base:100,unit:"g"},{name:"Sucre glace (léger saupoudrage)",base:1,unit:"c.à.c."}],
      steps:`<div class="step-block"><div class="step-header"><div class="step-num">1</div><div class="step-title">Croustillants filo</div><span class="step-timing">⏱ 12 min</span></div><div class="step-desc">Badigeonnez les feuilles filo d'huile d'olive, superposez-en 2, découpez en rectangles. Four 190°C, 8-10 min jusqu'à dorure et croustillance. Laissez refroidir.</div></div><div class="step-block"><div class="step-header"><div class="step-num">2</div><div class="step-title">Crème vanille</div><span class="step-timing">⏱ 5 min</span></div><div class="step-desc">Montez la crème légère en chantilly. Incorporez délicatement fromage blanc + miel + vanille. La crème doit être légère et aérienne.</div></div><div class="step-block"><div class="step-header"><div class="step-num">3</div><div class="step-title">Monter et dresser</div><span class="step-timing">⏱ 5 min</span></div><div class="step-desc">Alternez croustillants filo et crème vanille sur 3 couches. Finissez par les fruits rouges et un léger voile de sucre glace. Servez immédiatement.</div></div>`
    },
    {
      id:"bank-22", cat:"dessert", label:"Dessert",
      name:"Tiramisu léger au café & cacao",
      kcal:210, p:8, g:24, l:8, time:"20 min + 2h frigo",
      ingredients:[{name:"Mascarpone allégé",base:100,unit:"g"},{name:"Fromage blanc 0%",base:100,unit:"g"},{name:"Oeufs",base:2,unit:""},{name:"Miel brut",base:2,unit:"c.à.s."},{name:"Café fort refroidi",base:100,unit:"ml"},{name:"Biscuits à la cuillère",base:8,unit:""},{name:"Cacao non sucré",base:1,unit:"c.à.s."}],
      steps:`<div class="step-block"><div class="step-header"><div class="step-num">1</div><div class="step-title">Crème tiramisu légère</div><span class="step-timing">⏱ 10 min</span></div><div class="step-desc">Séparez les oeufs. Fouettez jaunes + miel jusqu'à blanchiment. Incorporez mascarpone + fromage blanc. Montez les blancs en neige, incorporez délicatement. La crème doit être aérienne.</div></div><div class="step-block"><div class="step-header"><div class="step-num">2</div><div class="step-title">Monter</div><span class="step-timing">⏱ 5 min</span></div><div class="step-desc">Trempez rapidement les biscuits dans le café. Alternez couche de biscuits et crème dans des verrines ou un plat. Terminez par la crème.</div></div><div class="step-block"><div class="step-header"><div class="step-num">3</div><div class="step-title">Réfrigérer et saupoudrer</div><span class="step-timing">⏱ 2h</span></div><div class="step-desc">Réfrigérez minimum 2h. Au moment de servir, saupoudrez généreusement de cacao non sucré.</div></div>`
    },
    {
      id:"bank-23", cat:"dessert", label:"Dessert",
      name:"Cheesecake yaourt-citron sans cuisson",
      kcal:180, p:8, g:22, l:6, time:"15 min + 3h frigo",
      ingredients:[{name:"Yaourt grec",base:200,unit:"g"},{name:"Fromage blanc 0%",base:100,unit:"g"},{name:"Citron (zeste + jus)",base:1,unit:""},{name:"Miel brut",base:2,unit:"c.à.s."},{name:"Agar-agar",base:0.5,unit:"c.à.c."},{name:"Flocons d'avoine toastés",base:40,unit:"g"},{name:"Beurre",base:15,unit:"g"}],
      steps:`<div class="step-block"><div class="step-header"><div class="step-num">1</div><div class="step-title">Base biscuitée</div><span class="step-timing">⏱ 5 min</span></div><div class="step-desc">Toastez les flocons d'avoine 3 min à sec. Mélangez avec beurre fondu + pincée de sel. Pressez dans le fond de verrines ou d'un moule. Réfrigérez.</div></div><div class="step-block"><div class="step-header"><div class="step-num">2</div><div class="step-title">Crème citron</div><span class="step-timing">⏱ 5 min</span></div><div class="step-desc">Chauffez jus de citron + agar-agar 2 min. Mélangez yaourt + fromage blanc + miel + zeste citron + mélange agar refroidi. Coulez sur la base.</div></div><div class="step-block"><div class="step-header"><div class="step-num">3</div><div class="step-title">Réfrigérer</div><span class="step-timing">⏱ 3h</span></div><div class="step-desc">Minimum 3h au frigo. Servez bien frais, décorez de zeste de citron et quelques fruits rouges.</div></div>`
    },
    {
      id:"bank-24", cat:"dessert", label:"Dessert",
      name:"Mousse mangue-coco (2 ingrédients)",
      kcal:150, p:2, g:26, l:5, time:"10 min + 1h frigo",
      ingredients:[{name:"Mangue bien mûre",base:1,unit:""},{name:"Lait de coco léger",base:100,unit:"ml"},{name:"Jus de citron vert",base:1,unit:"c.à.s."}],
      steps:`<div class="step-block"><div class="step-header"><div class="step-num">1</div><div class="step-title">Mixer</div><span class="step-timing">⏱ 3 min</span></div><div class="step-desc">Mixez la chair de mangue + lait de coco + jus citron vert jusqu'à obtenir un mélange lisse et crémeux. Goûtez — si la mangue est bien mûre, aucun sucre ajouté nécessaire.</div><div class="step-tip">Plus la mangue est mûre et sucrée, meilleure sera la mousse. Choisissez-la bien parfumée.</div></div><div class="step-block"><div class="step-header"><div class="step-num">2</div><div class="step-title">Réfrigérer et servir</div><span class="step-timing">⏱ 1h</span></div><div class="step-desc">Versez en verrines. Réfrigérez minimum 1h. Décorez d'une feuille de menthe ou de noix de coco râpée. Ultra simple, ultra bon.</div></div>`
    }
];

window.RECIPES_DESSERTS_DATA = RECIPES_DESSERTS;
