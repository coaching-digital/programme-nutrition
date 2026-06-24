// sport-data.js — Logique de suivi sport
// Chargé via fetch() depuis index.html
// Gère : séances loggées, historique, stats, favoris

window.SPORT_DATA = {

  // ── DONNÉES PERSISTÉES ──────────────────────────────────────────────────────
  // Toutes les données sont stockées dans localStorage

  _getSeances() {
    try {
      const v = localStorage.getItem('sportSeances');
      return v ? JSON.parse(v) : [];
    } catch { return []; }
  },

  _saveSeances(seances) {
    try { localStorage.setItem('sportSeances', JSON.stringify(seances)); } catch {}
  },

  _getFavoris() {
    try {
      const v = localStorage.getItem('sportFavoris');
      return v ? JSON.parse(v) : [];
    } catch { return []; }
  },

  _saveFavoris(favs) {
    try { localStorage.setItem('sportFavoris', JSON.stringify(favs)); } catch {}
  },

  _getObjectifSeances() {
    try {
      const v = localStorage.getItem('sportObjectifSeances');
      return v ? parseInt(v) : 3;
    } catch { return 3; }
  },

  _saveObjectifSeances(n) {
    try { localStorage.setItem('sportObjectifSeances', String(n)); } catch {}
  },

  // ── SÉANCE EN COURS ──────────────────────────────────────────────────────────
  // Séance temporaire pendant le log (pas encore sauvegardée)

  seanceEnCours: null,

  initSeance() {
    const now = new Date();
    this.seanceEnCours = {
      id: 'seance-' + Date.now(),
      date: now.toLocaleDateString('fr-FR'),
      dateISO: now.toISOString().split('T')[0],
      heureDebut: now.getTime(),
      exercices: [],
      ressenti: null,
      note: ''
    };
    return this.seanceEnCours;
  },

  // Ajouter un exercice muscu à la séance en cours
  ajouterExerciceMuscu(groupeId, exoId, exoNom, groupeNom, groupeAccent) {
    if (!this.seanceEnCours) this.initSeance();
    const exo = {
      id: exoId,
      nom: exoNom,
      groupeId,
      groupeNom,
      groupeAccent,
      type: 'muscu',
      series: [{ poids: '', reps: '', done: false }]
    };
    this.seanceEnCours.exercices.push(exo);
    return exo;
  },

  // Ajouter un exercice cardio à la séance en cours
  ajouterExerciceCardio(exoId, exoNom, champsCardio, kcalParMin) {
    if (!this.seanceEnCours) this.initSeance();
    const champs = {};
    (champsCardio || ['duree']).forEach(c => { champs[c] = ''; });
    const exo = {
      id: exoId,
      nom: exoNom,
      groupeId: 'cardio',
      groupeNom: 'Cardio',
      groupeAccent: '#7EC8A4',
      type: 'cardio',
      champs,
      kcalParMin: kcalParMin || 8
    };
    this.seanceEnCours.exercices.push(exo);
    return exo;
  },

  // Ajouter une série à un exercice muscu
  ajouterSerie(exoIndex) {
    if (!this.seanceEnCours) return;
    const exo = this.seanceEnCours.exercices[exoIndex];
    if (exo && exo.type === 'muscu') {
      exo.series.push({ poids: '', reps: '', done: false });
    }
  },

  // Supprimer un exercice
  supprimerExercice(exoIndex) {
    if (!this.seanceEnCours) return;
    this.seanceEnCours.exercices.splice(exoIndex, 1);
  },

  // Calculer les kcal brûlées de la séance en cours
  calculerKcalSeance() {
    if (!this.seanceEnCours) return 0;
    let total = 0;
    const poids = 75; // poids utilisateur — à terme récupéré depuis les mesures

    this.seanceEnCours.exercices.forEach(exo => {
      if (exo.type === 'muscu') {
        // Estimation : nb séries × nb reps × kcal/rep estimées
        exo.series.forEach(s => {
          if (s.done && s.reps) {
            const reps = parseInt(s.reps) || 0;
            total += Math.round(reps * 0.3); // ~0.3 kcal par rep en moyenne
          }
        });
      } else if (exo.type === 'cardio') {
        const duree = parseInt(exo.champs?.duree) || 0;
        const facteurPoids = poids / 70; // ajustement selon le poids
        total += Math.round(duree * exo.kcalParMin * facteurPoids);
      }
    });

    return total;
  },

  // Calculer la durée totale de la séance en cours (en minutes)
  calculerDureeSeance() {
    if (!this.seanceEnCours) return 0;
    let total = 0;

    this.seanceEnCours.exercices.forEach(exo => {
      if (exo.type === 'muscu') {
        // Estimation : nb séries × 3 min (temps de repos + exécution)
        total += exo.series.length * 3;
      } else if (exo.type === 'cardio') {
        total += parseInt(exo.champs?.duree) || 0;
      }
    });

    return total;
  },

  // Sauvegarder la séance en cours
  sauvegarderSeance(ressenti, note) {
    if (!this.seanceEnCours) return null;

    this.seanceEnCours.ressenti = ressenti;
    this.seanceEnCours.note = note || '';
    this.seanceEnCours.kcal = this.calculerKcalSeance();
    this.seanceEnCours.dureeMin = this.calculerDureeSeance();
    this.seanceEnCours.nbExercices = this.seanceEnCours.exercices.length;

    const seances = this._getSeances();
    seances.unshift(this.seanceEnCours); // Ajout en tête
    this._saveSeances(seances);

    const saved = { ...this.seanceEnCours };
    this.seanceEnCours = null;
    return saved;
  },

  // Générer le texte de partage
  genererTextPartage(seance) {
    const s = seance || this.seanceEnCours;
    if (!s) return '';

    const ressentiLabels = {
      'facile': 'Trop facile 😴',
      'bien-dose': 'Bien dosé 🙂',
      'bonne-suee': 'Bonne suée 💪',
      'intense': 'Intense 😤',
      'limite': 'À la limite 🥵'
    };

    let txt = `💪 Ma séance du ${s.date}\n\n`;
    txt += `⏱ Durée totale : ${s.dureeMin || this.calculerDureeSeance()} min\n`;
    txt += `🔥 ~${s.kcal || this.calculerKcalSeance()} kcal brûlées\n`;
    txt += `🏋️ ${s.exercices.length} exercices\n\n`;

    // Muscu
    const muscu = s.exercices.filter(e => e.type === 'muscu');
    muscu.forEach(exo => {
      txt += `${exo.groupeNom === 'Jambes' ? '🦵' : exo.groupeNom === 'Dos' ? '🏋️‍♀️' : exo.groupeNom === 'Épaules' ? '🤸‍♀️' : exo.groupeNom === 'Pectoraux' ? '💗' : exo.groupeNom === 'Bras' ? '💪' : '🔥'} ${exo.nom}\n`;
      exo.series.forEach((s, i) => {
        if (s.poids || s.reps) {
          txt += `• Série ${i + 1} — ${s.poids ? s.poids + ' kg' : '—'} × ${s.reps || '—'} reps\n`;
        }
      });
      txt += '\n';
    });

    // Cardio
    const cardio = s.exercices.filter(e => e.type === 'cardio');
    cardio.forEach(exo => {
      txt += `❤️‍🔥 ${exo.nom}\n`;
      const c = exo.champs || {};
      const details = [];
      if (c.duree) details.push(`${c.duree} min`);
      if (c.vitesse) details.push(`${c.vitesse} km/h`);
      if (c.niveau) details.push(`niveau ${c.niveau}`);
      if (c.inclinaison) details.push(`inclinaison ${c.inclinaison}%`);
      if (c.distance) details.push(`${c.distance} km`);
      txt += `• ${details.join(' · ')}\n\n`;
    });

    if (s.ressenti) {
      txt += `💪 Ressenti : ${ressentiLabels[s.ressenti] || s.ressenti}\n`;
    }
    if (s.note) txt += `📝 ${s.note}\n`;
    txt += `\n🌸 Mon Programme Nutrition`;

    return txt;
  },

  // ── STATS & HISTORIQUE ───────────────────────────────────────────────────────

  getSeances() {
    return this._getSeances();
  },

  getSeancesSemaine(weekStartISO) {
    const seances = this._getSeances();
    if (!weekStartISO) return seances;
    const start = new Date(weekStartISO);
    const end = new Date(start.getTime() + 7 * 86400000);
    return seances.filter(s => {
      const d = new Date(s.dateISO);
      return d >= start && d < end;
    });
  },

  getStatsSemaine(weekStartISO) {
    const seances = this.getSeancesSemaine(weekStartISO);
    const objectif = this._getObjectifSeances();
    const kcalTotal = seances.reduce((sum, s) => sum + (s.kcal || 0), 0);
    const dureeTotal = seances.reduce((sum, s) => sum + (s.dureeMin || 0), 0);
    return {
      nbSeances: seances.length,
      objectif,
      kcalTotal,
      dureeTotal,
      seances
    };
  },

  getTotalKcalSemaines() {
    // Retourne un tableau [{semaine: 1, kcal: 620}, ...] pour le graphique
    const seances = this._getSeances();
    const bySemaine = {};
    seances.forEach(s => {
      const sem = s.semaine || 1;
      if (!bySemaine[sem]) bySemaine[sem] = 0;
      bySemaine[sem] += s.kcal || 0;
    });
    return Object.entries(bySemaine).map(([sem, kcal]) => ({ semaine: parseInt(sem), kcal }));
  },

  getStreakSport() {
    const seances = this._getSeances();
    if (!seances.length) return 0;

    const dates = [...new Set(seances.map(s => s.dateISO))].sort().reverse();
    const today = new Date().toISOString().split('T')[0];
    let streak = 0;
    let current = new Date(today);

    for (const d of dates) {
      const check = current.toISOString().split('T')[0];
      if (d === check) {
        streak++;
        current = new Date(current.getTime() - 86400000);
      } else {
        break;
      }
    }

    return streak;
  },

  // ── FAVORIS ──────────────────────────────────────────────────────────────────

  isFavori(groupeId, exoId) {
    const favs = this._getFavoris();
    return favs.some(f => f.groupeId === groupeId && f.exoId === exoId);
  },

  toggleFavori(groupeId, exoId) {
    const favs = this._getFavoris();
    const idx = favs.findIndex(f => f.groupeId === groupeId && f.exoId === exoId);
    if (idx >= 0) {
      favs.splice(idx, 1);
    } else {
      favs.push({ groupeId, exoId });
    }
    this._saveFavoris(favs);
    return idx < 0; // true = ajouté, false = retiré
  },

  getFavorisDetails() {
    if (!window.SPORT_LIBRARY_DATA) return [];
    const favs = this._getFavoris();
    return favs.map(f => {
      const g = window.SPORT_LIBRARY_DATA.getGroupe(f.groupeId);
      const e = g ? g.exercices.find(ex => ex.id === f.exoId) : null;
      if (!g || !e) return null;
      return {
        ...e,
        groupeId: g.id,
        groupeNom: g.nom,
        groupeEmoji: g.emoji,
        groupeCouleur: g.couleur,
        groupeAccent: g.couleurAccent
      };
    }).filter(Boolean);
  },

  // ── OBJECTIF SÉANCES ─────────────────────────────────────────────────────────

  getObjectifSeances() {
    return this._getObjectifSeances();
  },

  setObjectifSeances(n) {
    this._saveObjectifSeances(Math.max(1, Math.min(7, n)));
  }

};

console.log('Sport data loaded ✓');
