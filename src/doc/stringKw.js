/* 
 * This file is part of OverPy (https://github.com/Zezombye/overpy).
 * Copyright (c) 2019 Zezombye.
 * 
 * This program is free software: you can redistribute it and/or modify  
 * it under the terms of the GNU General Public License as published by  
 * the Free Software Foundation, version 3.
 *
 * This program is distributed in the hope that it will be useful, but 
 * WITHOUT ANY WARRANTY; without even the implied warranty of 
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU 
 * General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License 
 * along with this program. If not, see <http://www.gnu.org/licenses/>.
 */

var emptyStrKw = [
    {
        "opy": "",
        "en": ""
    }
];

var normalStrKw = 
//begin-json
[
    {
        "opy": "Zones",
        "en": "Zones",
        "fr": "Zones"
    },
    {
        "opy": "Zone",
        "en": "Zone",
        "fr": "Zone"
    },
    {
        "opy": "You Win",
        "en": "You Win",
        "fr": "Vous avez gagné"
    },
    {
        "opy": "You Lose",
        "en": "You Lose",
        "fr": "Vous avez perdu"
    },
    {
        "opy": "You",
        "en": "You",
        "fr": "Vous"
    },
    {
        "opy": "Yes",
        "en": "Yes",
        "fr": "Oui"
    },
    {
        "opy": "Yellow",
        "en": "Yellow",
        "fr": "Jaune"
    },
    {
        "opy": "Wow",
        "en": "Wow",
        "fr": "Waouh"
    },
    {
        "opy": "Worst",
        "en": "Worst",
        "fr": "Le pire"
    },
    {
        "opy": "Worse",
        "en": "Worse",
        "fr": "Pire"
    },
    {
        "opy": "Wisdom",
        "en": "Wisdom",
        "fr": "Sagesse"
    },
    {
        "opy": "Wins",
        "en": "Wins",
        "fr": "Victoires"
    },
    {
        "opy": "Winners",
        "en": "Winners",
        "fr": "Vainqueurs"
    },
    {
        "opy": "Winner",
        "en": "Winner",
        "fr": "Gagnant"
    },
    {
        "opy": "Win",
        "en": "Win",
        "fr": "Victoire"
    },
    {
        "opy": "Wild",
        "en": "Wild",
        "fr": "Libre"
    },
    {
        "opy": "White",
        "en": "White",
        "fr": "Blanc"
    },
    {
        "opy": "West",
        "en": "West",
        "fr": "Ouest"
    },
    {
        "opy": "Well Played",
        "en": "Well Played",
        "fr": "Bien joué"
    },
    {
        "opy": "Welcome",
        "en": "Welcome",
        "fr": "Bienvenue"
    },
    {
        "opy": "Warning",
        "en": "Warning",
        "fr": "Avertissement"
    },
    {
        "opy": "Walls",
        "en": "Walls",
        "fr": "Murs"
    },
    {
        "opy": "Wall",
        "en": "Wall",
        "fr": "Mur"
    },
    {
        "opy": "Waiting",
        "en": "Waiting",
        "fr": "Attente"
    },
    {
        "opy": "Wait",
        "en": "Wait",
        "fr": "Attendre"
    },
    {
        "opy": "Vortices",
        "en": "Vortices",
        "fr": "Vortex"
    },
    {
        "opy": "Vortex",
        "en": "Vortex",
        "fr": "Vortex"
    },
    {
        "opy": "Visible",
        "en": "Visible",
        "fr": "Visible"
    },
    {
        "opy": "Victory",
        "en": "Victory",
        "fr": "Victoire"
    },
    {
        "opy": "Use Ultimate Ability",
        "en": "Use Ultimate Ability",
        "fr": "Utilisation de la capacité ultime"
    },
    {
        "opy": "Use Ability 2",
        "en": "Use Ability 2",
        "fr": "Utilisation de la capacité 2"
    },
    {
        "opy": "Use Ability 1",
        "en": "Use Ability 1",
        "fr": "Utilisation de la capacité 1"
    },
    {
        "opy": "Uploading",
        "en": "Uploading",
        "fr": "Envoi"
    },
    {
        "opy": "Uploaded",
        "en": "Uploaded",
        "fr": "Envoyé"
    },
    {
        "opy": "Upload",
        "en": "Upload",
        "fr": "Envoyer"
    },
    {
        "opy": "Upgrades",
        "en": "Upgrades",
        "fr": "Améliorations"
    },
    {
        "opy": "Upgrade",
        "en": "Upgrade",
        "fr": "Amélioration"
    },
    {
        "opy": "Up",
        "en": "Up",
        "fr": "Haut"
    },
    {
        "opy": "Unstable",
        "en": "Unstable",
        "fr": "Instable"
    },
    {
        "opy": "Unsafe",
        "en": "Unsafe",
        "fr": "Dangereux"
    },
    {
        "opy": "Unlocking",
        "en": "Unlocking",
        "fr": "Déverrouillage"
    },
    {
        "opy": "Unlocked",
        "en": "Unlocked",
        "fr": "Déverrouillé"
    },
    {
        "opy": "Unlock",
        "en": "Unlock",
        "fr": "Déverrouiller"
    },
    {
        "opy": "Unlimited",
        "en": "Unlimited",
        "fr": "Illimité"
    },
    {
        "opy": "Unknown",
        "en": "Unknown",
        "fr": "Inconnu"
    },
    {
        "opy": "Under",
        "en": "Under",
        "fr": "Sous"
    },
    {
        "opy": "Ultimate Ability",
        "en": "Ultimate Ability",
        "fr": "Capacité ultime"
    },
    {
        "opy": "Ugh",
        "en": "Ugh",
        "fr": "Arg"
    },
    {
        "opy": "Turrets",
        "en": "Turrets",
        "fr": "Tourelles"
    },
    {
        "opy": "Turret",
        "en": "Turret",
        "fr": "Tourelle"
    },
    {
        "opy": "Try Again",
        "en": "Try Again",
        "fr": "Veuillez réessayer"
    },
    {
        "opy": "Transferring",
        "en": "Transferring",
        "fr": "Transfert"
    },
    {
        "opy": "Transferred",
        "en": "Transferred",
        "fr": "Transféré"
    },
    {
        "opy": "Transfer",
        "en": "Transfer",
        "fr": "Transférer"
    },
    {
        "opy": "Traitors",
        "en": "Traitors",
        "fr": "Traîtres"
    },
    {
        "opy": "Traitor",
        "en": "Traitor",
        "fr": "Traître"
    },
    {
        "opy": "Trading",
        "en": "Trading",
        "fr": "Échange"
    },
    {
        "opy": "Traded",
        "en": "Traded",
        "fr": "Échangé"
    },
    {
        "opy": "Trade",
        "en": "Trade",
        "fr": "Échanger"
    },
    {
        "opy": "Total",
        "en": "Total",
        "fr": "Total"
    },
    {
        "opy": "Times",
        "en": "Times",
        "fr": "Temps"
    },
    {
        "opy": "Time",
        "en": "Time",
        "fr": "Temps"
    },
    {
        "opy": "Tiebreaker",
        "en": "Tiebreaker",
        "fr": "Décisif"
    },
    {
        "opy": "Threats",
        "en": "Threats",
        "fr": "Menaces"
    },
    {
        "opy": "Threat Levels",
        "en": "Threat Levels",
        "fr": "Niveaux de menace"
    },
    {
        "opy": "Threat Level",
        "en": "Threat Level",
        "fr": "Niveau de menace"
    },
    {
        "opy": "Threat",
        "en": "Threat",
        "fr": "Menace"
    },
    {
        "opy": "That Was Awesome",
        "en": "That Was Awesome",
        "fr": "C’était génial"
    },
    {
        "opy": "Thanks",
        "en": "Thanks",
        "fr": "Remerciements"
    },
    {
        "opy": "Thank You",
        "en": "Thank You",
        "fr": "Merci"
    },
    {
        "opy": "Terrible",
        "en": "Terrible",
        "fr": "Terrible"
    },
    {
        "opy": "Teams",
        "en": "Teams",
        "fr": "Équipes"
    },
    {
        "opy": "Teammates",
        "en": "Teammates",
        "fr": "Équipiers"
    },
    {
        "opy": "Teammate",
        "en": "Teammate",
        "fr": "Équipier"
    },
    {
        "opy": "Team",
        "en": "Team",
        "fr": "Équipe"
    },
    {
        "opy": "Targets",
        "en": "Targets",
        "fr": "Cibles"
    },
    {
        "opy": "Target",
        "en": "Target",
        "fr": "Cible"
    },
    {
        "opy": "Surviving",
        "en": "Surviving",
        "fr": "Survie"
    },
    {
        "opy": "Survived",
        "en": "Survived",
        "fr": "Survécu"
    },
    {
        "opy": "Survive",
        "en": "Survive",
        "fr": "Survivre"
    },
    {
        "opy": "Superb",
        "en": "Superb",
        "fr": "Superbe"
    },
    {
        "opy": "Sunk",
        "en": "Sunk",
        "fr": "Noyé"
    },
    {
        "opy": "Sudden Death",
        "en": "Sudden Death",
        "fr": "Mort subite"
    },
    {
        "opy": "Success",
        "en": "Success",
        "fr": "Réussite"
    },
    {
        "opy": "Suboptimal",
        "en": "Suboptimal",
        "fr": "Sous-optimal"
    },
    {
        "opy": "Stunning",
        "en": "Stunning",
        "fr": "Étourdissant"
    },
    {
        "opy": "Stunned",
        "en": "Stunned",
        "fr": "Étourdi"
    },
    {
        "opy": "Stun",
        "en": "Stun",
        "fr": "Étourdir"
    },
    {
        "opy": "Strength",
        "en": "Strength",
        "fr": "Force"
    },
    {
        "opy": "Stopping",
        "en": "Stopping",
        "fr": "Arrêt"
    },
    {
        "opy": "Stopped",
        "en": "Stopped",
        "fr": "Arrêté"
    },
    {
        "opy": "Stop",
        "en": "Stop",
        "fr": "Arrêter"
    },
    {
        "opy": "Staying",
        "en": "Staying",
        "fr": "Suit"
    },
    {
        "opy": "Stayed",
        "en": "Stayed",
        "fr": "Suivi"
    },
    {
        "opy": "Stay Away",
        "en": "Stay Away",
        "fr": "Éloignez-vous"
    },
    {
        "opy": "Stay",
        "en": "Stay",
        "fr": "Suivre"
    },
    {
        "opy": "Status",
        "en": "Status",
        "fr": "Statut"
    },
    {
        "opy": "Starting",
        "en": "Starting",
        "fr": "Commencement"
    },
    {
        "opy": "Started",
        "en": "Started",
        "fr": "Commencé"
    },
    {
        "opy": "Start",
        "en": "Start",
        "fr": "Commencer"
    },
    {
        "opy": "Stars",
        "en": "Stars",
        "fr": "Étoiles"
    },
    {
        "opy": "Star",
        "en": "Star",
        "fr": "Étoile"
    },
    {
        "opy": "Stable",
        "en": "Stable",
        "fr": "Stable"
    },
    {
        "opy": "Stabilizing",
        "en": "Stabilizing",
        "fr": "Stabilisation"
    },
    {
        "opy": "Stabilized",
        "en": "Stabilized",
        "fr": "Stabilisé"
    },
    {
        "opy": "Stabilize",
        "en": "Stabilize",
        "fr": "Stabiliser"
    },
    {
        "opy": "Spheres",
        "en": "Spheres",
        "fr": "Sphères"
    },
    {
        "opy": "Sphere",
        "en": "Sphere",
        "fr": "Sphère"
    },
    {
        "opy": "Speeds",
        "en": "Speeds",
        "fr": "Vitesses"
    },
    {
        "opy": "Speed",
        "en": "Speed",
        "fr": "Vitesse"
    },
    {
        "opy": "Spawning",
        "en": "Spawning",
        "fr": "Apparition"
    },
    {
        "opy": "Spawned",
        "en": "Spawned",
        "fr": "Apparu"
    },
    {
        "opy": "Spawn",
        "en": "Spawn",
        "fr": "Apparaître"
    },
    {
        "opy": "Sparkles",
        "en": "Sparkles",
        "fr": "Étincelles"
    },
    {
        "opy": "Spades",
        "en": "Spades",
        "fr": "Pique"
    },
    {
        "opy": "Spade",
        "en": "Spade",
        "fr": "Pique"
    },
    {
        "opy": "Southwest",
        "en": "Southwest",
        "fr": "Sud-ouest"
    },
    {
        "opy": "Southeast",
        "en": "Southeast",
        "fr": "Sud-est"
    },
    {
        "opy": "South",
        "en": "South",
        "fr": "Sud"
    },
    {
        "opy": "Sorry",
        "en": "Sorry",
        "fr": "Désolé"
    },
    {
        "opy": "Sold",
        "en": "Sold",
        "fr": "Vendu"
    },
    {
        "opy": "Slowest",
        "en": "Slowest",
        "fr": "Le plus lent"
    },
    {
        "opy": "Slower",
        "en": "Slower",
        "fr": "Plus lent"
    },
    {
        "opy": "Slow",
        "en": "Slow",
        "fr": "Lent"
    },
    {
        "opy": "Slept",
        "en": "Slept",
        "fr": "Dormi"
    },
    {
        "opy": "Sleeping",
        "en": "Sleeping",
        "fr": "Dort"
    },
    {
        "opy": "Sleep",
        "en": "Sleep",
        "fr": "Sommeil"
    },
    {
        "opy": "Skipping",
        "en": "Skipping",
        "fr": "Passe"
    },
    {
        "opy": "Skipped",
        "en": "Skipped",
        "fr": "Passé"
    },
    {
        "opy": "Skip",
        "en": "Skip",
        "fr": "Passer"
    },
    {
        "opy": "Sinking",
        "en": "Sinking",
        "fr": "Noyade"
    },
    {
        "opy": "Sink",
        "en": "Sink",
        "fr": "Noyer"
    },
    {
        "opy": "Shuffled",
        "en": "Shuffled",
        "fr": "Mélangé"
    },
    {
        "opy": "Shuffle",
        "en": "Shuffle",
        "fr": "Mélanger"
    },
    {
        "opy": "Shops",
        "en": "Shops",
        "fr": "Boutiques"
    },
    {
        "opy": "Shop",
        "en": "Shop",
        "fr": "Boutique"
    },
    {
        "opy": "Severing",
        "en": "Severing",
        "fr": "Coupure"
    },
    {
        "opy": "Severed",
        "en": "Severed",
        "fr": "Coupé"
    },
    {
        "opy": "Severe",
        "en": "Severe",
        "fr": "Grave"
    },
    {
        "opy": "Sever",
        "en": "Sever",
        "fr": "Couper"
    },
    {
        "opy": "Server Load Peak",
        "en": "Server Load Peak",
        "fr": "Pic de charge du serveur"
    },
    {
        "opy": "Server Load Average",
        "en": "Server Load Average",
        "fr": "Charge moyenne du serveur"
    },
    {
        "opy": "Server Load",
        "en": "Server Load",
        "fr": "Charge du serveur"
    },
    {
        "opy": "Selling",
        "en": "Selling",
        "fr": "Vente"
    },
    {
        "opy": "Sell",
        "en": "Sell",
        "fr": "Vendre"
    },
    {
        "opy": "Selecting",
        "en": "Selecting",
        "fr": "Sélectionne"
    },
    {
        "opy": "Selected",
        "en": "Selected",
        "fr": "Sélectionné"
    },
    {
        "opy": "Select",
        "en": "Select",
        "fr": "Sélectionner"
    },
    {
        "opy": "Securing",
        "en": "Securing",
        "fr": "Sécurisation"
    },
    {
        "opy": "Secured",
        "en": "Secured",
        "fr": "Sécurisé"
    },
    {
        "opy": "Secure",
        "en": "Secure",
        "fr": "Sécuriser"
    },
    {
        "opy": "Secondary Fire",
        "en": "Secondary Fire",
        "fr": "Tir secondaire"
    },
    {
        "opy": "Scores",
        "en": "Scores",
        "fr": "Points"
    },
    {
        "opy": "Score",
        "en": "Score",
        "fr": "Points"
    },
    {
        "opy": "Saving",
        "en": "Saving",
        "fr": "Sauvegarde"
    },
    {
        "opy": "Saved",
        "en": "Saved",
        "fr": "Sauvé"
    },
    {
        "opy": "Save",
        "en": "Save",
        "fr": "Sauver"
    },
    {
        "opy": "Safe",
        "en": "Safe",
        "fr": "Sans danger"
    },
    {
        "opy": "Running",
        "en": "Running",
        "fr": "Course"
    },
    {
        "opy": "Run",
        "en": "Run",
        "fr": "Courir"
    },
    {
        "opy": "Rounds Won",
        "en": "Rounds Won",
        "fr": "Manches gagnées"
    },
    {
        "opy": "Rounds Lost",
        "en": "Rounds Lost",
        "fr": "Manches perdues"
    },
    {
        "opy": "Rounds",
        "en": "Rounds",
        "fr": "Manches"
    },
    {
        "opy": "Round",
        "en": "Round",
        "fr": "Manche"
    },
    {
        "opy": "Right",
        "en": "Right",
        "fr": "Droite"
    },
    {
        "opy": "Reversing",
        "en": "Reversing",
        "fr": "Inverse"
    },
    {
        "opy": "Reversed",
        "en": "Reversed",
        "fr": "Inversé"
    },
    {
        "opy": "Reverse",
        "en": "Reverse",
        "fr": "Inverser"
    },
    {
        "opy": "Revealing",
        "en": "Revealing",
        "fr": "Révélation"
    },
    {
        "opy": "Revealed",
        "en": "Revealed",
        "fr": "Révélé"
    },
    {
        "opy": "Reveal",
        "en": "Reveal",
        "fr": "Révéler"
    },
    {
        "opy": "Resurrecting",
        "en": "Resurrecting",
        "fr": "Résurrection"
    },
    {
        "opy": "Resurrected",
        "en": "Resurrected",
        "fr": "Ressuscité"
    },
    {
        "opy": "Resurrect",
        "en": "Resurrect",
        "fr": "Ressusciter"
    },
    {
        "opy": "Resources",
        "en": "Resources",
        "fr": "Ressources "
    },
    {
        "opy": "Resource",
        "en": "Resource",
        "fr": "Ressource"
    },
    {
        "opy": "Rescuing",
        "en": "Rescuing",
        "fr": "Sauvetage"
    },
    {
        "opy": "Rescued",
        "en": "Rescued",
        "fr": "Secouru"
    },
    {
        "opy": "Rescue",
        "en": "Rescue",
        "fr": "Secourir"
    },
    {
        "opy": "Remaining",
        "en": "Remaining",
        "fr": "Restant"
    },
    {
        "opy": "Remain",
        "en": "Remain",
        "fr": "Rester"
    },
    {
        "opy": "Red",
        "en": "Red",
        "fr": "Rouge"
    },
    {
        "opy": "Recovering",
        "en": "Recovering",
        "fr": "Récupération"
    },
    {
        "opy": "Recovered",
        "en": "Recovered",
        "fr": "Récupéré"
    },
    {
        "opy": "Recover",
        "en": "Recover",
        "fr": "Récupérer"
    },
    {
        "opy": "Records",
        "en": "Records",
        "fr": "Records"
    },
    {
        "opy": "Record",
        "en": "Record",
        "fr": "Record"
    },
    {
        "opy": "Ready",
        "en": "Ready",
        "fr": "Prêt"
    },
    {
        "opy": "Reaching",
        "en": "Reaching",
        "fr": "Atteinte"
    },
    {
        "opy": "Reached",
        "en": "Reached",
        "fr": "Atteint"
    },
    {
        "opy": "Reach",
        "en": "Reach",
        "fr": "Atteindre"
    },
    {
        "opy": "Rank S",
        "en": "Rank S",
        "fr": "Rang S"
    },
    {
        "opy": "Rank F",
        "en": "Rank F",
        "fr": "Rang F"
    },
    {
        "opy": "Rank E",
        "en": "Rank E",
        "fr": "Rang E"
    },
    {
        "opy": "Rank D",
        "en": "Rank D",
        "fr": "Rang D"
    },
    {
        "opy": "Rank C",
        "en": "Rank C",
        "fr": "Rang C"
    },
    {
        "opy": "Rank B",
        "en": "Rank B",
        "fr": "Rang B"
    },
    {
        "opy": "Rank A",
        "en": "Rank A",
        "fr": "Rang A"
    },
    {
        "opy": "Rank",
        "en": "Rank",
        "fr": "Rang"
    },
    {
        "opy": "Raising",
        "en": "Raising",
        "fr": "Augmentation"
    },
    {
        "opy": "Raised",
        "en": "Raised",
        "fr": "Augmenté"
    },
    {
        "opy": "Raise",
        "en": "Raise",
        "fr": "Augmenter"
    },
    {
        "opy": "Purple",
        "en": "Purple",
        "fr": "Violet"
    },
    {
        "opy": "Purifying",
        "en": "Purifying",
        "fr": "Purification"
    },
    {
        "opy": "Purify",
        "en": "Purify",
        "fr": "Purifier"
    },
    {
        "opy": "Purified",
        "en": "Purified",
        "fr": "Purifié"
    },
    {
        "opy": "Protecting",
        "en": "Protecting",
        "fr": "Protection"
    },
    {
        "opy": "Protected",
        "en": "Protected",
        "fr": "Protégé"
    },
    {
        "opy": "Protect",
        "en": "Protect",
        "fr": "Protéger"
    },
    {
        "opy": "Projectiles",
        "en": "Projectiles",
        "fr": "Projectiles"
    },
    {
        "opy": "Projectile",
        "en": "Projectile",
        "fr": "Projectile"
    },
    {
        "opy": "Primary Fire",
        "en": "Primary Fire",
        "fr": "Tir principal"
    },
    {
        "opy": "Price",
        "en": "Price",
        "fr": "Prix"
    },
    {
        "opy": "Power-Ups",
        "en": "Power-Ups",
        "fr": "Bonus"
    },
    {
        "opy": "Power-Up",
        "en": "Power-Up",
        "fr": "Bonus"
    },
    {
        "opy": "Power",
        "en": "Power",
        "fr": "Puissance"
    },
    {
        "opy": "Position",
        "en": "Position",
        "fr": "Position"
    },
    {
        "opy": "Points Lost",
        "en": "Points Lost",
        "fr": "Points perdus"
    },
    {
        "opy": "Points Earned",
        "en": "Points Earned",
        "fr": "Points gagnés"
    },
    {
        "opy": "Points",
        "en": "Points",
        "fr": "Points"
    },
    {
        "opy": "Point",
        "en": "Point",
        "fr": "Point"
    },
    {
        "opy": "Playing",
        "en": "Playing",
        "fr": "Joue"
    },
    {
        "opy": "Players",
        "en": "Players",
        "fr": "Joueurs"
    },
    {
        "opy": "Player",
        "en": "Player",
        "fr": "Joueur"
    },
    {
        "opy": "Played",
        "en": "Played",
        "fr": "Joué"
    },
    {
        "opy": "Play",
        "en": "Play",
        "fr": "Jouer"
    },
    {
        "opy": "Piles",
        "en": "Piles",
        "fr": "Piles"
    },
    {
        "opy": "Pile",
        "en": "Pile",
        "fr": "Pile"
    },
    {
        "opy": "Picking",
        "en": "Picking",
        "fr": "Prise"
    },
    {
        "opy": "Picked",
        "en": "Picked",
        "fr": "Pris"
    },
    {
        "opy": "Pick",
        "en": "Pick",
        "fr": "Prendre"
    },
    {
        "opy": "Phases",
        "en": "Phases",
        "fr": "Phases"
    },
    {
        "opy": "Phase",
        "en": "Phase",
        "fr": "Phase"
    },
    {
        "opy": "Payloads",
        "en": "Payloads",
        "fr": "Convois"
    },
    {
        "opy": "Payload",
        "en": "Payload",
        "fr": "Convoi"
    },
    {
        "opy": "Participants",
        "en": "Participants",
        "fr": "Participants"
    },
    {
        "opy": "Participant",
        "en": "Participant",
        "fr": "Participant"
    },
    {
        "opy": "Overtime",
        "en": "Overtime",
        "fr": "Prolongations"
    },
    {
        "opy": "Over",
        "en": "Over",
        "fr": "Sur"
    },
    {
        "opy": "Outside",
        "en": "Outside",
        "fr": "Dehors"
    },
    {
        "opy": "Outgoing",
        "en": "Outgoing",
        "fr": "Sortant"
    },
    {
        "opy": "Out Of View",
        "en": "Out Of View",
        "fr": "Hors de la vue"
    },
    {
        "opy": "Optimizing",
        "en": "Optimizing",
        "fr": "Optimisation"
    },
    {
        "opy": "Optimized",
        "en": "Optimized",
        "fr": "Optimisé"
    },
    {
        "opy": "Optimize",
        "en": "Optimize",
        "fr": "Optimiser"
    },
    {
        "opy": "Optimal",
        "en": "Optimal",
        "fr": "Optimal"
    },
    {
        "opy": "Oops",
        "en": "Oops",
        "fr": "Oups"
    },
    {
        "opy": "Oof",
        "en": "Oof",
        "fr": "Aïe"
    },
    {
        "opy": "On",
        "en": "On",
        "fr": "Activé"
    },
    {
        "opy": "Off",
        "en": "Off",
        "fr": "Désactivé"
    },
    {
        "opy": "Obtaining",
        "en": "Obtaining",
        "fr": "Obtention"
    },
    {
        "opy": "Obtained",
        "en": "Obtained",
        "fr": "Obtenu"
    },
    {
        "opy": "Obtain",
        "en": "Obtain",
        "fr": "Obtenir"
    },
    {
        "opy": "Objects",
        "en": "Objects",
        "fr": "Objets"
    },
    {
        "opy": "Objectives",
        "en": "Objectives",
        "fr": "Objectifs"
    },
    {
        "opy": "Objective",
        "en": "Objective",
        "fr": "Objectif"
    },
    {
        "opy": "Object",
        "en": "Object",
        "fr": "Objet"
    },
    {
        "opy": "Not Today",
        "en": "Not Today",
        "fr": "Pas aujourd’hui"
    },
    {
        "opy": "Northwest",
        "en": "Northwest",
        "fr": "Nord-ouest"
    },
    {
        "opy": "Northeast",
        "en": "Northeast",
        "fr": "Nord-est"
    },
    {
        "opy": "North",
        "en": "North",
        "fr": "Nord"
    },
    {
        "opy": "Normal",
        "en": "Normal",
        "fr": "Normal"
    },
    {
        "opy": "None",
        "en": "None",
        "fr": "Aucun"
    },
    {
        "opy": "No Thanks",
        "en": "No Thanks",
        "fr": "Non merci"
    },
    {
        "opy": "No",
        "en": "No",
        "fr": "Non"
    },
    {
        "opy": "Nice Try",
        "en": "Nice Try",
        "fr": "Bien essayé"
    },
    {
        "opy": "Next Upgrade",
        "en": "Next Upgrade",
        "fr": "Amélioration suivante"
    },
    {
        "opy": "Next Targets",
        "en": "Next Targets",
        "fr": "Cibles suivantes"
    },
    {
        "opy": "Next Target",
        "en": "Next Target",
        "fr": "Cible suivante"
    },
    {
        "opy": "Next Round",
        "en": "Next Round",
        "fr": "Manche suivante"
    },
    {
        "opy": "Next Players",
        "en": "Next Players",
        "fr": "Joueurs suivants"
    },
    {
        "opy": "Next Player",
        "en": "Next Player",
        "fr": "Joueur suivant"
    },
    {
        "opy": "Next Phase",
        "en": "Next Phase",
        "fr": "Phase suivante"
    },
    {
        "opy": "Next Objects",
        "en": "Next Objects",
        "fr": "Objets suivants"
    },
    {
        "opy": "Next Objective",
        "en": "Next Objective",
        "fr": "Objectif suivant"
    },
    {
        "opy": "Next Object",
        "en": "Next Object",
        "fr": "Objet suivant"
    },
    {
        "opy": "Next Mission",
        "en": "Next Mission",
        "fr": "Mission suivante"
    },
    {
        "opy": "Next Level",
        "en": "Next Level",
        "fr": "Niveau suivant"
    },
    {
        "opy": "Next Hostages",
        "en": "Next Hostages",
        "fr": "Otages suivants"
    },
    {
        "opy": "Next Hostage",
        "en": "Next Hostage",
        "fr": "Otage suivant"
    },
    {
        "opy": "Next Heroes",
        "en": "Next Heroes",
        "fr": "Héros suivants"
    },
    {
        "opy": "Next Hero",
        "en": "Next Hero",
        "fr": "Héros suivant"
    },
    {
        "opy": "Next Game",
        "en": "Next Game",
        "fr": "Partie suivante"
    },
    {
        "opy": "Next Form",
        "en": "Next Form",
        "fr": "Forme suivante"
    },
    {
        "opy": "Next Enemy",
        "en": "Next Enemy",
        "fr": "Ennemi suivant"
    },
    {
        "opy": "Next Enemies",
        "en": "Next Enemies",
        "fr": "Ennemis suivants"
    },
    {
        "opy": "Next Checkpoint",
        "en": "Next Checkpoint",
        "fr": "Point de contrôle suivant"
    },
    {
        "opy": "Next Attempt",
        "en": "Next Attempt",
        "fr": "Tentative suivante"
    },
    {
        "opy": "Next Ally",
        "en": "Next Ally",
        "fr": "Allié suivant"
    },
    {
        "opy": "Next Allies",
        "en": "Next Allies",
        "fr": "Alliés suivants"
    },
    {
        "opy": "Next",
        "en": "Next",
        "fr": "Suivant"
    },
    {
        "opy": "New Record",
        "en": "New Record",
        "fr": "Nouveau record"
    },
    {
        "opy": "New High Score",
        "en": "New High Score",
        "fr": "Nouveau meilleur score"
    },
    {
        "opy": "Near",
        "en": "Near",
        "fr": "Près"
    },
    {
        "opy": "My Mistake",
        "en": "My Mistake",
        "fr": "C’est de ma faute"
    },
    {
        "opy": "Most",
        "en": "Most",
        "fr": "Le plus"
    },
    {
        "opy": "More",
        "en": "More",
        "fr": "Plus"
    },
    {
        "opy": "Monsters",
        "en": "Monsters",
        "fr": "Monstres"
    },
    {
        "opy": "Monster",
        "en": "Monster",
        "fr": "Monstre"
    },
    {
        "opy": "Money",
        "en": "Money",
        "fr": "Argent"
    },
    {
        "opy": "Moderate",
        "en": "Moderate",
        "fr": "Modéré"
    },
    {
        "opy": "Missions",
        "en": "Missions",
        "fr": "Missions"
    },
    {
        "opy": "Mission Failed",
        "en": "Mission Failed",
        "fr": "Échec de la mission"
    },
    {
        "opy": "Mission Accomplished",
        "en": "Mission Accomplished",
        "fr": "Mission accomplie"
    },
    {
        "opy": "Mission Aborted",
        "en": "Mission Aborted",
        "fr": "Mission annulée"
    },
    {
        "opy": "Mission",
        "en": "Mission",
        "fr": "Mission"
    },
    {
        "opy": "Min",
        "en": "Min",
        "fr": "Minimum"
    },
    {
        "opy": "Mild",
        "en": "Mild",
        "fr": "Modéré"
    },
    {
        "opy": "Max",
        "en": "Max",
        "fr": "Maximum"
    },
    {
        "opy": "Losses",
        "en": "Losses",
        "fr": "Défaites"
    },
    {
        "opy": "Loss",
        "en": "Loss",
        "fr": "Défaite"
    },
    {
        "opy": "Losers",
        "en": "Losers",
        "fr": "Perdants"
    },
    {
        "opy": "Loser",
        "en": "Loser",
        "fr": "Perdant"
    },
    {
        "opy": "Locking",
        "en": "Locking",
        "fr": "Verrouillage"
    },
    {
        "opy": "Locked",
        "en": "Locked",
        "fr": "Verrouillé"
    },
    {
        "opy": "Lock",
        "en": "Lock",
        "fr": "Verrouiller"
    },
    {
        "opy": "Location",
        "en": "Location",
        "fr": "Lieu"
    },
    {
        "opy": "Loading",
        "en": "Loading",
        "fr": "Chargement"
    },
    {
        "opy": "Loaded",
        "en": "Loaded",
        "fr": "Chargé"
    },
    {
        "opy": "Load",
        "en": "Load",
        "fr": "Charger"
    },
    {
        "opy": "Lives",
        "en": "Lives",
        "fr": "Vies"
    },
    {
        "opy": "Limited",
        "en": "Limited",
        "fr": "Limité"
    },
    {
        "opy": "Life",
        "en": "Life",
        "fr": "Vie"
    },
    {
        "opy": "Levels",
        "en": "Levels",
        "fr": "Niveaux"
    },
    {
        "opy": "Level Up",
        "en": "Level Up",
        "fr": "Gain de niveau"
    },
    {
        "opy": "Level Down",
        "en": "Level Down",
        "fr": "Perte de niveau"
    },
    {
        "opy": "Level",
        "en": "Level",
        "fr": "Niveau"
    },
    {
        "opy": "Less",
        "en": "Less",
        "fr": "Moins"
    },
    {
        "opy": "Left",
        "en": "Left",
        "fr": "Gauche"
    },
    {
        "opy": "Least",
        "en": "Least",
        "fr": "Le moins"
    },
    {
        "opy": "Leaders",
        "en": "Leaders",
        "fr": "Meneurs"
    },
    {
        "opy": "Leader",
        "en": "Leader",
        "fr": "Meneur"
    },
    {
        "opy": "Killstreaks",
        "en": "Killstreaks",
        "fr": "Séries de victimes"
    },
    {
        "opy": "Killstreak",
        "en": "Killstreak",
        "fr": "Série de victimes"
    },
    {
        "opy": "Killstreak",
        "en": "Killstreak",
        "fr": "Série de victimes"
    },
    {
        "opy": "Kills",
        "en": "Kills",
        "fr": "Victimes"
    },
    {
        "opy": "Kill",
        "en": "Kill",
        "fr": "Victime"
    },
    {
        "opy": "Jumping",
        "en": "Jumping",
        "fr": "Saut"
    },
    {
        "opy": "Jump",
        "en": "Jump",
        "fr": "Sauter"
    },
    {
        "opy": "Joining",
        "en": "Joining",
        "fr": "Rejoint"
    },
    {
        "opy": "Joined",
        "en": "Joined",
        "fr": "A rejoint"
    },
    {
        "opy": "Join",
        "en": "Join",
        "fr": "Rejoindre"
    },
    {
        "opy": "Items",
        "en": "Items",
        "fr": "Articles"
    },
    {
        "opy": "Item",
        "en": "Item",
        "fr": "Article"
    },
    {
        "opy": "Invisible",
        "en": "Invisible",
        "fr": "Invisible"
    },
    {
        "opy": "Interact",
        "en": "Interact",
        "fr": "Interagir"
    },
    {
        "opy": "Intelligence",
        "en": "Intelligence",
        "fr": "Intelligence"
    },
    {
        "opy": "Inside",
        "en": "Inside",
        "fr": "À l’intérieur"
    },
    {
        "opy": "Innocent",
        "en": "Innocent",
        "fr": "Innocent"
    },
    {
        "opy": "Initial Upgrade",
        "en": "Initial Upgrade",
        "fr": "Amélioration initiale"
    },
    {
        "opy": "Initial Targets",
        "en": "Initial Targets",
        "fr": "Cibles initiales"
    },
    {
        "opy": "Initial Target",
        "en": "Initial Target",
        "fr": "Cible initiale"
    },
    {
        "opy": "Initial Round",
        "en": "Initial Round",
        "fr": "Manche initiale"
    },
    {
        "opy": "Initial Players",
        "en": "Initial Players",
        "fr": "Joueurs initiaux"
    },
    {
        "opy": "Initial Player",
        "en": "Initial Player",
        "fr": "Joueur initial"
    },
    {
        "opy": "Initial Phase",
        "en": "Initial Phase",
        "fr": "Phase initiale"
    },
    {
        "opy": "Initial Objects",
        "en": "Initial Objects",
        "fr": "Objets initiaux"
    },
    {
        "opy": "Initial Objective",
        "en": "Initial Objective",
        "fr": "Objectif initial"
    },
    {
        "opy": "Initial Object",
        "en": "Initial Object",
        "fr": "Objet initial"
    },
    {
        "opy": "Initial Mission",
        "en": "Initial Mission",
        "fr": "Mission initiale"
    },
    {
        "opy": "Initial Level",
        "en": "Initial Level",
        "fr": "Niveau initial"
    },
    {
        "opy": "Initial Hostage",
        "en": "Initial Hostage",
        "fr": "Otage initial"
    },
    {
        "opy": "Initial Heroes",
        "en": "Initial Heroes",
        "fr": "Héros initiaux"
    },
    {
        "opy": "Initial Hero",
        "en": "Initial Hero",
        "fr": "Héros initial"
    },
    {
        "opy": "Initial Game",
        "en": "Initial Game",
        "fr": "Partie initiale"
    },
    {
        "opy": "Initial Form",
        "en": "Initial Form",
        "fr": "Forme initiale"
    },
    {
        "opy": "Initial Enemy",
        "en": "Initial Enemy",
        "fr": "Ennemi initial"
    },
    {
        "opy": "Initial Enemies",
        "en": "Initial Enemies",
        "fr": "Ennemis initiaux"
    },
    {
        "opy": "Initial Checkpoint",
        "en": "Initial Checkpoint",
        "fr": "Point de contrôle initial"
    },
    {
        "opy": "Initial Attempt",
        "en": "Initial Attempt",
        "fr": "Tentative initiale"
    },
    {
        "opy": "Initial Ally",
        "en": "Initial Ally",
        "fr": "Allié initial"
    },
    {
        "opy": "Initial Allies",
        "en": "Initial Allies",
        "fr": "Alliés initiaux"
    },
    {
        "opy": "Initial",
        "en": "Initial",
        "fr": "Initial"
    },
    {
        "opy": "Incoming",
        "en": "Incoming",
        "fr": "En approche"
    },
    {
        "opy": "Income",
        "en": "Income",
        "fr": "Revenu"
    },
    {
        "opy": "In View",
        "en": "In View",
        "fr": "En vue"
    },
    {
        "opy": "I Tried",
        "en": "I Tried",
        "fr": "J’ai essayé"
    },
    {
        "opy": "I Give Up",
        "en": "I Give Up",
        "fr": "J’abandonne"
    },
    {
        "opy": "Hunting",
        "en": "Hunting",
        "fr": "Chasse"
    },
    {
        "opy": "Hunters",
        "en": "Hunters",
        "fr": "Chasseurs"
    },
    {
        "opy": "Hunter",
        "en": "Hunter",
        "fr": "Chasseur"
    },
    {
        "opy": "Hunted",
        "en": "Hunted",
        "fr": "Pourchassé"
    },
    {
        "opy": "Hunt",
        "en": "Hunt",
        "fr": "Chasser"
    },
    {
        "opy": "Huh",
        "en": "Huh",
        "fr": "Euh"
    },
    {
        "opy": "Hostages",
        "en": "Hostages",
        "fr": "Otages"
    },
    {
        "opy": "Hostage",
        "en": "Hostage",
        "fr": "Otage"
    },
    {
        "opy": "Hmmm",
        "en": "Hmmm",
        "fr": "Hmmm"
    },
    {
        "opy": "Hitting",
        "en": "Hitting",
        "fr": "Touche"
    },
    {
        "opy": "Hit",
        "en": "Hit",
        "fr": "Toucher"
    },
    {
        "opy": "High Scores",
        "en": "High Scores",
        "fr": "Meilleurs scores"
    },
    {
        "opy": "High Score",
        "en": "High Score",
        "fr": "Meilleur score"
    },
    {
        "opy": "Hiding",
        "en": "Hiding",
        "fr": "Cache"
    },
    {
        "opy": "Hide",
        "en": "Hide",
        "fr": "Cacher"
    },
    {
        "opy": "Hidden",
        "en": "Hidden",
        "fr": "Caché"
    },
    {
        "opy": "Heroes",
        "en": "Heroes",
        "fr": "Héros"
    },
    {
        "opy": "Hero",
        "en": "Hero",
        "fr": "Héros"
    },
    {
        "opy": "Here",
        "en": "Here",
        "fr": "Ici"
    },
    {
        "opy": "Help",
        "en": "Help",
        "fr": "Aide"
    },
    {
        "opy": "Hello",
        "en": "Hello",
        "fr": "Bonjour"
    },
    {
        "opy": "Height",
        "en": "Height",
        "fr": "Hauteur"
    },
    {
        "opy": "Hearts",
        "en": "Hearts",
        "fr": "Cœur"
    },
    {
        "opy": "Heart",
        "en": "Heart",
        "fr": "Cœur"
    },
    {
        "opy": "Healing",
        "en": "Healing",
        "fr": "Soigne"
    },
    {
        "opy": "Healers",
        "en": "Healers",
        "fr": "Soigneurs"
    },
    {
        "opy": "Healer",
        "en": "Healer",
        "fr": "Soigneur"
    },
    {
        "opy": "Healed",
        "en": "Healed",
        "fr": "Soigné"
    },
    {
        "opy": "Heal",
        "en": "Heal",
        "fr": "Soigner"
    },
    {
        "opy": "Hands",
        "en": "Hands",
        "fr": "Mains"
    },
    {
        "opy": "Hand",
        "en": "Hand",
        "fr": "Main"
    },
    {
        "opy": "Hacking",
        "en": "Hacking",
        "fr": "Piratage"
    },
    {
        "opy": "Hacked",
        "en": "Hacked",
        "fr": "Piraté"
    },
    {
        "opy": "Hack",
        "en": "Hack",
        "fr": "Pirater"
    },
    {
        "opy": "Guilty",
        "en": "Guilty",
        "fr": "Coupable"
    },
    {
        "opy": "Green",
        "en": "Green",
        "fr": "Vert"
    },
    {
        "opy": "Goodbye",
        "en": "Goodbye",
        "fr": "Au revoir"
    },
    {
        "opy": "Good Luck",
        "en": "Good Luck",
        "fr": "Bonne chance"
    },
    {
        "opy": "Good",
        "en": "Good",
        "fr": "Bon"
    },
    {
        "opy": "Going",
        "en": "Going",
        "fr": "Aller"
    },
    {
        "opy": "Goals",
        "en": "Goals",
        "fr": "Buts"
    },
    {
        "opy": "Goal",
        "en": "Goal",
        "fr": "But"
    },
    {
        "opy": "Go",
        "en": "Go",
        "fr": "Aller"
    },
    {
        "opy": "Gg",
        "en": "Gg",
        "fr": "BRAVO"
    },
    {
        "opy": "Games Won",
        "en": "Games Won",
        "fr": "Parties gagnées"
    },
    {
        "opy": "Games Lost",
        "en": "Games Lost",
        "fr": "Parties perdues"
    },
    {
        "opy": "Games",
        "en": "Games",
        "fr": "Parties"
    },
    {
        "opy": "Game",
        "en": "Game",
        "fr": "Partie"
    },
    {
        "opy": "Frozen",
        "en": "Frozen",
        "fr": "Gelé"
    },
    {
        "opy": "Freezing",
        "en": "Freezing",
        "fr": "Gel"
    },
    {
        "opy": "Freeze",
        "en": "Freeze",
        "fr": "Geler"
    },
    {
        "opy": "Found",
        "en": "Found",
        "fr": "Trouvé"
    },
    {
        "opy": "Forward",
        "en": "Forward",
        "fr": "Avant"
    },
    {
        "opy": "Forms",
        "en": "Forms",
        "fr": "Formes"
    },
    {
        "opy": "Form",
        "en": "Form",
        "fr": "Forme"
    },
    {
        "opy": "Folding",
        "en": "Folding",
        "fr": "Se couche"
    },
    {
        "opy": "Folded",
        "en": "Folded",
        "fr": "S’est couché"
    },
    {
        "opy": "Fold",
        "en": "Fold",
        "fr": "Se coucher"
    },
    {
        "opy": "Flying",
        "en": "Flying",
        "fr": "Vole"
    },
    {
        "opy": "Fly",
        "en": "Fly",
        "fr": "Voler"
    },
    {
        "opy": "Flown",
        "en": "Flown",
        "fr": "Volé"
    },
    {
        "opy": "Finishing",
        "en": "Finishing",
        "fr": "Fin"
    },
    {
        "opy": "Finished",
        "en": "Finished",
        "fr": "Fini"
    },
    {
        "opy": "Finish",
        "en": "Finish",
        "fr": "Finir"
    },
    {
        "opy": "Finding",
        "en": "Finding",
        "fr": "Découverte"
    },
    {
        "opy": "Find",
        "en": "Find",
        "fr": "Trouver"
    },
    {
        "opy": "Final Upgrade",
        "en": "Final Upgrade",
        "fr": "Amélioration finale"
    },
    {
        "opy": "Final Time",
        "en": "Final Time",
        "fr": "Temps final"
    },
    {
        "opy": "Final Targets",
        "en": "Final Targets",
        "fr": "Cibles finales"
    },
    {
        "opy": "Final Target",
        "en": "Final Target",
        "fr": "Cible finale"
    },
    {
        "opy": "Final Round",
        "en": "Final Round",
        "fr": "Manche finale"
    },
    {
        "opy": "Final Players",
        "en": "Final Players",
        "fr": "Joueurs finaux"
    },
    {
        "opy": "Final Player",
        "en": "Final Player",
        "fr": "Joueur final"
    },
    {
        "opy": "Final Phase",
        "en": "Final Phase",
        "fr": "Phase finale"
    },
    {
        "opy": "Final Objects",
        "en": "Final Objects",
        "fr": "Objets finaux"
    },
    {
        "opy": "Final Objective",
        "en": "Final Objective",
        "fr": "Objectif final"
    },
    {
        "opy": "Final Object",
        "en": "Final Object",
        "fr": "Objet final"
    },
    {
        "opy": "Final Mission",
        "en": "Final Mission",
        "fr": "Mission finale"
    },
    {
        "opy": "Final Level",
        "en": "Final Level",
        "fr": "Niveau final"
    },
    {
        "opy": "Final Item",
        "en": "Final Item",
        "fr": "Article final"
    },
    {
        "opy": "Final Hostages",
        "en": "Final Hostages",
        "fr": "Otages finaux"
    },
    {
        "opy": "Final Hostage",
        "en": "Final Hostage",
        "fr": "Otage final"
    },
    {
        "opy": "Final Heroes",
        "en": "Final Heroes",
        "fr": "Héros finaux"
    },
    {
        "opy": "Final Hero",
        "en": "Final Hero",
        "fr": "Héros final"
    },
    {
        "opy": "Final Game",
        "en": "Final Game",
        "fr": "Partie finale"
    },
    {
        "opy": "Final Form",
        "en": "Final Form",
        "fr": "Forme finale"
    },
    {
        "opy": "Final Enemy",
        "en": "Final Enemy",
        "fr": "Ennemi final"
    },
    {
        "opy": "Final Enemies",
        "en": "Final Enemies",
        "fr": "Ennemis finaux"
    },
    {
        "opy": "Final Checkpoint",
        "en": "Final Checkpoint",
        "fr": "Point de contrôle final"
    },
    {
        "opy": "Final Attempt",
        "en": "Final Attempt",
        "fr": "Tentative finale"
    },
    {
        "opy": "Final Ally",
        "en": "Final Ally",
        "fr": "Allié final"
    },
    {
        "opy": "Final Allies",
        "en": "Final Allies",
        "fr": "Alliés finaux"
    },
    {
        "opy": "Final",
        "en": "Final",
        "fr": "Final"
    },
    {
        "opy": "Faults",
        "en": "Faults",
        "fr": "Fautes"
    },
    {
        "opy": "Fault",
        "en": "Fault",
        "fr": "Faute"
    },
    {
        "opy": "Fastest",
        "en": "Fastest",
        "fr": "Le plus rapide"
    },
    {
        "opy": "Faster",
        "en": "Faster",
        "fr": "Plus rapide"
    },
    {
        "opy": "Fast",
        "en": "Fast",
        "fr": "Rapide"
    },
    {
        "opy": "Far",
        "en": "Far",
        "fr": "Loin"
    },
    {
        "opy": "Falling",
        "en": "Falling",
        "fr": "Chute"
    },
    {
        "opy": "Fallen",
        "en": "Fallen",
        "fr": "Tombé"
    },
    {
        "opy": "Fall",
        "en": "Fall",
        "fr": "Tomber"
    },
    {
        "opy": "Failure",
        "en": "Failure",
        "fr": "Échec"
    },
    {
        "opy": "Failing",
        "en": "Failing",
        "fr": "Échec"
    },
    {
        "opy": "Failed",
        "en": "Failed",
        "fr": "Échoué"
    },
    {
        "opy": "Facing",
        "en": "Facing",
        "fr": "Face à"
    },
    {
        "opy": "Faces",
        "en": "Faces",
        "fr": "Regarde vers"
    },
    {
        "opy": "Face",
        "en": "Face",
        "fr": "Regarder vers"
    },
    {
        "opy": "Extreme",
        "en": "Extreme",
        "fr": "Extrême"
    },
    {
        "opy": "Experience",
        "en": "Experience",
        "fr": "Expérience"
    },
    {
        "opy": "Exit",
        "en": "Exit",
        "fr": "Sortie"
    },
    {
        "opy": "Excellent",
        "en": "Excellent",
        "fr": "Excellent"
    },
    {
        "opy": "Escorting",
        "en": "Escorting",
        "fr": "Escorte"
    },
    {
        "opy": "Escorted",
        "en": "Escorted",
        "fr": "Escorté"
    },
    {
        "opy": "Escort",
        "en": "Escort",
        "fr": "Escorter"
    },
    {
        "opy": "Entrance",
        "en": "Entrance",
        "fr": "Entrée"
    },
    {
        "opy": "Enemy",
        "en": "Enemy",
        "fr": "Ennemi"
    },
    {
        "opy": "Enemies",
        "en": "Enemies",
        "fr": "Ennemis"
    },
    {
        "opy": "Eliminations",
        "en": "Eliminations",
        "fr": "Éliminations"
    },
    {
        "opy": "Elimination",
        "en": "Elimination",
        "fr": "Élimination"
    },
    {
        "opy": "Eliminating",
        "en": "Eliminating",
        "fr": "Élimination"
    },
    {
        "opy": "Eliminated",
        "en": "Eliminated",
        "fr": "Éliminé"
    },
    {
        "opy": "Eliminate",
        "en": "Eliminate",
        "fr": "Éliminer"
    },
    {
        "opy": "East",
        "en": "East",
        "fr": "Est"
    },
    {
        "opy": "Dying",
        "en": "Dying",
        "fr": "Mort"
    },
    {
        "opy": "Dropping",
        "en": "Dropping",
        "fr": "Largage"
    },
    {
        "opy": "Dropped",
        "en": "Dropped",
        "fr": "Largué"
    },
    {
        "opy": "Drop",
        "en": "Drop",
        "fr": "Larguer"
    },
    {
        "opy": "Drawn",
        "en": "Drawn",
        "fr": "Pioché"
    },
    {
        "opy": "Drawing",
        "en": "Drawing",
        "fr": "Pioche"
    },
    {
        "opy": "Draw",
        "en": "Draw",
        "fr": "Match nul"
    },
    {
        "opy": "Downloading",
        "en": "Downloading",
        "fr": "Téléchargement"
    },
    {
        "opy": "Downloaded",
        "en": "Downloaded",
        "fr": "Téléchargé"
    },
    {
        "opy": "Download",
        "en": "Download",
        "fr": "Télécharger"
    },
    {
        "opy": "Down",
        "en": "Down",
        "fr": "Bas"
    },
    {
        "opy": "Domes",
        "en": "Domes",
        "fr": "Dômes"
    },
    {
        "opy": "Dome",
        "en": "Dome",
        "fr": "Dôme"
    },
    {
        "opy": "Dodging",
        "en": "Dodging",
        "fr": "Esquive"
    },
    {
        "opy": "Dodged",
        "en": "Dodged",
        "fr": "Esquivé"
    },
    {
        "opy": "Dodge",
        "en": "Dodge",
        "fr": "Esquiver"
    },
    {
        "opy": "Distances",
        "en": "Distances",
        "fr": "Distances"
    },
    {
        "opy": "Distance",
        "en": "Distance",
        "fr": "Distance"
    },
    {
        "opy": "Disconnecting",
        "en": "Disconnecting",
        "fr": "Déconnexion"
    },
    {
        "opy": "Disconnected",
        "en": "Disconnected",
        "fr": "Déconnecté"
    },
    {
        "opy": "Disconnect",
        "en": "Disconnect",
        "fr": "Déconnecter"
    },
    {
        "opy": "Discarding",
        "en": "Discarding",
        "fr": "Défausse"
    },
    {
        "opy": "Discarded",
        "en": "Discarded",
        "fr": "Défaussé"
    },
    {
        "opy": "Discard",
        "en": "Discard",
        "fr": "Défausser"
    },
    {
        "opy": "Die",
        "en": "Die",
        "fr": "Mourir"
    },
    {
        "opy": "Diamonds",
        "en": "Diamonds",
        "fr": "Carreau"
    },
    {
        "opy": "Diamond",
        "en": "Diamond",
        "fr": "Carreau"
    },
    {
        "opy": "Dexterity",
        "en": "Dexterity",
        "fr": "Dextérité"
    },
    {
        "opy": "Detecting",
        "en": "Detecting",
        "fr": "Détection"
    },
    {
        "opy": "Detected",
        "en": "Detected",
        "fr": "Détecté"
    },
    {
        "opy": "Detect",
        "en": "Detect",
        "fr": "Détecter"
    },
    {
        "opy": "Destroying",
        "en": "Destroying",
        "fr": "Destruction"
    },
    {
        "opy": "Destroyed",
        "en": "Destroyed",
        "fr": "Détruit"
    },
    {
        "opy": "Destroy",
        "en": "Destroy",
        "fr": "Détruire"
    },
    {
        "opy": "Destabilizing",
        "en": "Destabilizing",
        "fr": "Déstabilisation"
    },
    {
        "opy": "Destabilized",
        "en": "Destabilized",
        "fr": "Déstabilisé"
    },
    {
        "opy": "Destabilize",
        "en": "Destabilize",
        "fr": "Déstabiliser"
    },
    {
        "opy": "Depth",
        "en": "Depth",
        "fr": "Profondeur"
    },
    {
        "opy": "Delivering",
        "en": "Delivering",
        "fr": "Livraison"
    },
    {
        "opy": "Delivered",
        "en": "Delivered",
        "fr": "Livré"
    },
    {
        "opy": "Deliver",
        "en": "Deliver",
        "fr": "Livrer"
    },
    {
        "opy": "Defense",
        "en": "Defense",
        "fr": "Défense"
    },
    {
        "opy": "Defending",
        "en": "Defending",
        "fr": "Défense"
    },
    {
        "opy": "Defended",
        "en": "Defended",
        "fr": "Défendu"
    },
    {
        "opy": "Defend",
        "en": "Defend",
        "fr": "Défendre"
    },
    {
        "opy": "Defeat",
        "en": "Defeat",
        "fr": "Défaite"
    },
    {
        "opy": "Decks",
        "en": "Decks",
        "fr": "Tas"
    },
    {
        "opy": "Deck",
        "en": "Deck",
        "fr": "Tas"
    },
    {
        "opy": "Dealt",
        "en": "Dealt",
        "fr": "Distribué"
    },
    {
        "opy": "Dealing",
        "en": "Dealing",
        "fr": "Distribution"
    },
    {
        "opy": "Deal",
        "en": "Deal",
        "fr": "Distribuer"
    },
    {
        "opy": "Dead",
        "en": "Dead",
        "fr": "Mort"
    },
    {
        "opy": "Danger",
        "en": "Danger",
        "fr": "Danger"
    },
    {
        "opy": "Damaging",
        "en": "Damaging",
        "fr": "Inflige des dégâts"
    },
    {
        "opy": "Damaged",
        "en": "Damaged",
        "fr": "Endommagé"
    },
    {
        "opy": "Damage",
        "en": "Damage",
        "fr": "Infliger des dégâts"
    },
    {
        "opy": "Current Upgrade",
        "en": "Current Upgrade",
        "fr": "Amélioration actuelle"
    },
    {
        "opy": "Current Targets",
        "en": "Current Targets",
        "fr": "Cibles actuelles"
    },
    {
        "opy": "Current Target",
        "en": "Current Target",
        "fr": "Cible actuelle"
    },
    {
        "opy": "Current Round",
        "en": "Current Round",
        "fr": "Manche actuelle"
    },
    {
        "opy": "Current Players",
        "en": "Current Players",
        "fr": "Joueurs actuels"
    },
    {
        "opy": "Current Player",
        "en": "Current Player",
        "fr": "Joueur actuel"
    },
    {
        "opy": "Current Phase",
        "en": "Current Phase",
        "fr": "Phase actuelle"
    },
    {
        "opy": "Current Objects",
        "en": "Current Objects",
        "fr": "Objets actuels"
    },
    {
        "opy": "Current Objective",
        "en": "Current Objective",
        "fr": "Objectif actuel"
    },
    {
        "opy": "Current Object",
        "en": "Current Object",
        "fr": "Object actuel"
    },
    {
        "opy": "Current Mission",
        "en": "Current Mission",
        "fr": "Mission actuelle"
    },
    {
        "opy": "Current Level",
        "en": "Current Level",
        "fr": "Niveau actuel"
    },
    {
        "opy": "Current Hostages",
        "en": "Current Hostages",
        "fr": "Otages actuels"
    },
    {
        "opy": "Current Hostage",
        "en": "Current Hostage",
        "fr": "Otage actuel"
    },
    {
        "opy": "Current Heroes",
        "en": "Current Heroes",
        "fr": "Héros actuels"
    },
    {
        "opy": "Current Hero",
        "en": "Current Hero",
        "fr": "Héros actuel"
    },
    {
        "opy": "Current Game",
        "en": "Current Game",
        "fr": "Partie actuelle"
    },
    {
        "opy": "Current Form",
        "en": "Current Form",
        "fr": "Forme actuelle"
    },
    {
        "opy": "Current Enemy",
        "en": "Current Enemy",
        "fr": "Ennemi actuel"
    },
    {
        "opy": "Current Enemies",
        "en": "Current Enemies",
        "fr": "Ennemis actuels"
    },
    {
        "opy": "Current Checkpoint",
        "en": "Current Checkpoint",
        "fr": "Point de contrôle actuel"
    },
    {
        "opy": "Current Attempt",
        "en": "Current Attempt",
        "fr": "Tentative actuelle"
    },
    {
        "opy": "Current Ally",
        "en": "Current Ally",
        "fr": "Allié actuel"
    },
    {
        "opy": "Current Allies",
        "en": "Current Allies",
        "fr": "Alliés actuels"
    },
    {
        "opy": "Current",
        "en": "Current",
        "fr": "Actuel"
    },
    {
        "opy": "Crouching",
        "en": "Crouching",
        "fr": "Accroupissement"
    },
    {
        "opy": "Crouched",
        "en": "Crouched",
        "fr": "Accroupi"
    },
    {
        "opy": "Crouch",
        "en": "Crouch",
        "fr": "S’accroupir"
    },
    {
        "opy": "Critical",
        "en": "Critical",
        "fr": "Critique"
    },
    {
        "opy": "Credits",
        "en": "Credits",
        "fr": "Crédits"
    },
    {
        "opy": "Credit",
        "en": "Credit",
        "fr": "Crédit"
    },
    {
        "opy": "Corrupting",
        "en": "Corrupting",
        "fr": "Corruption"
    },
    {
        "opy": "Corrupted",
        "en": "Corrupted",
        "fr": "Corrompu"
    },
    {
        "opy": "Corrupt",
        "en": "Corrupt",
        "fr": "Corrompre"
    },
    {
        "opy": "Cooldowns",
        "en": "Cooldowns",
        "fr": "Temps de recharge"
    },
    {
        "opy": "Cooldown",
        "en": "Cooldown",
        "fr": "Temps de recharge"
    },
    {
        "opy": "Control Points",
        "en": "Control Points",
        "fr": "Points de contrôle"
    },
    {
        "opy": "Control Point",
        "en": "Control Point",
        "fr": "Point de contrôle"
    },
    {
        "opy": "Constitution",
        "en": "Constitution",
        "fr": "Constitution"
    },
    {
        "opy": "Connecting",
        "en": "Connecting",
        "fr": "Connexion"
    },
    {
        "opy": "Connected",
        "en": "Connected",
        "fr": "Connecté"
    },
    {
        "opy": "Connect",
        "en": "Connect",
        "fr": "Connecter"
    },
    {
        "opy": "Congratulations",
        "en": "Congratulations",
        "fr": "Félicitations"
    },
    {
        "opy": "Condition",
        "en": "Condition",
        "fr": "Condition"
    },
    {
        "opy": "Come Here",
        "en": "Come Here",
        "fr": "Venez ici"
    },
    {
        "opy": "Combo",
        "en": "Combo",
        "fr": "Combo"
    },
    {
        "opy": "Clubs",
        "en": "Clubs",
        "fr": "Trèfle"
    },
    {
        "opy": "Club",
        "en": "Club",
        "fr": "Trèfle"
    },
    {
        "opy": "Clouds",
        "en": "Clouds",
        "fr": "Nuages"
    },
    {
        "opy": "Cloud",
        "en": "Cloud",
        "fr": "Nuage"
    },
    {
        "opy": "Checkpoints",
        "en": "Checkpoints",
        "fr": "Points de contrôle"
    },
    {
        "opy": "Checkpoint",
        "en": "Checkpoint",
        "fr": "Point de contrôle"
    },
    {
        "opy": "Chasing",
        "en": "Chasing",
        "fr": "Poursuite"
    },
    {
        "opy": "Chased",
        "en": "Chased",
        "fr": "Poursuivi"
    },
    {
        "opy": "Chase",
        "en": "Chase",
        "fr": "Poursuivre"
    },
    {
        "opy": "Charisma",
        "en": "Charisma",
        "fr": "Charisme"
    },
    {
        "opy": "Challenge Accepted",
        "en": "Challenge Accepted",
        "fr": "Défi accepté"
    },
    {
        "opy": "Center",
        "en": "Center",
        "fr": "Centre"
    },
    {
        "opy": "Caution",
        "en": "Caution",
        "fr": "Prudence"
    },
    {
        "opy": "Capturing",
        "en": "Capturing",
        "fr": "Capture"
    },
    {
        "opy": "Captured",
        "en": "Captured",
        "fr": "Capturé"
    },
    {
        "opy": "Capture",
        "en": "Capture",
        "fr": "Capturer"
    },
    {
        "opy": "Buying",
        "en": "Buying",
        "fr": "Achat"
    },
    {
        "opy": "Buy",
        "en": "Buy",
        "fr": "Acheter"
    },
    {
        "opy": "Burnt",
        "en": "Burnt",
        "fr": "Brûlé"
    },
    {
        "opy": "Burning",
        "en": "Burning",
        "fr": "Enflammé"
    },
    {
        "opy": "Burn",
        "en": "Burn",
        "fr": "Brûler"
    },
    {
        "opy": "Built",
        "en": "Built",
        "fr": "Construit"
    },
    {
        "opy": "Building",
        "en": "Building",
        "fr": "Construction"
    },
    {
        "opy": "Build",
        "en": "Build",
        "fr": "Construire"
    },
    {
        "opy": "Bought",
        "en": "Bought",
        "fr": "Acheté"
    },
    {
        "opy": "Bosses",
        "en": "Bosses",
        "fr": "Boss"
    },
    {
        "opy": "Boss",
        "en": "Boss",
        "fr": "Boss"
    },
    {
        "opy": "Bonuses",
        "en": "Bonuses",
        "fr": "Primes"
    },
    {
        "opy": "Bonus",
        "en": "Bonus",
        "fr": "Prime"
    },
    {
        "opy": "Blue",
        "en": "Blue",
        "fr": "Bleu"
    },
    {
        "opy": "Blocking",
        "en": "Blocking",
        "fr": "Bloque"
    },
    {
        "opy": "Blocked",
        "en": "Blocked",
        "fr": "Bloqué"
    },
    {
        "opy": "Block",
        "en": "Block",
        "fr": "Bloquer"
    },
    {
        "opy": "Bids",
        "en": "Bids",
        "fr": "Enchères"
    },
    {
        "opy": "Bid",
        "en": "Bid",
        "fr": "Enchère"
    },
    {
        "opy": "Better",
        "en": "Better",
        "fr": "Meilleur"
    },
    {
        "opy": "Best",
        "en": "Best",
        "fr": "Le meilleur"
    },
    {
        "opy": "Banning",
        "en": "Banning",
        "fr": "Bannissement"
    },
    {
        "opy": "Banned",
        "en": "Banned",
        "fr": "Banni"
    },
    {
        "opy": "Ban",
        "en": "Ban",
        "fr": "Bannir"
    },
    {
        "opy": "Bad",
        "en": "Bad",
        "fr": "Mauvais"
    },
    {
        "opy": "Backward",
        "en": "Backward",
        "fr": "Arrière"
    },
    {
        "opy": "Avoiding",
        "en": "Avoiding",
        "fr": "Évitement"
    },
    {
        "opy": "Avoided",
        "en": "Avoided",
        "fr": "Évité"
    },
    {
        "opy": "Avoid",
        "en": "Avoid",
        "fr": "Éviter"
    },
    {
        "opy": "Average",
        "en": "Average",
        "fr": "Moyenne"
    },
    {
        "opy": "Attempts",
        "en": "Attempts",
        "fr": "Tentatives"
    },
    {
        "opy": "Attempt",
        "en": "Attempt",
        "fr": "Tentative"
    },
    {
        "opy": "Attacking",
        "en": "Attacking",
        "fr": "Attaque"
    },
    {
        "opy": "Attacked",
        "en": "Attacked",
        "fr": "Attaqué"
    },
    {
        "opy": "Attack",
        "en": "Attack",
        "fr": "Attaquer"
    },
    {
        "opy": "Angle",
        "en": "Angle",
        "fr": "Angle"
    },
    {
        "opy": "Ammunition",
        "en": "Ammunition",
        "fr": "Munitions"
    },
    {
        "opy": "Ally",
        "en": "Ally",
        "fr": "Allié"
    },
    {
        "opy": "Allies",
        "en": "Allies",
        "fr": "Alliés"
    },
    {
        "opy": "Alive",
        "en": "Alive",
        "fr": "En vie"
    },
    {
        "opy": "Alert",
        "en": "Alert",
        "fr": "Alerte"
    },
    {
        "opy": "Ability 2",
        "en": "Ability 2",
        "fr": "Capacité 2"
    },
    {
        "opy": "Ability 1",
        "en": "Ability 1",
        "fr": "Capacité 1"
    },
    {
        "opy": "Ability",
        "en": "Ability",
        "fr": "Capacité"
    },
    {
        "opy": "Abilities",
        "en": "Abilities",
        "fr": "Capacités"
    },
    {
        "opy": "???",
        "en": "???",
        "fr": "???"
    },
    {
        "opy": "??",
        "en": "??",
        "fr": "??"
    },
    {
        "opy": "?",
        "en": "?",
        "fr": "?"
    },
    {
        "opy": "...",
        "en": "...",
        "fr": "…"
    },
    {
        "opy": "----------",
        "en": "----------",
        "fr": "----------"
    },
    {
        "opy": "*",
        "en": "*",
        "fr": "*"
    },
    {
        "opy": "!!!",
        "en": "!!!",
        "fr": "!!!"
    },
    {
        "opy": "!!",
        "en": "!!",
        "fr": "!!"
    },
    {
        "opy": "!",
        "en": "!",
        "fr": "!"
    }
]
//end-json

var prefixStrKw = 
//begin-json
[
    {
        "opy": "#{0}",
        "en": "#{0}"
    },
    {
        "opy": "-> {0}",
        "en": "-> {0}"
    },
    {
        "opy": "<-> {0}",
        "en": "<-> {0}"
    },
    {
        "opy": "<- {0}",
        "en": "<- {0}"
    },
    {
        "opy": "Round {0}",
        "en": "Round {0}",
        "fr": "Manche {0}"
    }
]
//end-json

var postfixStrKw = 
//begin-json
[
    {
        "opy": "{0} ->",
        "en": "{0} ->"
    },
    {
        "opy": "{0} <->",
        "en": "{0} <->"
    },
    {
        "opy": "{0} <-",
        "en": "{0} <-"
    },
    {
        "opy": "{0} M/S",
        "en": "{0} M/S"
    },
    {
        "opy": "{0} M",
        "en": "{0} M"
    },
    {
        "opy": "{0} Sec",
        "en": "{0} Sec",
        "fr": "{0} s"
    },
    {
        "opy": "{0}!!!",
        "en": "{0}!!!",
        "fr": "{0} !!!"
    },
    {
        "opy": "{0}!!",
        "en": "{0}!!",
        "fr": "{0} !!"
    },
    {
        "opy": "{0}!",
        "en": "{0}!",
        "fr": "{0} !"
    },
    {
        "opy": "{0}%",
        "en": "{0}%",
        "fr": "{0} %"
    },
    {
        "opy": "{0}:",
        "en": "{0}:",
        "fr": "{0} :"
    },
    {
        "opy": "{0}???",
        "en": "{0}???",
        "fr": "{0} ???"
    },
    {
        "opy": "{0}??",
        "en": "{0}??",
        "fr": "{0} ??"
    },
    {
        "opy": "{0}?",
        "en": "{0}?",
        "fr": "{0} ?"
    }
]
//end-json

var binaryStrKw = 
//begin-json
[
    {
        "opy": "{0} -> {1}",
        "en": "{0} -> {1}"
    },
    {
        "opy": "{0} - {1}",
        "en": "{0} - {1}"
    },
    {
        "opy": "{0} != {1}",
        "en": "{0} != {1}"
    },
    {
        "opy": "{0} * {1}",
        "en": "{0} * {1}"
    },
    {
        "opy": "{0} / {1}",
        "en": "{0} / {1}"
    },
    {
        "opy": "{0} + {1}",
        "en": "{0} + {1}"
    },
    {
        "opy": "{0} <-> {1}",
        "en": "{0} <-> {1}"
    },
    {
        "opy": "{0} <- {1}",
        "en": "{0} <- {1}"
    },
    {
        "opy": "{0} <= {1}",
        "en": "{0} <= {1}"
    },
    {
        "opy": "{0} < {1}",
        "en": "{0} < {1}"
    },
    {
        "opy": "{0} == {1}",
        "en": "{0} == {1}"
    },
    {
        "opy": "{0} = {1}",
        "en": "{0} = {1}"
    },
    {
        "opy": "{0} >= {1}",
        "en": "{0} >= {1}"
    },
    {
        "opy": "{0} > {1}",
        "en": "{0} > {1}"
    },
    {
        "opy": "{0} And {1}",
        "en": "{0} And {1}",
        "fr": "{0} et {1}"
    },
    {
        "opy": "{0} Vs {1}",
        "en": "{0} Vs {1}"
    },
    {
        "opy": "{0}, {1}",
        "en": "{0}, {1}"
    },
    {
        "opy": "{0}: {1}",
        "en": "{0}: {1}",
        "fr": "{0} : {1}",
    },
    {
        "opy": "{0}:{1}",
        "en": "{0}:{1}"
    },
    {
        "opy": "{0} {1}",
        "en": "{0} {1}"
    }
]
//end-json

var ternaryStrKw = 
//begin-json
[
    {
        "opy": "{0} - {1} - {2}",
        "en": "{0} - {1} - {2}"
    },
    {
        "opy": "{0} : {1} : {2}",
        "en": "{0} : {1} : {2}"
    },
    {
        "opy": "{0} {1} {2}",
        "en": "{0} {1} {2}"
    },
    {
        "opy": "{0}, {1}, And {2}",
        "en": "{0}, {1}, And {2}",
        "fr": "{0}, {1}, et {2}"
    },
    {
        "opy": "{0}: {1} And {2}",
        "en": "{0}: {1} And {2}",
        "fr": "{0} : {1} et {2}"
    }
]
//end-json

var surroundStrKw = 
//begin-json
[
    {
        "opy": "({0})",
        "en": "({0})"
    },
    {
        "opy": "¡{0}!",
        "en": "¡{0}!"
    },
    {
        "opy": "¿{0}?",
        "en": "¿{0}?"
    }
]
//end-json

var stringKw = normalStrKw.concat(prefixStrKw).concat(postfixStrKw).concat(binaryStrKw).concat(ternaryStrKw).concat(surroundStrKw).concat(emptyStrKw);

/*for (var hero of getConstantKw("HERO CONSTANT")) {
	stringKw.push(hero.opy);
}*/

var strTokens = [];

//Generate string tokens
//normal strings
for (var j = 0; j < normalStrKw.length; j++) {
	strTokens.push(normalStrKw[j].opy.toLowerCase());
}

//prefix strings
for (var j = 0; j < prefixStrKw.length; j++) {
	strTokens.push(prefixStrKw[j].opy.substring(0, prefixStrKw[j].opy.indexOf("{0}")).toLowerCase());
}

//postfix strings
for (var j = 0; j < postfixStrKw.length; j++) {
	strTokens.push(postfixStrKw[j].opy.substring("{0}".length).toLowerCase());
}

//ternary strings
for (var j = 0; j < ternaryStrKw.length; j++) {
	strTokens.push(ternaryStrKw[j].opy.substring("{0}".length, ternaryStrKw[j].opy.indexOf("{1}")).toLowerCase());
	strTokens.push(ternaryStrKw[j].opy.substring(ternaryStrKw[j].opy.indexOf("{1}")+"{1}".length, ternaryStrKw[j].opy.indexOf("{2}")).toLowerCase());
}

//binary strings
for (var j = 0; j < binaryStrKw.length; j++) {
	strTokens.push(binaryStrKw[j].opy.substring("{0}".length, binaryStrKw[j].opy.indexOf("{1}")).toLowerCase());
}


//surround strings
for (var j = 0; j < surroundStrKw.length; j++) {
	strTokens.push(surroundStrKw[j].opy[0].toLowerCase())
	strTokens.push(surroundStrKw[j].opy[surroundStrKw[j].opy.length-1].toLowerCase())
}

//heroes
for (var hero of getConstantKw("HERO CONSTANT")) {
	strTokens.push(hero.opy.toLowerCase().substring("Hero.".length));
}

//Sort reverse alphabetical order for greediness
strTokens = strTokens.sort().reverse();
