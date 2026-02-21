🚀 GUIDE LIVE CHAT & SUPPORT RÉACTIF - INSTALLATION COMPLÈTE
═══════════════════════════════════════════════════════════════════════════════

Ce guide vous explique comment configurer le Live Chat (Crisp) + Support Widget sur votre site.

📦 ÉTAPES D'INSTALLATION
────────────────────────────────────────────────────────────────────────────

### ✅ ÉTAPE 1 : S'inscrire à Crisp (5 minutes)

1. Accédez à https://crisp.chat
2. Cliquez sur "Sign up free"
3. Remplissez le formulaire avec vos infos
4. Confirmez votre email
5. Créez un nouveau site/projet

### ✅ ÉTAPE 2 : Récupérer votre WEBSITE_ID

1. Dans le dashboard Crisp, allez à "Website"
2. Cherchez "WEBSITE_ID" (à gauche, ou dans Settings → Website)
3. Copiez cette ID (format: abc123def456...)
4. Notez-la en lieu sûr

### ✅ ÉTAPE 3 : Ajouter l'ID au projet

📄 Fichier: `src/components/LiveChat.tsx` (Ligne ~11)

Avant:
```javascript
window.CRISP_WEBSITE_ID = 'YOUR_CRISP_WEBSITE_ID'; // Replace with your ID
```

Après:
```javascript
window.CRISP_WEBSITE_ID = 'abc123def456'; // ← Votre WEBSITE_ID
```

### ✅ ÉTAPE 4 : Configurer les coordonnées de contact

Les numéros utilisés dans le Support Widget sont dans :
📄 `src/components/SupportWidget.tsx` (Lignes ~39-52)

Mettez à jour avec votre contact réel:
```javascript
// WhatsApp
href: 'https://wa.me/242069899982?text=Bonjour...'
      ↓
href: 'https://wa.me/VOTRENUMERO?text=Bonjour, j\'aurais une question...'
```

```javascript
// Téléphone
href: 'tel:+242069899982'
      ↓
href: 'tel:+VOTRENUMERO'
```

```javascript
// Email
href: 'mailto:contact@pegg.site'
          ↓
href: 'mailto:VOTREEMAIL@domaine.com'
```

### ✅ ÉTAPE 5 : Configurer Crisp (Settings)

Une fois dans Crisp:

1. **Appearance** → Personnalisez les couleurs/logo
2. **Operators** → Ajoutez votre équipe support
3. **Integrations** → Connectez email/SMS (optionnel)
4. **Availability** → Définissez vos horaires
5. **Responses** → Messages automatiques bienvenue

Exemple de message bienvenue à ajouter:
```
👋 Bienvenue chez Pegg Site!

👥 Notre équipe support est disponible:
   • Lundi-Vendredi: 9h-18h
   • Samedi: 10h-14h

🚀 Comment puis-je vous aider?
   → Devis gratuit
   → Support technique
   → Consultation
   → Autre

⏱️ Réponse moyenne: <1 heure
```

───────────────────────────────────────────────────────────────────────────

🎨 FONCTIONNALITÉS DÉPLOYÉES
────────────────────────────────────────────────────────────────────────────

### 💬 Widget Support (Coin bas-droit)
✅ Bouton animé "Besoin d'aide?"
✅ 4 options de contact:
   • Live Chat (Crisp)
   • WhatsApp
   • Appel téléphone
   • Email

✅ Menu fluide avec animations
✅ Affiche sur toutes les pages
✅ Réactif et accessible

### 🔗 Intégration Crisp
✅ Widget Crisp auto-injecté
✅ Chat en temps réel
✅ Stockage des conversations
✅ Notifications côté support
✅ Analytics des chats

───────────────────────────────────────────────────────────────────────────

🔧 CONFIGURATION AVANCÉE
────────────────────────────────────────────────────────────────────────────

### Customizer les couleurs du Widget

📄 `src/components/SupportWidget.tsx` (Lignes ~30-50)

Modifier les dégradés des boutons:
```javascript
{
  color: 'from-blue-500 to-cyan-500',  // ← Changer ces couleurs
}
```

Utiliser Tailwind colors:
- `from-primary-500 to-cyan-500` (bleu → cyan)
- `from-green-500 to-emerald-500` (vert)
- `from-purple-500 to-pink-500` (pourpre rose)
- `from-amber-500 to-orange-500` (orange)

### Modifier le bouton principal

Taille: `w-16 h-16` (augmentez pour plus gros)
Classe: `rounded-full` (garder rond)
Shadow: `shadow-lg` (peut être `shadow-2xl`)

───────────────────────────────────────────────────────────────────────────

📊 TESTER LE LIVE CHAT
────────────────────────────────────────────────────────────────────────────

1. Lancez le serveur: `npm run dev`
2. Ouvrez http://localhost:3000
3. Cherchez le bouton 💬 en bas à droite
4. Cliquez sur le bouton
5. Cliquez "Live Chat"
6. Le widget Crisp devrait s'ouvrir

### Si ça ne fonctionne pas:
- ✓ Vérifiez que CRISP_WEBSITE_ID est correctement rempli
- ✓ Vérifiez la console (F12) pour les erreurs
- ✓ Videz le cache du navigateur (Ctrl+F5)
- ✓ Assurez-vous que vous êtes connecté à Crisp

───────────────────────────────────────────────────────────────────────────

🎯 OPTIONS ALTERNATIVES
────────────────────────────────────────────────────────────────────────────

Si vous préférez d'autres services:

1. **Intercom** (Premium)
   - Plus complet: inbox, campaigns, automations
   - Installation similaire
   - Coûts: $99-500/mois
   - Meilleur pour: Grandes agences

2. **Drift** (Premium)
   - Conversation centrée
   - Qualification automatique
   - Calendrier intégré
   - Coûts: $699+/mois
   - Meilleur pour: Sales-driven

3. **Tawk.to** (Gratuit)
   - Entièrement gratuit
   - Conversations illimitées
   - Reports & analytics
   - Support OK mais limité
   - Meilleur pour: Petits budgets

4. **Zendesk Chat** (Payant)
   - Intégration Zendesk Support
   - Bots & automations
   - Coûts: $49+/mois
   - Meilleur pour: Toutes tailles

### Migration vers un autre service:
Les données de Crisp peuvent s'exporter. Changez simplement le composant LiveChat.tsx
pour initialiser le service choisi à la place.

───────────────────────────────────────────────────────────────────────────

✨ PRO TIPS POUR AUGMENTER CONVERSIONS
────────────────────────────────────────────────────────────────────────────

1. **Message d'accueil personnalisé**
   → Disons "Bonjour! Vous cherchez [service]?" au lieu de générique

2. **Répondre vite**
   → 1ère réponse en <5min = 2x plus de conversions

3. **Pré-qualifier les leads**
   → Demander le budget, le projet, la timeline d'emblée

4. **Offrir un devis gratuit via chat**
   → Calendly integrate avec Crisp

5. **Disponibilité affichée**
   → "Pas de réponse avant 9h" = évite frustration

6. **Analytics**
   → Suivre: nb chats, conversion rate, temps réponse
   → Mejorer les gaps identifiés

───────────────────────────────────────────────────────────────────────────

📞 SUPPORT
────────────────────────────────────────────────────────────────────────────

Questions sur Crisp? 
→ https://docs.crisp.chat

Questions sur l'intégration?
→ Consultez la documentation Next.js sur les composants 'use client'
→ https://nextjs.org/docs/app/building-your-application/rendering/client-components

✅ C'est tout! Votre Live Chat est now operational! 🎉
