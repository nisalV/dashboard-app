# Boardli - Task Management Frontend

App is available at: https://boardli.netlify.app

### Available Features
- Routing
- Selecting a board
- Drag & drop inside a swimlane
- Drag & drop between swimlanes
- Responsive UI
- Caching boards and board task
- Cache management
- Task search

## Table of Contents
- [Setup](#setup)
- [Testing](#testing)
- [Folder Structure](#folder-structure)

## Setup

Follow the instructions below to setup and run:

- ### Clone the repository:

   ```bash
   git clone https://github.com/nisalV/dashboard-app.git
   ```
- ### Navigate to app folder
  ```bash
   cd dashboard-app
  ```
- ### Install packages
  ```bash
   npm install
  ```
- ### Run app
  ```bash
   npm start
   ```
- ### Build app
  ```bash
   npm build
  ```
## Testing

- ### To run test
  ```bash
   npm test
  ```
  - CommentInput.test - CommentInput component test cases
  - sortComments.test - To test comment sorting function
  - updateComments.test - To test update comment function
## Folder Structure
```bash
├── .github
│   └── workflows
│       └── ci.yml
├── public
│   └── favicon-32x32.png
└── src
    ├── App.tsx
    ├── index.css
    ├── main.tsx
    └── vite-env.d.ts
    ├── assets
    │   ├── data
    │   │   ├── boards.json
    │   │   └── tasks.json
    │   ├── icons
    │   │   └── // All svg icons are exported as tsx
    │   ├── images
    │   │   ├── fallback-team.svg
    │   │   ├── fallback-user.png
    │   │   ├── image-placeholder.png
    │   │   └── logo.svg
    │   │   ├── named-logo.svg
    │   │   └── user.png
    ├── common
    │   ├── commonStyles.ts
    │   ├── commonUtils.ts
    │   └── values.ts
    ├── components
    │   ├── core
    │   │   ├── button
    │   │   │   ├── button.css
    │   │   │   └── index.tsx
    │   │   ├── icon
    │   │   │   ├── iconStyles.css
    │   │   │   └── index.tsx
    │   │   ├── image
    │   │   │   ├── imageStyles.css
    │   │   │   └── index.tsx
    │   │   ├── input
    │   │   │   ├── index.tsx
    │   │   │   └── inputStyles.css
    │   │   └── text
    │   │       ├── index.tsx
    │   │       └── textStyles.css
    │   ├── pages
    │   │   └── dashboard
    │   │       ├── index.tsx
    │   └── views
    │       ├── dashboard
    │       │   ├── AvatarList.tsx
    │       │   ├── Board.tsx
    │       │   ├── dashboardStyles.css
    │       │   ├── FloatButton.tsx
    │       │   └── index.tsx
    │       ├── swimlines
    │       │   ├── index.tsx
    │       │   ├── SwimlineHeader.tsx
    │       │   ├── swimlineStyles.css
    │       │   └── TaskView.tsx
    │       ├── header
    │       │   ├── headerStyles.css
    │       │   └── index.tsx
    │       └── leftPanel
    │           ├── index.tsx
    │           └── leftPanelStyles.css
    ├── contexts
    │   └── layoutContext.tsx
    ├── hooks
    │   ├── boardsHooks.ts
    │   ├── layoutHooks.ts
    │   └── tasksHooks.tsx
    ├── types
    │   ├── componentTypes.ts
    │   └── dataTypes.ts
    └── utils
        ├── commentsUtils.ts
├── test
    ├── setup.ts
    └── components
        └── TaskView.test.tsx
```