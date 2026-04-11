# Application de Gestion de Budget Étudiant - Stratos

Projet réalisé dans le cadre du projet synthèse du cours du programme d'AEC développement Web (NWE.2U).

Cette application web permet aux étudiants de suivre leurs revenus et leurs dépenses de manière intuitive.

---

## Fonctionnalités principales (Les pages)

- **Landing page / Page accueil** : Présentation de l'application.
- **Inscription**: Création de compte.
- **Connexion** : Accès sécurisé au compte.
- **Profil** : Gestion des informations de l'utilisateur.
- **Budget mensuel** : Tableau de bord affichant le résumé des revenus et dépenses du mois.

---

## Technologies et Outils utilisés

- **Vue.js** : Nous avons choisi ce framework pour sa réactivité et son architecture orientée composants.
- **Tailwind CSS** : Choisi pour styliser rapidement le design sans quitter le fichier HTML/Vue.
- **Git & GitHub** : Utilisés pour le contrôle de version et la collaboration.
- **Vue Router** : Utilisé pour gérer la navigation, Vue Router charge dynamiquement le composant correspondant sans recharger toute la page à chaque clic.
- **API** : Nous communiquons avec une API pour la gestion des données (envoi et réception des transactions, budgets, informations du profil, etc.).
- **Stockage des données (localStorage)** : Pour gérer les données de Stratos, nous avons choisi d'utiliser le `localStorage` du navigateur plutôt qu'un store comme `Pinia`. Lors de la session, nous avions déjà travaillé avec `Pinia`, et ce projet était une bonne occasion d'apprendre à utiliser le `localStorage` et d'élargir nos connaissances.

---

## Structure du projet

- `src/assets/images` : Images, polices.
- `src/assets/`: Styles globaux.
- `src/components/` : Composants Vue réutilisables et pages principales de l'application.
- `src/router/` : Configuration des routes de l'application.
- `package.json` : Liste des dépendances et scripts du projet.

---

## Auteurs et Contributeurs

Ce projet a été conçu et développé par :

- **Jérémie Ricard**

  - _GitHub :_ [@JRcard](https://github.com/JRcard)

- **Lucas Minville**

  - _GitHub :_ [@Keladrien](https://github.com/Keladrien)

- **Allan Tri Tam Pham**

  - _GitHub :_ [@ATTP1](https://github.com/ATTP1)

- **Marie-Pier Simard**
  - _GitHub :_ [@rochequiroule](https://github.com/rochequiroule)

---

## Installation locale

1. Clonez le projet :

   ```bash
   git clone JRcard/PS-equipe1

   ```

2. Installez les dépendances :

   ```npm install

   ```

3. Lancez le serveur de développement :

   ```npm run dev

   ```
