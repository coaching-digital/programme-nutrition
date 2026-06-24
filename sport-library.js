// sport-library.js — Bibliothèque des exercices
// Chargé via fetch() depuis index.html
// Structure : window.SPORT_LIBRARY_DATA

window.SPORT_LIBRARY_DATA = {

  groupes: [
    {
      id: 'jambes',
      nom: 'Jambes',
      emoji: '🦵',
      muscles: 'Quadriceps · Ischio · Fessiers · Mollets',
      couleur: '#FFE5EC',
      couleurBorder: '#FFB5C8',
      couleurAccent: '#FF3D72',
      exercices: [
        {
          id: 'squat',
          nom: 'Squat',
          muscles: 'Quadriceps · Fessiers · Ischio',
          type: 'poids_libres',
          materiel: 'Barre libre',
          niveau: 'intermediaire',
          kcalParMin: 6,
          typeSaisie: 'muscu', // poids + reps + series
          favori: false
        },
        {
          id: 'leg-press',
          nom: 'Leg press',
          muscles: 'Quadriceps · Fessiers',
          type: 'machine',
          materiel: 'Machine',
          niveau: 'debutant',
          kcalParMin: 5,
          typeSaisie: 'muscu',
          favori: false
        },
        {
          id: 'fentes-marchees',
          nom: 'Fentes marchées',
          muscles: 'Quadriceps · Fessiers · Équilibre',
          type: 'poids_libres',
          materiel: 'Haltères',
          niveau: 'intermediaire',
          kcalParMin: 7,
          typeSaisie: 'muscu',
          favori: false
        },
        {
          id: 'leg-curl',
          nom: 'Leg curl couché',
          muscles: 'Ischio-jambiers',
          type: 'machine',
          materiel: 'Machine',
          niveau: 'debutant',
          kcalParMin: 4,
          typeSaisie: 'muscu',
          favori: false
        },
        {
          id: 'hip-thrust',
          nom: 'Hip thrust',
          muscles: 'Fessiers · Ischio',
          type: 'poids_libres',
          materiel: 'Barre libre',
          niveau: 'intermediaire',
          kcalParMin: 5,
          typeSaisie: 'muscu',
          favori: false
        },
        {
          id: 'sumo-squat',
          nom: 'Sumo squat',
          muscles: 'Fessiers · Adducteurs · Quadriceps',
          type: 'poids_libres',
          materiel: 'Haltère',
          niveau: 'debutant',
          kcalParMin: 5,
          typeSaisie: 'muscu',
          favori: false
        },
        {
          id: 'sdle-jambes-tendues',
          nom: 'Soulevé de terre jambes tendues',
          muscles: 'Ischio · Fessiers · Bas du dos',
          type: 'poids_libres',
          materiel: 'Barre libre',
          niveau: 'intermediaire',
          kcalParMin: 6,
          typeSaisie: 'muscu',
          favori: false
        },
        {
          id: 'extension-mollets-debout',
          nom: 'Extension mollets debout',
          muscles: 'Mollets · Soléaire',
          type: 'machine',
          materiel: 'Machine',
          niveau: 'debutant',
          kcalParMin: 3,
          typeSaisie: 'muscu',
          favori: false
        },
        {
          id: 'extension-mollets-assis',
          nom: 'Extension mollets assis',
          muscles: 'Soléaire · Mollets',
          type: 'machine',
          materiel: 'Machine',
          niveau: 'debutant',
          kcalParMin: 3,
          typeSaisie: 'muscu',
          favori: false
        },
        {
          id: 'abducteurs',
          nom: 'Abducteurs machine',
          muscles: 'Abducteurs · Fessiers',
          type: 'machine',
          materiel: 'Machine',
          niveau: 'debutant',
          kcalParMin: 3,
          typeSaisie: 'muscu',
          favori: false
        },
        {
          id: 'adducteurs',
          nom: 'Adducteurs machine',
          muscles: 'Adducteurs · Face interne cuisse',
          type: 'machine',
          materiel: 'Machine',
          niveau: 'debutant',
          kcalParMin: 3,
          typeSaisie: 'muscu',
          favori: false
        },
        {
          id: 'leg-extension',
          nom: 'Leg extension',
          muscles: 'Quadriceps',
          type: 'machine',
          materiel: 'Machine',
          niveau: 'debutant',
          kcalParMin: 4,
          typeSaisie: 'muscu',
          favori: false
        }
      ]
    },

    {
      id: 'dos',
      nom: 'Dos',
      emoji: '🏋️‍♀️',
      muscles: 'Grand dorsal · Trapèzes · Rhomboïdes · Érecteurs',
      couleur: '#F5F0FF',
      couleurBorder: '#E8DAFF',
      couleurAccent: '#BF5AF2',
      exercices: [
        {
          id: 'tirage-poulie-haute',
          nom: 'Tirage poulie haute',
          muscles: 'Grand dorsal · Biceps',
          type: 'machine',
          materiel: 'Poulie',
          niveau: 'debutant',
          kcalParMin: 5,
          typeSaisie: 'muscu',
          favori: false
        },
        {
          id: 'tirage-horizontal',
          nom: 'Tirage horizontal',
          muscles: 'Grand dorsal · Rhomboïdes · Biceps',
          type: 'machine',
          materiel: 'Poulie',
          niveau: 'debutant',
          kcalParMin: 5,
          typeSaisie: 'muscu',
          favori: false
        },
        {
          id: 'rowing-haltere',
          nom: 'Rowing haltère',
          muscles: 'Grand dorsal · Rhomboïdes · Biceps',
          type: 'poids_libres',
          materiel: 'Haltère',
          niveau: 'intermediaire',
          kcalParMin: 5,
          typeSaisie: 'muscu',
          favori: false
        },
        {
          id: 'sdle',
          nom: 'Soulevé de terre',
          muscles: 'Dos complet · Fessiers · Ischio · Trapèzes',
          type: 'poids_libres',
          materiel: 'Barre libre',
          niveau: 'avance',
          kcalParMin: 8,
          typeSaisie: 'muscu',
          favori: false
        },
        {
          id: 'pullover-poulie',
          nom: 'Pull-over poulie',
          muscles: 'Grand dorsal · Grand pectoral',
          type: 'machine',
          materiel: 'Poulie',
          niveau: 'intermediaire',
          kcalParMin: 4,
          typeSaisie: 'muscu',
          favori: false
        },
        {
          id: 'traction',
          nom: 'Traction',
          muscles: 'Grand dorsal · Biceps · Trapèzes',
          type: 'corps',
          materiel: 'Barre de traction',
          niveau: 'avance',
          kcalParMin: 7,
          typeSaisie: 'muscu',
          favori: false
        },
        {
          id: 'rowing-barre',
          nom: 'Rowing barre',
          muscles: 'Grand dorsal · Rhomboïdes · Trapèzes',
          type: 'poids_libres',
          materiel: 'Barre libre',
          niveau: 'intermediaire',
          kcalParMin: 6,
          typeSaisie: 'muscu',
          favori: false
        },
        {
          id: 'face-pull',
          nom: 'Face pull',
          muscles: 'Trapèzes · Deltoïdes postérieurs · Rhomboïdes',
          type: 'machine',
          materiel: 'Poulie',
          niveau: 'intermediaire',
          kcalParMin: 4,
          typeSaisie: 'muscu',
          favori: false
        },
        {
          id: 'hyperextension',
          nom: 'Hyperextension',
          muscles: 'Érecteurs spinaux · Fessiers · Ischio',
          type: 'corps',
          materiel: 'Banc roman',
          niveau: 'debutant',
          kcalParMin: 4,
          typeSaisie: 'muscu',
          favori: false
        },
        {
          id: 'shrug',
          nom: 'Shrug haltères',
          muscles: 'Trapèzes supérieurs',
          type: 'poids_libres',
          materiel: 'Haltères',
          niveau: 'debutant',
          kcalParMin: 3,
          typeSaisie: 'muscu',
          favori: false
        }
      ]
    },

    {
      id: 'epaules',
      nom: 'Épaules',
      emoji: '🤸‍♀️',
      muscles: 'Deltoïdes antérieur · latéral · postérieur · Coiffe',
      couleur: '#FFF0EB',
      couleurBorder: '#FFD8CC',
      couleurAccent: '#FF8B6A',
      exercices: [
        {
          id: 'elevations-laterales',
          nom: 'Élévations latérales',
          muscles: 'Deltoïdes latéraux',
          type: 'poids_libres',
          materiel: 'Haltères',
          niveau: 'debutant',
          kcalParMin: 4,
          typeSaisie: 'muscu',
          favori: false
        },
        {
          id: 'developpe-militaire',
          nom: 'Développé militaire',
          muscles: 'Deltoïdes · Triceps · Trapèzes',
          type: 'poids_libres',
          materiel: 'Barre / Haltères',
          niveau: 'intermediaire',
          kcalParMin: 5,
          typeSaisie: 'muscu',
          favori: false
        },
        {
          id: 'oiseau',
          nom: 'Oiseau haltères',
          muscles: 'Deltoïdes postérieurs · Rhomboïdes',
          type: 'poids_libres',
          materiel: 'Haltères',
          niveau: 'debutant',
          kcalParMin: 4,
          typeSaisie: 'muscu',
          favori: false
        },
        {
          id: 'elevations-frontales',
          nom: 'Élévations frontales',
          muscles: 'Deltoïdes antérieurs',
          type: 'poids_libres',
          materiel: 'Haltères / Disque',
          niveau: 'debutant',
          kcalParMin: 4,
          typeSaisie: 'muscu',
          favori: false
        },
        {
          id: 'tirage-menton',
          nom: 'Tirage menton',
          muscles: 'Deltoïdes · Trapèzes',
          type: 'poids_libres',
          materiel: 'Barre / Haltères',
          niveau: 'intermediaire',
          kcalParMin: 4,
          typeSaisie: 'muscu',
          favori: false
        },
        {
          id: 'arnold-press',
          nom: 'Arnold press',
          muscles: 'Deltoïdes complets · Triceps',
          type: 'poids_libres',
          materiel: 'Haltères',
          niveau: 'intermediaire',
          kcalParMin: 5,
          typeSaisie: 'muscu',
          favori: false
        },
        {
          id: 'elev-lat-poulie',
          nom: 'Élévations latérales poulie',
          muscles: 'Deltoïdes latéraux',
          type: 'machine',
          materiel: 'Poulie basse',
          niveau: 'debutant',
          kcalParMin: 4,
          typeSaisie: 'muscu',
          favori: false
        },
        {
          id: 'developpe-machine',
          nom: 'Développé épaules machine',
          muscles: 'Deltoïdes · Triceps',
          type: 'machine',
          materiel: 'Machine',
          niveau: 'debutant',
          kcalParMin: 4,
          typeSaisie: 'muscu',
          favori: false
        }
      ]
    },

    {
      id: 'pectoraux',
      nom: 'Pectoraux',
      emoji: '💗',
      muscles: 'Grand pectoral · Petit pectoral · Deltoïdes ant.',
      couleur: '#FFE5EC',
      couleurBorder: '#FFB5C8',
      couleurAccent: '#FF3D72',
      exercices: [
        {
          id: 'developpe-couche-barre',
          nom: 'Développé couché barre',
          muscles: 'Grand pectoral · Triceps · Deltoïdes ant.',
          type: 'poids_libres',
          materiel: 'Barre libre',
          niveau: 'intermediaire',
          kcalParMin: 6,
          typeSaisie: 'muscu',
          favori: false
        },
        {
          id: 'developpe-couche-halt',
          nom: 'Développé couché haltères',
          muscles: 'Grand pectoral · Triceps',
          type: 'poids_libres',
          materiel: 'Haltères',
          niveau: 'intermediaire',
          kcalParMin: 6,
          typeSaisie: 'muscu',
          favori: false
        },
        {
          id: 'ecarte-halt',
          nom: 'Écarté haltères',
          muscles: 'Grand pectoral',
          type: 'poids_libres',
          materiel: 'Haltères',
          niveau: 'intermediaire',
          kcalParMin: 5,
          typeSaisie: 'muscu',
          favori: false
        },
        {
          id: 'pec-deck',
          nom: 'Pec deck machine',
          muscles: 'Grand pectoral',
          type: 'machine',
          materiel: 'Machine',
          niveau: 'debutant',
          kcalParMin: 4,
          typeSaisie: 'muscu',
          favori: false
        },
        {
          id: 'developpe-incline',
          nom: 'Développé incliné',
          muscles: 'Pectoral supérieur · Deltoïdes ant.',
          type: 'poids_libres',
          materiel: 'Barre / Haltères',
          niveau: 'intermediaire',
          kcalParMin: 6,
          typeSaisie: 'muscu',
          favori: false
        },
        {
          id: 'pompes',
          nom: 'Pompes',
          muscles: 'Pectoral · Triceps · Deltoïdes',
          type: 'corps',
          materiel: 'Au poids du corps',
          niveau: 'debutant',
          kcalParMin: 7,
          typeSaisie: 'muscu',
          favori: false
        },
        {
          id: 'cable-croise',
          nom: 'Câble croisé',
          muscles: 'Grand pectoral · Deltoïdes ant.',
          type: 'machine',
          materiel: 'Poulie',
          niveau: 'intermediaire',
          kcalParMin: 5,
          typeSaisie: 'muscu',
          favori: false
        },
        {
          id: 'developpe-decline',
          nom: 'Développé décliné',
          muscles: 'Pectoral inférieur · Triceps',
          type: 'poids_libres',
          materiel: 'Barre / Haltères',
          niveau: 'avance',
          kcalParMin: 6,
          typeSaisie: 'muscu',
          favori: false
        }
      ]
    },

    {
      id: 'bras',
      nom: 'Bras',
      emoji: '💪',
      muscles: 'Biceps · Triceps · Avant-bras',
      couleur: '#F5F0FF',
      couleurBorder: '#E8DAFF',
      couleurAccent: '#BF5AF2',
      exercices: [
        {
          id: 'curl-halt',
          nom: 'Curl haltères',
          muscles: 'Biceps brachial',
          type: 'poids_libres',
          materiel: 'Haltères',
          niveau: 'debutant',
          kcalParMin: 4,
          typeSaisie: 'muscu',
          favori: false
        },
        {
          id: 'curl-barre',
          nom: 'Curl barre',
          muscles: 'Biceps · Brachial',
          type: 'poids_libres',
          materiel: 'Barre',
          niveau: 'debutant',
          kcalParMin: 4,
          typeSaisie: 'muscu',
          favori: false
        },
        {
          id: 'curl-marteau',
          nom: 'Curl marteau',
          muscles: 'Biceps · Brachioradial',
          type: 'poids_libres',
          materiel: 'Haltères',
          niveau: 'debutant',
          kcalParMin: 4,
          typeSaisie: 'muscu',
          favori: false
        },
        {
          id: 'triceps-poulie',
          nom: 'Triceps poulie haute',
          muscles: 'Triceps brachial',
          type: 'machine',
          materiel: 'Poulie',
          niveau: 'debutant',
          kcalParMin: 4,
          typeSaisie: 'muscu',
          favori: false
        },
        {
          id: 'dips',
          nom: 'Dips',
          muscles: 'Triceps · Pectoral · Deltoïdes ant.',
          type: 'corps',
          materiel: 'Barres parallèles',
          niveau: 'avance',
          kcalParMin: 6,
          typeSaisie: 'muscu',
          favori: false
        },
        {
          id: 'extension-triceps-halt',
          nom: 'Extension triceps haltère',
          muscles: 'Triceps brachial',
          type: 'poids_libres',
          materiel: 'Haltère',
          niveau: 'debutant',
          kcalParMin: 4,
          typeSaisie: 'muscu',
          favori: false
        },
        {
          id: 'curl-concentre',
          nom: 'Curl concentré',
          muscles: 'Biceps · Pic du biceps',
          type: 'poids_libres',
          materiel: 'Haltère',
          niveau: 'intermediaire',
          kcalParMin: 3,
          typeSaisie: 'muscu',
          favori: false
        },
        {
          id: 'curl-incline',
          nom: 'Curl incliné',
          muscles: 'Biceps · Chef long',
          type: 'poids_libres',
          materiel: 'Haltères',
          niveau: 'intermediaire',
          kcalParMin: 4,
          typeSaisie: 'muscu',
          favori: false
        },
        {
          id: 'barre-z',
          nom: 'Barre en Z biceps',
          muscles: 'Biceps · Brachial',
          type: 'poids_libres',
          materiel: 'Barre EZ',
          niveau: 'debutant',
          kcalParMin: 4,
          typeSaisie: 'muscu',
          favori: false
        },
        {
          id: 'kickback',
          nom: 'Kickback triceps',
          muscles: 'Triceps brachial',
          type: 'poids_libres',
          materiel: 'Haltère',
          niveau: 'debutant',
          kcalParMin: 3,
          typeSaisie: 'muscu',
          favori: false
        }
      ]
    },

    {
      id: 'abdos',
      nom: 'Abdos',
      emoji: '🔥',
      muscles: 'Grand droit · Obliques · Transverse',
      couleur: '#FFFBEB',
      couleurBorder: '#FFE566',
      couleurAccent: '#cc9900',
      exercices: [
        {
          id: 'crunch',
          nom: 'Crunch',
          muscles: 'Grand droit abdominal',
          type: 'corps',
          materiel: 'Au poids du corps',
          niveau: 'debutant',
          kcalParMin: 4,
          typeSaisie: 'muscu',
          favori: false
        },
        {
          id: 'crunch-bicycle',
          nom: 'Crunch bicycle',
          muscles: 'Grand droit · Obliques',
          type: 'corps',
          materiel: 'Au poids du corps',
          niveau: 'debutant',
          kcalParMin: 6,
          typeSaisie: 'muscu',
          favori: false
        },
        {
          id: 'planche',
          nom: 'Planche',
          muscles: 'Transverse · Grand droit · Stabilisateurs',
          type: 'corps',
          materiel: 'Au poids du corps',
          niveau: 'debutant',
          kcalParMin: 4,
          typeSaisie: 'muscu',
          favori: false
        },
        {
          id: 'releve-jambes',
          nom: 'Relevé de jambes',
          muscles: 'Grand droit · Fléchisseurs de hanche',
          type: 'corps',
          materiel: 'Barre suspendue',
          niveau: 'intermediaire',
          kcalParMin: 5,
          typeSaisie: 'muscu',
          favori: false
        },
        {
          id: 'russian-twist',
          nom: 'Russian twist',
          muscles: 'Obliques · Grand droit',
          type: 'corps',
          materiel: 'Médecine ball / Haltère',
          niveau: 'intermediaire',
          kcalParMin: 5,
          typeSaisie: 'muscu',
          favori: false
        },
        {
          id: 'gainage-lateral',
          nom: 'Gainage latéral',
          muscles: 'Obliques · Transverse',
          type: 'corps',
          materiel: 'Au poids du corps',
          niveau: 'debutant',
          kcalParMin: 3,
          typeSaisie: 'muscu',
          favori: false
        },
        {
          id: 'ab-wheel',
          nom: 'Ab wheel',
          muscles: 'Grand droit · Transverse · Épaules',
          type: 'corps',
          materiel: 'Roue abdominale',
          niveau: 'avance',
          kcalParMin: 7,
          typeSaisie: 'muscu',
          favori: false
        },
        {
          id: 'crunch-poulie',
          nom: 'Crunch poulie haute',
          muscles: 'Grand droit abdominal',
          type: 'machine',
          materiel: 'Poulie',
          niveau: 'intermediaire',
          kcalParMin: 4,
          typeSaisie: 'muscu',
          favori: false
        }
      ]
    },

    {
      id: 'cardio',
      nom: 'Cardio',
      emoji: '❤️‍🔥',
      muscles: 'Cardio-vasculaire · Endurance · Brûlage calorique',
      couleur: '#F0FAF5',
      couleurBorder: '#C8EDD8',
      couleurAccent: '#7EC8A4',
      exercices: [
        {
          id: 'rameur',
          nom: 'Rameur',
          muscles: 'Dos · Bras · Jambes · Cardio',
          type: 'machine',
          materiel: 'Rameur',
          niveau: 'debutant',
          kcalParMin: 9,
          typeSaisie: 'cardio',
          champsCardio: ['duree', 'niveau', 'distance'],
          favori: false
        },
        {
          id: 'velo-elliptique',
          nom: 'Vélo elliptique',
          muscles: 'Corps entier · Cardio doux',
          type: 'machine',
          materiel: 'Elliptique',
          niveau: 'debutant',
          kcalParMin: 8,
          typeSaisie: 'cardio',
          champsCardio: ['duree', 'niveau', 'distance'],
          favori: false
        },
        {
          id: 'tapis-course',
          nom: 'Tapis de course',
          muscles: 'Jambes · Cardio',
          type: 'machine',
          materiel: 'Tapis',
          niveau: 'debutant',
          kcalParMin: 10,
          typeSaisie: 'cardio',
          champsCardio: ['duree', 'vitesse', 'inclinaison'],
          favori: false
        },
        {
          id: 'velo-statique',
          nom: 'Vélo statique',
          muscles: 'Jambes · Cardio',
          type: 'machine',
          materiel: 'Vélo',
          niveau: 'debutant',
          kcalParMin: 7,
          typeSaisie: 'cardio',
          champsCardio: ['duree', 'niveau', 'distance'],
          favori: false
        },
        {
          id: 'stepper',
          nom: 'Stepper',
          muscles: 'Fessiers · Jambes · Cardio',
          type: 'machine',
          materiel: 'Stepper',
          niveau: 'debutant',
          kcalParMin: 8,
          typeSaisie: 'cardio',
          champsCardio: ['duree', 'niveau'],
          favori: false
        },
        {
          id: 'corde-sauter',
          nom: 'Corde à sauter',
          muscles: 'Corps entier · Coordination',
          type: 'corps',
          materiel: 'Corde',
          niveau: 'intermediaire',
          kcalParMin: 12,
          typeSaisie: 'cardio',
          champsCardio: ['duree'],
          favori: false
        },
        {
          id: 'hiit',
          nom: 'HIIT libre',
          muscles: 'Corps entier · Explosivité',
          type: 'corps',
          materiel: 'Au poids du corps',
          niveau: 'avance',
          kcalParMin: 14,
          typeSaisie: 'cardio',
          champsCardio: ['duree'],
          favori: false
        }
      ]
    }
  ],

  // Helpers
  getGroupe(id) {
    return this.groupes.find(g => g.id === id);
  },

  getExercice(groupeId, exoId) {
    const g = this.getGroupe(groupeId);
    if (!g) return null;
    return g.exercices.find(e => e.id === exoId);
  },

  getAllExercices() {
    return this.groupes.flatMap(g =>
      g.exercices.map(e => ({ ...e, groupeId: g.id, groupeNom: g.nom, groupeEmoji: g.emoji, groupeCouleur: g.couleur, groupeAccent: g.couleurAccent }))
    );
  },

  getFavoris() {
    return this.getAllExercices().filter(e => e.favori);
  },

  toggleFavori(groupeId, exoId) {
    const g = this.getGroupe(groupeId);
    if (!g) return;
    const e = g.exercices.find(e => e.id === exoId);
    if (e) e.favori = !e.favori;
  },

  totalExercices() {
    return this.groupes.reduce((sum, g) => sum + g.exercices.length, 0);
  }
};

console.log('Sport library loaded:', window.SPORT_LIBRARY_DATA.totalExercices(), 'exercices');
