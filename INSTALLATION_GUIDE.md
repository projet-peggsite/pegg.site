# 🚀 GUIDE D'INSTALLATION - Pegg Site

## ⚡ Démarrage Rapide (3 minutes)

### 1️⃣ Installation des dépendances
```bash
cd d:\pesi
npm install
```

### 2️⃣ Lancer le serveur de développement
```bash
npm run dev
```

### 3️⃣ Ouvrir dans le navigateur
Allez à `http://localhost:3000`

## 📋 Configuration Complète

### Prérequis
- ✅ Node.js 18 ou supérieur
- ✅ npm 9 ou supérieur
- ✅ Un navigateur moderne

### Installation Détaillée

#### Étape 1 : Naviguez au répertoire du projet
```bash
cd d:\pesi
```

#### Étape 2 : Installez les dépendances
```bash
npm install
```

#### Étape 3 : Créez le fichier .env.local (optionnel)
```bash
# Copier .env.example vers .env.local
cp .env.example .env.local

# Ou éditer manuellement :
# NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

#### Étape 4 : Démarrage du développement
```bash
npm run dev
```

Le site sera accessible à : **http://localhost:3000**

## 🔧 Commandes Disponibles

### Development
```bash
npm run dev        # Démarrer le serveur dev (port 3000)
npm run build      # Compiler le projet
npm run start      # Lancer en production
npm run lint       # Vérifier la qualité du code
```

### Autres
```bash
npm run clean      # Nettoyer les builds précédentes
npm outdated       # Vérifier les updates disponibles
npm audit          # Vérifier les vulnérabilités
```

## ✨ Pages Disponibles

| Page | URL | Description |
|------|-----|-------------|
| 🏠 Accueil | `/` | Hero futuriste + Services + Stats |
| 🛠️ Services | `/services` | 8 services détaillés |
| 🎨 Portfolio | `/portfolio` | Galerie de 6+ projets filtrables |
| 👥 À Propos | `/about` | Expertise, valeurs, équipe |
| 📞 Contact | `/contact` | Formulaire multi-étapes |
| 🤖 Marketing Automation | `/marketing-automation` | Landing page spécialisée |

## 🎨 Personnalisation

### Modifier les Couleurs
Éditer `tailwind.config.js` :
```javascript
colors: {
  primary: { ... },
  tech: {
    purple: '#a855f7',
    pink: '#ec4899',
    cyan: '#06b6d4',
    green: '#10b981',
  }
}
```

### Ajouter des Polices
Éditer `src/app/globals.css` :
```css
@import url('Your-Font-URL-Here');
```

### Changer le Domaine
1. Éditer `vercel.json` 
2. Mettre à jour `public/sitemap.xml`
3. Mettre à jour les métadonnées dans les pages

## 🚀 Déploiement

### Option 1 : Vercel (Recommandé)
```bash
npm install -g vercel
vercel
```

### Option 2 : Docker
```bash
docker build -t pegg-site .
docker run -p 3000:3000 pegg-site
```

### Option 3 : Node.js Standard
```bash
npm run build
npm run start
```

## 🔍 Vérification

### Vérifier que tout fonctionne
1. ✅ La page charge sans erreurs
2. ✅ Les animations s'affichent correctement
3. ✅ Le menu responsive fonctionne
4. ✅ Les formulaires réagissent
5. ✅ Les liens de navigation fonctionnent

### Console du Navigateur
Vérifiez qu'il n'y a pas d'erreurs en ouvrant :
- Windows/Linux : `Ctrl + Shift + J`
- Mac : `Cmd + Option + J`

## 📦 Structure des Dossiers

```
pegg-site/
├── src/
│   ├── app/              # Pages et layout principal
│   └── components/       # Composants réutilisables
├── public/               # Fichiers statiques (robots.txt, sitemap.xml)
├── node_modules/         # Dépendances (après npm install)
├── package.json          # Configuration npm
└── tailwind.config.js    # Configuration Tailwind
```

## ❓ Troubleshooting

### Erreur : "Cannot find module 'next'"
**Solution** : Exécutez `npm install`

### Port 3000 déjà utilisé
**Solution** : 
```bash
# Utiliser un autre port
npm run dev -- -p 3001
```

### Modules non trouvés après npm install
**Solution** :
```bash
# Nettoyer et réinstaller
rm -rf node_modules package-lock.json
npm install
```

### Animation lente ou saccadée
**Solution** : Réduire la complexité dans navigateur - vérifiez l'onglet Performance

## 📱 Tester sur Mobile

```bash
# Lancer le serveur
npm run dev

# Sur votre mobile, accédez à :
http://<votre-ip-locale>:3000
# Ex: http://192.168.1.100:3000
```

## 🔒 Variables d'Environnement

### Production (Vercel/Docker)
```env
NEXT_PUBLIC_SITE_URL=https://votre-domaine.com
NEXT_PUBLIC_API_URL=https://api.votre-domaine.com
```

### Development (localhost)
```env
NEXT_PUBLIC_SITE_URL=http://localhost:3000
NEXT_PUBLIC_API_URL=http://localhost:3000/api
```

## 📈 Optimisation

### Build Optimization
```bash
npm run build
# Vérifier la taille : voir .next/static
```

### SEO Checklist
- ✅ Titles et descriptions sur toutes les pages
- ✅ Open Graph images
- ✅ robots.txt et sitemap.xml
- ✅ Canonical URLs
- ✅ Mobile-friendly design

## 🆘 Support & Ressources

- **Documentation Next.js** : https://nextjs.org/docs
- **Tailwind CSS** : https://tailwindcss.com/docs
- **Framer Motion** : https://www.framer.com/motion
- **React Icons** : https://react-icons.github.io/react-icons

## ✅ Checklist Pré-Lancement

- [ ] npm install exécuté avec succès
- [ ] npm run dev démarre sans erreurs
- [ ] Toutes les pages chargent correctement
- [ ] Les animations fonctionnent
- [ ] Le formulaire de contact fonctionne
- [ ] Les images/icons s'affichent
- [ ] Le responsive design fonctionne
- [ ] Pas d'erreurs console
- [ ] Build production réussit (`npm run build`)

## 🎉 Prêt à Démarrer!

Le projet est maintenant installé et prêt à fonctionner. Pour toute question, consultez la documentation ou le README.md.

---

**Créé avec ❤️ pour Pegg Site**
