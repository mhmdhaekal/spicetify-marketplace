export default [
  // {
  //   "title": "Fix 'Episodes' Icon",
  //   "description": "Fix the color of the Episodes icon",
  //   "code": ".main-yourEpisodesButton-yourEpisodesIcon { background: var(--spice-text); } .main-yourEpisodesButton-yourEpisodesIcon path { fill: var(--spice-player); opacity: 0.7; }",
  //   "preview": "https://i.imgur.com/n3EwrTL.png",
  // },
  // {
  //   "title": "Fix 'Made For You' Icon",
  //   "description": "Fix the colours of the Made For You icon",
  //   "code": ".utp540VMXpC3bYIxo9wy {\n  color: var(--spice-sidebar);\n  background: var(--spice-text);\n  opacity: 1;\n}\n.t6d9Hf7maqFPHp1Y02VR {\n  color: var(--spice-text);\n}",
  //   "preview": "https://placekitten.com/200/200",
  // },
  {
    "title": "Fix 'Liked' Icon",
    "description": "Fix the colours of the Liked icon in sidebar",
    "code": ".main-likedSongsButton-likedSongsIcon {\n  color: var(--spice-sidebar);\n  background: var(--spice-text);\n}",
    "preview": "resources/assets/snippets/fix-liked-icon.png",
  },
  {
    "title": "Hide Upgrade Button",
    "description": "Makes the upgrade button hidden",
    "code": ".main-topBar-UpgradeButton {\n  display: none !important;\n}",
    "preview": "resources/assets/snippets/hide-upgrade-button.png",
  },
  {
    "title": "Auto-hide Friends",
    "description": "Collapse the friends activity sidebar on small screens",
    "code": "[aria-label='Friend Activity'] {\n  transition: width 0.3s;\n}\n@media screen and (max-width: 1200px) {\n  [aria-label='Friend Activity'] {\n    width: 0;\n  }\n  [aria-label='Friend Activity'] .LayoutResizer__resize-bar {\n    display: none;\n  }\n}",
    "preview": "resources/assets/snippets/auto-hide-friends.png",
  },
  {
    "title": "Smooth Reveal Playlist Gradient",
    "description": "Reveals the playlist gradient header gradient with a fade in effect",
    "code": ".main-entityHeader-overlay,\n.main-actionBarBackground-background,\n.main-entityHeader-overlay,\n.main-entityHeader-backgroundColor {\n  -webkit-transition: 3s;\n}",
    "preview": "resources/assets/snippets/smooth-playlist-reveal-gradient.png",
  },
  {
    "title": "Remove connect bar",
    "description": "Remove connect bar that causes progress bar displacement when listening on different devices",
    "code": ".main-connectBar-connectBar {\n  color: transparent !important;\n  overflow: visible !important;\n  --triangle-position: 147px !important;\n  align-items: unset !important;\n  height: 0px !important;\n  position: absolute !important;\n  left: 80% !important;\n  display: flex !important;\n  bottom: 2% !important;\n  padding: unset !important;\n}",
    "preview": "resources/assets/snippets/remove-connect-bar.png",
  },
  {
    "title": "Fix playlist arrows",
    "description": "Fixes the opened and closed orientation of the playlist folder arrows",
    "code": ".main-rootlist-expandArrow {\n  -webkit-transform: rotate(-90deg) !important;\n  transform: rotate(-90deg) !important;\n}\n.main-rootlist-expandArrow:hover {\n  -webkit-transform: rotate(-90deg) !important;\n  transform: rotate(-90deg) !important;\n}\n.qAAhQw9dXNB7DbPgDDxy {\n  -webkit-transform: rotate(0deg) !important;\n  transform: rotate(0deg) !important;\n}\n.qAAhQw9dXNB7DbPgDDxy:hover {\n  -webkit-transform: rotate(0deg) !important;\n  transform: rotate(0deg) !important;\n}",
    "preview": "resources/assets/snippets/fix-playlist-arrows.png",
  },
  {
    "title": "Fix main view width",
    "description": "Makes main view fill up all available space",
    "code": ".contentSpacing {\n  max-width: 100% !important;\n}",
    "preview": "resources/assets/snippets/fix-main-view-width.png",
  },
  {
    "title": "Left aligned heart icons",
    "description": "Moves the heart icon to the left side of the track title in track views",
    "code": ".main-trackList-rowSectionStart {\n  margin-left: 38px !important;\n}\n.main-addButton-button.main-trackList-rowHeartButton,\n.main-addButton-button.main-trackList-rowHeartButton {\n  position: absolute !important;\n  left: 48px !important;\n}",
    "preview": "resources/assets/snippets/left-aligned-heart-icons.png",
  },
  {
    "title": "Hover Panels",
    "description": "Have your playlist, friend activity, and controls bar be hoverable.",
    "code": ".Root__nav-bar {\n  position: absolute;\n  width: 40px;\n  opacity: 0;\n  bottom: 0;\n  left: 0;\n  top: 0;\n  z-index: 1;\n}\nnav.Root__nav-bar:hover {\n  position: inherit;\n  width: 225px;\n  opacity: 1;\n  transition: visibility 5s, opacity 0.5s linear;\n}\n.LayoutResizer__resize-bar {\n  cursor: none;\n}\n.Root__top-bar {\n  opacity: 0;\n  transition: visibility 5s, opacity 1s linear;\n}\n.Root__top-bar:hover {\n  transition-delay: 0.5s;\n  opacity: 1;\n  transition: visibility 5s, opacity 0.5s linear;\n}\n.main-topBar-container {\n  -webkit-padding-end: 32px;\n  padding: 16px 85px;\n  padding-inline-end: 32px;\n  max-width: none;\n}\naside.main-buddyFeed-buddyFeedRoot:hover {\n  position: inherit;\n  width: var(--buddy-feed-width);\n  opacity: 1;\n  transition: visibility 5s, opacity 0.5s linear;\n  left: 0;\n}\naside.main-buddyFeed-buddyFeedRoot {\n  position: absolute;\n  width: 65px;\n  opacity: 0;\n  bottom: 0;\n  left: -30px;\n  top: 0;\n  z-index: 1;\n}",
    "preview": "resources/assets/snippets/hover-panels.png",
  },
  {
    "title": "Fix progress bar displacement",
    "description": "Fixes the progress bar displacement for a few themes. Better version of @CharlieS1103 Snippet",
    "code": ".main-connectBar-connectBar {\n  overflow: visible !important;\n  position: absolute !important;\n  display: flex !important;\n  align-items: unset !important;\n  left: 80% !important;\n  height: 20px !important;\n  bottom: 1% !important;\n  padding: 2px !important;\n  background-color: transparent !important;\n  color: var(--spice-text) !important;\n}\n.control-button::after {\n  display: none !important;\n}",
    "preview": "resources/assets/snippets/fix-progress-bar.png",
  },
];
